import React from 'react'
import * as d3 from "d3";

class LineChart extends React.Component {

  constructor(props) {
    super(props)
    this.xScale
    this.yScale
  }

  calcScales() {
    this.xScale =
    d3.scaleTime()
      .domain(d3.extent(this.props.data, ({fecha}) => fecha))
      .rangeRound([0, this.props.width ])

    this.yScale =
    d3.scaleLinear()
      .domain(d3.extent(this.props.data, ({contexto}) => contexto))
      .rangeRound([this.props.height, 0])
  }


  drawAxis() {
    let axis = d3.axisLeft(this.yScale);
    return (
      <path
        stroke={this.props.stroke}
        fill="none"
        className="line"
        strokeWidth="1.5"
        d={axis()}
      />
    )
  }

  drawLine() {
    this.calcScales()

    let line = d3.line()
        .x((d) => this.xScale(d.fecha))
        .y((d) => this.yScale(d.contexto))

    return (
      <path
        stroke={this.props.stroke}
        fill="none"
        className="line"
        strokeWidth="1.5"
        d={line(this.props.data)}
      />
    );
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <svg
            className="line-container"
            width={this.props.width}
            height={this.props.height}
          > 
            {this.drawLine()}
          </svg> 
        </div>
      </div>
    )
  } 


}

export default LineChart;