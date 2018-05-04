import React, { Component } from 'react';
import WordBox from '../../components/WordBox';
import '../../components/Landing-Page.css';

class PublicInterest extends Component {
    constructor() {
        super();
        this.state = {
            wordBoxes: []
        }
    }

    //this function call the backend
    componentWillMount() {
        this.setState({
            wordBoxes: [
                {
                    title: 'Public Interest Disclosures',
                    text: "The Public Interest Disclosure Act 2013 (Cth) promotes integrity and accountability in the Commonwealth public sector by encouraging the disclosure of information about suspected wrongdoing, protecting people who make disclosures from adverse consequences relating to the making of a disclosure, and requiring agencies to take action to ensure that disclosures are properly investigated and dealt with. ASIS is prescribed in the PID Act as being an agency to which the scheme applies. Further information regarding the PID scheme can be found on the website of the Inspector-General of Intelligence and Security (www.igis.gov.au) and the Commonwealth Ombudsman has produced guides and information sheets (www.ombudsman.gov.au/pages/pid) Public interest disclosures can be made to the ASIS Authorised Officer via the following address. Individuals are encouraged to use registered post."
                }
            ]
        });
    }


    render() {
        var style = {
            "backgroundColor": '#fff'
        };
        return (
            <div className="LandingPage">
                <div style={style}>
                    <WordBox  {...this.state.wordBoxes[0]} />
                </div>
            </div>
        );
    }
}

export default PublicInterest;


