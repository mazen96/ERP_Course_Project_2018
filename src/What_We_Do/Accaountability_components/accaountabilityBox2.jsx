import React , { Component } from 'react';
import './accaountabilityStyle.css';
import Crop from './images/Crop.jpg'
import Dash from './images/dash.png'







class accaountabilityBox2 extends Component{

    constructor(props){
        super(props);
    }
    render(){

        return(
            <div className="box2">
            <h1 className="headerBox2">
                <strong>Excellence in Service</strong>
            </h1>
            <img src={Dash} className="dashBox2" />
            <p className="subBox2">The challenge represented by the fight against terrorism,
                <br/>considered to be a real strategic threat, leads the DGSE to
                <br/>constantly adapt its capabilities to keep up with the ever-changing
                <br/>diversity of terrorist operating methods, the extension of Jihad
                <br/>networks, a complex and evolving phenomenon and the extent
                <br/>and multiplication of terrorist actions.
            </p>
            <img src={Crop} className="imageBox2" />
        </div>
        )

    }


}

export default accaountabilityBox2;