import React, { Component } from 'react'
import Select from 'react-select'

class DropDown extends Component {
render() {
    const options = this.props.items.map(d => ({
        value: d.Key,
        label: d.Title
    }))
    console.log(['Options',options]);
    //onChange = { this.props.add }
   
    return (
        <Select value="T001047"
        onChange={ this.props.add }
        options={ options }
        />
    );
}
}


export default DropDown