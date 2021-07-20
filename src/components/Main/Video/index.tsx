import React, { useState, useEffect } from 'react'
import { videoItem } from '../../../model'
import { getDetail } from '../../../service'
import { convertNumber, convertTime } from '../../../utils'
import { StopOutlined } from '@ant-design/icons'

const Video = (props: any) => {

    const [video, setVideo] = useState<videoItem>({
        title: '',
        pubdate: 0,
        desc: '',
        owner: {
            mid: '',
            name: '',
            face: ''
        },
        stat: {
            view: 0,
            danmaku: 0,
            reply: 0,
            favorite: 0,
            coin: 0,
            share: 0,
            like: 0,
            his_rank: 0
        }
    })
    const { bvid } = props.match.params

    useEffect(() => {
        getDetail(bvid)
            .then(res => setVideo(res))
            .catch(error => console.error(error))
    }, [bvid])

    return (
        <div className="flex w-full h-auto mt-6 pb-12 pl-56 overflow-auto bg-white">
            <div className="flex flex-col w-2/3">
                <div className="text-left text-2xl w-full">{video.title}</div>
                <div className="text-left text-gray-400 tracking-wide mt-1 mb-5 w-2/3">
                    <p className="inline">{convertNumber(video.stat.view)}播放</p>
                    <p className="inline ml-1">·</p>
                    <p className="inline ml-1">{convertNumber(video.stat.danmaku)}弹幕</p>
                    <p className="inline ml-1">·</p>
                    <p className="inline ml-1">{convertNumber(video.stat.reply)}评论</p>
                    <p className="inline ml-4">{convertTime(video.pubdate)}</p>
                    if({video.stat.his_rank}){
                        <p className="inline ml-4">全站排行榜最高第{video.stat.his_rank}名</p>
                    }
                </div>
                <iframe
                    className="flex w-full text-left flex-nowrap"
                    height="720px"
                    src={`https://player.bilibili.com/player.html?bvid=${bvid}`}
                    scrolling="no"
                    frameBorder="no"
                    title={video.title}
                />
                <div
                    className="flex justify-start p-1 mt-3 h-auto w-full border-b border-solid border-t-0 border-l-0 border-r-0 border-gray-200"
                >
                    <img src="../../assets/icon/like.png" className="icon" alt="点赞" />
                    <p className="icon_text">{convertNumber(video.stat.like)}</p>
                    <img src="../../assets/icon/coin.png" className="icon" alt="投币" />
                    <p className="icon_text">{convertNumber(video.stat.coin)}</p>
                    <img src="../../assets/icon/favorite.png" className="icon" alt="收藏" />
                    <p className="icon_text">{convertNumber(video.stat.favorite)}</p>
                    <img src="../../assets/icon/share.png" className="icon" alt="转发" />
                    <p className="icon_text">{convertNumber(video.stat.share)}</p>
                </div>
                <div className="mt-3 text-left ml-2 w-full">
                    <StopOutlined />
                    <p className="inline ml-2 mr-1 text-gray-400">未经作者授权禁止转载</p>
                </div>
                <div
                    className="mt-2 ml-2 text-sm overflow-auto w-full"
                    style={{ WebkitLineClamp: 2 }}
                >{video.desc}</div>
            </div>
        </div>
    )
}

export default Video