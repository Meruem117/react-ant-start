import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import BaseReducer from './reducers/base-reducer'

export default createStore(BaseReducer, applyMiddleware(thunk))
