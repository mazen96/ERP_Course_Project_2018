import React from 'react'

const FAQItem = (props) =>{
	return (
		<div className="card">
                    <br></br>
                    <h2 id="fq"><font color="black"><a><font color="red" size="200px">-</font></a>&nbsp;&nbsp;&nbsp;&nbsp; {props.question}</font></h2>
                    <br></br>
                    <div className="ali">
                        <p id="p" className="card_answer"><font color="#959494">{props.answer}</font></p>
                    </div>
                    <br></br>
        </div>
		);
}
export default FAQItem;