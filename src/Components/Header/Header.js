import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { UserContext } from '../../App';
import logo from '../../logo.png';
import './Header.css';

const Header = () => {
    const [loggedInAdmin, setLoggedInAdmin] = useContext(UserContext);
    const handleLogOut = ()=>{
        toast('Log out successful',{
            autoClose: 2000,
            position: "top-center"
        });
        setTimeout(()=> {
            localStorage.removeItem('mayaful_token');
            setLoggedInAdmin(null);
        }, 2100);
    }
    return (
        <div>
               <ToastContainer />
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <NavLink to="/" className="nav-brand"><img className="logo" src={logo} alt="brand-logo" /></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/blood" className="nav-link">Blood</NavLink>
                        <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
                        <NavLink to="/admin/panel" className="nav-link">Admin</NavLink>
                        {
                            loggedInAdmin ? 
                            <NavLink to="/" onClick={handleLogOut} className="nav-link">Log out</NavLink>:
                            <></> 
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;