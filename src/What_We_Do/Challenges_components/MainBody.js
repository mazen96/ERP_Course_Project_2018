import React from "react";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box2Reversed from "./Box2Reversed";
import Box3 from "./Box3";
import Box4 from "./Box4";
import './Challenges.css';


class MainBody extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainBody">
        <Box1 />
        <Box2 />
        <Box2Reversed />
        <Box2 />
        <Box3 />
        <Box4 />
      </div>
    );
  }


}

export default MainBody;
