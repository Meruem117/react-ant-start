import React, { useState, useEffect } from 'react'
import { Column, Radar, Line } from '@ant-design/charts'
import { DataSet } from '@antv/data-set'
import { hDataItem1 } from '../../../../../models/admin'
import { getHiveData1 } from '../../../../../services/admin'

const HChart1: React.FC = () => {
    const { DataView } = DataSet
    const [data, setData] = useState<hDataItem1[]>([])

    useEffect(() => {
        getHiveData1()
            .then(res => setData(res))
            .catch(error => console.error(error))
    }, [])

    const dvColumn = new DataView().source(data)
    dvColumn.transform({
        type: 'map',
        callback(row: hDataItem1) {
            row.tm = row.tm.slice(0, 4)
            return row
        }
    })
    dvColumn.transform({
        type: 'sort-by',
        fields: ['tm'],
        order: 'ASC'
    })
    const configColumn = {
        data: dvColumn.rows,
        xField: 'author',
        yField: 'count',
        seriesField: 'tm',
        isStack: true,
        label: {
            position: 'middle' as 'middle'
        }
    }

    const dvRader = new DataView().source(data)
    dvRader.transform({
        type: 'map',
        callback(row: hDataItem1) {
            row.tm = row.tm.slice(5, 7)
            return row
        }
    })
    dvRader.transform({
        type: 'sort-by',
        fields: ['tm'],
        order: 'ASC'
    })
    const configRader = {
        data: dvRader.rows,
        xField: 'tm',
        yField: 'count',
        seriesField: 'author',
        legend: {
            layout: 'vertical' as 'vertical',
            position: 'left' as 'left'
        },
        // 开启辅助点
        point: {},
        area: {},
    }

    const dv = new DataView().source(data)
    dv.transform({
        type: 'map',
        callback(row: hDataItem1) {
            row.tm = row.tm.slice(0, 5)
            return row
        }
    })
    dv.transform({
        type: 'aggregate',
        fields: ['count'],
        operations: ['sum'],
        as: 'sum',
        groupBy: ['tm']
    })
    dv.transform({
        type: 'sort-by',
        fields: ['tm'],
        order: 'ASC'
    })
    const configLine = {
        data: dv.rows,
        xField: 'tm',
        yField: 'sum',
        label: {
            position: 'top' as 'top'
        },
        point: {
            size: 5,
            shape: 'diamond',
            style: {
                fill: 'white',
                stroke: '#5B8FF9',
                lineWidth: 2,
            },
        },
        tooltip: { showMarkers: false },
        state: {
            active: {
                style: {
                    shadowBlur: 4,
                    stroke: '#000',
                    fill: 'red',
                },
            },
        },
        interactions: [{ type: 'marker-active' }],
    }

    return (
        <div className="flex flex-col w-full h-full space-y-5">
            <div className="text-2xl font-semibold tracking-wide">视频数</div>
            <div className="text-xl ml-1">按年分</div>
            <Column {...configColumn} />
            <div className="text-xl ml-1">按月份</div>
            <Radar {...configRader} />
            <div className="text-xl ml-1">趋势</div>
            <Line {...configLine} />
        </div>
    )
}

export default HChart1
