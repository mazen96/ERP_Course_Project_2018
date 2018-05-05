import React from 'react'

const Item = (props) =>{
	return (
		<div className="card_leg">
            <p className="card_cont"><font color="#959494"><a><font color="red" size="200px">-</font></a>&nbsp;&nbsp;&nbsp;&nbsp;{props.cont}</font></p>
        </div>
		);
}

export default Item;