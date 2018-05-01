import React, { Component } from 'react';
import './input.css';

class Input extends Component {
    render() {
        return (
            <div className="Input row justify-content-between main">
                <input className="col-6" type="text" placeholder="SEARCH"/>
                    <i className=" col-2 fas fa-search"></i>
            </div>
                );
}

} 
                
export default Input;