import React from 'react'
import * as d3 from "d3";

class PieChart extends React.Component {

  drawPie() {

    console.log(this.props.data)

    let pie = d3.pie()
    .sort(null)
    .value((d)=> d )

    return (
      <path
        d={pie(this.props.data)}
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
        {this.drawPie(this.props.data)}
      </svg>
    )
  } 

}

export default PieChart;