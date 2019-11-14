import isLoginReducer from './isLoginReducer.js'
import authorizationReducer from './authorizationReducer.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  isLoggedIn: isLoginReducer,
  authStatus: authorizationReducer,
})

export default rootReducer
