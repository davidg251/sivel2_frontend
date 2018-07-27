import React from "react";
import Instance from './Instance'
import { connect } from "react-redux";
//import { initializeCases } from "../actions";

const mapStateToProps = state => ({
  cases: state.cases
})

const mapDispatchToProps = dispatch => ({
  initializeCases: () => dispatch({type:'SET_CASES'})
})

class CasesList extends React.Component {

  /*componentWillMount() {
    this.props.initializeCases()
    console.log(this.props.cases)
  }*/

  render() {
    return (
      <div>
        {this.props.cases.toString()}
        {/* {this.props.cases.map(instance =>
          <Instance
            key={instance.id}
            {...instance}
        />)} */}
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(CasesList);
