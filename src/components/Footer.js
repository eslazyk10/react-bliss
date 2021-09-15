import React from "react";
import { Link } from 'react-router-dom';
import logo from "../images/Bliss-logo.png"

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col col-sm-6  text-center">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'><i className="fa fa-home fa-lg" /> Home</Link></li>
                            <li><Link to='/about'><i className="fa fa-info fa-lg" />  About</Link></li>
                            <li><Link to='/gifts'><i className="fa fa-gift fa-lg" /> Gifts</Link></li>
                            <li><Link to='/destinations'><i className="fa fa-map fa-lg" /> Destinations</Link></li>
                            <li><Link to='/contact'><i className="fa fa-address-card fa-lg" /> Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 text-center">
                        <h5>Have more questions?</h5>
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-555-806-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> contact@bliss.co</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <img src={logo} alt="logo" height="200" width="200"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer