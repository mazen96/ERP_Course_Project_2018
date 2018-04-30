import React from "react";
import './Landing-Page.css';

class DashElement extends React.Component {
  render() {
    return (
      <div className="fourColumn">
        <img src="./img/dash.png" alt="" />
        <p className="twoOverFour">
          {this.props.text}
        </p>
      </div>
    );
  }
}

export default DashElement;
