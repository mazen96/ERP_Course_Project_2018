import React from "react";
import './Challenges.css';

class Box1 extends React.Component {




  constructor(props) {
    super(props);
    this.state={
      title:"Challenges",
      body:`Following reforms in recent years, the accountability framework for
      most intelligence agencies in Australia has been provided by
      legislation.`
    }
  }

  render() {
    return (
      <div className="box1">
        <h1>
         <b/> <strong>{this.state.title}</strong>
        </h1>
        <p>
          {this.state.body}
        </p>
      </div>
    );
  }
}

export default Box1;
