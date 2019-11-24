const initialState = {
  1: {name: 'filter1', value: 0, id: 1},
  2: {name: 'filter2', value: 0, id: 2},
  3: {name: 'filter3', value: 0, id: 3},
  4: {name: 'filter4', value: 0, id: 4},
  5: {name: 'filter5', value: 0, id: 5},
  6: {name: 'filter6', value: 0, id: 6},
  7: {name: 'filter7', value: 0, id: 7},
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
    const { filterName, filterValue, filterId } = action.payload;

    const key = Object.keys(state).find(id => id == filterId);

    return {
      ...state,
      [key]: {
        name: filterName,
        value: filterValue,
        id: filterId,
      }
    }
    default:
      return state;
  }
}

export default filtersReducer
