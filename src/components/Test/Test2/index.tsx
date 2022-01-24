import React from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { createAddAction, createMinusAction } from '@/store/actions/test'
import type { storeType } from '@/models/base'

type propsType = {
  count: number,
  add: Function,
  minus: Function
}

const Test2: React.FC<propsType> = (props) => {
  const clickAdd = () => {
    props.add()
  }

  const clickMinus = () => {
    props.minus()
  }

  return (
    <div className="pl-16">
      <h1>Test React-Redux</h1>
      <div className="flex space-x-5">
        <Button type='primary' onClick={clickAdd}>Add</Button>
        <Button type='primary' onClick={clickMinus}>Minus</Button>
        <div className="text-base">{props.count}</div>
      </div>
    </div>
  )
}

export default connect(
  (state: storeType) => ({ count: state.test.count }),
  {
    add: createAddAction,
    minus: createMinusAction
  }
)(Test2)
