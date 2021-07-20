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
}