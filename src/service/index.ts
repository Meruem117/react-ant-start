import axios from 'axios'
import { upItem, ulistItem } from '../model'

export async function getUpList(): Promise<upItem[]> {
    const response = await axios.get(`/api/getUp`)
    return response.data
}

export async function getUpInfo(mid: string): Promise<ulistItem> {
    const response = await axios.get(`/card?mid=${mid}`)
    return response.data.data
}