import React, { Component } from 'react';
import WordBox from '../../components/WordBox';
import DashBox from '../../components/DashBox';
import ArrayOfBlocks from '../../components/ArrayOfBlocks';
import FAQ from '../../components/FAQ';
import '../../components/Landing-Page.css';

class WhoWeAre extends Component {
    constructor() {
        super();
        this.state = {
            wordBoxes: [],
            dashBox: {},
            blocks: []
        }
    }

    //this function call the backend
    componentWillMount() {
        this.setState({
            wordBoxes: [
                {
                    title: 'WHO WE ARE',
                    text: "ASIS's primary goal is to obtain and distribute secret intelligence about the capabilities, intentions and activities of individuals or organisations outside Australia, which may impact on Australia's interests and the well-being of its citizens.\n ASIS's primary goal is to obtain and distribute secret intelligence about the capabilities, intentions and activities of individuals or organisations outside Australia, which may impact on Australia's interests and the well-being of its citizens.\nASIS's primary goal is to obtain and distribute secret intelligence about the capabilities, intentions and activities of individuals or organisations outside Australia, which may impact on Australia's interests and the well-being of its citizens.\n ASIS's primary goal is to obtain and distribute secret intelligence about the capabilities, intentions and activities of individuals or organisations outside Australia, which may impact on Australia's interests and the well-being of its citizens.\nASIS's primary goal is to obtain and distribute secret intelligence about the capabilities, intentions and activities of individuals or organisations outside Australia, which may impact on Australia's interests and the well-being of its citizens.\n ASIS's primary goal is to obtain and distribute secret intelligence about the capabilities, intentions and activities of individuals or organisations outside Australia, which may impact on Australia's interests and the well-being of its citizens."
                },
                {
                    title: 'the Government',
                    text: "The Australian Government expects us to be adaptable and to respond effectively to the growing number and diverse nature of threats facing Australia and its citizens. Our work can involve collecting intelligence relating to national defence, international relations and economic issues. We also contribute to Australia's coordinated national efforts against terrorism, proliferation of weapons of mass destruction, and trans-national issues such as people smuggling"
                }
            ],
            dashBox: {
                title: "functions",
                text: "Our functions, as set out in the Intelligence Services Act 2001, are to:",
                DashElements: [
                    {
                        text: "collect foreign intelligence, not available by other means, which may impact on Australia's interests;"
                    },
                    {
                        text: "distribute that intelligence to the Government, including key policy departments and agencies;"
                    },
                    {
                        text: "undertake counter-intelligence activities which protect Australia's interests and initiatives; and,"
                    },
                    {
                        text: "engage other intelligence and security services overseas in Australia's national interests."
                    }
                ]
            },
            blocks: [
                {
                    pic: "./img/sheild.png",
                    title: "Mission & Values",
                    text: "Our mission is to protect and promote Australia's vital interests through the provision of unique foreign intelligence services as directed by Government."
                },
                {
                    pic: "./img/gloabl.png",
                    title: "History",
                    text: "Our mission is to protect and promote Australia's vital interests through the provision of unique foreign intelligence services as directed by Government."
                },
                {
                    pic: "./img/message.png",
                    title: "DIRECTORS SPEECH",
                    text: "Our mission is to protect and promote Australia's vital interests through the provision of unique foreign intelligence services as directed by Government."
                }
            ]
        });
    }


    render() {
        return (
            <div className="LandingPage">
                <div className="twoColumn">
                    <div className="allThree">
                        <WordBox title={this.state.wordBoxes[0].title} text={this.state.wordBoxes[0].text} />
                    </div>
                    <div className="oneOverTwo twoOverFourRow">
                        <DashBox title = {this.state.dashBox.title} text = {this.state.dashBox.text} DashElements={this.state.dashBox.DashElements} />
                    </div>

                    <div className="twoOverTwo">
                        <WordBox title={this.state.wordBoxes[1].title} text={this.state.wordBoxes[1].text} />
                    </div>

                    <div className="twoOverTwo">
                        <FAQ />
                    </div>
                </div>

                <br />

                <ArrayOfBlocks blocks = {this.state.blocks} />
            </div>
        );
    }
}

export default WhoWeAre;


