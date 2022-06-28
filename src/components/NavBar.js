import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, useLocation } from "react-router-dom";
import '../App.css'

const NavBar = () => {
    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState(null);
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

    return (
        <div className='sticky-top'>
            <Navbar bg="dark" variant='dark' expand="lg" className='py-0 my-0'>
                <Container>
                    <Navbar.Brand as={Link} to={'/'} className='text-info'>
                        <img src={require('../images/doctor.png')} width="50" height="50" className="mx-1 d-inline-block align-center" alt="logo" />
                        Stroke Prediction
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to={'/'} className={url === '/' ? "active" : ""}>Home</Nav.Link>
                            <Nav.Link as={Link} to={'/predict-tool'} className={url === '/predict-tool' ? "active" : ""}>Predict Tool</Nav.Link>
                            <Nav.Link as={Link} to={'/predicted-result'} className={url === '/predicted-result' ? "active" : ""}>Predicted Results</Nav.Link>
                            <Nav.Link as={Link} to={'/factors'} className={url === '/factors' ? "active" : ""}>Factors</Nav.Link>
                            <Nav.Link as={Link} to={'/about'} className={url === '/about' ? "active" : ""}>About Us</Nav.Link>
                            <Nav.Link as={Link} to={'/contact'} className={url === '/contact' ? "active" : ""}>Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar