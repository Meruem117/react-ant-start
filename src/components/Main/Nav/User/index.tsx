import React from 'react'
import { Avatar, Button, Popover } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import store from '@/redux/store'

const User: React.FC = () => {
  const click = () => {
    store.dispatch({ type: 'login', data: 0 })
  }

  const content = (
    <div>
      {
        store.getState() ? <p>True</p> : <p>False</p>
      }
    </div>
  )

  return (
    <div className='flex px-4'>
      <Button type='primary' onClick={click}>Click</Button>
      <Popover placement='topLeft' content={content} title='Title'>
        <Avatar className='cursor-pointer' size="large" icon={<UserOutlined />} />
      </Popover>
    </div>
  )
}

export default User
