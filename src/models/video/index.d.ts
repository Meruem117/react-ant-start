export interface videoItem {
    bvid: string,
    title: string,
    pic: string,
    length: string,
    play: number,
    video_review: number,
    comment: number,
    description: string,
    created: number
}

export interface videoDetailItem {
    title: string,
    pubdate: number,
    desc: string,
    owner: {
        mid: string,
        name: string,
        face: string
    },
    stat: {
        view: number,
        danmaku: number,
        reply: number,
        favorite: number,
        coin: number,
        share: number,
        like: number,
        his_rank: number
    }
}
