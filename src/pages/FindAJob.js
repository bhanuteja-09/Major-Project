import React, { useState } from 'react';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import LOGO6 from '../assets/LOGO6.png';
import './FindAJob.css';
import { FaMapMarkerAlt, FaDollarSign, FaClock } from 'react-icons/fa';
import job5 from '../assets/job5.jpg';
import job1 from '../assets/job1.png';
import job3 from '../assets/job3.png';
import job2 from '../assets/job2.jpg';
import job7 from '../assets/job7.png';
import job8 from '../assets/job8.png';

// Job Data
const jobs = [
  { id: 1, title: 'Web Developer', company: 'Company Name 1', location: 'Hyderabad', salary: '15,000/month', posted: '15 days ago', image: job5, type: 'Freelance' },
  { id: 2, title: 'Backend Developer', company: 'Company Name 2', location: 'Bangalore', salary: '18,000/month', posted: '7 days ago', image: job1, type: 'Full Time' },
  { id: 3, title: 'App Developer', company: 'Company Name 3', location: 'Bangalore', salary: '16,000/month', posted: '3 days ago', image: job3, type: 'Full Time' },
  { id: 4, title: 'Frontend Developer', company: 'Company Name 3', location: 'Chennai', salary: '15,000/month', posted: '10 days ago', image: job2, type: 'Full Time' },
  { id: 5, title: 'Fullstack Developer', company: 'Company Name 3', location: 'Bangalore', salary: '25,000/month', posted: '2 days ago', image: job8, type: 'Freelance' },
  { id: 6, title: 'Test Engineer', company: 'Company Name 3', location: 'Chennai', salary: '20,000/month', posted: '1 days ago', image: job7, type: 'Full Time' },
  { id: 7, title: 'React JS Developer', company: 'Company Name 3', location: 'Vishakapatnam', salary: '13,000/month', posted: '8 days ago', image: job7, type: 'Remote' },
  { id: 8, title: 'Angular Developer', company: 'Company Name 3', location: 'Bangalore', salary: '18,000/month', posted: '4 days ago', image: job7, type: 'Full Time' },
  { id: 9, title: 'Senior Software Engneer', company: 'Company Name 3', location: 'Hyderabad', salary: '14,000/month', posted: '30 days ago', image: job7, type: 'Full Time' },
  { id: 10, title: 'Java Developer', company: 'Company Name 3', location: 'Chennai', salary: '10,000/month', posted: '1 days ago', image: job7, type: 'Full Time' },
  { id: 11, title: 'MEAN Developer', company: 'Company Name 3', location: 'Vishakapatnam', salary: '28,000/month', posted: '3 days ago', image: job7, type: 'Full Time' },
  { id: 12, title: 'Junior Software Developer', company: 'Company Name 3', location: 'Chennai', salary: '22,000/month', posted: '6 days ago', image: job7, type: 'Freelance' },
];

const FindAJob = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3;

  const handleNavClick = () => setExpanded(false);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectedFilters(prevFilters =>
      prevFilters.includes(value)
        ? prevFilters.filter(filter => filter !== value)
        : [...prevFilters, value]
    );
  };

  const filteredJobs = jobs.filter(job =>
    (selectedFilters.includes(job.location) || selectedFilters.length === 0) &&
    (selectedFilters.includes(job.type) || selectedFilters.length === 0) &&
    (selectedFilters.includes(job.salary) || selectedFilters.length === 0)
  );

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <div>
      <Navbar expand="lg" fixed="top" className="home-header" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
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
            <Nav.Link as={Link} to="/" onClick={handleNavClick} active={location.pathname === "/"} className="home-nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/find-a-job" onClick={handleNavClick} active={location.pathname === "/find-a-job"} className="home-nav-link">Find a Job</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleNavClick} active={location.pathname === "/about"} className="home-nav-link">About</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleNavClick} active={location.pathname === "/contact"} className="home-nav-link">Contact</Nav.Link>
            <Button as={Link} to="/register" className="home-nav-btn1" onClick={handleNavClick}>Register</Button>
            <Button as={Link} to="/login" className="home-nav-btn" onClick={handleNavClick}>Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="main-content">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-3 filter-box">
              <h2>Filter Jobs</h2>
              <Form>
                <Form.Group>
                  <Form.Label>Job Location</Form.Label>
                  {['Hyderabad', 'Bangalore', 'Remote', 'Chennai', 'Vishakapatnam'].map(location => (
                    <Form.Check
                      key={location}
                      type="checkbox"
                      label={location}
                      value={location}
                      checked={selectedFilters.includes(location)}
                      onChange={handleCheckboxChange}
                    />
                  ))}

                  <Form.Label>Job Type</Form.Label>
                  {['Full-time', 'Part-time', 'Freelance'].map(type => (
                    <Form.Check
                      key={type}
                      type="checkbox"
                      label={type}
                      value={type}
                      checked={selectedFilters.includes(type)}
                      onChange={handleCheckboxChange}
                    />
                  ))}

                  <Form.Label>Salary Range</Form.Label>
                  {['15,000', '10,000', '16,000', '20,000'].map(salary => (
                    <Form.Check
                      key={salary}
                      type="checkbox"
                      label={salary}
                      value={salary}
                      checked={selectedFilters.includes(salary)}
                      onChange={handleCheckboxChange}
                    />
                  ))}

                  <Form.Label>Posted Within</Form.Label>
                  {['Today', 'Last 1 Day', 'Last 2 Days', 'Last 7 Days', 'Last 30 Days'].map(posted => (
                    <Form.Check
                      key={posted}
                      type="checkbox"
                      label={posted}
                      value={posted}
                      checked={selectedFilters.includes(posted)}
                      onChange={handleCheckboxChange}
                    />
                  ))}

                  <div className="button-group mt-3">
                    <Button variant="primary" className="filter-btn">Filter</Button>
                    <Button variant="secondary" className="reset-btn" onClick={() => setSelectedFilters([])}>Reset</Button>
                  </div>
                </Form.Group>
              </Form>
            </div>

            <div className="col-md-9 job-list-box">
              <h2>Total {filteredJobs.length} Jobs Found</h2>
              <div className="job-list">
                {currentJobs.map(job => (
                  <div key={job.id} className="job-item row mb-3">
                    <div className="col-md-4 job-image-box">
                      <img src={job.image} alt={job.title} className="job-image" />
                    </div>
                    <div className="col-md-8 job-details">
                      <div className="job-title-row">
                        <h3>{job.title}</h3>
                        <Button variant="outline-primary" className="freelance-btn">{job.type}</Button>
                      </div>
                      <p className="company-name">{job.company}</p>
                      <div className="job-info-row">
                        <div className="job-location"><FaMapMarkerAlt /> {job.location}</div>
                        <div className="job-salary"><FaDollarSign /> {job.salary}</div>
                        <div className="job-posted"><FaClock /> {job.posted}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pagination">
                <Button
                  variant="secondary"
                  className="page-btn prev"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>

                {[...Array(totalPages)].map((_, index) => (
                  <Button
                    key={index + 1}
                    variant={currentPage === index + 1 ? 'primary' : 'secondary'}
                    onClick={() => paginate(index + 1)}
                    className="page-btn"
                  >
                    {index + 1}
                  </Button>
                ))}

                <Button
                  variant="secondary"
                  className="page-btn next"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default FindAJob;
