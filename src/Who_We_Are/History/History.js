import React, { Component } from 'react';
import WordBox from '../../components/WordBox';
import '../../components/Landing-Page.css';

class History extends Component {
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
                    title: 'History',
                    text: "or over twenty years, the existence of ASIS remained a secret, even from members of the Australian Government.\nThe Service was first referred to in Parliament in 1975 and was not publicly acknowledged until 1977. The\nthen Prime Minister, Malcolm Fraser, informed Parliament that \"ASIS's capacity to serve Australia's national\n interest will continue to depend on its activities being fully protected by secrecy\". This statement has\n been reaffirmed by successive Governments. Today, ASIS is a part of the Foreign Affairs portfolio and is\n responsible to the Minister for Foreign Affairs. Based on a recommendation by a Commission of Inquiry in\n1995, the Intelligence Services Act 2001 ('the Act') came into being in 2001. It provides a legislative framework\nfor ASIS and made public for the first time, our functions and limits. According to the Act, our primary\nrole is to produce secret intelligence from human sources overseas. Additional tasks can be added to the\nmandate, as directed by the Government."
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
                    <WordBox title={this.state.wordBoxes[0].title} text={this.state.wordBoxes[0].text} />
                </div>
            </div>
        );
    }
}

export default History;


