import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword } from '../firebase-config';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import LOGO6 from '../assets/LOGO6.png';
import './Register.css';

const Register = () => {
  // For header
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    setExpanded(false); // Collapse the navbar
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [country, setCountry] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage('Invalid email format');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/welcome');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setErrorMessage('This email is already registered');
      } else {
        setErrorMessage('Error registering user');
        console.error("Error registering user:", error);
      }
    }
  };

  return (
    <div>
      <Navbar 
        expand="lg" 
        fixed="top" 
        className="home-header" 
        expanded={expanded} 
        onToggle={() => setExpanded(!expanded)}
      >
        <Navbar.Brand className="home-brand">
          <img src={LOGO6} alt="Logo" className="home-logo" />
          <div className="home-brand-text">
            <span className="home-brand-title">Hire</span>Check
            <p className="home-subtitle">Get your dream job</p>
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
              className="home-nav-link"
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/find-a-job" 
              onClick={handleNavClick} 
              active={location.pathname === "/find-a-job"}
              className="home-nav-link"
            >
              Find a Job
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              onClick={handleNavClick} 
              active={location.pathname === "/about"}
              className="home-nav-link"
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              onClick={handleNavClick} 
              active={location.pathname === "/contact"}
              className="home-nav-link"
            >
              Contact
            </Nav.Link>
            <Button 
              as={Link} 
              to="/register" 
              className="home-nav-btn1" 
              onClick={handleNavClick}
            >
              Register
            </Button>
            <Button 
              as={Link} 
              to="/login" 
              className="home-nav-btn" 
              onClick={handleNavClick}
            >
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="register-container">
        <div className="register-form">
          <h2>Sign Up</h2>
          {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <h3>Login Information</h3>
              <label>Username:</label>
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
              <label>Email:</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
              <label>Password:</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              <label>Confirm Password:</label>
              <input 
                type="password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
              />
            </div>

            <div className="form-section">
              <h3>Personal Information</h3>
              <label>Address:</label>
              <input 
                type="text" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                required 
              />
              <label>Mobile Number:</label>
              <input 
                type="text" 
                value={mobileNumber} 
                onChange={(e) => setMobileNumber(e.target.value)} 
                required 
              />
              <label>Country:</label>
              <select 
                value={country} 
                onChange={(e) => setCountry(e.target.value)} 
                required 
              >
                <option value="">Select your country</option>
                <option value="IN">India</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="GB">United Kingdom</option>
                <option value="AU">Australia</option>
                {/* Add more countries as needed */}
              </select>
            </div>

            <div className="form-actions">
              <button type="submit">Register</button>
              <p>Already registered? <Link to="/login">Click here</Link></p>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
