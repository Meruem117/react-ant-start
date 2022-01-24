import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import TestReducer from './reducers/test-reducer'

export default createStore(TestReducer, applyMiddleware(thunk))
