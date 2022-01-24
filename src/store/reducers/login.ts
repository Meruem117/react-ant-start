import { LOGIN, LOGOUT } from '@/constant'

const initState = {
  isLogin: false
}

export default function loginReducer(state: { isLogin: boolean } = initState, action: any) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLogin: true }
    case LOGOUT:
      return { ...state, isLogin: false }
    default:
      return state
  }
}
