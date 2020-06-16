import React from 'react';
import "./styles.css";

import 'react-bootstrap'

//Logo Image
import logo from '../assets/tracker_icon.png';
import { Navbar, Nav, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAddressCard, faInfo, faSignInAlt } from '@fortawesome/free-solid-svg-icons'



export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            modalTitle: "",
            modalBody: "",
        }
    }

    setAboutUsModalDetails = () => {
        this.setState({
            isOpen: true,
            modalTitle: "AboutUs Page",
            modalBody: "Tasktracker is a product for better project management. This product encourages communication, collaboration, transparency, and efficiency among SCRUM team members. It facilitates sprints and product backlog management. It organizes workload and helps members to plan for multiple iterations of the product.",
        })
    }

    setContactUsModalDeatils = () => {
        this.setState({
            isOpen: true,
            modalTitle: "ContactUs Page",
            modalBody: "You can contact us through our email: email@email.com or can call us on 0000000000 for geeting support. We are always happy to help you.",
        })
    }

    closeModal = () => {
        this.setState({
            isOpen: false,
        })
    }

    render() {
        return (

            <div>
                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.modalTitle}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>{this.state.modalBody}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>


                <Navbar className="navnav" collapseOnSelect expand="md" bg="ligth" variant="light">
                    <div className="container-fluid">
                        <Navbar.Brand href="/"><img src={logo} className='p-2' alt='TaskTrackerLogo' width='162' height='60' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="/" ><FontAwesomeIcon icon={faHome} size="x" />&nbsp;Home</Nav.Link>
                                <Nav.Link href="#contact" onClick={this.setContactUsModalDeatils}><FontAwesomeIcon icon={faAddressCard} size="x" />&nbsp;ContactUs</Nav.Link>
                                <Nav.Link href="#about" onClick={this.setAboutUsModalDetails}><FontAwesomeIcon icon={faInfo} size="x" />&nbsp;AboutUs</Nav.Link>
                                <Nav.Link href="/login"><FontAwesomeIcon icon={faSignInAlt} size="x" />&nbsp;LogIn</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}
