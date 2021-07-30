import axios from 'axios'
import { mDataItem } from '../../models/admin'

//* MapReduce
// 时间列表(yyyy-MM-dd)
export async function getTimeList(): Promise<String[]> {
    const response = await axios.get(`/api/getDistinctTm`)
    return response.data
}

// 某一天的视频播放总量
export async function getSingleDayCount(tm: string, name: string = '访问量'): Promise<number> {
    const response = await axios.get(`/api/getMResultByNameAndTm?name=${name}&tm=${tm}`)
    return response.data.count
}

// 某一天的视频播放情况(每个视频播放量)，取前40个
export async function getMData(tm: string, type: number = 2): Promise<mDataItem[]> {
    const response = await axios.get(`/api/getMResultByTypeAndTm?type=${type}&tm=${tm}`)
    const data: mDataItem[] = response.data
    const res: mDataItem[] = data.sort(function (a: mDataItem, b: mDataItem) {
        return b.count - a.count
    }).slice(0, 40)
    return res
}
