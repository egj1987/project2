import React, { Component } from 'react'
import DrawChart from './DrawChart.js'
class Charts extends Component {
  
  render() {
   
    return (this.props.countries.map( (country,id) => (
        <div key={id}>
          {(id === 0) ? "" : (<hr />)}
       
        <DrawChart key={id} code={country.labels.value} data={country.data} country={country.labels.label} title={country.labels.label} remove={this.props.remove} width={this.props.width} height={this.props.height} /> 
        
        </div>
  )
  )


    )
     
  }
}

export default Charts
