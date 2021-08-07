import React, { useState, useEffect } from 'react'
import { InputNumber, Select, Spin } from 'antd'
import { Rose } from '@ant-design/charts'
import { mDataItem } from '../../../../../models/admin'
import { getSingleDayCount, getMData } from '../../../../../services/admin'

const { Option } = Select
interface propsType {
    timeList: string[]
}

const MChart2: React.FC<propsType> = (props) => {

    const type: number = 1   // 作者的类型
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
        getSingleDayCount(time, '访问量').then(res => setCount(res))
        getMData(time, type).then(res => setData(res))
        setLoading(false)
    }, [time])

    useEffect(() => {
        const res = data.slice(0, num)
        setChartData(res)
        setLoading(false)
    }, [num, data])

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
        height: 600,
        xField: 'name',
        yField: 'count',
        seriesField: 'name',
        radius: 0.9,
        state: {
            active: {
                style: {
                    lineWidth: 0,
                    fillOpacity: 0.65,
                },
            },
        },
        legend: { position: 'bottom' as 'bottom' },
        interactions: [{ type: 'element-active' }],
        label: {
            style: {
                opacity: 0.8,
                fontSize: 18
            }
        }
    }

    if (!loading && time) {
        return (
            <div className="flex flex-col space-y-5 w-4/5 p-2">
                <div className="text-2xl font-semibold tracking-wide">作者播放量</div>
                <div className="flex space-x-4 text-lg">
                    <div>Top </div>
                    <InputNumber min={1} max={data.length} defaultValue={num} onChange={onChange} />
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
                <Rose {...config} />
            </div>
        )
    } else {
        return (
            <div className="flex flex-col h-full w-full justify-center">
                <Spin />
            </div>
        )
    }
}

export default MChart2