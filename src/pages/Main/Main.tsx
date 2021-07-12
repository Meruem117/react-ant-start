import React, { Component, lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Loading from '../../components/Loading/Loading'

const Home = lazy(() => import('../Home/Home'))
const About = lazy(() => import('../About/About'))
const Space = lazy(() => import('../Space/Space'))

export default class Main extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="h-screen w-full p-16">
                    <Suspense fallback={<Loading />}>
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