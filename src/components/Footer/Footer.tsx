import React, { Component } from 'react'
import { CopyrightCircleOutlined } from '@ant-design/icons'

export default class Footer extends Component {
    render() {
        return (
            <div className="text-center align-middle w-full text-gray-500 fixed bottom-3">
                <p className="inline mr-1 tracking-wider">Copyright</p>
                <CopyrightCircleOutlined />
                <p className="inline ml-1 tracking-wide">2021 Meruem117</p>
            </div>
        )
    }
}