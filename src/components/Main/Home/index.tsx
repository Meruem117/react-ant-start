import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

const Home: React.FC = () => {
  return (
    <div className="flex w-full h-full">
      <Link to="/list" className="mx-auto my-auto">
        <Button type="primary" className="text-base">Get Started</Button>
      </Link>
    </div>
  )
}

export default Home
