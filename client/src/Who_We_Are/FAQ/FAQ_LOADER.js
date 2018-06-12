import React, { Component } from 'react'
import FAQItem from './FAQItem.js'

class FAQ_LOADER extends Component {
    render(){
            const items = this.props.FAQs.map((item,i)=> {
                return (
                    <FAQItem question={item.question} answer = {item.answer} key={i} />
                    );
            });
        return(
            <div> 
                {items}
            </div>

        )
    }
}   

export default FAQ_LOADER;