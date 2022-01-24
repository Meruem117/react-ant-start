import type { Dispatch } from 'redux'
import { ADD, MINUS } from '@/constant'

export const createAddAction = () => ({ type: ADD })
export const createMinusAction = () => ({ type: MINUS })

export const createAddAsyncAction = (time: number) => {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(createAddAction())
    }, time)
  }
}
