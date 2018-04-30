import React from "react";
import './Landing-Page.css';

class BlockWithIcon extends React.Component {
  render() {
    return (
      <div>
        <div className="threeColumn">
          <img className="oneOverTwo" src={this.props.pic} alt="" />
          <h4 className="twoOverFour">
            <strong>{this.props.title}</strong>
          </h4>
        </div>
        <p>
          {this.props.text}
        </p>
        <h6
          style={{
            color: "#e6001f"
          }}
        >
          MORE
        </h6>
      </div>
    );
  }
}

export default BlockWithIcon;
