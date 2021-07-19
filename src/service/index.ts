import axios from 'axios'
import { upItem, ulistItem, vlistItem, videoItem } from '../model'

export async function getUpList(): Promise<upItem[]> {
    const response = await axios.get(`/api/getUp`)
    return response.data
}

export async function getUpInfo(mid: string): Promise<ulistItem> {
    const response = await axios.get(`/card?mid=${mid}`)
    return response.data.data
}

export async function getVideos(mid: string, pn: number): Promise<vlistItem[]> {
    const response = await axios.get(`/search?mid=${mid}&ps=30&tid=0&pn=${pn}&keyword=&order=pubdate&jsonp=jsonp`)
    return response.data.data.list.vlist
}

export async function getDetail(bvid: string): Promise<videoItem> {
    const response = await axios.get(`/view?bvid=${bvid}`)
    return response.data.data
}