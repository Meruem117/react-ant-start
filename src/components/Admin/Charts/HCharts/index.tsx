import React from 'react'
import { Tabs } from 'antd'

const HCharts: React.FC = () => {

    const { TabPane } = Tabs

    return (
        <div className="flex flex-col space-y-8 w-full h-full pb-5">
            <Tabs defaultActiveKey="1" tabPosition='top' size='large'>
                <TabPane tab="视频数" key="1" >
                </TabPane>
                <TabPane tab="播放量" key="2">
                </TabPane>
                <TabPane tab="热度" key="3">
                </TabPane>
            </Tabs>
        </div>
    )
}

export default HCharts