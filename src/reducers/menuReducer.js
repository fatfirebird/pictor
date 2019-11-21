const initialState = {
  menu: {
    menuName: null,
    opened: true,
  }
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MENU': {
      const { menuName } = action.payload;
      return {
        ...state,
        menuName: menuName,
        opened: true,
      }
    }

    case 'CLOSE_MENU': {
      const { menuName } = action.payload;
      return {
        ...state,
        menuName: menuName,
        opened: false,
      }
    }
    default:
      return state
  }
}

export default menuReducer
