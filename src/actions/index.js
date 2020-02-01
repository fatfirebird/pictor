export const signin = () => {
  return {
    type: 'LOG_IN'
  }
}

export const reg = () => {
  return {
    type: 'REGISTARTION'
  }
}

export const closeAuth = () => {
  return {
    type: 'CLOSE'
  }
}

export const showModal = modal => {
  return {
    type: 'SHOW_MODAL',
    payload: { modal }
  }
}

export const hideModal = modal => {
  return {
    type: 'HIDE_MODAL',
    payload: { modal }
  }
}

export const exit = () => {
  return {
    type: 'EXIT'
  }
}

export const auth = () => {
  return {
    type: 'AUTH',
  }
}

export const loadImg = () => {
  return {
    type: 'LOADED'
  }
}

export const imgData = (url, fileName) => {
  return {
    type: 'IMG_DATA',
    payload: {
      url,
      fileName
    }
  }
}

export const imgUnload = () => {
  return {
    type: 'UNLOAD'
  }
}

export const openMenu = menuName => {
  return {
    type: 'OPEN_MENU',
    payload: { menuName }
  }
}

export const changeFilterValue = (filterValue, filterId) => {
  return {
    type: 'CHANGE_VALUE',
    payload: {
      filterValue,
      filterId,
    }
  }
}

export const resetFilters = () => {
  return {
    type: 'RESET',
  }
}

export const fetchFilters = filters => {
  return {
    type: 'FETCH_FILTERS',
    payload: filters
  }
}

export const setImgLoading = () => {
  return {
    type: 'LOADING'
  }
}
