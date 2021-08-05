import React, { useState, useEffect } from 'react'
import MChart1 from './MChart1'
import { getTimeList } from '../../../../services/admin'

const MCharts: React.FC = () => {

    const [time, setTime] = useState<String[]>([])

    useEffect(() => {
        getTimeList()
            .then(res => {
                setTime(res)
            })
    }, [])

    return (
        <div>
            <MChart1 timeList={time} />
        </div>
    )
}

export default MCharts