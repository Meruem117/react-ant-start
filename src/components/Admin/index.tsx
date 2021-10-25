import React, { Component, lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Spin } from 'antd'
import AdminMenu from './AdminMenu'

const AdminHome = lazy(() => import('./AdminHome'))
const Tables = lazy(() => import('./Tables'))
const Hive = lazy(() => import('./Analysis/Hive'))
const MapReduce = lazy(() => import('./Analysis/MapReduce'))
const MCharts = lazy(() => import('./Charts/MCharts'))
const HCharts = lazy(() => import('./Charts/HCharts'))

export default class Main extends Component {
    render() {
        return (
            <div className="h-full w-full flex justify-start">
                <AdminMenu />
                <Suspense fallback={
                    <div className="flex flex-col h-full w-full justify-center">
                        <Spin />
                    </div>
                }>
                    <div className="flex w-full h-full pt-6 px-8 overflow-auto">
                        <Switch>
                            <Route path="/admin/home" component={AdminHome} />
                            <Route path="/admin/tables" component={Tables} />
                            <Route path="/admin/hive" component={Hive} />
                            <Route path="/admin/mapreduce" component={MapReduce} />
                            <Route path="/admin/mcharts" component={MCharts} />
                            <Route path="/admin/hcharts" component={HCharts} />
                            <Redirect to="/admin/home" />
                        </Switch>
                    </div>
                </Suspense>
            </div>
        )
    }
}
