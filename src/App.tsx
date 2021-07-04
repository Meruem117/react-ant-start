import React, { Component } from 'react'
import './App.css'
import Main from './pages/Main/Main'

class App extends Component {

  state = {
    data: []
  }

  render() {
    return (
      <div>
        <Main />
      </div>
    )
  }
}

export default App