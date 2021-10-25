# Hive

## 数据

```shell
# hive
create table videos(
    id int,
    bvid string,
    mid string,
    author string,
    title string,
    pic string,
    play int,
    review int,
    comment int,
    length string,
    description string,
    tm string
) partitioned by (data_date string) 
row format delimited fields terminated by '\001' 
location 'hdfs://hadoop100:8020/user/hive/warehouse/ten.db/videos';

# import
sqoop import 
    --connect jdbc:mysql://hadoop100:3306/ten?useSSL=false 
    --username root 
    --password niit1234 
    --table video_list 
    --delete-target-dir 
    --hive-import 
    --hive-database ten 
    --hive-table videos 
    --hive-partition-key data_date 
    --hive-partition-value 2021-05-24 
    --hive-drop-import-delims 
    -m 1
```

## 分析

- **视频数**

按照作者，时间分类(yyyy-mm)，count视频数

```shell
# table
create table hr1(
    process_date string, 
    author string, 
    tm string, 
    video_count int
) partitioned by (data_date string);

# analysis
insert overwrite table hr1 partition(data_date = '2021-05-24') 
select '2021-05-24' as process_date, 
    author, 
    substr(tm, 0, 7) as tm, 
    count(bvid) as video_count 
from videos group by author, substr(tm, 0, 7);
```

- **播放量**

选出播放量 >= 1000万的视频

```shell
# table
create table hr2(
    process_date string, 
    author string, 
    bvid string, 
    title string, 
    play int
) partitioned by (data_date string);

# analysis
insert overwrite table hr4_up_video_play partition(data_date = '2021-05-24') 
select '2021-05-24' as process_date, 
    author, 
    bvid, 
    title, 
    play 
from videos where play >= 10000000 order by play;
```

- **热度**

按照 (播放量 * 2 + 弹幕 * 3 + 评论 * 5) 排序，取前40

```shell
# table
create table hr3(
    process_date string, 
    bvid string, 
    mid string, 
    title string, 
    author string,
    pic string, 
    play int, 
    review int, 
    score int
) partitioned by (data_date string);

# analysis
insert overwrite table hr3_video_rank partition(data_date = '2021-05-24') 
select '2021-05-24' as process_date, 
    bvid, 
    mid, 
    title, 
    author, 
    pic, 
    play, 
    review, 
    sum(play * 2 + review * 3 + comment * 5) as score 
from videos group by bvid, mid, title, author, pic, play, review 
order by score desc limit 40;
```

## 导出

```shell
# 1
sqoop export 
    --connect "jdbc:mysql://hadoop100:3306/ten?useSSL=false&characterEncoding=utf-8" 
    --username root 
    --password niit1234 
    --table hr1 
    --export-dir /user/hive/warehouse/ten.db/hr1/data_date=2021-05-24 
    --input-fields-terminated-by "\001"

# 2
sqoop export 
    --connect "jdbc:mysql://hadoop100:3306/ten?useSSL=false&characterEncoding=utf-8" 
    --username root 
    --password niit1234 
    --table hr2 
    --export-dir /user/hive/warehouse/ten.db/hr2/data_date=2021-05-24 
    --input-fields-terminated-by "\001"

# 3
sqoop export 
    --connect "jdbc:mysql://hadoop100:3306/ten?useSSL=false&characterEncoding=utf-8" 
    --username root 
    --password niit1234 
    --table hr3 
    --export-dir /user/hive/warehouse/ten.db/hr3/data_date=2021-05-24 
    --input-fields-terminated-by "\001"
```

