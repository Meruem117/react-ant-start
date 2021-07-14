import React, { Component, lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import { Spin } from 'antd'

const Home = lazy(() => import('../Home'))
const About = lazy(() => import('../About'))
const Space = lazy(() => import('../Space'))

export default class Main extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="h-screen w-full p-16">
                    <Suspense fallback={<Spin />}>
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/space" component={Space} />
                            <Redirect to="/home" />
                        </Switch>
                    </Suspense>
                </div>
                <Footer />
            </div>
        )
    }
}