import React, { useState, useEffect } from 'react'
import { Select, Spin } from 'antd'
import { WordCloud } from '@ant-design/charts'
import { mDataItem } from '../../../../../models/admin'
import { getSingleDayCount, getMData } from '../../../../../services/admin'

const { Option } = Select
interface propsType {
    timeList: string[]
}

const MChart3: React.FC<propsType> = (props) => {

    const type: number = 3   // 用户地区的类型
    const timeList: string[] = props.timeList
    const [time, setTime] = useState<string>('')
    const [login, setLogin] = useState<number>(0)
    const [logout, setLogout] = useState<number>(0)
    const [data, setData] = useState<mDataItem[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setTime(timeList[0])
    }, [timeList])

    useEffect(() => {
        getSingleDayCount(time, '登录').then(res => setLogin(res))
        getSingleDayCount(time, '未登录').then(res => setLogout(res))
        getMData(time, type).then(res => setData(res))
        setLoading(false)
    }, [time])

    const handleChange = (value: string): void => {
        setLoading(true)
        setTime(value)
    }

    const config = {
        data: data,
        wordField: 'name',
        weightField: 'count',
        colorField: 'name',
        wordStyle: {
            fontFamily: 'Verdana',
            fontSize: [24, 80] as [24, 80],
            rotation: 0
        },
        legend: { position: 'bottom' as 'bottom' },
        interactions: [{ type: 'element-active' }],
        state: { active: { style: { lineWidth: 3 } } },
        random: function random() {
            return 0.5
        }
    }

    if (!loading && time) {
        return (
            <div className="flex flex-col space-y-5 w-4/5 p-2">
                <div className="text-2xl font-semibold tracking-wide">用户活跃度</div>
                <div className="flex space-x-4 text-lg">
                    <div>日期: </div>
                    <Select defaultValue={time} style={{ width: 120 }} onChange={handleChange}>
                        {
                            timeList.map(tm => {
                                return <Option value={tm} key={tm}>{tm}</Option>
                            })
                        }
                    </Select>
                    <div>登录: {login}</div>
                    <div>未登录: {logout}</div>
                </div>
                <WordCloud {...config} />
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

export default MChart3
