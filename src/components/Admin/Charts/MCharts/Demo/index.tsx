import React from 'react';
import { Rose } from '@ant-design/charts';

const DemoRose: React.FC = () => {
    var data = [
        {
            type: '分类一',
            value: 27,
        },
        {
            type: '分类二',
            value: 25,
        }
    ];
    var config = {
        data: data,
        xField: 'type',
        yField: 'value',
        seriesField: 'type',
        radius: 0.9,
        legend: { position: 'bottom' },
        interactions: [{ type: 'element-active' }],
    };
    return <Rose {...config} />;
};

export default DemoRose;