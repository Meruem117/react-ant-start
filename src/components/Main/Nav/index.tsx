import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import { AntDesignOutlined, ReadOutlined, ContainerOutlined, ApiOutlined } from '@ant-design/icons'
import User from './User'

export default class Nav extends Component {
    //? not in use
    static propTypes = {
        current: PropTypes.string.isRequired
    }
    static defaultProps = {
        current: ''
    }

    state = {
        current: 'home'
    }

    handleClick = (e: { key: string }): void => {
        this.setState({ current: e.key })
    }

    render() {
        const { current } = this.state
        return (
            <div className="h-14 w-full flex fixed top-0 justify-start pt-2 pl-2 shadow-xl bg-white z-10">
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className='w-4/5'>
                    <Menu.Item key="home" icon={<AntDesignOutlined />}>
                        <Link to="/home" className="text-base">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="about" icon={<ReadOutlined />}>
                        <Link to="/about" className="text-base">About</Link>
                    </Menu.Item>
                    <Menu.Item key="space" icon={<ContainerOutlined />}>
                        <Link to="/list" className="text-base">Space</Link>
                    </Menu.Item>
                    <Menu.Item key="bilibili" icon={<ApiOutlined />}>
                        <a href="https://www.bilibili.com/" target="_blank" rel="noopener noreferrer" className="text-base">Bilibili</a>
                    </Menu.Item>
                </Menu>
                <div className='w-1/5 flex justify-end'>
                    <User />
                </div>
            </div>
        )
    }
}
