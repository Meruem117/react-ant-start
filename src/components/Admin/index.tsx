import React, { Component, lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Spin } from 'antd'
import AdminMenu from './AdminMenu'

const AdminHome = lazy(() => import('./AdminHome'))
const Hive = lazy(() => import('./Analysis/Hive'))

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
                    <div className="flex w-full h-full pt-6 px-8">
                        <Switch>
                            <Route path="/admin/home" component={AdminHome} />
                            <Route path="/admin/hive" component={Hive} />
                            <Redirect to="/admin/home" />
                        </Switch>
                    </div>
                </Suspense>
            </div>
        )
    }
}