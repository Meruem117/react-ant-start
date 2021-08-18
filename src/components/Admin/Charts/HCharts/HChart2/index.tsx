import React, { useState, useEffect } from 'react'
import { Treemap, Funnel } from '@ant-design/charts'
import { DataSet } from '@antv/data-set'
import { hDataItem2 } from '../../../../../models/admin'
import { getHiveData2 } from '../../../../../services/admin'

const HChart2: React.FC = () => {

    const { DataView } = DataSet
    const [data, setData] = useState<hDataItem2[]>([])

    useEffect(() => {
        getHiveData2()
            .then(res => setData(res))
            .catch(error => console.error(error))
    }, [])

    const dv = new DataView().source(data)
    dv.transform({
        type: 'aggregate',
        fields: ['play'],
        operations: ['sum'],
        as: 'value',
        groupBy: ['author']
    })

    const dataTreemap = {
        name: 'root',
        children: dv.rows
    }
    const configTreemap = {
        data: dataTreemap,
        colorField: 'author'
    }

    const configFunnel = {
        data: dv.rows,
        xField: 'author',
        yField: 'value',
        isTransposed: true,
        minSize: 0.3,
        maxSize: 0.8,
        label: {
            position: 'middle' as 'middle'
        },
        conversionTag: {},
        tooltip: {}
    }

    return (
        <div className="flex flex-col w-full h-full space-y-5" >
            <div className="text-2xl font-semibold tracking-wide">{'播放量 >= 1000万'}</div>
            <Treemap {...configTreemap} />
            <Funnel {...configFunnel} />
        </div >
    )
}

export default HChart2