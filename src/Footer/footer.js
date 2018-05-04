import React, { Component } from 'react';
import logo from '../Header/assets/Vector Smart Object copy.png';
import { Link } from 'react-router-dom'
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="row justify-content-center">
                    <div className="f-logo col-lg-2 col-md-5">
                        <img src={logo} alt="" />
                    </div>
                    <div id="who" className="col-lg-2 col-md-5">
                        <Link to='/WhoWeAre'><h4>Who we are</h4></Link>
                        <Link to='/MissionAndValues'>Mission, Values and Ethics</Link><br />
                        <Link to='/History'>History</Link><br />
                        <Link to='/DirectorsSpeech'>DIRECTOR`S SPEESH</Link><br />
                        <Link to='/WWD_FAQ'>FAQ</Link><br />
                    </div>
                    <div id="what" className="col-lg-2 col-md-5">
                        <Link to='/WhatWeDo'> <h4>What we do</h4></Link>
                        <Link to='/'>Legislations</Link><br />
                        <Link to='/PublicInterest'>Public Interest Disclosures</Link><br />
                        <Link to='/'>Counter-terrorism</Link><br />
                        <Link to='/'>Counter proliferation</Link><br />
                    </div>
                    <div id="links" className="col-lg-2 col-md-5">
                        <Link to='/NewsFade'>NEWS</Link><br />
                        <Link to='/WWD_FAQ'>FAQ</Link><br />
                        <Link to='/'>CONTACT US</Link><br />
                        <ul id="so-mi" className="row so-mi justify-content-center ">
                            <li>
                                <a href="">
                                    <i className="col-3 fab fa-facebook-square"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="col-3 fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="col-3 fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="col-3 fab fa-google-plus-g"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
