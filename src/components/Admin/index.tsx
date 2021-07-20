import React, { Component, lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Spin } from 'antd'

const AdminHome = lazy(() => import('./AdminHome'))

export default class Main extends Component {
    render() {
        return (
            <>
                <div className="h-screen w-full p-16">
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
            </>
        )
    }
}