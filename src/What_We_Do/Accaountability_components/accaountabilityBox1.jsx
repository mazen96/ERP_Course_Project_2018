import React , { Component } from 'react';
import './accaountabilityStyle.css';






class accaountabilityBox1 extends Component{

    constructor(props){
        super(props);
        this.state={
            title:"Accauntability",
            body:`The Public Interest Disclosure Act 2013 (Cth) promotes integrity and accountability in the Commonwealth public 
            sector by encouraging the disclosure of information about suspected wrongdoing, protecting people who make
            disclosures from adverse consequences relating to the making of a disclosure, and requiring agencies to take
            action to ensure that disclosures are properly investigated and dealt with.  ASIS is prescribed in the PID
            Act as
            being an agency to which the scheme applies.`
            
        }
    }

    render(){

        return(
            <div className="box1">
            <h1>
                <b/><strong>{this.state.title}</strong>
            </h1>
            <br/>
            <p>
                {this.state.body}
            </p>
        </div>
        )

    }


}

export default accaountabilityBox1;