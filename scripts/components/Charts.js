import React, { Component } from 'react'
import DrawChart from './DrawChart.js'
class Charts extends Component {
  render() {
    return ( this.props.data.map( (chart,id) => (
        <div>
          {(id === 0) ? "" : (<hr />)}
          <DrawChart data={chart.countryData} country={chart.countryInitials} title={chart.countryName} /> 
        
        </div>
  )
  )


    )
     
  }
}

export default Charts
