import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ulistItem, vlistItem } from '../../../model'
import { getUpInfo, getVideos } from '../../../service'
import { convertNumber, convertTime } from '../../../utils'
import { Avatar, List, Card, Pagination } from 'antd'
import { PlaySquareFilled, ClockCircleFilled } from '@ant-design/icons'

const VideoList = (props: any) => {

    const [up, setUp] = useState<ulistItem>({
        card: {
            mid: '',
            name: '',
            sex: '',
            face: '',
            sign: '',
            fans: 0,
            attention: 0,
            Official: {
                title: ''
            }
        },
        archive_count: 0
    })
    const [vlist] = useState<vlistItem[][]>([])
    const [page, setPage] = useState({
        current: 1,
        total: 1,
    })
    const { mid } = props.match.params

    useEffect(() => {
        getUpInfo(mid)
            .then(res => setUp(res))
            .then(() => {
                setPage({
                    current: 1,
                    total: up.archive_count % 30 === 0 ? up.archive_count / 30 : up.archive_count / 30 + 1
                })
            })
            .then(() => {
                getVideos(mid, page.current)
                    .then(res => vlist[page.current - 1] = res)
                    .catch(error => console.error(error))
            })
            .catch(error => console.error(error))
        console.log(vlist[0], up)
    }, [])
    // TODO: fix data fetch bug

    const onChange = (): void => {
        getVideos(mid, page.current)
            .then(res => vlist[page.current - 1] = res)
            .catch(error => console.error(error))
    }

    return (
        <div className="flex flex-col flex-auto flex-nowrap w-full h-full mt-6 pt-2 px-10">
            <div
                className="flex flex-col h-1/4 w-4/5 mx-auto rounded bg-no-repeat bg-cover"
                style={{
                    backgroundImage: "url('http://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png@2560w_400h_100q_1o.webp')"
                }}
            >
                <div
                    className="w-full text-right mt-2 -ml-4 text-base justify-center font-mono"
                    title={up!.card.fans + '个粉丝'}
                >粉丝数: {convertNumber(up!.card.fans)}</div>

                <div className="flex h-full w-full pt-20">
                    <div className="flex flex-col h-full p-2 justify-end">
                        <a href={`https://space.bilibili.com/${mid}`} target='_blank' rel='noreferrer'>
                            <Avatar size={64} src={up!.card.face} className="cursor-pointer" />
                        </a>
                    </div>
                    <div className="flex flex-col h-full pb-1 justify-end tracking-wider">
                        <a href={`https://space.bilibili.com/${mid}`} target='_blank' rel='noreferrer'>
                            <p className="font-bold text-xl text-white">{up!.card.name}</p>
                        </a>
                        <p
                            className="-mt-3 font-light text-sm font-mono text-white"
                            title={up!.card.sign}
                        >{up!.card.sign}</p>
                    </div>
                </div>
            </div>

            <div className="w-4/5 h-3/4 pt-12 bg-white rounded mx-auto">
                <List
                    className="w-full h-full mx-auto"
                    grid={{
                        gutter: 16,
                        column: 5,
                        xs: 1,
                        sm: 2,
                        md: 3,
                        lg: 4,
                        xl: 5,
                        xxl: 5,
                    }}
                    dataSource={vlist[0]}
                    renderItem={item => (
                        <List.Item>
                            <Card
                                style={{ width: '100%' }}
                                className="rounded"
                                cover={
                                    <Link to={`/video/${item.bvid}`}>
                                        <img
                                            alt={item.title}
                                            src={item.pic}
                                            className="rounded"
                                        />
                                    </Link>
                                }>
                                <Link to={`/video/${item.bvid}`}>
                                    <div
                                        className="h-16 text-base overflow-hidden mt-2 text-gray-800 hover:text-blue-400 cursor-pointer"
                                        style={{ WebkitLineClamp: 2 }}
                                        title={item.title}
                                    >{item.title}
                                    </div>
                                </Link>
                                <div className="flex -mt-3 p-0.5 w-full" style={{ color: 'rgb(154, 154, 167)' }}>
                                    <div className="inline w-1/2">
                                        <PlaySquareFilled className="mr-2" />
                                        {convertNumber(item.play)}
                                    </div>
                                    <div className="inline w-1/2">
                                        <ClockCircleFilled className="mr-2" />
                                        {convertTime(item.created)}
                                    </div>
                                </div>
                            </Card>
                        </List.Item>
                    )}
                />
            </div>

            <div className="flex justify-center mt-6">
                <Pagination
                    current={page.current}
                    total={page.total}
                    onChange={() => onChange}
                />
            </div>

        </div >
    )
}

export default VideoList