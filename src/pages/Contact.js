import React, { useState } from 'react';
import { Navbar, Nav, Button, Row, Col, Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import LOGO6 from '../assets/LOGO6.png';
import './Contact.css'; // Make sure to include the CSS file

const Contact = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation(); // Get the current location

  const handleNavClick = () => {
    setExpanded(false); // Collapse the navbar
  };

  return (
    <div>
      {/* Header */}
      <Navbar 
    expand="lg" 
    fixed="top" 
    className="contact-header" 
    expanded={expanded} 
    onToggle={() => setExpanded(!expanded)}
>
    <Navbar.Brand className="contact-brand">
        <img src={LOGO6} alt="Logo" className="contact-logo" />
        <div className="contact-brand-text">
            <span className="contact-brand-title">Hire</span>Check
            <p className="contact-subtitle">Get your dream job</p>
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
              className="contact-nav-link"
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/find-a-job" 
              onClick={handleNavClick} 
              active={location.pathname === "/find-a-job"}
              className="contact-nav-link"
            >
              Find a Job
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              onClick={handleNavClick} 
              active={location.pathname === "/about"}
              className="contact-nav-link"
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              onClick={handleNavClick} 
              active={location.pathname === "/contact"}
              className="contact-nav-link"
            >
              Contact
            </Nav.Link>
            <Button 
              as={Link} 
              to="/register" 
              className="contact-nav-btn1" 
              onClick={handleNavClick}
            >
              Register
            </Button>
            <Button 
              as={Link} 
              to="/login" 
              className="contact-nav-btn" 
              onClick={handleNavClick}
            >
              Login
            </Button>
        </Nav>
    </Navbar.Collapse>
</Navbar>


      {/* Section One: Google Map */}
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.37003137247!2d-118.69193068173199!3d34.05223463447144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c5a30a72cfb7%3A0xb81a8c9d6f49e2b!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1608103098520!5m2!1sen!2sin"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="Google Map"
        ></iframe>
      </section>

      {/* Section Two: Contact Form */}
<section className="contact-form-section">
  <div className="container">
    <Row>
      <Col md={7} lg={6} className="contact-form-col">
        <h2 className="contactheading">Get in Touch</h2>
        <Form className="contact-form">
          <Row>
            <Col>
              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit" className="submit-btn">
            Send Message
          </Button>
        </Form>
      </Col>
      <Col md={5} lg={6} className="contact-details-col">
        <ul className="contact-details-list">
          <li>
            <i className="fas fa-home"></i> 1234 Street, City, Country
          </li>
          <li>
            <i className="fas fa-phone"></i> +888044338899
          </li>
          <li>
            <i className="fas fa-clock"></i> Mon to Fri 9am to 6pm
          </li>
          <li>
            <i className="fas fa-envelope"></i> <a href="mailto:support@hirecheck.com">support@hirecheck.com</a>
            <p className="mail">Send us your query anytime</p>
          </li>

          {/* <li>
            <i className="fas fa-info-circle"></i> Send us your query anytime
          </li> */}
        </ul>
      </Col>
    </Row>
  </div>
</section>


      {/* Footer */}
      <footer className="home-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 className="aboutus">About Us</h5>
              <p>Learn more about our mission and values.</p>
            </div>
            <div className="col-md-4">
              <h5 className="contactinfo">Contact Info</h5>
              <p>Get in touch with us for any inquiries.</p>
              <p>Phone: +888044338899</p>
              <p>Email: <a href="mailto:info@hirecheck.com">info@hirecheck.com</a></p>
            </div>
            <div className="col-md-4">
              <h5 className="importantlinks">Important Links</h5>
              <ul>
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/find-a-job" className="footer-link">Find a Job</Link></li>
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
                <li><Link to="#login" className="footer-link">Login</Link></li>
              </ul>
            </div>
          </div>
          <div className="row footer-bottom">
            <div className="col-md-6 text-center text-md-left">
              <p>&copy; 2024 HireCheck. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
