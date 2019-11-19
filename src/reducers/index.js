import isLoginReducer from './isLoginReducer.js'
import authorizationReducer from './authorizationReducer.js'
import openModalReducer from './modalReducer.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  isLoggedIn: isLoginReducer,
  authStatus: authorizationReducer,
  isModalOpened: openModalReducer,
})

export default rootReducer
