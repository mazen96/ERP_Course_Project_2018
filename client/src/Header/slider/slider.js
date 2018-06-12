import React, { Component } from 'react';

import './slider.css';

class Slider extends Component {
  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide Slider" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li className="links active" data-target="#carouselExampleIndicators" data-slide-to="0" ></li>
                    <li className="links" data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li className="links" data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li className="links" data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="Slide row justify-content-center">
                            <div className="info  col-md-6">
                                <h1>
                                    A global
                                    <br/> focus
                                </h1>
                                <p>
                                    INTERNATIONAL WORK FOR A
                                    <br/> NATIONAL PURPOSE
                                </p>
                            </div>
                            <div className="button col-md-3 align-self-end links">
                                I want to know more
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="Slide  row justify-content-center">
                            <div className="info col-md-6">
                                <h1>
                                    REPORT
                                    <br/> THREATS
                                </h1>
                                <p>
                                    INTERNATIONAL WORK FOR A
                                    <br/> NATIONAL PURPOSE
                                </p>
                            </div>
                            <div className="button col-md-3 align-self-end links">
                                REPORT NOW
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="Slide  row justify-content-center">
                            <div className="info col-md-6">
                                <h1>
                                    Mission, Values and
                                    <br/> Ethics
                                </h1>
                                <p>
                                    INTERNATIONAL WORK FOR A
                                    <br/> NATIONAL PURPOSE
                                </p>
                            </div>
                            <div className="button col-md-3 align-self-end links">
                                REPORT NOW
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="Slide  row justify-content-center">
                            <div className="info col-md-6">
                                <h1>
                                    Intellegense
                                    <br/> Explained
                                </h1>
                                <p>
                                    INTERNATIONAL WORK FOR A
                                    <br/> NATIONAL PURPOSE
                                </p>
                            </div>
                            <div className="button col-md-3 align-self-end links">
                                I want to know more
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
  }
}

export default Slider;
