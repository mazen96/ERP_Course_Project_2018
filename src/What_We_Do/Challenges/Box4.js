import React from "react";
import './Challenges.css';
import Dash from './images/dash.png'

class Box4 extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      title1: "Excellence in Service",
      title2: "Excellence in Service",
      body1: `The challenge represented by the fight
        against terrorism, considered to be a real strategic threat,`,
      body2: `The challenge represented by the fight
      against terrorism, considered to be a real strategic threat,`
    }
  }


  render() {
    return (
      <div className="box4">
        <div className="leftBox4">
          <h1 className="headerBox4">
            <strong>{this.state.title1}</strong>
          </h1>
          <br />
          <img src={Dash} className="dashBox4" alt="" />
          <p className="subBox4">
            {this.state.body1}
          </p>
        </div>
        <div className="inBox4">
          <p>
            non
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>
        <div className="rightBox4">
          <h1 className="headerBox4">
            <strong>{this.state.title2}</strong>
          </h1>
          <br />
          <img src={Dash} className="dashBox4" alt =""/>
          <p className="subBox4">
            {this.state.body2}
          </p>
        </div>
      </div>
    );
  }
}

export default Box4;
