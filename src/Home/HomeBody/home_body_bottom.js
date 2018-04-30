import React from "react";

class HomeBodyBottom extends React.Component {
  render() {
    return (
      <div className="cont-2">
        <div className="first-col">
          <div className="person-img" />
          <div className="name-title">Name</div>
          <div className="job">Job Title</div>
        </div>
        <div className="sec-col">
          <div className="sec-col-head">DIRECTOR'S SPEECH</div>
          <p className="p1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="p2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="white-button">MORE</button>
        </div>
      </div>
    );
  }
}

export default HomeBodyBottom;
