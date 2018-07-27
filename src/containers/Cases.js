import {connect} from 'react-redux'
import {initializeCases} from '../actions'
import CasesList from '../components/CasesList'


const mapStateToProps = state => {
  return {
    cases: state.cases
  }
}

const mapDispatchToProps = dispatch => ({
  initializeCases: () => dispatch(initializeCases())
})

const Cases = connect(
  mapStateToProps,
  mapDispatchToProps
)(CasesList)

export default Cases