import React, { Component } from 'react';
import CONTENT_LOADER from './CONTENT_LOADER.js'
import './style.css'

class Legislations extends Component {
        constructor() {
        super();
        this.state = {
            header: {},
            contents :[]
        }
    }

    componentWillMount() {
        this.setState({
            header: 
                {
                    title: 'LEGISLATION AND PRIVACY',
                    text: "Following reforms in recent years, the accountability framework for most intelligence agencies in Australia has been provided by legislation."
                },

                contents: 
                [
                    {id:1,cont:"The Intelligence Services Act 2001 ('the Act') provides the legislative basis for the work of ASIS, DIGO and ASD. The legislation stipulates the functions of the agencies, including what the agencies may, and may not, do."},
                    {id:2,cont:"Under the Act, the Parliamentary Joint Committee on Intelligence and Security (PJCIS) has responsibility for the review of ASIS’s expenditure and administration."},
                    {id:3,cont:"The Act also specifies rules to protect the privacy of Australian citizens. These Rules were made in accordance with the Act and regulate ASIS handling of intelligence information concerning Australian persons"},
                    {id:4,cont:"Additionally, the Inspector-General of Intelligence and Security Act 1996 created the role of the Inspector-General of Intelligence and Security (IGIS). The IGIS is an independent statutory office-holder who is empowered to investigate complaints made against ASIS, to review the compliance of ASIS with the laws of the Commonwealth, States and Territories, and conduct inquiries into matters which fall within the prescribed functions of that office."} 
                ] 
        });
    }
    render(){
        return(
            <div className="leg_body">
                <div className="space_up"><font color="#ececed">jgjgjhhh</font></div>      
                <div className = "card">         
                    <br></br>
                    <h2 className="tit"><font color="black">{this.state.header.title}</font></h2>
                    <br></br>
                    <p><font color="#959494" className="text">{this.state.header.text}</font></p>
                    <br></br>
                </div>
                <CONTENT_LOADER contents = {this.state.contents} />
                <div className="space_down"><font color="#ececed">jgjgjhhh</font></div>
            </div>
        )
    }
}   



export default Legislations;