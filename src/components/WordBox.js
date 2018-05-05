import React from "react";


class WordBox extends React.Component {
  render() {
    return (
      <div>
        <h4>
          <strong>{this.props.title}</strong>
        </h4>
        <div style={{ textAlign: 'left' , padding : 20 }} >
          {this.props.text.split('\n').map((line,i) =><div key={i}> {line}</div> )}
        </div>
      </div>
    );
  }
}

export default WordBox;
