import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

//Logo Image
import logo from '../assets/tracker_icon.png';
import "./styles.css";


export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-7 col-sm-4">
                            <img src={logo} alt='TaskTrackerLogo' />
                        </div>
                        <div className="col-4 offset-1 col-sm-3 m-0 text-center">
                            <h5>Links</h5>
                            {/* <ul className="list-unstyled"> */}
                                <a href="#">Home</a> |
                                 <a href="#"> Contact Us</a> | 
                                <a href="#"> About Us</a>
                            {/* </ul> */}
                        </div>
                        <div className="col-12 col-sm-4  text-center">
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