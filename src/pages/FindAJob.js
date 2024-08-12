import React, { useState } from 'react';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import LOGO6 from '../assets/LOGO6.png';
import './FindAJob.css';
import { FaMapMarkerAlt, FaDollarSign, FaClock } from 'react-icons/fa';
import job1 from '../assets/job1.png';
import job2 from '../assets/job2.jpg';
import job3 from '../assets/job3.png';

// Job Data
const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TechCorp",
    location: "Hyderabad",
    type: "Full-time",
    salary: "20000",
    posted: "Today",
    image: job1
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "DataCorp",
    location: "Bangalore",
    type: "Part-time",
    salary: "15000",
    posted: "Last 7 Days",
    image: job2
  },
  {
    id: 3,
    title: "Product Manager",
    company: "ProductCorp",
    location: "Remote",
    type: "Full-time",
    salary: "30000",
    posted: "Last 30 Days",
    image: job3
  }
  // Add more jobs to ensure you have a total of 12 jobs for testing
];

const FindAJob = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const [selectedFilters, setSelectedFilters] = useState({
    location: [],
    type: [],
    salary: [],
    posted: []
  });
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3;

  const handleNavClick = () => setExpanded(false);

  const handleCheckboxChange = (e, filterType) => {
    const value = e.target.value;
    setSelectedFilters(prevFilters => {
      const updatedFilters = prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter(filter => filter !== value)
        : [...prevFilters[filterType], value];
      return {
        ...prevFilters,
        [filterType]: updatedFilters
      };
    });
  };

  const handleFilterClick = () => {
    const normalizedSalaryFilters = selectedFilters.salary.map(s => s.replace(/,/g, ''));

    const updatedFilteredJobs = jobs.filter(job =>
      (selectedFilters.location.length === 0 || selectedFilters.location.includes(job.location)) &&
      (selectedFilters.type.length === 0 || selectedFilters.type.includes(job.type)) &&
      (normalizedSalaryFilters.length === 0 || normalizedSalaryFilters.includes(job.salary.replace(/,/g, ''))) &&
      (selectedFilters.posted.length === 0 || selectedFilters.posted.includes(job.posted))
    );

    console.log("Selected Filters:", selectedFilters);
    console.log("Filtered Jobs:", updatedFilteredJobs);

    setFilteredJobs(updatedFilteredJobs);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  const handleResetClick = () => {
    setSelectedFilters({
      location: [],
      type: [],
      salary: [],
      posted: []
    });
    setFilteredJobs(jobs);
    setCurrentPage(1); // Reset to the first page after resetting filters
  };

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
                      checked={selectedFilters.location.includes(location)}
                      onChange={(e) => handleCheckboxChange(e, 'location')}
                    />
                  ))}

                  <Form.Label>Job Type</Form.Label>
                  {['Full-time', 'Part-time', 'Freelance'].map(type => (
                    <Form.Check
                      key={type}
                      type="checkbox"
                      label={type}
                      value={type}
                      checked={selectedFilters.type.includes(type)}
                      onChange={(e) => handleCheckboxChange(e, 'type')}
                    />
                  ))}

                  <Form.Label>Salary Range</Form.Label>
                  {['15,000', '10,000', '16,000', '20,000'].map(salary => (
                    <Form.Check
                      key={salary}
                      type="checkbox"
                      label={salary}
                      value={salary}
                      checked={selectedFilters.salary.includes(salary)}
                      onChange={(e) => handleCheckboxChange(e, 'salary')}
                    />
                  ))}

                  <Form.Label>Posted Within</Form.Label>
                  {['Today', 'Last 1 Day', 'Last 2 Days', 'Last 7 Days', 'Last 30 Days'].map(posted => (
                    <Form.Check
                      key={posted}
                      type="checkbox"
                      label={posted}
                      value={posted}
                      checked={selectedFilters.posted.includes(posted)}
                      onChange={(e) => handleCheckboxChange(e, 'posted')}
                    />
                  ))}

                  <div className="button-group mt-3">
                    <Button variant="primary" className="filter-btn" onClick={handleFilterClick}>Filter</Button>
                    <Button variant="secondary" className="reset-btn" onClick={handleResetClick}>Reset</Button>
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
                      <p className="location"><FaMapMarkerAlt /> {job.location}</p>
                      <p className="salary"><FaDollarSign /> {job.salary}</p>
                      <p className="posted"><FaClock /> {job.posted}</p>
                      <Button variant="primary" className="view-details-btn">View Details</Button>
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
                {Array.from({ length: totalPages }, (_, index) => (
                  <Button
                    key={index + 1}
                    variant="light"
                    className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => paginate(index + 1)}
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
    </div>
  );
};

export default FindAJob;
