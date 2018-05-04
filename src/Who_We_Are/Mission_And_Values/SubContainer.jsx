import React, { Component } from 'react';
import './MissionAndValues.css';
import Child from './Child';

class SubContainer extends Component {

    render(){
        return(
            <div>
                <div className="Excellence-InnovationContainer">
                    <Child />
                    <Child />
                    <Child />
                    <Child />
                </div>
            </div>
        )
    }
}

export default SubContainer;