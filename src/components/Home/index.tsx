import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

export default class Home extends Component {

    render() {
        return (
            <div className="flex w-full h-full">
                <Link to="/space/412704776" className="mx-auto my-auto">
                    <Button
                        type="primary"
                        className="text-lg tracking-wider"
                    >Get Started</Button>
                </Link>
            </div>
        )
    }
}