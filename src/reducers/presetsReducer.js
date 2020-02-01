const initialState = {
  '1': { id: 1, name: 'negative', desc: 'Негатив', value: false },
  '2': { id: 2, name: 'monochrome', desc: 'Монохром', value: false },
  '3': { id: 3, name: 'noise', desc: 'Негатив', value: false },
  '4': { id: 4, name: 'negative', desc: 'Негатив', value: false },
  '5': { id: 5, name: 'negative', desc: 'Негатив', value: false },
  '6': { id: 6, name: 'negative', desc: 'Негатив', value: false },

}


const presetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NOISE':
      return {
        noise: action.payload
      }

    case 'MONOCHROME': {
      return {
        monochrome: true
      }
    }

    case 'NEGATIVE': {
      return {
        negative: true
      }
    }

    default:
      return state
  }
}

export default presetsReducer
