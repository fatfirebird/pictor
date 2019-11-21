export const login = () => {
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

export const loadImg = () => {
  return {
    type: 'LOADED'
  }
}

export const openMenu = menu => {
  return {
    type: 'OPEN_MENU',
    payload: {
      menu
    }
  }
}

export const closeMenu = menu => {
  return {
    type: 'CLOSE_MENU',
    payload: {
      menu
    }
  }
}
