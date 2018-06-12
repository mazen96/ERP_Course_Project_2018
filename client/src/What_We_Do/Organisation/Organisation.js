import React, { Component } from 'react';
import OrganisationBox from './OrganisationBox'
import ChartBox from './ChartBox'
import './org.css'

class Organisation extends Component {

    constructor() {
        super();
        this.state = {
            OrganisationBox: {},
            ChartBox : [],
        }
    }

    //this function call the backend
    componentWillMount() {
        this.setState({
            OrganisationBox: {
                title : "ORGANISATION",
                text : "The Public Interest Disclosure Act 2013 (Cth) promotes integrity and accountability in the Commonwealth public sector by encouraging the disclosure of information about suspected wrongdoing, protecting people who make disclosures from adverse consequences relating to the making of a disclosure, and requiring agencies to take action to ensure that disclosures are properly investigated and dealt with.  ASIS is prescribed in the PID Act as being an agency to which the scheme applies.",
                DashElements1 : [
                    {
                        text : "collect foreign intelligence, not available by other means, which may impact on Australia's interests;"
                    },
                    {
                        text : "distribute that intelligence to the Government, including key policy departments and agencies;"
                    },
                    {
                        text : "undertake counter-intelligence activities which protect Australia's interests and initiatives; and,"
                    },
                    {
                        text : "engage other intelligence and security services overseas in Australia's national interests."
                    }
                ],
                DashElements2 : [
                    {
                        text : "collect foreign intelligence, not available by other means, which may impact on Australia's interests;"
                    },
                    {
                        text : "distribute that intelligence to the Government, including key policy departments and agencies;"
                    },
                    {
                        text : "undertake counter-intelligence activities which protect Australia's interests and initiatives; and,"
                    },
                    {
                        text : "engage other intelligence and security services overseas in Australia's national interests."
                    }
                ]
            },
            ChartBox : {
                title : "ORGANISATION CHART",
                text : "The Public Interest Disclosure Act 2013 (Cth) promotes integrity and accountability in the Commonwealth public sector by encouraging the disclosure of information about suspected wrongdoing, \n protecting people who make disclosures from adverse consequences relating to the making of a disclosure, and requiring agencies to take action to ensure that disclosures are properly investigated and dealt with.  ASIS is prescribed in the PID Act as being an agency to which the scheme applies. ",
                img : "./img/org-chart.jpg"
            }
        });
    }


    render() {

        return (
            <div className="parent">
                <OrganisationBox {...this.state.OrganisationBox} />
                <ChartBox {...this.state.ChartBox} />
            </div>
        );

    }


}

export default Organisation;