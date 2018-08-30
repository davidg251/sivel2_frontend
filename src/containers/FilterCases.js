import {connect} from 'react-redux'
import {setFechaInicio, setFechaFinal} from '../actions'
import Filters from '../components/Filters'

const mapStateToProps = state => ({
  fechaInicio : state.fechaInicio,
  fechaFinal : state.fechaFinal
})

const mapDispatchToProps = dispatch => ({
  setFechaInicio: (date) => dispatch(setFechaInicio, date),
  setFechaFinal: (date) => dispatch(setFechaFinal, date)
})


export default connect(mapStateToProps, mapDispatchToProps) (Filters)