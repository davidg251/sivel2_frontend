const geocases = (state = [], action ) => {
  switch (action.type) {
    case 'INIT_GEO_CASES':
    console.log(action.geocases)
      return [
        ...state,
        action.geocases
      ]
    default:
      return state
  }
}

export default geocases;