import React, { useState, useEffect } from 'react'
import { Treemap, Funnel, Scatter, Datum } from '@ant-design/charts'
import { DataSet } from '@antv/data-set'
import type { hDataItem2 } from '@/models/admin'
import { getHiveData2 } from '@/services/admin'

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

  const dvScatter = new DataView().source(data)
  dvScatter.transform({
    type: 'map',
    callback(row: any) {
      row.x = Math.round(Date.parse(row.tm) / 150000)
      row.y = row.play / 10000
      return row
    }
  })
  const configScatter = {
    appendPadding: 30,
    data: dvScatter.rows,
    xField: 'x',
    yField: 'y',
    colorField: 'author',
    size: 5,
    shape: 'circle',
    pointStyle: { fillOpacity: 1 },
    yAxis: {
      nice: true,
      line: { style: { stroke: '#aaa' } },
    },
    xAxis: {
      grid: { line: { style: { stroke: '#eee' } } },
      line: { style: { stroke: '#aaa' } },
    },
    meta: {
      x: {
        formatter: (value: any) => {
          const d: Date = new Date(value * 150000)
          const date: string = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate()
          return date
        },
      }
    },
    label: {
      formatter: (item: any) => {
        return item.title.slice(0, 8) + '...';
      },
    },
    tooltip: {
      fields: ['title', 'play', 'author'],
      formatter: (datum: Datum) => {
        return { name: datum.title, value: datum.play };
      },
    }
  }

  return (
    <div className="flex flex-col w-full h-full space-y-5">
      <div className="text-2xl font-semibold tracking-wide">{'播放量 >= 1000万'}</div>
      <Treemap {...configTreemap} />
      <Funnel {...configFunnel} />
      <Scatter {...configScatter} />
    </div>
  )
}

export default HChart2
