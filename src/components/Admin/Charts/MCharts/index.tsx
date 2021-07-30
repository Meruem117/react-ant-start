import React, { useState, useEffect } from 'react'
import MChart1 from './MChart1'
import { mDataItem } from '../../../../models/admin'
import { getTimeList, getSingleDayCount, getMData } from '../../../../services/admin'

const MCharts: React.FC = () => {

    const [time, setTime] = useState<String[]>([])
    const [count, setCount] = useState<number>(0)
    const [data, setData] = useState<mDataItem[]>([])

    useEffect(() => {
        getTimeList()
            .then(res => {
                setTime(res)
                getSingleDayCount('2021-06-18')
                    .then(res => setCount(res))
                getMData('2021-06-18')
                    .then(res => setData(res))
            })
    }, [])

    return (
        <div>
            <MChart1 />
        </div>
    )
}

export default MCharts