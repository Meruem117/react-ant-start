import React from 'react'
import { Avatar, Popover } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const User: React.FC = () => {
  const content = (
    <div>
      <p>Content</p>
    </div>
  )

  return (
    <div className='flex px-4'>
      <Popover placement='topLeft' content={content} title='Title'>
        <Avatar className='cursor-pointer' size="large" icon={<UserOutlined />} />
      </Popover>
    </div>
  )
}

export default User
