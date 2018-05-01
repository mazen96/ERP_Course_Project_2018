import React, { Component } from 'react';
import Logos from './logos/logos'
import Slider from './slider/slider'
import './header.css';
import Navbar from './navbar/navbar';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="wrapper">
            <Logos />
            <Slider />
        </div>
        <Navbar/>
      </div>
    );
  }
}

export default Header;
