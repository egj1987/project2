import React, { Component } from 'react'
import Downshift from 'downshift';


        

    




class DropDown extends Component {
render() {
    console.log(["props inside dropdown",this.props])
    const items = this.props.items.map( d => ( {value:d.Key} )); 
    console.log(["inside dropdown",items])
    return (<Downshift
        onChange={this.props.add}
        itemToString={item => (item ? item.value : '')}
    >
        {({
            getInputProps,
            getItemProps,
            getLabelProps,
            getMenuProps,
            isOpen,
            inputValue,
            highlightedIndex,
            selectedItem,
        }) => (
                <div>
                    <label {...getLabelProps()}>Enter a country</label>
                    <input {...getInputProps()} />
                    <ul {...getMenuProps()}>
                        {isOpen
                            ? items
                                .filter(item => !inputValue || item.value.includes(inputValue))
                                .map((item, index) => (
                                    <li
                                        {...getItemProps({
                                            key: item.value,
                                            index,
                                            item,
                                            style: {
                                                backgroundColor:
                                                    highlightedIndex === index ? 'lightgray' : 'white',
                                                fontWeight: selectedItem === item ? 'bold' : 'normal',
                                            },
                                        })}
                                    >
                                        {item.value}
                                    </li>
                                ))
                            : null}
                    </ul>
                </div>
            )}
    </Downshift>
    )
}
}


export default DropDown