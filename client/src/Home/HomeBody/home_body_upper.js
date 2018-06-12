import React from "react";
import HomeBodyUpperRow1 from "./home_body_upper_row1";
import HomeBodyUpperRow2 from "./home_body_upper_row2";
import HomeBodyUpperRow3 from "./home_body_upper_row3";

class HomeBodyUpper extends React.Component {
  render() {
    return (
      <div className="cont-1">
        <HomeBodyUpperRow1 />
        <HomeBodyUpperRow2 />
        <HomeBodyUpperRow3 />
      </div>
    );
  }
}

export default HomeBodyUpper;
