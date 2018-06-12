import React, { Component } from 'react'
import Item from './item.js'

class CONTENT_LOADER extends Component {
    render(){
            const items = this.props.contents.map((it)=> {
                return (
                    <Item cont={it.cont} key={it.id} />
                    );
            });
        return(
            <div> 
                {items}
            </div>

        )
    }
}   

export default CONTENT_LOADER;