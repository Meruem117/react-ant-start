import React from 'react'
import { CopyrightCircleOutlined } from '@ant-design/icons'

const Footer: React.FC = () => {
  return (
    <div className="text-center align-middle w-full text-gray-500 fixed bottom-3" style={{ zIndex: -10 }}>
      <p className="inline mr-1 tracking-wider">Copyright</p>
      <CopyrightCircleOutlined />
      <p className="inline ml-1 tracking-wide">2021 Meruem117</p>
    </div>
  )
}

export default Footer
