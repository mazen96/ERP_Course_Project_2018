import React from "react";


class WordBox extends React.Component {
  render() {
    return (
      <div>
        <h4>
          <strong>{this.props.title}</strong>
        </h4>
        <p>
          {this.props.text}
        </p>
      </div>
    );
  }
}

export default WordBox;
