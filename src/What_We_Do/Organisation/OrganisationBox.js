import React, { Component } from 'react';
import DashElement from '../../components/DashElement'
import './org.css'

class OrganisationBox extends Component {



    render() {
        let first = [] , seconed =[];
        first = this.props.DashElements1.map((element,i)=>{
            return ( <DashElement text={element.text} key ={i} />  );
        });

        seconed =  this.props.DashElements2.map((element,i)=>{
            return ( <DashElement text={element.text} key ={i} />  );
        });

        return (
            <div >
                <div class="first">
                    <h1>{this.props.title}</h1><br />
                    <p style={{textAlign : 'left'}}>{this.props.text}</p>
                </div>
                <div class="twoColomns">
                    <div class="col1">
                        {first}
                    </div>
                    <div class="col2">
                        {seconed}
                    </div>
                </div>
            </div>
        );

    }


}

export default OrganisationBox;