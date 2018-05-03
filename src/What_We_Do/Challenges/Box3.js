import React from "react";
import './Challenges.css';
import Dash from './images/dash.png'
import Crop from './images/Crop.jpg'

class Box3 extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      title1: "Excellence in Service",
      body1: `The challenge represented by the fight against terrorism, considered to be a real strategic threat, leads the DGSE to
      constantly adapt its capabilities to keep up with the ever-changing diversity of terrorist operating methods, the extension
      of Jihad networks, a complex and evolving phenomenon and the extent and multiplication of terrorist actions.\n
      The challenge represented by the fight against terrorism, considered to be a real strategic threat, leads the DGSE to
      constantly adapt its capabilities to keep up with the ever-changing diversity of terrorist operating methods, the extension
      of Jihad networks, a complex and evolving phenomenon and the extent and multiplication of terrorist actions.
      `
    }
  }


  render() {
    return (
      <div className="box3">
        <h1 className="headerBox3">
          <strong>{this.state.title1}</strong>
        </h1>
        <img src={Dash} className="dashBox3" />
        <p className="subBox3">
          {this.state.body1}
        </p>
      </div>
    );
  }
}

export default Box3;
