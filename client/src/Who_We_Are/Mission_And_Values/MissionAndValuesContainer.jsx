import React, { Component } from 'react';
import './MissionAndValues.css';

class MissionAndValuesContainer extends Component {

    render() {
        return (
            <div>
                <div className="MissionAndValuesContainer">
                    <div>
                        <p className="head-font">MISSION AND VALUES</p>
                    </div>
                    <div>
                        <p className="p-font">The Australian Secret Intelligence Service (ASIS) is Australia's overseas secret HUMINT (human intelligence) collection agency. Our mission is to protect and promote Australia's vital interests through the provision of unique foreign intelligence services as directed by the Australian Government.</p>
                    </div>
                    <div>
                        <p className="p-font">ASIS has a distinctive culture and esprit de corps and we embrace the Australian Public Service (APS) Values, together with a number of ASIS-specific values. In ASIS, we value diversity, embrace change and encourage new and innovative ideas. We have a strong sense of national pride and loyalty to the Service and to each other. Our core values are:</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MissionAndValuesContainer;