import React, { Component, lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Spin } from 'antd'
import AdminMenu from './AdminMenu'

const AdminHome = lazy(() => import('./AdminHome'))

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
                    <Switch>
                        <Route path="/admin" component={AdminHome} />
                        <Redirect to="/admin" />
                    </Switch>
                </Suspense>
            </div>
        )
    }
}