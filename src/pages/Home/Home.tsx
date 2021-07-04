import React, { Component } from 'react'
import { Button } from 'antd'

class Home extends Component {
    render() {
        return (
            <div className="flex w-full h-full">
                <Button
                    type="primary"
                    className="mx-auto my-auto text-lg tracking-wider"
                >Get Started</Button>
            </div>
        )
    }
}

export default Home