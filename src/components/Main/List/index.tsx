import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { List, Avatar, Spin } from 'antd'
import { LinkOutlined } from '@ant-design/icons'
import { upInfoItem } from '@/models/up'
import { getUps, getUpInfo } from '@/services/up'
import { UP_LIST_SIZE } from '@/constant'

const UpList: React.FC = () => {
    const [upList, setUpList] = useState<upInfoItem[]>([])
    const [current, setCurrent] = useState<number>(0)
    const [hasMore, setHasMore] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getUpList(current)
            .then(() => setLoading(false))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getUpList = async (page: number): Promise<void> => {
        if (hasMore) {
            const ups = await getUps(page)
            ups.forEach(up => {
                getUpInfo(up.mid)
                    .then(res => setUpList([...upList, res]))
            })
            if (ups.length < UP_LIST_SIZE) {
                setHasMore(false)
            }
        }
        return
    }

    const load = (): void => {
        setCurrent(current + 1)
        getUpList(current - 1)
    }

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
                dataSource={upList}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={
                                <Link to={`/space/${item.mid}`}>
                                    <Avatar size={64} src={item.face} className="cursor-pointer" />
                                </Link>
                            }
                            title={
                                <div className="flex h-8">
                                    <Link to={`/space/${item.mid}`}>
                                        <p
                                            className="text-2xl tracking-wider cursor-pointer text-gray-800 hover:text-blue-400"
                                        >{item.name}</p>
                                    </Link>
                                    <a
                                        href={`https://space.bilibili.com/${item.mid}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline p-2 cursor-pointer"
                                    >
                                        <LinkOutlined />
                                    </a>
                                </div>
                            }
                            description={item.Official.title}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}

export default UpList
