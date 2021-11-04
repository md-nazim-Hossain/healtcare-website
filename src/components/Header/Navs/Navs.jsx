import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/Medicare-logo.png';
import './Navs.css';

const Navs = () => {
    const {user,signOutClick} = useAuth();
    console.log(user)
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky='top'>
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/service">Service</Nav.Link>
                        <Nav.Link as={NavLink} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
                    </Nav>
                    <Nav>
                    {
                    user.email && <Nav.Link>
                            <Button variant='danger' onClick={signOutClick}>Sign Out</Button>
                    </Nav.Link>
                    }

                    {user.email && <Nav.Link>
                        <div className='text-center'>{user.displayName}</div>
                        <div>{user.email}</div>
                    </Nav.Link>}
                    <Nav.Link>
                        {
                        user.photoURL ? <img src={user.photoURL} alt="" className="icon"/>
                        :<i className="fas fa-user-circle icon-size"></i>
                        }
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navs;