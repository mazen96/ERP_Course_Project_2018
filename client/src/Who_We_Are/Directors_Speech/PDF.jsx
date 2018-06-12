import React, { Component } from 'react';
import './DirectorsSpeech.css';
import pdfLogo from './pdf.png';

class PDF extends Component {

    render(){
        return(
            <div>
                <div>
                    <p className="sub-sub-head-font">
                        <img className="pdf-image" src={pdfLogo} alt="not found"/>
                        Download PDF
                    </p>
                </div>

            </div>
        )
    }
}
export default PDF;

