import React, { Component } from 'react';
import './MissionAndValues.css';
import DashElement from '../../components/DashElement'

class LeftContainer extends Component {

    render(){
        return(
            <div>
                <div className="ExcellenceContainer">
                    <div>
                        <p className="sub-head-font">EXCELLENCE IN SERVICE</p>
                        <DashElement text="We strive for excellence in all that we do." />
                        <DashElement text="We are responsive and dedicated to achieving results that make a difference to Australia and its people." />
                        <DashElement text="We believe that the principles of security are fundamental to everything we do." />
                        <DashElement text="We are proud of our achievements." />
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftContainer;