import React, { useState, useEffect } from 'react'
import { Spin } from 'antd'
import MChart1 from './MChart1'
import { getTimeList } from '../../../../services/admin'

const MCharts: React.FC = () => {

    const [time, setTime] = useState<string[]>([])

    useEffect(() => {
        getTimeList().then(res => setTime(res))
    }, [])

    if (time) {
        return (
            <div className="w-full p-5">
                <MChart1 timeList={time} />
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

export default MCharts