import React from "react";
import { Link } from 'react-router-dom'
import './Landing-Page.css';

class BlockWithIcon extends React.Component {
  render() {
    var href = '#';
    if (this.props.href) {
      href = this.props.href;
    }
    return (
      <div>
        <div className="threeColumn" >
          <img className="oneOverTwo" src={this.props.pic} alt="" />
          <h4 className="twoOverFour">
            <Link to={href}><strong>{this.props.title}</strong></Link>
          </h4>
        </div>
        <p style={{ color: '#959595', textAlign: 'left' }}>
          {this.props.text}
        </p>
        <Link to={href}><h6
          style={{
            color: "#e6001f"
          }}
        >
          MORE

        </h6></Link>

      </div>
    );
  }
}

export default BlockWithIcon;
