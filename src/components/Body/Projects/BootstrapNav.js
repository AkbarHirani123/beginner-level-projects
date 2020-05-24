import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/logo.svg';


export class BootstrapNav extends Component {
    render() {
        return (
            <div className="container">
                <h2>Bootstrap Navigation</h2>
                <Navbar bg="dark" expand="lg" variant="dark">
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
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="lesson-container">
                    <h3>Lessons:</h3>
                    <p>Always remember that using bootstrap is a convience and also a commitment. All of your styles will be affected if you use Bootstrap.<br /><br />Let's learn about how to install and use it.<br /><br />Run the following command in terminal inside your project.</p>
                    <p className="code">npm install --save react-bootstrap bootstrap</p>
                    <p>This will install both react bootstrap and bootstrap itself.<br /><br />Next you'll need to include the Bootstrap CSS stylesheet because what you installed just now is jquery and the js needed for bootstrap. You still need the CSS.</p>
                    <p className="code">import 'bootstrap/dist/css/bootstrap.min.css';<br /><br />// OR <br /><br />{'<link'}<br />{'rel="stylesheet"'}<br />{'href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"'}<br />{'integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"'}<br />{'crossorigin="anonymous"'}<br />{'/>'}</p>
                    <p>The import will go in the index.js file or you can put the style sheet directly in your index.html file in the public folder of your project.</p>
                    <p>You are not ready to use Bootstrap! Try it out by adding the following code to your project:</p>
                    <p className="code">
                        {'<Navbar bg="dark" expand="lg" variant="dark">'}<br />
                        &nbsp;&nbsp;{'<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>'}<br />
                        &nbsp;&nbsp;{'<Navbar.Toggle aria-controls="basic-navbar-nav" />'}<br />
                        &nbsp;&nbsp;{'<Navbar.Collapse id="basic-navbar-nav">'}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{'<Nav className="ml-auto">'}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<Nav.Item><Nav.Link href="#home">Home</Nav.Link></Nav.Item>'}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<Nav.Item><Nav.Link href="#link">Link</Nav.Link></Nav.Item>'}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{'</Nav>'}<br />
                        &nbsp;&nbsp;{'</Navbar.Collapse>'}<br />
                        {'</Navbar>'}
                    </p>
                    <p>But it's work properly, right? Well that's because you forgot to import the files from bootstrap!<br /><br />Here, is how you do it.</p>
                    <p className="code">
                    import &#123;{' Nav, Navbar '}&#125; from 'react-bootstrap';<br /><br />// OR <br /><br />import Nav from 'react-bootstrap/Nav';<br />import Navbar from 'react-bootstrap/Navbar';
                    </p>
                    <p>You should always try to use the 2nd version because it won't import the entire library to your project. This is common practice to ensure your application is fast and optimized.</p>
                    <p><strong>By the way,</strong> did you understand the bootstrap code? <br /><br />The easiest way to decipher this code is to learn Bootstrap. If you are going to use a library, you should know how the library and it's features work.</p>
                    <p>Here is a resource for you: <a href="https://react-bootstrap.github.io/components/navbar/">React Bootstrap Navbar Documentation</a></p>
                </div>
            </div>
        )
    }
}