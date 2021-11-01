export interface upItem {
    id: number,
    mid: string,
    name: string
}

export interface upInfoItem {
    mid: string,
    name: string,
    face: string,
    Official: {
        title: string
    }
}

export interface upDetailItem {
    card: {
        mid: string,
        name: string,
        sex: string,
        face: string,
        sign: string,
        fans: number,
        attention: number
    },
    archive_count: number
}
