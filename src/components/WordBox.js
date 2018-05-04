import React from "react";


class WordBox extends React.Component {
  render() {
    return (
      <div>
        <h4>
          <strong>{this.props.title}</strong>
        </h4>
        <div style={{ textAlign: 'left' }} >
          {this.props.text.split('\n').map(line => <p>{line}</p>)}
        </div>
      </div>
    );
  }
}

export default WordBox;
