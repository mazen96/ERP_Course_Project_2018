import React from "react";
import HomeBodyUpper from "./home_body_upper";
import HomeBodyBottom from "./home_body_bottom";
import "./home-body.css"

class HomeBody extends React.Component {
  render() {
    return (
      <div>
        <HomeBodyUpper />
        <HomeBodyBottom />
      </div>
    );
  }
}

export default HomeBody;
