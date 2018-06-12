import React from "react";

class HomeBodyUpperRow1 extends React.Component {
  render() {
    return (
      <div className="first-row">
        <div className="card-1">
          <div className="big-title">OVERVIEW</div>
          <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="red-button">MORE</button>
        </div>
        <div className="card-2">
          <div className="big-title">MISSION VALUE & ETHICS</div>
          <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="red-button">MORE</button>
        </div>
      </div>
    );
  }
}

export default HomeBodyUpperRow1;
