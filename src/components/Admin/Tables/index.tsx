import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Space } from 'antd'

interface recordType {
    id: number,
    mid: string,
    name: string
}

const columns: any = [
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
        render: (text: string, record: recordType) => <Link to={`/space/${record.mid}`}>{text}</Link>
    },
    {
        title: 'Action',
        key: 'action',
        render: (record: recordType) => (
            <Space size="middle">
                <div className="text-blue-500 cursor-pointer">Edit</div>
                <div className="text-red-500 cursor-pointer">Delete</div>
            </Space>
        )
    }
]

const data = [
    {
        id: 1,
        mid: '946974',
        name: 'John',
        key: 1
    },
    {
        id: 2,
        mid: '12123123',
        name: 'Jim Green',
        key: 2
    },
    {
        id: 3,
        mid: '12123123',
        name: 'Joe Black',
        key: 3
    },
]

const Tables: React.FC = () => {
    return (
        <div className="flex flex-col space-y-5 w-full h-full">
            <div className="text-2xl font-semibold tracking-wider">Table</div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default Tables
