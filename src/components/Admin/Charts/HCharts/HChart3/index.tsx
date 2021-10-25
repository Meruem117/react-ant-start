import React, { useState, useEffect } from 'react'
import { UserOutlined, PlaySquareFilled, ProfileOutlined } from '@ant-design/icons'
import { hDataItem3 } from '../../../../../models/admin'
import { getHiveData3 } from '../../../../../services/admin'
import { convertNumber } from '../../../../../utils'

const HChart3: React.FC = () => {
    const [data, setData] = useState<hDataItem3[]>([])

    useEffect(() => {
        getHiveData3()
            .then(res => setData(res))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className="flex flex-col w-full h-full space-y-5" >
            <div className="text-2xl font-semibold tracking-wide">排行榜</div>

            <div className="grid grid-cols-2 gap-5 w-full">
                {
                    data.map((item, key) => {
                        return (
                            <div
                                className="flex w-full h-auto p-3 justify-start cursor-pointer hover:shadow-2xl hover:text-blue-400"
                            >
                                <div
                                    style={{ backgroundImage: `url('${item.pic}')` }}
                                    className="rounded cursor-pointer bg-no-repeat bg-contain h-40 w-1/3"
                                ></div>
                                <div className="flex flex-col w-1/3 pl-5">
                                    <div
                                        className="h-12 w-full font-semibold text-base cursor-pointer"
                                    >{item.title}</div>
                                    <div
                                        className="text-gray-500 mt-1 text-base hover:text-blue-500"
                                    >
                                        <UserOutlined />
                                        <p className="inline ml-1">{item.author}</p>
                                    </div>
                                    <div className="text-gray-400 mt-6">
                                        <PlaySquareFilled />
                                        <p className="inline ml-1">{convertNumber(item.play)}</p>
                                    </div>
                                    <div className="text-gray-400 mt-1">
                                        <ProfileOutlined />
                                        <p className="inline ml-1">{convertNumber(item.review)}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-start w-1/3">
                                    <div className="text-right text-4xl text-gray-300 font-black pr-3">{key + 1}</div>
                                    <div className="flex flex-col justify-center h-2/3">
                                        <div
                                            className="text-center text-xl text-indigo-400 font-semibold"
                                        >{item.score}</div>
                                        <div className="text-center text-sm text-gray-400">综合得分</div>
                                    </div>
                                </div>
                            </div >
                        )
                    })
                }
            </div >

        </div >
    )
}

export default HChart3
