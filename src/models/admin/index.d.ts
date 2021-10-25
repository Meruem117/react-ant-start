export interface mDataItem {
    name: string,
    type: number,
    count: number,
    tm: string
}

export interface hDataItem1 {
    process_date: string,
    author: string,
    tm: string,
    count: number
}

export interface hDataByYear {
    author: string,
    year: string,
    count: number
}

export interface hDataByMonth {
    author: string,
    month: string,
    count: number
}

export interface hDataItem2 {
    process_date: string,
    author: string,
    bvid: string,
    title: string,
    play: number,
    tm: string
}

export interface hDataItem3 {
    process_date: string,
    bvid: string,
    mid: string,
    title: string,
    author: string,
    pic: string,
    play: number,
    review: number,
    score: number
}

export interface upTableItem {
    id: number,
    mid: string,
    name: string
}
