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
    
    this.addCountry = this.addCountry.bind(this);
  }

  componentDidMount() {
    
    const url = `https://opendata.cbs.nl/ODataApi/odata/81271ned/TypedDataSet?$filter=Landen eq '${this.state.initial.countryCode}'`
   
    d3.json(url)
      .then((res) => {
     
      this.setState({ data: [{
        countryCode: this.state.initial.countryCode,
        countryName: this.state.initial.countryName,
        countryInitial: this.state.initial.countryInitials,
        countryData: res.value}]})
      
      });
    
      const urlitems = "https://opendata.cbs.nl/ODataApi/odata/82616ENG/Countries"

    d3.json(urlitems)
      .then((res) => {
        console.log(["items", res]);
        this.setState({
         items: res.value
        })
        console.log(this.state);
        
      });

    
  }

  
 addCountry(selection) {
 let urladd = `https://opendata.cbs.nl/ODataApi/odata/82616ENG/TypedDataSet?$filter=Countries eq '${selection.value}' and Services eq 'T001039' and substringof('KW',Periods)`
    d3.json(urladd)
      .then((res) => {
        console.log(["items", res]);
        this.setState({
          data: [...this.state.data, res.value]
           })
        console.log(this.state);

      });

  }
  
  //= (selection) => {
  //   let urladd = `https://opendata.cbs.nl/ODataApi/odata/82616ENG/TypedDataSet?$filter=Countries eq '${selection.value}' and Services eq 'T001039' and substringof('KW',Periods)` 
  //   d3.json(urladd)
  //     .then((res) => {
  //       console.log(["items", res]);
  //       this.setState({
  //         data: [...this.state.data, res.value]
  //          })
  //       console.log(this.state);

  //     });
  // }

  // Add Todo
 
  

  render() {
    
    console.log(this.state)
    return (
      <div className="App">
        <DropDown items={this.state.items} add={this.addCountry}/>
        {/* <Charts data={this.state.data} /> */}
       
      </div>
    );
  }
}

export default App;
