import React from 'react'
import * as d3 from "d3";

class LineChart extends React.Component {

  drawLine() {

    let xScale =
      d3.scaleBand()
        .rangeRound([0, this.props.width ])

    let yScale =
      d3.scaleLinear()
        .rangeRound([this.props.height, 0])

    let line = d3.line()
        .x((d) => xScale(d.fecha))
        .y((d) => yScale(d.contexto))

    return (
      <path
        stroke="#0c0c0c"
        fill="none"
        className="line"
        strokeWidth="1.5"
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

export default LineChart;