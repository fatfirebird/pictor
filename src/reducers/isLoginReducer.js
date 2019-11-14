const isLoginReducer = (state = true, action) => {
    switch (action.type) {
      case 'Login':
        return !state;
      default:
        return state;
    }
}

export default isLoginReducer
