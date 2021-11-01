import axios from 'axios'
import { upItem, upInfoItem, upDetailItem } from '@/models/up'
import { UP_LIST_SIZE } from '@/constant'

export async function getUps(start: number, size: number = UP_LIST_SIZE): Promise<upItem[]> {
    const response = await axios.get('/api/up/get', { params: { start, size } })
    return response.data
}

export async function addUp(up: upItem): Promise<number> {
    const response = await axios.post('/api/up/add', up)
    return response.data.id
}

export async function updateUp(up: upItem): Promise<number> {
    const response = await axios.post('/api/up/update', up)
    return response.data.id
}

export async function deleteUp(id: number): Promise<number> {
    const response = await axios.post('/api/up/delete', id)
    return response.data.id
}

export async function getUpInfo(mid: string): Promise<upInfoItem> {
    const response = await axios.get(`/card?mid=${mid}`)
    return response.data.data.card
}

export async function getUpDetail(mid: string): Promise<upDetailItem> {
    const response = await axios.get(`/card?mid=${mid}`)
    return response.data.data
}
