import React from "react";
import './Challenges.css';
import Dash from './images/dash.png'
import Crop from './images/Crop.jpg'


class Box2 extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      title1: "Excellence in Service",
      body1: `The challenge represented by the fight against terrorism,
      considered to be a real strategic threat, leads the DGSE to
      constantly adapt its capabilities to keep up with the ever-changing
      diversity of terrorist operating methods, the extension of Jihad
      networks, a complex and evolving phenomenon and the extent
      and multiplication of terrorist actions.`
    }
  }


  render() {
    return (
      <div className="box2">
        <h1 className="headerBox2">
          <strong>{this.state.title1}</strong>
        </h1>
        <img src={Dash} className="dashBox2" />
        <p className="subBox2">
          {this.state.body1}
        </p>
        <img src={Crop} className="imageBox2" />
      </div>
    );
  }
}

export default Box2;
