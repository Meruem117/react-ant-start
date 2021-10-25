export interface upItem {
    mid: string,
    name: string
}

export interface ulistItem {
    card: {
        mid: string,
        name: string,
        sex: string,
        face: string,
        sign: string,
        fans: number,
        attention: number,
        Official: {
            title: string
        }
    },
    archive_count: number
}

export interface vlistItem {
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

export interface videoItem {
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
