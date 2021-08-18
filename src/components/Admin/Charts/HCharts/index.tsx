import React from 'react'
import { Tabs } from 'antd'
import HChart1 from './HChart1'
import HChart2 from './HChart2'
import HChart3 from './HChart3'

const HCharts: React.FC = () => {

    const { TabPane } = Tabs

    return (
        <div className="flex flex-col space-y-8 w-full h-full pb-12">
            <Tabs defaultActiveKey="1" tabPosition='top' size='large'>
                <TabPane tab="视频数" key="1">
                    <HChart1 />
                </TabPane>
                <TabPane tab="播放量" key="2">
                    <HChart2 />
                </TabPane>
                <TabPane tab="热度" key="3">
                    <HChart3 />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default HCharts