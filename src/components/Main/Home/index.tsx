import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

export default function Home() {
    return (
        <div className="flex w-full h-full">
            <Link to="/list" className="mx-auto my-auto">
                <Button
                    type="primary"
                    className="text-lg tracking-wider"
                >Get Started</Button>
            </Link>
        </div>
    )
}
