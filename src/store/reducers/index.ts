import { combineReducers } from 'redux'
import testReducer from "./test"
import loginReducer from "./login"

export default combineReducers({
  test: testReducer,
  login: loginReducer
})