import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import Space from '../Space/Space'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

class Main extends Component {
    state = {
        current: 'home'
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="h-screen w-full p-16">
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/space" component={Space} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Main
