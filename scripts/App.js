import React, { Component } from 'react';
import DropDown from './components/DropDown';
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
      items:[],
     countries:[],
           
     
    }
    
    this.addCountry = this.addCountry.bind(this);
    this.removeCountry = this.removeCountry.bind(this);
  }

  componentDidMount() {
   
      const urlitems = "https://opendata.cbs.nl/ODataApi/odata/82616ENG/Countries"

    d3.json(urlitems)
      .then((res) => {
       
        this.setState({
         items: res.value
        })
        
        
      });

    let selection = { value: "T001047", label: "Total countries" };
    this.addCountry(selection);
    
    


  }

  removeCountry(remove) {
      
      this.setState({
        countries: [...this.state.countries.filter((country) => country.labels.value != remove.code)]

      })

  }
  
 addCountry(selection) {
 let urladd = `https://opendata.cbs.nl/ODataApi/odata/82616ENG/TypedDataSet?$filter=Countries eq '${selection.value}' and Services eq 'T001039' and substringof('JJ',Periods)`
  
 d3.json(urladd)
      .then((res) => {
        console.log(selection);       
        this.setState({
          countries: [...this.state.countries, {data: res.value, labels: selection}]
         
           })
        

      });

  }
  
  

  render() {
    
    
    return (
      <div className="App">
        <DropDown items={this.state.items} add={this.addCountry} />
        <Charts countries={this.state.countries} remove={this.removeCountry} labels={this.state.labels} />
       
      </div>
    );
  }
}

export default App;
