import React, { Component } from 'react';

import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="row justify-content-around navbar Navbar">
            <div className="col-md-3 links" links="#">WHO WE ARE</div>
            <div className="col-md-3 links" links="#">WHAT WE Do</div>
            <div className="col-md-3 links" links="#">NEWS</div>
        </div>
    );
  }
}

export default Navbar;
