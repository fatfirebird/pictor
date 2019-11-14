const authorizationReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return state = 'login';
    case 'REGISTARTION':
      return state = 'reg';
    default:
      return state = null;
  }
}

export default authorizationReducer
