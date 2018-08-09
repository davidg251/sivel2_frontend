import Api from '../api/index'

export const setCases = cases => ({
    type: 'SET_CASES',
    cases: cases
})

export const initializeCases = () => dispatch =>{
    Api.doGet('cases.json')
      .then( response => {
        console.log(response.data)
        dispatch( setCases(response.data))
      })
}