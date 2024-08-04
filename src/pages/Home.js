import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';

import profileImage from '../assets/profile1.png'; // Ensure the path is correct
import mobileProfileImage from '../assets/profile1 (2).png'; // Ensure the path is correct
import {Animate} from 'react-simple-animate';

const Home = () => {
  return (
    <div>
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
          <h2>Apply Process</h2>
          <h3>How It Works</h3>
          <div className="row">
            <div className="col-md-4 process-box">
              <div className="process-icon">Icon</div>
              <h4>Search a Job</h4>
              <p>Find job opportunities that match your skills and interests.</p>
            </div>
            <div className="col-md-4 process-box">
              <div className="process-icon">Icon</div>
              <h4>Apply for a Job</h4>
              <p>Submit your application to potential employers.</p>
            </div>
            <div className="col-md-4 process-box">
              <div className="process-icon">Icon</div>
              <h4>Get Your Job</h4>
              <p>Secure the job and start your new career path.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Five */}
      <section className="home-section-five">
        <div className="container">
          <div className="director-info">
            <div className="director-photo">
              <img src={profileImage} alt="Director" />
            </div>
            <h4 className="director-name">John Doe</h4>
            <p className="director-title">Creative Director</p>
            <p>John Doe is a seasoned professional with years of experience in the industry.</p>
            <button className="btn-view-director">View Other Directors</button>
          </div>
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
