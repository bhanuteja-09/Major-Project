import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LOGO6 from '../assets/LOGO6.png';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase sign-in function
import { auth } from '../firebase-config'; // Ensure this is correctly imported
import './Login.css';

const UserPortal = () => {
  const [username, setUsername] = useState(''); // Used as email for user login
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password || !role) {
      setErrorMessage('All fields are required');
      return;
    }

    if (role === 'Admin') {
      // Admin login credentials
      const adminUsername = 'admin';
      const adminPassword = 'password';

      if (username === adminUsername && password === adminPassword) {
        navigate('/admin-portal');
      } else {
        setErrorMessage('Invalid admin credentials');
      }
    } else if (role === 'User') {
      // User login with Firebase Authentication
      try {
        await signInWithEmailAndPassword(auth, username, password);
        navigate('/user-portal');
      } catch (error) {
        console.error("Error logging in user:", error);
        setErrorMessage('Invalid email or password');
      }
    } else {
      setErrorMessage('Invalid role selected');
    }
  };

  return (
    <div>
      <Navbar 
        expand="lg" 
        fixed="top" 
        className="home-header"
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
              to="/userfindajob" 
              className="home-nav-link"
            >
              JobSearch
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/userprofile" 
              className="home-nav-link"
            >
              Profile
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/login" 
              className="home-nav-link"
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="login-container">
        
      </div>
    </div>
  );
};

export default UserPortal;
