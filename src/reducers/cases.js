const initialState = {
  cases: []
}

const cases = (state = initialState, action ) => {
  switch (action.type) {
    case 'SET_CASES':
      console.log("acccion ")
      console.log(action)
      return {
        ...state,
        cases: action.cases
      }
    default:
      return state
  }
}

export default cases;