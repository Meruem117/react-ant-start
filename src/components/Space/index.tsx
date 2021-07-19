import { useState, useEffect } from 'react'
import { ulistItem, vlistItem } from '../../model'
import { getUpInfo, getVideos } from '../../service'
import { convertNumber } from '../../utils'
import { Avatar } from 'antd'
// import { LinkOutlined } from '@ant-design/icons'

const VideoList = (props: any) => {

    const [up, setUp] = useState<ulistItem>()
    const [vlist] = useState<vlistItem[][]>([])
    const { mid } = props.match.params

    useEffect(() => {
        getUpInfo(mid)
            .then(res => setUp(res))
            .then(() => {
                getVideos(mid, 1)
                    .then(res => vlist[0] = res)
            })
            .catch(error => console.error(error))
        console.log(vlist, up)
    }, [])

    return (
        <div className="flex flex-col flex-auto flex-nowrap w-full h-full mt-6 pt-12 px-10 bg-gray-100">
            <div
                className="flex h-1/3 w-4/5 mx-auto mb-5 rounded bg-no-repeat bg-cover"
                style={{
                    backgroundImage: "url('http://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png@2560w_400h_100q_1o.webp')"
                }}
            >
                <div className="flex flex-col h-full p-4 justify-end">
                    <a href={`https://space.bilibili.com/${mid}`} target='_blank' rel='noreferrer'>
                        <Avatar size={64} src={up?.card.face} className="cursor-pointer" />
                    </a>
                </div>
                <div className="flex flex-col h-full pb-1 justify-end tracking-wider">
                    <a href={`https://space.bilibili.com/${mid}`} target='_blank' rel='noreferrer'>
                        <p className="font-bold text-xl text-white">{up?.card.name}</p>
                    </a>
                    <p
                        className="-mt-4 font-light text-sm font-mono text-white"
                        title={up?.card.sign}
                    >{up?.card.sign}</p>
                </div>
                <div
                    className="flex text-right p-1 text-base justify-center font-mono"
                    title={up?.card.fans + '个粉丝'}
                >粉丝数: {convertNumber(up!.card.fans)}</div>
            </div>
        </div >
    )
}

export default VideoList