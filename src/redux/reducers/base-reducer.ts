function BaseReducer(state: any = false, action: any) {
  const { type } = action
  switch (type) {
    case 'login':
      return Object.assign({}, state, {
        isLogin: true
      })
    case 'logout':
      return Object.assign({}, state, {
        isLogin: false
      })
    default:
      return state
  }
}

export default BaseReducer
