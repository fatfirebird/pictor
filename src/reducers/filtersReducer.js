const initialState = {
   1: {name: 'filter1', value: 0, id: 1},
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_VALUE': {

      const { filterValue, filterId } = action.payload;
      console.log(action.payload);
      const key = Object.keys(state).find(id => {
        return +id === filterId
      });
      
      return {
        ...state,
        [key]: {
          ...state[key],
          value: filterValue,
        }
      }
    }
    case 'RESET' : {
       return initialState

    }
//


    case 'FETCH_FILTERS': {
      const filter  = action.payload;
      const filterId = filter._id;
      const { min, max, step } = filter.values;
      const { filter_name, description } = filter.name;

      return {
          ...state,
          [filterId]: {
            id: filterId,
            name: filter_name,
            desc: description,
            step,
            min,
            max,
            value: filter.values.default,
          }
        }
    }

    default:
      return state;
  }
}

export default filtersReducer
