import React, { useState, useEffect } from 'react'
import MChart1 from './MChart1'
import MChart2 from './MChart2'
import { getTimeList } from '../../../../services/admin'

const MCharts: React.FC = () => {

    const [time, setTime] = useState<string[]>([])

    useEffect(() => {
        getTimeList().then(res => setTime(res))
    }, [])

    return (
        <div className="flex flex-col space-y-8 w-full h-full p-5">
            <MChart1 timeList={time} />
            <MChart2 timeList={time} />
        </div>
    )
}

export default MCharts