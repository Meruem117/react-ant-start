import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { upItem, ulistItem } from '../../model'
import { getUpList, getUpInfo } from '../../service'
import { List, Avatar } from 'antd'
import { LinkOutlined } from '@ant-design/icons'

const UpList = () => {

    const [up, setUp] = useState<upItem[]>([])
    const [ulist] = useState<ulistItem[]>([])

    useEffect(() => {
        getUpList()
            .then(res => setUp(res))
            .then(() =>
                up.map(item => {
                    if (ulist.length < up.length) {
                        getUpInfo(item.mid)
                            .then(res => {
                                if (!ulist.includes(res)) {
                                    ulist.push(res)
                                }
                            })   //对state中的数组进行push不会触发useEffect监听重复执行数据获取操作
                            .catch(error => console.error(error))
                    }
                    return item
                })
            )
            .catch(error => console.error(error))
        console.log(up, ulist)
    }, [up])

    return (
        <>
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
        </>
    )
}

export default UpList