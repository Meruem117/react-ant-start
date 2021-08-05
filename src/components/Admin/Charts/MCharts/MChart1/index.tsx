import React, { useState, useEffect } from 'react'
import { InputNumber, Select, Spin } from 'antd'
import { Column } from '@ant-design/charts'
import { mDataItem } from '../../../../../models/admin'
import { getSingleDayCount, getMData } from '../../../../../services/admin'

interface propsType {
    timeList: string[]
}

const MChart1: React.FC<propsType> = (props) => {

    const type: number = 2   // bv号类型
    const timeList: string[] = props.timeList
    const [time, setTime] = useState<string>('')
    const [num, setNum] = useState<number>(5)
    const [count, setCount] = useState<number>(0)
    const [data, setData] = useState<mDataItem[]>([])
    const [chartData, setChartData] = useState<mDataItem[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setTime(timeList[0])
    }, [timeList])

    useEffect(() => {
        getSingleDayCount(time).then(res => setCount(res))
        getMData(time, type).then(res => setData(res))
        setLoading(false)
    }, [time])

    useEffect(() => {
        const res = data.slice(0, num)
        setChartData(res)
        setLoading(false)
    }, [num, data])

    const { Option } = Select
    const handleChange = (value: string): void => {
        setLoading(true)
        setTime(value)
    }

    const onChange = (value: number): void => {
        setLoading(true)
        setNum(value)
    }

    const config = {
        data: chartData,
        autoFit: true,
        xField: 'name',
        yField: 'count'
    }

    if (loading) {
        return (
            <div className="flex flex-col h-full w-full justify-center">
                <Spin />
            </div>
        )
    }

    if (time && num && timeList && count) {
        return (
            <div className="flex flex-col space-y-5 w-4/5 p-2">
                <div className="text-3xl font-bold tracking-wider">视频播放量</div>
                <div className="text-2xl font-semibold tracking-wide">按视频分</div>
                <div className="flex space-x-4 text-lg">
                    <div>Top </div>
                    <InputNumber min={1} max={40} defaultValue={num} onChange={onChange} />
                    <div>日期: </div>
                    <Select defaultValue={time} style={{ width: 120 }} onChange={handleChange}>
                        {
                            timeList.map(tm => {
                                return <Option value={tm} key={tm}>{tm}</Option>
                            })
                        }
                    </Select>
                    <div>总访问量: {count}</div>
                </div>
                <Column {...config} />
            </div>
        )
    }

    return (<></>)
}

export default MChart1

