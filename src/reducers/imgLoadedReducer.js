const initialState = {
  isLoaded: false,
  file: null,
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
      const { file, url } = action.payload;
      return {
        ...state,
        file,
        url
      }
    }
    default:
      return state;
  }
}

export default isImgLoaded
