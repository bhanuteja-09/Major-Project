import React, { useState } from 'react';
import './About.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import LOGO6 from '../assets/LOGO6.png';
import profileImage from '../assets/profile1.png'; // Ensure the path is correct
import mobileProfileImage from '../assets/profile1 (2).png'; // Ensure the path is correct
import {Animate} from 'react-simple-animate';
import profileImage1 from '../assets/profile1.png';
import profileImage2 from '../assets/profile1.png';
import profileImage3 from '../assets/profile1.png';
// import Header from '../components/Header';
// import '../components/Header.css';

const About = () => {
 // For header
 const [expanded, setExpanded] = useState(false);
 const location = useLocation(); 
 // Get the current location

 const handleNavClick = () => {
   setExpanded(false); 
   // Collapse the navbar
 };
 return (
   <div>
      {/* <Header extraClass="about-page" />  */}
      {/* <main> */}
      <Navbar 
    expand="lg" 
    fixed="top" 
    className="about-header" 
    expanded={expanded} 
    onToggle={() => setExpanded(!expanded)}
>
    <Navbar.Brand className="about-brand">
        <img src={LOGO6} alt="Logo" className="about-logo" />
        <div className="about-brand-text">
            <span className="about-brand-title">Hire</span>Check
            <p className="about-subtitle">Get your dream job</p>
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
              className="about-nav-link"
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/find-a-job" 
              onClick={handleNavClick} 
              active={location.pathname === "/find-a-job"}
              className="about-nav-link"
            >
              Find a Job
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              onClick={handleNavClick} 
              active={location.pathname === "/about"}
              className="about-nav-link"
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              onClick={handleNavClick} 
              active={location.pathname === "/contact"}
              className="about-nav-link"
            >
              Contact
            </Nav.Link>
            <Button 
              as={Link} 
              to="/register" 
              className="about-nav-btn1" 
              onClick={handleNavClick}
            >
              Register
            </Button>
            <Button 
              as={Link} 
              to="/login" 
              className="about-nav-btn" 
              onClick={handleNavClick}
            >
              Login
            </Button>
        </Nav>
    </Navbar.Collapse>
</Navbar>


{/* Section One */}
<section className="about-section-one">
        <div className="background-image">
          <div className="title-overlay">
            <h1>About Us</h1>
          </div>
        </div>
      </section>
      
{/* Section Two */}
<section className="home-section-two">
        <div className="container">
        <div className="text-content">
            <Animate
              play
              duration={1.5}
              delay={0}
              start={{
                transform: 'translateX(-500px)', 
              }}
              end={{
                 transform: 'translateY(0)',
                 }}  
            >
              <h2>What We Are Doing</h2>
              <h3>24k Talented People are Getting Jobs</h3>
              </Animate>
              <Animate
              play
              duration={1.5}
              delay={0}
              start={{
                transform: 'translateX(500px)', 
              }}
              end={{
                 transform: 'translateY(0)',
                 }}  
            >
              <p>
                We help you find the perfect job or post your job openings efficiently.
                Our platform is designed to be user-friendly, offering easy navigation and powerful search features.
                Employers can reach a wide audience and job seekers can explore various opportunities that match their skills and interests.
              </p>
              <button className="btn-post-job">Post a Job</button>
            </Animate>
          </div>
          <div className="profile-photo">
            <img src={profileImage} alt="Profile" />
            <div class="since-box">Since 1995</div>
          </div>
          
          <div className="mobile-profile-photo">
        <img src={mobileProfileImage} alt="Mobile Profile Photo" />
        <div class="mobile-since-box">Since 1995</div>
      </div>
        </div>
      </section>

      

{/* <!-- Section Five --> */}
<section className="home-section-five">
      <div id="directorCarousel" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="director-info">
              <div className="director-photo">
                <img src={profileImage1} alt="Director 1" />
              </div>
              <h4 className="director-name">John Doe</h4>
              <p className="director-title">Creative Director</p>
              <p className="director-description">John Doe is a seasoned professional with over 20 years of experience in the industry. He specializes in creative direction and has led numerous successful projects across various sectors. His innovative approach and strategic vision make him a key asset to our team.</p>
              {/* <button className="btn-view-director">View Other Directors</button> */}
            </div>
          </div>
          <div className="carousel-item">
            <div className="director-info">
              <div className="director-photo">
                <img src={profileImage2} alt="Director 2" />
              </div>
              <h4 className="director-name">Jane Smith</h4>
              <p className="director-title">Marketing Director</p>
              <p className="director-description">Jane Smith brings a wealth of expertise in marketing and brand management. With a proven track record of elevating brand profiles and executing high-impact campaigns, she is instrumental in shaping our marketing strategies and driving growth.</p>
              {/* <button className="btn-view-director">View Other Directors</button> */}
            </div>
          </div>
          <div className="carousel-item">
            <div className="director-info">
              <div className="director-photo">
                <img src={profileImage3} alt="Director 3" />
              </div>
              <h4 className="director-name">Alice Johnson</h4>
              <p className="director-title">Technical Director</p>
              <p className="director-description">Michael Johnson is an expert in technology and innovation, with a strong background in software development and IT infrastructure. His leadership in technical projects ensures our technology strategies are cutting-edge and effective.</p>
              {/* <button className="btn-view-director">View Other Directors</button> */}
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#directorCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#directorCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
        <ol className="carousel-indicators">
          <li data-target="#directorCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#directorCarousel" data-slide-to="1"></li>
          <li data-target="#directorCarousel" data-slide-to="2"></li>
        </ol>
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
{/* </main> */}
    </div>
  );
};

export default About;
