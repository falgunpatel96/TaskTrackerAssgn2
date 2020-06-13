import React from 'react';
import "./styles.css";

import 'react-bootstrap'

//Logo Image
import logo from '../assets/tracker_icon.png';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAddressCard, faInfo, faSignInAlt } from '@fortawesome/free-solid-svg-icons'



export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    toggle = () => {
        this.setState({
            isOpen: this.isOpen ? false : true
        }, () =>
            console.log("toole:", this.state.isOpen))

    }



    render() {
        return (

            <div>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <div className="container-fluid">
                        <Navbar.Brand href="#home"><img src={logo} className='p-2' alt='TaskTrackerLogo' width='162' height='60' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="#home"><FontAwesomeIcon icon={faHome} size="x" />&nbsp;Home</Nav.Link>
                                <Nav.Link href="#contact"><FontAwesomeIcon icon={faAddressCard} size="x" />&nbsp;ContactUs</Nav.Link>
                                <Nav.Link href="#about"><FontAwesomeIcon icon={faInfo} size="x" />&nbsp;AboutUs</Nav.Link>
                                <Nav.Link href="#login"><FontAwesomeIcon icon={faSignInAlt} size="x" />&nbsp;LogIn</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}
