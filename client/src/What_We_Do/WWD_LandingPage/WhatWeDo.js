import React, { Component } from 'react';
import WordBox from '../../components/WordBox';
import DashBox from '../../components/DashBox';
import ArrayOfBlocks from '../../components/ArrayOfBlocks';
import FAQ from '../../components/FAQ';
import '../../components/Landing-Page.css';
import axios from 'axios'

class WhatWeDo extends Component {
    constructor() {
        super();
        this.state = {
            wordBoxes: [],
            dashBox: {},
            blocks: []
        }
        this.loadData = this.loadData.bind(this);
    }

    loadData() {

        fetch('/api/WhatWeDo')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    wordBoxes: data.wordBoxes,
                    dashBox: data.dashBox,
                    blocks: data.blocks
                })
            })
            .catch(err => console.error(this.props.url, err.toString()))
    }

    //this function call the backend
    componentWillMount() {
        this.loadData();
    }


    render() {
        if (this.state.wordBoxes[0]) {
            return (
                <div className="LandingPage">
                    <div className="twoColumn">
                        <div className="oneOverTwo">
                            <WordBox {...this.state.wordBoxes[0]} />
                        </div>
                        <div className="twoOverTwo">
                            <WordBox  {...this.state.wordBoxes[1]} />
                        </div>
                        <div className="oneOverTwo twoOverFourRow">
                            <DashBox title={this.state.dashBox.title} text={this.state.dashBox.text} DashElements={this.state.dashBox.DashElements} />
                        </div>
                        <div className="twoOverTwo">
                            <WordBox  {...this.state.wordBoxes[2]} />
                        </div>
                        <div className="twoOverTwo">
                            <FAQ href='/WWD_FAQ' />
                        </div>
                    </div>
                    <br />
                    <ArrayOfBlocks blocks={this.state.blocks} />
                </div>
            );
        } else {
            return ("loading");
        }

    }
}

export default WhatWeDo;


