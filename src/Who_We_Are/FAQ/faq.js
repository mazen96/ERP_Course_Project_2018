import React, { Component } from 'react';
import DashElement from '../../components/DashElement'
import FAQ_LOADER from './FAQ_LOADER.js'
import './style.css'

class faq extends Component {
        constructor() {
        super();
        this.state = {
            header: {},
            FAQs :[]
        }
    }

    componentWillMount() {
        this.setState({
            header: 
                {
                    title: 'FAQ',
                    text: "We are responsive and dedicated to achieving results that make a difference to Australia and its people.We are forward thinkers, optimistic about the future and undaunted by change"
                },

                FAQs: 
                [
                    {question:"We strive for excellence in all that we do ?" , answer:"The Central Intelligence Agency's primary mission is to collect, evaluate, and disseminate foreign intelligence to assist the president and senior US government policymakers in making decisions relating to the national security. The CIA does not make policy; it is an independent source of foreign intelligence information for those who do. The CIA may also engage in covert action at the president's direction in accordance with applicable law."},
                    {question:"We strive for excellence in all that we do ?" , answer:""},
                    {question:"We strive for excellence in all that we do ?" , answer:""},
                    {question:"We strive for excellence in all that we do ?" , answer:""},
                    {question:"We strive for excellence in all that we do ?" , answer:""},
                    {question:"We strive for excellence in all that we do ?" , answer:""},
                    {question:"We strive for excellence in all that we do ?" , answer:""},
                    {question:"We strive for excellence in all that we do ?" , answer:""}
                ]
            
        });
    }
    render(){
        return(
            <div className="FAQ_body">
                <div className="space_up"><font color="#ececed">jgjgjhhh</font></div>      
                <div className = "card">         
                    <br></br>
                    <h2 className="ques"><font color="black">{this.state.header.title}</font></h2>
                    <br></br>
                    <p><font color="#959494" className="ans">{this.state.header.text}</font></p>
                    <br></br>
                </div>
                <FAQ_LOADER FAQs = {this.state.FAQs} />
                <div className="space_down"><font color="#ececed">jgjgjhhh</font></div>
            </div>
        )
    }
}   



export default faq;