import React, { Component } from 'react';
import './DirectorsSpeech.css';
import DirectorsSpeechContainer from './DirectorsSpeechContainer';

class Container extends Component {

    render(){
        return(
            <div id="container">
                <DirectorsSpeechContainer>
                </DirectorsSpeechContainer>  
            </div>
        )
    }
}

export default Container;