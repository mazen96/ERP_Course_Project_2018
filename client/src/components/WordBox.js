import React from "react";
import { Link } from 'react-router-dom'


class WordBox extends React.Component {
  render() {
    var href = '#';
    if (this.props.href) {
      href = this.props.href;
    }
    return (
      <div>
        <Link to={href}><h4><strong>{this.props.title}</strong></h4></Link>
        <div style={{ color: '#959595', textAlign: 'left', padding: 20 }} >
          {this.props.text.split('\n').map((line, i) => <div key={i}> {line}</div>)}
        </div>
      </div>
    );
  }
}

export default WordBox;
