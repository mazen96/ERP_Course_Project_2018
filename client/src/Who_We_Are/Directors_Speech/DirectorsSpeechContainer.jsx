import React, { Component } from 'react';
import './DirectorsSpeech.css';
import Info from './Info';
import PDF from './PDF';
import Date from './Date';
import Text from './Text';

class DirectorsSpeechContainer extends Component {

    render(){
        return(
            <div className="DirectorsSpeechContainer">
               <Info />
               <PDF />
               <Date />
               <Text />
            </div>
        )
    }
}

export default DirectorsSpeechContainer;