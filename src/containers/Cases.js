import {connect} from 'react-redux'
import {initializeCases} from '../actions'
import CasesList from '../components/CasesList'
import {getVisibleCases} from '../selectors'

const mapStateToProps = state => ({
  filteredCases: getVisibleCases(state)
})

const mapDispatchToProps = dispatch => ({
  initializeCases: () => dispatch( initializeCases() )
})


const Cases = connect(
  mapStateToProps,
  mapDispatchToProps
)(CasesList)

export default Cases