import { Dispatch } from 'redux'
import { ADD, MINUS } from '../types'

export const createAddAction = () => ({ type: ADD })
export const createMinusAction = () => ({ type: MINUS })

export const createAddAsyncAction = (time: number) => {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(createAddAction())
    }, time)
  }
}