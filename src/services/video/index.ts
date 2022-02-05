import axios from 'axios'
import type { videoItem, videoDetailItem } from '@/models/video'

export async function getVideos(mid: string, page: number): Promise<videoItem[]> {
    const response = await axios.get(`/search?mid=${mid}&ps=30&tid=0&pn=${page}&keyword=&order=pubdate&jsonp=jsonp`)
    return response.data.data.list.vlist
}

export async function getVideoDetail(bvid: string): Promise<videoDetailItem> {
    const response = await axios.get(`/view?bvid=${bvid}`)
    return response.data.data
}
