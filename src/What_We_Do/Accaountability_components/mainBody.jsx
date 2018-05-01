import React , { Component } from 'react';

import AccBox1 from './accaountabilityBox1.jsx';
import AccBox2 from './accaountabilityBox2.jsx';
import AccBox3 from './accaountabilityBox3.jsx';
import AccBox4 from './accaountabilityBox4.jsx';
import './accaountabilityStyle.css';



class mainBody extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className='mainBody'>
                <AccBox1/>
                <AccBox2/>
                <AccBox3/>
                <AccBox4/>
             </div>
        )

    }


}

export default mainBody;