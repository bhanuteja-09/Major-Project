import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './AdminPortal.css'; // Make sure to import your CSS file

const AdminPortal = () => {
  const [activeSection, setActiveSection] = useState('dashboard'); // Default section
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleLogout = () => {
    // Perform any logout logic here if needed (e.g., clearing tokens)
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="admin-portal">
      <div className="sidebar">
        <h2>Admin Portal</h2>
        <ul>
          <li
            className={activeSection === 'dashboard' ? 'active' : ''}
            onClick={() => handleSectionChange('dashboard')}
          >
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </li>
          <li
            className={activeSection === 'new-job' ? 'active' : ''}
            onClick={() => handleSectionChange('new-job')}
          >
            <i className="fas fa-plus-circle"></i> New Job
          </li>
          <li
            className={activeSection === 'job-list' ? 'active' : ''}
            onClick={() => handleSectionChange('job-list')}
          >
            <i className="fas fa-list-ul"></i> Job List
          </li>
          <li
            className={activeSection === 'job-requirements' ? 'active' : ''}
            onClick={() => handleSectionChange('job-requirements')}
          >
            <i className="fas fa-clipboard-list"></i> Job Requirements
          </li>
        </ul>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="main-content1">
        <div className="header">
          <h1>Online Job Portal</h1>
        </div>
        <div className="content1">
          {activeSection === 'dashboard' && (
            <div id="dashboard">
              <h2>Dashboard</h2>
              <p>Welcome to the Dashboard.</p>
              {/* Dashboard content here */}
            </div>
          )}
          {activeSection === 'new-job' && (
            <div id="new-job">
              <h2>New Job</h2>
              <p>Post a new job here.</p>
              {/* New Job content here */}
            </div>
          )}
          {activeSection === 'job-list' && (
            <div id="job-list">
              <h2>Job List</h2>
              <p>View and manage job listings here.</p>
              {/* Job List content here */}
            </div>
          )}
          {activeSection === 'job-requirements' && (
            <div id="job-requirements">
              <h2>Job Requirements</h2>
              <p>Set job requirements here.</p>
              {/* Job Requirements content here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
