import isLoginReducer from './isLoginReducer.js'
import authorizationReducer from './authorizationReducer.js'
import modal from './modalReducer.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  isLoggedIn: isLoginReducer,
  authStatus: authorizationReducer,
  modal: modal,
})

export default rootReducer
