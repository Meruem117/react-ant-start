import React from 'react'
import { Avatar, Button, Popover } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import store from '@/redux/store'

const User: React.FC = () => {
  const clickAdd = () => {
    store.dispatch({ type: 'login' })
  }

  const clickMinus = () => {
    store.dispatch({ type: 'logout' })
  }

  const content = (
    <div>
      <p>Content</p>
    </div>
  )

  return (
    <div className='flex px-4'>
      <div>{store.getState()}</div>
      <Button type='primary' onClick={clickAdd}>Click</Button>
      <Button type='primary' onClick={clickMinus}>Click</Button>
      <Popover placement='topLeft' content={content} title='Title'>
        <Avatar className='cursor-pointer' size="large" icon={<UserOutlined />} />
      </Popover>
    </div>
  )
}

export default User
