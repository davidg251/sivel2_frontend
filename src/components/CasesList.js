import React from "react";
import Instance from './Instance'
import { connect } from "react-redux";
import { initializeCases } from "../actions";
import Filters from './Filters' 

const mapStateToProps = state => ({
  ...state.cases
})

class CasesList extends React.Component {

  componentDidMount() {
    this.props.dispatch( initializeCases() );
  }

  render() {
    return (
      <div>
        <Filters/>
         {this.props.cases.map( (instance, index) =>
          <Instance
          key={index}
            {...instance}
         />)}
      </div>
    )
  }

}

export default connect(mapStateToProps)(CasesList);
