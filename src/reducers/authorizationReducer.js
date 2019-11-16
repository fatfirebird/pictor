const initialState = {
  status: false
}

const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        status: 'login'
      };
    case 'REGISTARTION':
      return {
        ...state,
        status: 'reg'
      };
    default:
      return state;
  }
}

export default authorizationReducer
