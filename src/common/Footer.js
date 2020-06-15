import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { Navbar, Nav } from 'react-bootstrap';
//Logo Image
import logo from '../assets/tracker_icon.png';
import "./styles.css";


export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center text-center">
                        <div className="col-12 col-sm-6 order-sm-first col-md-4 col-lg-4 p-3">
                            <Navbar.Brand href="/"><img src={logo} alt='TaskTrackerLogo' width="215" height="80" /></Navbar.Brand>
                        </div>
                        <div className="col-12 col-sm-12 order-sm-last col-md-4 order-md-first col-lg-4 p-3">
                            <h5>Links</h5>
                            {/* <ul className="list-unstyled"> */}
                            <a href="/">Home</a>&nbsp;|&nbsp;
                                 <a href="#">Contact&nbsp;Us</a>&nbsp;|&nbsp;
                                <a href="#">About&nbsp;Us</a>
                            {/* </ul> */}
                        </div>
                        <div className="col-12 col-sm-6 order-sm-first col-md-4 col-lg-4 p-3">
                            <div>
                                <a href="http://www.facebook.com"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>&nbsp;&nbsp;
                                <a href="http://www.twitter.com"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>&nbsp;&nbsp;
                                <a href="http://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>&nbsp;&nbsp;
                                <a href="http://www.youtube.com"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>&nbsp;&nbsp;
                                <a href="mailto:help@tasktracker.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>&nbsp;&nbsp;
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <p>© Copyright 2020 Tasktracker Inc.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}