import axios from 'axios'
import type { logItem } from '@/models/log'
import { DEFAULT_LOCATION } from '@/constant'

export function addLog(log: logItem): void {
    const { author, bvid, location } = log
    const loc: string = location ? location : DEFAULT_LOCATION
    axios.post('/api/log/add', { author, bvid, location: loc })
}

export async function generateLogs(number: number): Promise<boolean> {
    const response = await axios.get('/api/log/generate', { params: { number } })
    return response.data
}

export async function flumeToHdfs(): Promise<boolean> {
    const response = await axios.get('/api/log/flume')
    return response.data
}

export async function mapreduce(input: string): Promise<boolean> {
    const response = await axios.get('/api/log/mapred', { params: { input } })
    return response.data
}

export async function sqoopToMysql(path: string): Promise<boolean> {
    const response = await axios.get('/api/log/sqoop', { params: { path } })
    return response.data
}

export async function ls(path: string): Promise<string> {
    const response = await axios.get('/api/log/ls', { params: { path } })
    return response.data
}

export async function dfsls(path: string): Promise<string> {
    const response = await axios.get('/api/log/dfsls', { params: { path } })
    return response.data
}
