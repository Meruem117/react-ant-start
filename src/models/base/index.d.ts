export interface storeType {
  test: {
    count: number
  },
  login: {
    isLogin: boolean
  }
}

export type actionType = {
  type: string,
  data?: any
}