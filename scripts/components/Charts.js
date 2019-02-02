import React, { Component } from 'react'
import DrawChart from './DrawChart.js'
class Charts extends Component {
  
  render() {
   
    return (this.props.countries.map( (country,id) => (
        <div>
          {(id === 0) ? "" : (<hr />)}
        {console.log(['hallo', country])}
        <DrawChart key={country.labels.value} data={country.data} country={country.labels.label} title={country.labels.label} /> 
        
        </div>
  )
  )


    )
     
  }
}

export default Charts
