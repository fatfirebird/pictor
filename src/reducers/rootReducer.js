import { test } from '../actions/test.js'

export const rootReducer = (state = test, action) => {
  switch (action.type) {
    case 'TEST':
      return [
        ...state,
        {
          id: action.type,
        }
      ]
    default:
      return state;
  }
}
