const initialState = {
  isLoaded: false,
  url: null
}

const isImgLoaded = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADED': {
      return {
        ...state,
        isLoaded: true,
      }
    }
    case 'IMG_DATA': {
      const { url } = action.payload;
      return {
        ...state,
        url
      }
    }
    default:
      return state;
  }
}

export default isImgLoaded
