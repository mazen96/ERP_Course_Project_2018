import React from "react";
import { Link } from 'react-router-dom'
import './Landing-Page.css';


class FAQ extends React.Component {
  render() {
    return (
      <div className="threeColumn ">
        <div className="allCentre">
          <Link to={this.props.href}>
            <h2>
              <strong>FAQ</strong>
            </h2>
          </Link>
        </div>
        <img className="threeOverFour allCentre" src={"./img/arrow.png"} alt="" />
      </div>
    );
  }
}

export default FAQ;
