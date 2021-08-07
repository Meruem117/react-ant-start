import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ulistItem, vlistItem } from '../../../models/main'
import { getUpInfo, getVideos } from '../../../services/main'
import { convertNumber, convertTime } from '../../../utils'
import { Avatar, Pagination, Spin } from 'antd'
import { PlaySquareFilled, ClockCircleFilled } from '@ant-design/icons'

const VideoList: React.FC = (props: any) => {

    const { mid } = props.match.params

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
    const [vlist, setVList] = useState<vlistItem[]>([])
    const [page, setPage] = useState<number>(1)
    const [total, setTotal] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getUpInfo(mid)
            .then(res => {
                setUp(res)
                setTotal(Math.ceil(res.archive_count / 30) * 30)
                getVideos(mid, 1)
                    .then(res => setVList(res))
            })
            .then(() => setLoading(false))
            .catch(error => console.error(error))
    }, [mid])

    const onChange = (page: number): void => {
        setLoading(true)
        setPage(page)
        getVideos(mid, page)
            .then(res => setVList(res))
            .then(() => setLoading(false))
            .catch(error => console.error(error))
    }

    if (loading) {
        return (
            <div className="flex flex-col h-full w-full justify-center">
                <Spin />
            </div>
        )
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
                    <div className="flex flex-col h-full justify-end tracking-wider">
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
                <div className="grid grid-cols-5 gap-5">
                    {
                        vlist.map(video => {
                            return (
                                <div className="flex flex-col flex-nowrap flex-auto h-60" key={video.bvid}>
                                    <Link to={`/video/${video.bvid}`}>
                                        <div
                                            className="flex rounded cursor-pointer bg-no-repeat bg-cover h-40 w-full"
                                            style={{ backgroundImage: `url('${video.pic}')` }}
                                        >
                                            <div className="flex justify-end w-full">
                                                <div className="flex flex-col justify-end">
                                                    <div
                                                        className="bg-gray-800 bg-opacity-60 text-gray-300 rounded-tl-lg rounded-br px-1 py-0.5 text-xs tracking-wider"
                                                    >{video.length}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to={`/video/${video.bvid}`}>
                                        <div
                                            className="h-12 text-base overflow-hidden mt-2 text-gray-800 hover:text-blue-400 cursor-pointer"
                                            title={video.title}
                                        >{video.title}</div>
                                    </Link>

                                    <div className="flex p-0.5 w-full" style={{ color: 'rgb(154, 154, 167)' }}>
                                        <div className="inline w-1/2">
                                            <PlaySquareFilled className="mr-2" />
                                            {convertNumber(video.play)}
                                        </div>
                                        <div className="inline w-1/2">
                                            <ClockCircleFilled className="mr-2" />
                                            {convertTime(video.created)}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="flex justify-center mt-6 pb-6 bg-white">
                    <Pagination
                        current={page}
                        total={total}
                        pageSize={30}
                        showSizeChanger={false}
                        showTitle={true}
                        onChange={onChange}
                    />
                </div>

            </div>

        </div >
    )
}

export default VideoList