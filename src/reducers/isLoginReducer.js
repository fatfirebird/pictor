const isLoginReducer = (state = true, action) => {
  switch (action.type) {
    case 'EXIT':
      return !state;
    default:
      return state;
  }
}

export default isLoginReducer
