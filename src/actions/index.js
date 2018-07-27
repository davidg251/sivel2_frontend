import cases from '../api/cases'

export const setCases = cases => ({
    type: 'SET_CASES',
    cases
})

export const initializeCases = () => dispatch =>{
    cases.getCases(cases => {
      dispatch(setCases(cases))
    })
}