import axios from 'axios'
import type { upTableItem, mDataItem, hDataItem1, hDataByYear, hDataByMonth, hDataItem2, hDataItem3 } from '@/models/admin'

//* MapReduce
// 时间列表(yyyy-MM-dd)
export async function getTimeList(): Promise<string[]> {
    const response = await axios.get(`/api/chart/getDistinctTm`)
    return response.data
}

// 某一天的视频播放总量
export async function getSingleDayCount(tm: string, name: string): Promise<number> {
    const response = await axios.get(`/api/chart/getMResultByNameAndTm?name=${name}&tm=${tm}`)
    return response.data.count
}

// 某一天的视频播放情况(每个视频播放量)，取前40个
// type: 1-up主 2-bv号 3-用户地区
export async function getMData(tm: string, type: number): Promise<mDataItem[]> {
    const response = await axios.get(`/api/chart/getMResultByTypeAndTm?type=${type}&tm=${tm}`)
    const data: mDataItem[] = response.data
    const res: mDataItem[] = data.sort(function (a: mDataItem, b: mDataItem) {
        return b.count - a.count
    }).slice(0, 40)
    return res
}

//* Hive
// 视频数
export async function getHiveData1(): Promise<hDataItem1[]> {
    const response = await axios.get(`/api/chart/getHResult2`)
    return response.data
}

//* 以下2个函数功能可用@antv/data-set替代
export async function getHiveDataByYear(): Promise<hDataByYear[]> {
    const resp = await getHiveData1()
    const res: hDataByYear[] = resp.map(item => {
        return {
            author: item.author,
            year: item.tm.slice(0, 4),
            count: item.count
        }
    })
    return res
}

export async function getHiveDataByMonth(): Promise<hDataByMonth[]> {
    const resp = await getHiveData1()
    const res: hDataByMonth[] = resp.map(item => {
        return {
            author: item.author,
            month: item.tm.slice(5, 7),
            count: item.count
        }
    })
    return res
}

// 播放量
export async function getHiveData2(): Promise<hDataItem2[]> {
    const response = await axios.get(`/api/chart/getHResult4`)
    return response.data
}

// 热度
export async function getHiveData3(): Promise<hDataItem3[]> {
    const response = await axios.get(`/api/chart/getHResult3`)
    return response.data
}

//* Table
export async function getUpTable(): Promise<upTableItem[]> {
    const response = await axios.get(`/api/up/all`)
    return response.data
}
