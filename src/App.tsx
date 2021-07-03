import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'antd';
import './App.css';
import Home from './components/Home';

class App extends Component {

  state = {
    name: 'sss',
    data: []
  }

  render() {
    return (
      <div className="flex">
        <p className="text-4xl text-red-500">Hello</p>
        <Button type="primary" onClick={this.getData}>World</Button>
        <Link to="/home">Home</Link>
        <Switch>
          <Route path="/home" component={Home} />
          <Redirect to="/home" />
        </Switch>
      </div>
    )
  }

  getData = async (): Promise<void> => {
    try {
      const response = await axios.get(`/api/getHome`)
      this.setState({ data: response.data })
    } catch (error) {
      console.error(error)
    }

  }
}

export default App;