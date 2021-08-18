import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd'
import MChart1 from './MChart1'
import MChart2 from './MChart2'
import MChart3 from './MChart3'
import { getTimeList } from '../../../../services/admin'

const { TabPane } = Tabs

const MCharts: React.FC = () => {

    const [time, setTime] = useState<string[]>([])

    useEffect(() => {
        getTimeList().then(res => setTime(res))
    }, [])

    return (
        <div className="flex flex-col space-y-8 w-full h-full pb-12">
            <Tabs defaultActiveKey="1" tabPosition='top' size='large'>
                <TabPane tab="视频" key="1" >
                    <MChart1 timeList={time} />
                </TabPane>
                <TabPane tab="作者" key="2">
                    <MChart2 timeList={time} />
                </TabPane>
                <TabPane tab="用户" key="3">
                    <MChart3 timeList={time} />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default MCharts