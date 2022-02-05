import React, { Component, lazy, Suspense, Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Spin } from 'antd'
import Nav from './Nav'
import Footer from './Footer'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
const List = lazy(() => import('./List'))
const Space = lazy(() => import('./Space'))
const Video = lazy(() => import('./Video'))
const Admin = lazy(() => import('../Admin'))

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <div className="h-screen w-full pt-16">
          <Suspense fallback={
            <div className="flex flex-col h-full w-full justify-center">
              <Spin />
            </div>
          }>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/admin" component={Admin} />
              <Route path="/about" component={About} />
              <Route path="/list" component={List} />
              <Route path="/space/:mid" component={Space} />
              <Route path="/video/:bvid" component={Video} />
              <Redirect to="/home" />
            </Switch>
          </Suspense>
        </div>
        <Footer />
      </Fragment>
    )
  }
}
