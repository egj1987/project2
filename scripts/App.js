import React, { Component } from 'react';
import Downshift from 'downshift';
import './App.css';
import Charts from './components/Charts'; 


import { json } from "d3-fetch";


const d3 = {
  json,
};


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initial: {
        countryCode: "720",
        countryName: "China",
        countryInitials: "CN",
      },
      data: [{countryCode: "720",
        countryName: "China",
        countryInitials: "CN",
      countryData:[]}]
      
     
    }
    
    
  }

  componentDidMount() {
    
    const url = `https://opendata.cbs.nl/ODataApi/odata/81271ned/TypedDataSet?$filter=Landen eq '${this.state.initial.countryCode}'`
   
    d3.json(url)
      .then((res) => {
      console.log(res)
      this.setState({ data: [{
        countryCode: this.state.initial.countryCode,
        countryName: this.state.initial.countryName,
        countryInitial: this.state.initial.countryInitials,
        countryData: res.value}]})
      
      });
        
      //   data: this.state.data.push({
      //   countryCode: "720",
      //   countryName: "China",
      //   countryInitials: "CN",
      //   countryData: res.value
      // }
      // }) })
      console.log(this.state)
    // })
   
    
  }

  addCountry = () => {
    let url = `https://opendata.cbs.nl/ODataApi/odata/82616ENG/TypedDataSet?$filter=Countries eq '${}L008575' and Services eq 'T001039' and substringof('KW',Periods)` 
    d3.json()
  }

  

  render() {
    const countries = [
      {value: 'China' },
      {value: 'UK'},
      {value: 'Belarus'},
    ]
    console.log(this.state)
    return (
      <div className="App">
        <Charts data={this.state.data} />
       
      </div>
    );
  }
}

export default App;
