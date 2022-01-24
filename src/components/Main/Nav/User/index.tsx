import React from 'react'
import { Avatar, Button, Popover } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import store from '@/redux/store'
import { createAddAction, createMinusAction, createAddAsyncAction } from '@/redux/actions/base-action'

const User: React.FC = () => {
  const clickAdd = () => {
    store.dispatch(createAddAction())
  }

  const clickMinus = () => {
    store.dispatch(createMinusAction())
  }

  const clickAsync = () => {
    store.dispatch(createAddAsyncAction(1500))
  }

  const content = (
    <div>
      <p>Content</p>
    </div>
  )

  return (
    <div className='flex px-4'>
      <div>{store.getState()}</div>
      <Button type='primary' onClick={clickAdd}>Add</Button>
      <Button type='primary' onClick={clickMinus}>Minus</Button>
      <Button type='primary' onClick={clickAsync}>Async</Button>
      <Popover placement='topLeft' content={content} title='Title'>
        <Avatar className='cursor-pointer' size="large" icon={<UserOutlined />} />
      </Popover>
    </div>
  )
}

export default User
