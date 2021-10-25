import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { AntDesignOutlined, TableOutlined, ProjectOutlined, SketchOutlined } from '@ant-design/icons'

const { SubMenu } = Menu

const AdminMenu: React.FC = () => {
    const [openKeys, setOpenKeys] = useState(['首页'])
    const RootSubKeys = ['首页', '表格', '分析', '可视化']
    const onOpenChange = (keys: any): void => {
        const latestOpenKey = keys.find((key: string) => openKeys.indexOf(key) === -1)
        if (RootSubKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys)
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
        }
    }

    return (
        <Menu mode="inline" theme="dark" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256, height: '100%' }}>
            <Menu.Item key="首页" icon={<AntDesignOutlined />}>
                <Link to="/admin">首页</Link>
            </Menu.Item>
            <Menu.Item key="表格" icon={<TableOutlined />}>
                <Link to="/admin/tables">表格</Link>
            </Menu.Item>
            <SubMenu key="分析" icon={<ProjectOutlined />} title="分析">
                <Menu.Item key="MapReduce">
                    <Link to="/admin/mapreduce">MapReduce</Link>
                </Menu.Item>
                <Menu.Item key="Hive">
                    <Link to="/admin/hive">Hive</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="可视化" icon={<SketchOutlined />} title="可视化">
                <Menu.Item key="MCharts">
                    <Link to="/admin/mcharts">MapReduce</Link>
                </Menu.Item>
                <Menu.Item key="HCharts">
                    <Link to="/admin/hcharts">Hive</Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
    )
}

export default AdminMenu
