import React, { Component } from 'react';
import './org.css'

class ChartBox extends Component {


    render() {

        return (
            <div className="orgChart">
                <h1><b>{this.props.title}</b></h1>
                <img src={this.props.img} width="950px" height="550px" />
                <div className="secondParagraph" style={{textAlign : 'left'}}>
                    {this.props.text}
                </div>
            </div>
        )

    }


}

export default ChartBox;