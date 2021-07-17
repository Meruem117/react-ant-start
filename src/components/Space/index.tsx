import { useState, useEffect } from 'react'
import { upItem, ulistItem } from '../../model'
import { getUpList, getUpInfo } from '../../service'
import { List, Avatar } from 'antd'
import { LinkOutlined } from '@ant-design/icons'

const Space = () => {

    const [up, setUp] = useState<upItem[]>([])
    const [ulist] = useState<ulistItem[]>([])

    useEffect(() => {
        getUpList()
            .then(res => setUp(res))
            .catch(error => console.error(error))
        up.map(item => {
            getUpInfo(item.mid)
                .then(res => { ulist.push(res) })   //对state中的数组进行push不会触发useEffect监听重复执行数据获取操作
                .catch(error => console.error(error))
            return item
        })
    }, [up, ulist])

    const toUp = (mid: string): void => {
        console.log(mid)
    }

    return (
        <>
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
                                        onClick={() => toUp(item.card.mid)}
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
        </>
    )
}

export default Space