import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LOGO6 from '../assets/LOGO6.png';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../firebase-config'; 
import './Login.css';

const Login = () => {
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


  const [expanded, setExpanded] = useState(false);
  

  const handleNavClick = () => {
    setExpanded(false); // Collapse the navbar
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
              className="home-nav-link"
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/register" 
              className="home-nav-link"
            >
              Register
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/login" 
              className="home-nav-link"
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>Username/Email:</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <label>Login Type:</label>
            <select 
              value={role} 
              onChange={(e) => setRole(e.target.value)} 
              required 
            >
              <option value="">Select Login Type</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>

            <button type="submit">Login</button>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>New user? <Link to="/register">Click here</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
