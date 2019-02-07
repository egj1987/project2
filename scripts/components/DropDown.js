import React, { Component } from 'react'
import Select from 'react-select'

class DropDown extends Component {
render() {
    
    const options = this.props.items.filter(d => !this.props.selected.includes(d.Key))
        .map(d => ({
        value: d.Key,
        label: d.Title
        }))

   
    return (
        <React.Fragment>
            <h3>Add country or region: </h3>
            <Select className="dropdown"
                onChange={this.props.add}
                options={options}
            />
        </React.Fragment>
            

      
       
    );
}
}


export default DropDown