import React from "react";
import DashElement from "./DashElement";


class DashBox extends React.Component {
  render() {
    let arrayOfDashElemnts = []
    if(this.props.DashElements){
      arrayOfDashElemnts = this.props.DashElements.map((element,index) => {
        return (
          <DashElement key={index} text = {element.text}  />
        );
      });
    }


    return (
      <div >
        <h4>
          <strong>{this.props.title}</strong>
        </h4>
        <p>
          {this.props.text}
        </p>
        <div>
          {arrayOfDashElemnts}
        </div>
      </div>
    );
  }
}

export default DashBox;
