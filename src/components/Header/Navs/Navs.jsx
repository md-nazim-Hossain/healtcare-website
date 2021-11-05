import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/Medicare-logo.png';
import { HashLink } from 'react-router-hash-link';
import './Navs.css';

const Navs = () => {
    const {user,signOutClick} = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed='top'>
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Service</Nav.Link>
                        <Nav.Link as={NavLink} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#find">Find Us</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
                    </Nav>
                    <Nav>
                    {user.email && <Nav.Link>
                        <div>{user.displayName}</div>
                        <div>{user.email}</div>
                    </Nav.Link>}
                    <Nav.Link>
                        {
                        user.photoURL ? <img src={user.photoURL} alt="" className="icon"/>
                        :<i className="fas fa-user-circle icon-size"></i>
                        }
                    </Nav.Link>
                    {
                    user.email ? <Nav.Link>
                        <Button variant='danger' onClick={signOutClick}>Sign Out</Button>
                    </Nav.Link>
                    :<Nav.Link>
                        <HashLink to='/register#signIn'><Button variant='danger'>Sign In</Button></HashLink>
                    </Nav.Link>
                    }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navs;