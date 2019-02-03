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
      isMounted: false,
      items:[],
     countries:[],
     width: 500,
     height: 300,
     selected: []
    

           
     
    }
    this.onResize = this.onResize.bind(this);
    this.addCountry = this.addCountry.bind(this);
    this.removeCountry = this.removeCountry.bind(this);
  }

  componentDidMount() {
      this.setState({ isMounted: true })
      const urlitems = "https://opendata.cbs.nl/ODataApi/odata/82616ENG/Countries"

      d3.json(urlitems)
      .then((res) => {
       
        this.setState({
         items: res.value
        })
        
        
      });

    let selection = { value: "T001047", label: "Total countries" };
    this.addCountry(selection);
    
    window.addEventListener('resize', this.onResize, false);
    this.onResize();


  }

  removeCountry(remove) {
      
      this.setState({
        countries: [...this.state.countries.filter((country) => country.labels.value !== remove.code)],
        selected: [...this.state.selected.filter( select => select !== remove.code  )]
        })
       
  }
  
 addCountry(selection) {
 let urladd = `https://opendata.cbs.nl/ODataApi/odata/82616ENG/TypedDataSet?$filter=Countries eq '${selection.value}' and Services eq 'T001039' and substringof('JJ',Periods)`
  
 d3.json(urladd)
      .then((res) => {
              
        this.setState({
          countries: [...this.state.countries, {data: res.value, labels: selection}],
          selected: [...this.state.selected, selection.value]
         
           })

      });

  }

  onResize(){
    let width = window.innerWidth;
    if (width > 700) {
      width = 700;
    } else if (width < 300) {
      width = 300;
    }
    this.setState({width: width,
    height: width * 0.6});
    
  }
  
  componentWillUnmount() {
    this.state.isMounted = false
  }

  render() {
    
    return (
      <div className="App">
        <DropDown items={this.state.items} selected={this.state.selected} add={this.addCountry} />
        <Charts countries={this.state.countries} remove={this.removeCountry} labels={this.state.labels} width={this.state.width} height={this.state.height} />
       
      </div>
    );
  }
}

export default App;
