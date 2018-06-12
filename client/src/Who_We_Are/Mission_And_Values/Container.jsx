import React, { Component } from 'react';
import './MissionAndValues.css';
import MissionAndValuesContainer from './MissionAndValuesContainer';
import SubContainer from './SubContainer';

class Container extends Component {

    render(){
        return(
            <div id="container">
                <MissionAndValuesContainer />
                <SubContainer />
            </div>
        )
    }
}

export default Container;