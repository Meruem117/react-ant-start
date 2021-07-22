import axios from 'axios'
import { upItem, ulistItem, vlistItem, videoItem } from '../../model'

export async function getUp(): Promise<upItem[]> {
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

export async function getUpList(): Promise<ulistItem[]> {
    const ulist: ulistItem[] = []
    getUp()
        .then(ups =>
            ups.map(up => {
                getUpInfo(up.mid)
                    .then(res => {
                        ulist.push(res)
                    })
                    .catch(error => console.error(error))
                return up
            })
        )
        .catch(error => console.error(error))
    return ulist
}

export async function getDetail(bvid: string): Promise<videoItem> {
    const response = await axios.get(`/view?bvid=${bvid}`)
    return response.data.data
}