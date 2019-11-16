const modal = (state = false, action) => {
  switch (action.type) {
    case 'MODAL_OPEN':
      return !state;
    case 'MODAL_CLOSE':
      return state;
    default:
      return false;
  }
}

export default modal
