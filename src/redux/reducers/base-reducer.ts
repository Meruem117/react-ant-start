function BaseReducer(state: any = 0, action: any) {
  const { type } = action
  switch (type) {
    case 'login':
      return state.data + 1
    case 'logout':
      return state.data - 1
    default:
      return state.data
  }
}

export default BaseReducer
