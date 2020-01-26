const initialState = {
  fileName: null,
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
      const { url, fileName } = action.payload;
      return {
        ...state,
        fileName,
        url
      }
    }
    case 'UNLOAD': {
      return initialState;
    }
    default:
      return state;
  }
}

export default isImgLoaded
