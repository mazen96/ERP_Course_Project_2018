import React, { Component } from 'react';
import './min-navbar.css';
import Input from '../../input_field/input'
class MinNavbar extends Component {
    render() {
        return (

            <ul id="min-navbar" className="Min_navbar row col-md-3 justify-content-between min-navbar">
                <li className="col-3 links">
                    <a href="#">
                        <i className="far fa-envelope"></i>
                    </a>
                </li>
                <li className="col-3 links">
                    <a href="#">
                        <i className="fas fa-search"></i>
                    </a>
                </li>
                <li className="col-3 links">
                    <div className="dropdown">
                        <i className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            EN
                            </i>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Arabic</a>
                            <a className="dropdown-item" href="#">Franch</a>
                            <a className="dropdown-item" href="#">Dutch</a>
                        </div>
                    </div>
                </li>
                <li className="col-3 links hide">
                    <div className="dropdown">
                        <i className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-bars"></i>
                        </i>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                            <div className="row">
                                <div className="dropdown-item col">
                                    <p>
                                        WHO WE ARE
                                        </p>
                                    <hr />
                                    <ul>
                                        <li>
                                            <a href="#">Mission, Values and Ethics</a>
                                        </li>
                                        <br />
                                        <li>
                                            <a href="#">HISTORY</a>
                                        </li>
                                        <br />
                                        <li>
                                            <a href="#">DIRECTOR`S SPEESH</a>
                                        </li>
                                        <br />
                                        <li>
                                            <a href="#">FAQ</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dropdown-item col">
                                    <p>
                                        WHAT WE DO
                                        </p>
                                    <hr />
                                    <ul>
                                        <li>
                                            <a href="#">LEGISLATIONS</a>
                                        </li>
                                        <br />
                                        <li>
                                            <a href="#">PUBLIC INTEREST DISCLOSURES</a>
                                        </li>
                                        <br />
                                        <li>
                                            <a href="#">ORGANISATION</a>
                                        </li>
                                        <br />
                                        <li>
                                            <a href="#">CHALLENGES</a>
                                        </li>
                                        <br />
                                        <li>
                                            <a href="#">ACCOUNTABILTY</a>
                                        </li>
                                        <br />
                                        <li>
                                            <a href="#">FAQS</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>
                <Input />
            </ul>

        );
    }
}

export default MinNavbar;
