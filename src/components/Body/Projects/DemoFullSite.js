import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'; 
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import Jumbotron from 'react-bootstrap/Jumbotron'; 
import '../DemoSite.css';
import logo from '../../../assets/logo.svg';

export default class DemoFullSite extends Component {
    render() {
        return (
            <div className="DemoFullSite">
                <div className="ignore"><span>Ignore the default header and footer. Start below</span>&#9660;</div>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <div className="container">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        React-Bootstrap
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item><Nav.Link href="#home">Home</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="#link">Link</Nav.Link></Nav.Item>
                            <NavDropdown title="Account" id="basic-nav-dropdown" className="primary">
                                <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Create Account</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>Created by Akky</NavDropdown.Item>
                            </NavDropdown>
                            <Button variant="outline-primary">Contact Me</Button>
                        </Nav>
                    </Navbar.Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="text-left col-md-6 col-offset-md-1">
                                <h2>Demo Site Jumborton</h2>
                                <p>This demo was created by Akbar Hirani. Not bad, right? Reach out to him to see what else he is capeable of. By the way, this image will change everytime you refresh the page.</p>
                                <Button className="primary">Contact Me</Button>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <div className="container pt-5">
                    <div className="row justify-content-center align-items-center pt-5">
                        <div className="col-md-6 text-left justify-content-center">
                            <h4>This just a content section</h4>
                            <p>Veniam esse id labore nisi ut laborum exercitation consequat officia commodo dolore ipsum tempor cillum.Enim consectetur ullamco incididunt laborum laborum ipsum anim elit culpa fugiat adipisicing adipisicing eu.</p>
                        </div>
                        <div className="col-md-6">
                            <img src="https://picsum.photos/600/400" alt="" className="mw-100" />
                        </div>
                    </div>
                </div>
                <div className="container margin-lg">
                    <div className="row justify-content-center align-items-center pt-5">
                        <h2>This just a content section</h2>
                        <p>Veniam esse id labore nisi ut laborum exercitation consequat officia commodo dolore ipsum tempor cillum.Enim consectetur ullamco incididunt laborum laborum ipsum anim elit culpa fugiat adipisicing adipisicing eu.</p>
                    </div>
                </div>
            </div>
        )
    }
};