import React, { Component } from 'react';
import './DirectorsSpeech.css';

class Date extends Component {

    render(){
        return(
            <div>
                <div style={{paddingTop: 20}}>
                    <div style={{float:'left'}}>
                        <p className="date-font">19 July 2012</p>
                    </div>
                    <div style={{float:'right',width:'85%'}}>
                        <hr/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Date;

