import React, { Component } from 'react'
import axios from 'axios'
import { List, Avatar } from 'antd'
import { LinkOutlined } from '@ant-design/icons'

interface propsType {
    history: any
}


interface stateType {
    up: {
        mid: string,
        name: string
    }[],
    ulist: {
        card: {
            mid: string,
            name: string,
            face: string,
            Official: {
                title: string
            }
        }
    }[]
}

class Space extends Component<propsType, stateType> {
    state: stateType = {
        up: [],
        ulist: []
    }

    initData = (): void => {
        this.getUpList().then(() => {
            const { up } = this.state
            up.map(item => {
                this.getUpInfo(item.mid)
                return item
            })
        })
    }

    getUpList = async (): Promise<void> => {
        try {
            const response = await axios.get(`/api/getUp`)
            this.setState({ up: response.data })
        } catch (error) {
            console.error(error)
        }
    }

    getUpInfo = async (mid: string): Promise<void> => {
        try {
            const response = await axios.get(`/card?mid=${mid}`)
            const res = response.data.data
            const { ulist } = this.state
            ulist.push(res)
        } catch (error) {
            console.error(error)
        }
    }

    toUp = (mid: string): void => {
        // this.props.history.push('')
        console.log(mid)
    }

    render() {
        const { ulist } = this.state
        return (
            <div>
                <h1 onClick={this.initData}>Space</h1>
                <List
                    itemLayout="horizontal"
                    dataSource={ulist}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar size={64} src={item.card.face} className="cursor-pointer" />}
                                title={
                                    <div className="flex h-8">
                                        <p
                                            className="text-2xl tracking-wider cursor-pointer hover:text-blue-400"
                                            onClick={() => this.toUp(item.card.mid)}
                                        >{item.card.name}</p>
                                        <a
                                            href={`https://space.bilibili.com/${item.card.mid}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline p-2 cursor-pointer"
                                        >
                                            <LinkOutlined />
                                        </a>
                                    </div>
                                }
                                description={item.card.Official.title}
                            />
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default Space
