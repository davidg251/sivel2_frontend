import React from 'react'
import * as d3 from "d3";

class PieChart extends React.Component {

  drawLine() {
    let xScale =
      d3.scaleTime()
        .domain(d3.extent(this.props.data, ({fecha}) => fecha))
        .rangeRound([0, this.props.width ])

    let yScale =
      d3.scaleLinear()
        .domain(d3.extent(this.props.data, ({contexto}) => contexto))
        .rangeRound([this.props.height, 0])

    let line = d3.line()
        .x((d) => xScale(d.fecha))
        .y((d) => yScale(d.contexto))

    return (
      <path
        stroke="black"
        fill="none"
        className="line"
        strokeWidth="3.5"
        d={line(this.props.data)}
      />
    );
  }

  render() {
    return (
      <svg
        className="line-container"
        width={this.props.width}
        height={this.props.height}
      > 
        {this.drawLine()}
      </svg>
    )
  } 

}

export default PieChart;