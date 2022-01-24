import React from 'react'
import { Button } from 'antd'
import store from '@/store'
import { createAddAction, createMinusAction, createAddAsyncAction } from '@/store/actions/test'

const Test1: React.FC = () => {
  const clickAdd = () => {
    store.dispatch(createAddAction())
  }

  const clickMinus = () => {
    store.dispatch(createMinusAction())
  }

  const clickAsync = () => {
    store.dispatch(createAddAsyncAction(1500))
  }

  return (
    <div className="pl-16">
      <h1>Test Redux</h1>
      <div className="flex space-x-5">
        <Button type='primary' onClick={clickAdd}>Add</Button>
        <Button type='primary' onClick={clickMinus}>Minus</Button>
        <Button type='primary' onClick={clickAsync}>Async</Button>
        <div className="text-base">{store.getState()}</div>
      </div>
    </div>
  )
}

export default Test1
