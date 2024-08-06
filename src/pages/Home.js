import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import LOGO6 from '../assets/LOGO6.png';

import profileImage from '../assets/profile1.png'; // Ensure the path is correct
import mobileProfileImage from '../assets/profile1 (2).png'; // Ensure the path is correct
import {Animate} from 'react-simple-animate';
import profileImage1 from '../assets/profile1.png';
import profileImage2 from '../assets/profile1.png';
import profileImage3 from '../assets/profile1.png';

const Home = () => {
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


      {/* Section One */}
      <section className="home-section-one">
        <div className="container">
          <div className="row">
            <div className="col-md-6 welcome-message">
              <Typewriter
                words={['Welcome to HireCheck']}
                loop
                cursor
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
              <p>Your one-stop solution for job postings and applications.</p>
            </div>
            {/* <div className="col-md-6 profile-photo">
              <img src={profileImage} alt="Profile" />
            </div> */}
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

      {/* Section Three */}
      <section className="home-section-three">
        <div className="container">
          <h2>Featured Tours Packages</h2>
          <h3>Make a Difference with Your Online Resume</h3>
          <button className="btn-upload-cv">Upload Your CV</button>
        </div>
      </section>

      {/* Section Four */}
      <section className="home-section-four">
  <div className="container">
    <div className="headings">
      <h5>Apply Process</h5>
      <h3>How it works</h3>
    </div>
    <div className="boxes">
      <div className="process-box">
        <div className="icon-container">
          <div className="icon-flip">
            <div className="icon-front">
              <i class="fas fa-search"></i> 
              {/* <!-- Front icon --> */}
            </div>
            <div className="icon-back">
              <i class="fas fa-search"></i> 
              {/* <!-- Back icon (can be the same or different) --> */}
            </div>
          </div>
        </div>
        <h4>Search a Job</h4>
        <p>Find job opportunities that match your skills.</p>
      </div>
      <div className="process-box">
        <div className="icon-container">
          <div className="icon-flip">
            <div className="icon-front">
              <i class="fas fa-briefcase"></i> 
              {/* <!-- Front icon --> */}
            </div>
            <div className="icon-back">
              <i class="fas fa-briefcase"></i> 
              {/* <!-- Back icon (can be the same or different) --> */}
            </div>
          </div>
        </div>
        <h4>Apply for a Job</h4>
        <p>Submit your application to potential employers.</p>
      </div>
      <div className="process-box">
        <div className="icon-container">
          <div className="icon-flip">
            <div className="icon-front">
              <i class="fas fa-check"></i> 
              {/* <!-- Front icon --> */}
            </div>
            <div className="icon-back">
              <i class="fas fa-check"></i> 
              {/* <!-- Back icon (can be the same or different) --> */}
            </div>
          </div>
        </div>
        <h4>Get Your Job</h4>
        <p>Secure the job and start your new career path.</p>
      </div>
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
              <h5>About Us</h5>
              <p>Learn more about our mission and values.</p>
            </div>
            <div className="col-md-4">
              <h5>Contact Info</h5>
              <p>Get in touch with us for any inquiries.</p>
            </div>
            <div className="col-md-4">
              <h5>Important Links</h5>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#find-job">Find a Job</a></li>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#contact-us">Contact Us</a></li>
                <li><a href="#login">Login</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
