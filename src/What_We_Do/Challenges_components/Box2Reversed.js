import React from "react";
import './Challenges.css';
import Dash from './images/dash.png'
import Crop from './images/Crop1.jpg'

class Box2Reversed extends React.Component {

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
      <div className="box2Reversed">
        <img src={Crop} className="imageBox2Reversed" />
        <h1 className="headerBox2Reversed">
          <strong>{this.state.title1}</strong>
        </h1>
        <img src={Dash} className="dashBox2Reversed" />
        <p className="subBox2Reversed">
          {this.state.body1}
        </p>
      </div>
    );
  }
}

export default Box2Reversed;
