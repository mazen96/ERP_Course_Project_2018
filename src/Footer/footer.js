import React, { Component } from 'react';
import logo from '../Header/assets/Vector Smart Object copy.png';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
            <div class="row justify-content-center">
            <div class="f-logo col-lg-2 col-md-5">
                <img src={logo} alt=""/>
            </div>
            <div id="who" class="col-lg-2 col-md-5">
                <h4>WHO WE ARE</h4>
                <p>Mission, Values and Ethics</p>
                <p>HISTORY</p>
                <p>DIRECTOR`S SPEESH</p>
                <p>FAQ</p>
            </div>
            <div id="what" class="col-lg-2 col-md-5">
                <h4>WHAT WE DO</h4>
                <p>Legislations</p>
                <p>Public Interest Disclosures</p>
                <p>Counter-terrorism</p>
                <p>Counter proliferation</p>
            </div>
            <div id="links" class="col-lg-2 col-md-5">
                <h4>NEWS</h4>
                <h4>FAQs</h4>
                <h4>CONTACT US</h4>
                <ul id="so-mi" class="row so-mi justify-content-center ">
                    <li>
                        <a href="#">
                            <i class="col-3 fab fa-facebook-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="col-3 fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="col-3 fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="col-3 fab fa-google-plus-g"></i>
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
