import React , { Component } from 'react';
import './accaountabilityStyle.css';
import Crop from './images/Crop.jpg'
import Dash from './images/dash.png'






class accaountabilityBox3 extends Component{

    constructor(props){
        super(props);
        this.state={
            title:"Excellence in Service",
            body:`The challenge represented by the fight against terrorism, considered to be a real strategic threat, leads the
            DGSE to
            constantly adapt its capabilities to keep up with the ever-changing diversity of terrorist operating methods,
            the extension
            of Jihad networks, a complex and evolving phenomenon and the extent and multiplication of terrorist actions.
            
            The challenge represented by the fight against terrorism, considered to be a real strategic threat, leads
            the DGSE to
            constantly adapt its capabilities to keep up with the ever-changing diversity of terrorist operating methods,
            the extension
            of Jihad networks, a complex and evolving phenomenon and the extent and multiplication of terrorist actions.
            
            
            `
        }
    }
    render(){

        return(
            <div className="box3" data-component="box3">
            <h1 className="headerBox3">
                <strong>{this.state.title}</strong>
                <br/>
            </h1>
            <img src={Dash} className="dashBox3"/>
            <p className="subBox3">
                {this.state.body}
            </p>

        </div>
        )

    }


}

export default accaountabilityBox3;