import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'; // Import custom CSS for Header
import LOGO6 from '../assets/LOGO6.png';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false); // Collapse the navbar
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className="header-navbar" 
      expanded={expanded} 
      onToggle={() => setExpanded(!expanded)} // Toggle state when the button is clicked
    >
      <Navbar.Brand className="brand">
        <img src={LOGO6} alt="Logo" className="logo" />
        <div className="brand-text">
          <span className="brand-title">Hire</span>Check
          <p className="subtitle">Get your dream job</p>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/" onClick={handleNavClick}>Home</Nav.Link>
          <Nav.Link as={Link} to="/find-a-job" onClick={handleNavClick}>Find a Job</Nav.Link>
          <Nav.Link as={Link} to="/about" onClick={handleNavClick}>About</Nav.Link>
          <Nav.Link as={Link} to="/contact" onClick={handleNavClick}>Contact</Nav.Link>
          <Button 
            as={Link} 
            to="/register" 
            className="nav-btn" 
            onClick={handleNavClick}
          >
            Register
          </Button>
          <Button 
            as={Link} 
            to="/login" 
            className="nav-btn" 
            onClick={handleNavClick}
          >
            Login
          </Button>
        </Nav>
        {/* <Nav className="ml-auto">
          <Button 
            as={Link} 
            to="/register" 
            className="nav-btn" 
            onClick={handleNavClick}
          >
            Register
          </Button>
          <Button 
            as={Link} 
            to="/login" 
            className="nav-btn" 
            onClick={handleNavClick}
          >
            Login
          </Button>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;