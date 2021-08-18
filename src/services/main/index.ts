import axios from 'axios'
import { upItem, ulistItem, vlistItem, videoItem } from '../../models/main'

// up主列表
export async function getUp(): Promise<upItem[]> {
    const response = await axios.get(`/api/getUp`)
    return response.data
}

// 单个up主信息
export async function getUpInfo(mid: string): Promise<ulistItem> {
    const response = await axios.get(`/card?mid=${mid}`)
    return response.data.data
}

// up主列表(详细信息)
export async function getUpList(): Promise<ulistItem[]> {
    const ulist: ulistItem[] = []
    getUp()
        .then(ups =>
            ups.forEach(up => {
                getUpInfo(up.mid)
                    .then(res => {
                        ulist.push(res)
                    })
                    .catch(error => console.error(error))
            })
        )
        .catch(error => console.error(error))
    return ulist
}

// 单个up主单页视频(每页30)
export async function getVideos(mid: string, pn: number): Promise<vlistItem[]> {
    const response = await axios.get(`/search?mid=${mid}&ps=30&tid=0&pn=${pn}&keyword=&order=pubdate&jsonp=jsonp`)
    return response.data.data.list.vlist
}

// 视频数据(点赞，投币，收藏，转发等)
export async function getDetail(bvid: string): Promise<videoItem> {
    const response = await axios.get(`/view?bvid=${bvid}`)
    return response.data.data
}