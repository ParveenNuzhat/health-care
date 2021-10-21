import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

// import useFirebase from '../../Hook/useFirebase';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();

    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand to='/home' className='header-text'>Dazzle Dentistry</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink activeStyle={activeStyle} className='menu-text' to="/home">Home</NavLink>
                        <NavLink activeStyle={activeStyle} className='menu-text' to="/services">Services</NavLink>
                        <NavLink activeStyle={activeStyle} className='menu-text' to="/dentists">Dentists</NavLink>
                        <NavLink activeStyle={activeStyle} className='menu-text' to="/register">Register</NavLink>
                        {user?.email && <Navbar.Brand to='/home' className='header-text text-danger'>Signed in as {user.displayName} </Navbar.Brand>}
                        {
                            user?.email ?
                                <button onClick={logOut} className='ms-3'>Logout</button>
                                :
                                <NavLink activeStyle={activeStyle} className='menu-text' to="/login">Login</NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>



    );
};

export default Header;