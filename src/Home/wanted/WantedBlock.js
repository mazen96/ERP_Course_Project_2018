import React from "react";
import './wanted.css';
import { Link } from 'react-router-dom'

class WantedBlock extends React.Component {
    render() {
        let fontSizeValue1 = 18;
        let fontSizeValue2 = 13;
        let marginLeft1 = -91;
        let cicle = 120;

        return (
            <div className="Colomns">
                <div className="col1">
                    <div>
                        <p className="zero"><b>{this.props.id}</b></p>
                        <img src="./img/red.jpg" alt="" />
                    </div>
                    <div>
                        <img src={this.props.img} className="img-rounded" style={{width: cicle, height: cicle}} />
                    </div>
                    <div>
                        <p className="org" style={{ fontSize: fontSizeValue1 ,textAlign: 'left', }}>
                            <b>NAME : {this.props.name}</b><br />
                            <b>AGE  : {this.props.age}</b>
                        </p>
                        <p style={{ color: '#959596', fontSize: fontSizeValue2 }}>Wanted for abuse</p>
                    </div>
                </div>
                <div className="col2">
                    <div>
                        <p className="org" style={{ textAlign: 'left', fontSize: fontSizeValue1 }}><b>DETAIL</b></p>
                        <p style={{ fontSize: 18, color: '#959596' ,textAlign: 'left'}}>{this.props.text} </p>
                    </div>
                </div>
                <div className="col3">
                    <div>
                        <Link to='/ReportThreats'> <img src="./img/rep.jpg" alt="" /></Link>
                        <p style={{ textAlign: 'center', color: '#959596', marginLeft: marginLeft1 }}>View more details</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default WantedBlock;