const filters = (state = [], action ) => {
  switch (action.type) {
    case 'SET_INI_DATE':
      return {
        ...state,
        fechaInicio: action.fecha
      }
    case 'SET_FIN_DATE':
      return {
        ...state,
        fechaFinal: action.fecha
      }
  }
}