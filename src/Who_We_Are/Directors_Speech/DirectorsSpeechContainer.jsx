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
               <Info></Info>
               <PDF></PDF>
               <Date></Date>
               <Text></Text>
            </div>
        )
    }
}

export default DirectorsSpeechContainer;