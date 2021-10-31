import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { List, Avatar, Spin } from 'antd'
import { LinkOutlined } from '@ant-design/icons'
import { ulistItem } from '@/models/main'
import { getUpList } from '@/services/main'

const UpList: React.FC = () => {
    const [ulist, setUList] = useState<ulistItem[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getUpList()
            .then(res => setUList(res))
            .then(() => setLoading(false))
    }, [])

    if (loading) {
        return (
            <div className="flex flex-col h-full w-full justify-center">
                <Spin />
            </div>
        )
    }

    return (
        <div className="h-full w-full pl-16">
            <List
                itemLayout="horizontal"
                dataSource={ulist}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={
                                <Link to={`/space/${item.card.mid}`}>
                                    <Avatar size={64} src={item.card.face} className="cursor-pointer" />
                                </Link>
                            }
                            title={
                                <div className="flex h-8">
                                    <Link to={`/space/${item.card.mid}`}>
                                        <p
                                            className="text-2xl tracking-wider cursor-pointer text-gray-800 hover:text-blue-400"
                                        >{item.card.name}</p>
                                    </Link>
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

export default UpList
