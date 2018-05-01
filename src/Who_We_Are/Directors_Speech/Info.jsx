import React, { Component } from 'react';
import './DirectorsSpeech.css';

class Info extends Component {

    render() {
        return (
            <div className="sub-container">
                <div>
                    <div>
                        <p className="head-font">DIRECTORS SPEECH</p>
                    </div>
                    <div>
                        <p className="sub-head-font1">60 ASIS AT</p>
                    </div>
                    <p className="sub-sub-head-font">Director-General Nick Warner gave the first ever public speech about ASIS on 19 July 2012 as part
                            of the Lowy Institute’s Distinguished Speakers series.</p>
                </div>

                <div className="profile">
                    <div className="ellipse"></div>
                    <p>
                        Name Name
                        <br></br>
                        title title title    
                    </p>     
                </div>
            </div>
        )
    }
}

export default Info;