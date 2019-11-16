const authorizationReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return state = 'login'
    case 'REGISTARTION':
      return state = 'reg'
    case 'CLOSE':
      return !state;
    default:
      return state;
  }
}

export default authorizationReducer
