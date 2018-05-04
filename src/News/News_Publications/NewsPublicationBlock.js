import React from "react";
import './event.css'



class NewsPublicationBlock extends React.Component {
    render() {
        return (
            <div className="block" >
                <div className="firstItem" >
                    <h2> {this.props.title} </h2>
                    <small>{this.props.date}</small>
                    <p>
                        {this.props.text}
                    </p>
                    <div  >
                        <a href={this.props.href} > Donwload PDF </a>
                    </div>
                </div>

                <div className="secondItem" >
                    <img src={this.props.img} />
                </div>
            </div>
        );
    }
}

export default NewsPublicationBlock;