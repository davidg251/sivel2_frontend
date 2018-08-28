import React from "react";
import * as d3 from "d3";
import Slice from "./Slice";

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.renderSlice = this.renderSlice.bind(this)
    this.pickColor = this.pickColor.bind(this)
    this.translate = this.translate.bind(this)
    this.colors = d3.scaleOrdinal(d3.schemeBlues[9]);
  }

  translate() {
    return `translate (${this.props.width/2} , ${this.props.height/2})`
  }

  pickColor(i) {
    return this.colors(i);
  }

  renderSlice(value, i) {
    return (
      <Slice 
        key={i} 
        outerRadius={100}
        innerRadius={60}
        value={value}
        fill={this.pickColor(i)} 
      />
    );
  }

  render() {
    let pie = d3.pie();
    return (
      <div className="card">
        <div className="card-body">
          <svg width={this.props.width} height={this.props.height}>
            <g transform={this.translate()}>
              {pie(this.props.data).map(this.renderSlice)}
            </g>
          </svg>
        </div>
      </div>
    )
  }
}

export default PieChart;
