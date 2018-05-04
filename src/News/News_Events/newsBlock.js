import React from "react";
import './news.css'

class NewsBlock extends React.Component {
    render() {
        return (
            <div className="block" >
                <div className="firstItem" style={{textAlign : 'left'}}>
                    <small>{this.props.date}</small>
                    <h2> {this.props.title} </h2>
                    <div className="dash">
                        <p style={{ fontSize : '40px' , color : 'red'}}>-</p>
                        <p>
                            {this.props.text}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsBlock;