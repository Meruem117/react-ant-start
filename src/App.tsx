import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="flex">
        <p className="text-4xl text-red-500">Hello</p>
        <Button type="primary">World</Button>
      </div>
    )
  }
}

export default App;