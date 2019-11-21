import isLoginReducer from './isLoginReducer.js'
import authorizationReducer from './authorizationReducer.js'
import openModalReducer from './modalReducer.js'
import isImgLoaded from './imgLoadedReducer.js'
import menuReducer from './menuReducer.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  isLoggedIn: isLoginReducer,
  authStatus: authorizationReducer,
  isModalOpened: openModalReducer,
  isImgLoaded,
  menuReducer
})

export default rootReducer
