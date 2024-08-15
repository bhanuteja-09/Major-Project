import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './JobDetails.css';

const JobDetails = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coverLetter: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Application Submitted:', formData);
    setIsSubmitted(true);
    // Optionally, reset form data after submission
    setFormData({
      name: '',
      email: '',
      coverLetter: ''
    });
  };

  return (
    <div className="job-details-overlay">
      <div className="job-details-container">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="job-details-content">
          <div className="job-details-image-wrapper">
            <img src={job.image} alt={job.title} className="job-details-image" />
          </div>
          <div className="job-details-info">
            <h2 className="job-details-title">{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Posted:</strong> {job.posted}</p>
          </div>
          {/* Application Form */}
          <div className="application-form">
            <h3>Apply for this Job</h3>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="coverLetter">Cover Letter:</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="submit-button">Apply</button>
              </form>
            ) : (
              <p className="success-message">Your application has been submitted successfully!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
