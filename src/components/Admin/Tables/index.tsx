import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Table, Space, Button } from 'antd'
import { upTableItem } from '../../../models/admin'
import { getUpTable } from '../../../services/admin'

const Tables: React.FC = () => {

    const [upTable, setUpTable] = useState<upTableItem[]>([])

    useEffect(() => {
        getUpTable()
            .then(res => setUpTable(res))
            .catch(error => console.error(error))
    }, [])

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Mid',
            dataIndex: 'mid',
            key: 'mid'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: string, record: upTableItem) => <Link to={`/space/${record.mid}`}>{text}</Link>
        },
        {
            title: 'Action',
            key: 'action',
            render: (record: upTableItem) => (
                <Space size="middle">
                    <div className="text-blue-500 cursor-pointer">Edit</div>
                    <div className="text-red-500 cursor-pointer">Delete</div>
                </Space>
            )
        }
    ]

    return (
        <div className="flex flex-col space-y-5 w-full h-full">
            <div className="text-2xl font-semibold tracking-wider">Table</div>
            <Table columns={columns} dataSource={upTable} />
            <Button className="w-28 text-2xl">Add</Button>
        </div>
    )
}

export default Tables
