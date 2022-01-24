import { ADD, MINUS } from '@/constant'

const initState = {
  count: 0
}

export default function testReducer(state: { count: number } = initState, action: any) {
  switch (action.type) {
    case ADD:
      return { ...state, count: ++state.count }
    case MINUS:
      return { ...state, count: --state.count }
    default:
      return state
  }
}
