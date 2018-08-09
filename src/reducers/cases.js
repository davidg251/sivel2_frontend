const initialState = {
  cases: []
}

const cases = (state = initialState, action ) => {
  switch (action.type) {
    case 'SET_CASES':
      return {
        ...state,
        cases: action.cases
      }
    default:
      return state
  }
}

export default cases;