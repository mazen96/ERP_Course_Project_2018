import React, { Component } from 'react';
import './min-navbar.css';
import Input from '../../input_field/input'
class Min_navbar extends Component {
    render() {
        return (

            <ul id="min-navbar" className="Min_navbar row col-md-3 justify-content-between min-navbar">
                <li class="col-3 links">
                    <a href="#">
                        <i class="far fa-envelope"></i>
                    </a>
                </li>
                <li class="col-3 links">
                    <a href="#">
                        <i class="fas fa-search"></i>
                    </a>
                </li>
                <li class="col-3 links">
                    <div class="dropdown">
                        <i class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            EN
                            </i>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Arabic</a>
                            <a class="dropdown-item" href="#">Franch</a>
                            <a class="dropdown-item" href="#">Dutch</a>
                        </div>
                    </div>
                </li>
                <li class="col-3 links hide">
                    <div class="dropdown">
                        <i class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-bars"></i>
                        </i>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                            <div class="row">
                                <div class="dropdown-item col">
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
                                <div class="dropdown-item col">
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

export default Min_navbar;
