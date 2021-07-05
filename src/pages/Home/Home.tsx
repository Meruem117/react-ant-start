import React, { Component } from 'react'
import { Button } from 'antd'

interface propsType {
    history: any
}

class Home extends Component<propsType, any> {

    toSpace = (): void => {
        this.props.history.push('/space')
    }

    render() {
        return (
            <div className="flex w-full h-full">
                <Button
                    type="primary"
                    className="mx-auto my-auto text-lg tracking-wider"
                    onClick={this.toSpace}
                >Get Started</Button>
            </div>
        )
    }
}

export default Home