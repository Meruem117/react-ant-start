import React, { Component } from 'react';
import axios from 'axios'
import { Button } from 'antd';
import './App.css';

class App extends Component {

  getData = async (): Promise<void> => {
    const response = await axios.get(`/api/getHome`)
    console.log(response.data)
    // axios.get(`/api/getHome`).then(
    //   response => { console.log(response.data) },
    //   error => { console.error(error) }
    // )
  }

  render() {
    return (
      <div className="flex">
        <p className="text-4xl text-red-500">Hello</p>
        <Button type="primary" onClick={this.getData}>World</Button>
      </div>
    )
  }
}

export default App;