import {connect} from 'react-redux'
import {initializeGeoCases} from '../actions'
import CasesList from '../components/CasesList'


const mapStateToProps = (state) => {
  return {
    cases: state.geocases
  }
}

const mapDispatchToProps = dispatch => ({
  initializeGeoCases: geocases => dispatch(initializeGeoCases(geocases))
})

const Cases = connect(
  mapStateToProps,
  mapDispatchToProps
)(CasesList)

export default Cases