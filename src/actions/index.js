import Api from '../api/index'

export const setCases = cases => ({
    type: 'SET_CASES',
    cases: cases
})

export const setFechaInicio = fecha => ({
  type: 'SET_INI_DATE',
  fecha: fecha
})

export const setFechaFinal = fecha => ({
  type: 'SET_FIN_DATE',
  fecha: fecha
})

export const initializeCases = () => dispatch =>{
    Api.doGet('cases.json')
      .then( response => {
        dispatch( setCases(response.data))
      })
}