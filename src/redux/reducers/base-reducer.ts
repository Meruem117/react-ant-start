import { ADD, MINUS } from '../types'

function BaseReducer(state: any = 0, action: any) {
  const { type } = action
  switch (type) {
    case ADD:
      return state + 1
    case MINUS:
      return state - 1
    default:
      return state
  }
}

export default BaseReducer
