import React, { Component } from 'react';
import './org.css'

class ChartBox extends Component {


    render() {

        return (
            <div class="orgChart">
                <h1><b>{this.props.title}</b></h1>
                <img src={this.props.img} width="950px" height="550px" />
                <div class="secondParagraph" style={{textAlign : 'left'}}>
                    {this.props.text}
                </div>
            </div>
        )

    }


}

export default ChartBox;