// Header.js
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; // Ensure the CSS file is imported

const Header = ({ extraClass }) => {
  const [expanded, setExpanded] = React.useState(false);
  const location = useLocation();

  const handleNavClick = () => setExpanded(false);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`header-navbar ${extraClass}`} // Apply additional classes
      expanded={expanded} 
      onToggle={() => setExpanded(!expanded)} 
    >
      <Navbar.Brand className="brand">
        <img src="logo.png" alt="Logo" className="logo" />
        <div className="brand-text">
          <span className="brand-title">Hire</span>Check
          <p className="subtitle">Get your dream job</p>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link 
            as={Link} 
            to="/" 
            onClick={handleNavClick} 
            active={location.pathname === "/"}
          >
            Home
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="/find-a-job" 
            onClick={handleNavClick} 
            active={location.pathname === "/find-a-job"}
          >
            Find a Job
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="/about" 
            onClick={handleNavClick} 
            active={location.pathname === "/about"}
          >
            About
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="/contact" 
            onClick={handleNavClick} 
            active={location.pathname === "/contact"}
          >
            Contact
          </Nav.Link>
          <Button 
            as={Link} 
            to="/register" 
            className="nav-btn1" 
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
