import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './JobDetails.css';

const JobDetails = ({ job, onClose, onApply }) => {
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
            <h2>{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Posted:</strong> {job.posted}</p>
            <div className="job-details-actions">
              <button className="apply-button" onClick={() => onApply(job)}>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
