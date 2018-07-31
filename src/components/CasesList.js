import React from "react";
import Instance from './Instance'
import { connect } from "react-redux";
import { initializeCases } from "../actions";
import Filters from './Filters' 

const mapStateToProps = state => ({
  cases: state.cases
})
/*
const mapDispatchToProps = dispatch => ({
  initializeCases: () => dispatch({type:'SET_CASES'})
})*/

class CasesList extends React.Component {

  componentDidMount() {
    this.props.dispatch(initializeCases());
  }

  render() {
    return (
      <div>
        <Filters/>
        {/*{this.props.cases.cases.toString()}*/}
         {this.props.cases.cases.map( (instance, i) =>
          <Instance
            key={i}
            {...instance}
        />)}
      </div>
    )
  }

}

export default connect(mapStateToProps/*, mapDispatchToProps*/)(CasesList);
