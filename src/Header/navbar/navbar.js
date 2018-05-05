import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="row justify-content-around navbar Navbar">
        <Link to='/WhoWeAre'>Who we are</Link>
        <Link to='/WhatWeDo'>What we do</Link>
        <Link to='/NewsFade'>News</Link><br />
      </div>
    );
  }
}

export default Navbar;
