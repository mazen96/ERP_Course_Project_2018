import React, { Component } from 'react';
import './logos.css';
import logo from '../assets/Vector Smart Object copy.png';
import MinNavbar from './min-navbar/min-navbar'


class Logos extends Component {
    render() {
        return (
            <div className="Logos row justify-content-between">
                <div id="logo" className="col-md-2 img">
                    <img alt="logo" src={logo}/>
                </div>
                
                <MinNavbar />
            </div>
        );
    }
}

export default Logos;
