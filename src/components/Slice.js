import React from "react";
import * as d3 from "d3";

class Slice extends React.Component {
  render() {
    let arc = d3
      .arc()
      .outerRadius(this.props.outerRadius)
      .innerRadius(this.props.innerRadius);
    return (
      <path 
        fill={this.props.fill} 
        d={arc(this.props.value)} 
        stroke="#002766"
      />)
  }
}

export default Slice;
