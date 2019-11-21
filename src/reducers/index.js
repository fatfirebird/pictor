import isLoginReducer from './isLoginReducer.js'
import authorizationReducer from './authorizationReducer.js'
import isImgLoaded from './imgLoadedReducer.js'
import menuReducer from './menuReducer.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  isLoggedIn: isLoginReducer,
  authStatus: authorizationReducer,
  isImgLoaded,
  menuReducer
})

export default rootReducer
