import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPortal.css'; // Import your CSS file

const AdminPortal = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [formData, setFormData] = useState({
    jobTitle: '',
    numberOfPosts: '',
    qualification: '',
    experience: '',
    lastDate: '',
    salary: '',
    jobType: '',
    companyName: '',
    email: '',
    address: '',
    country: '',
    state: '',
  });
  const [errors, setErrors] = useState({});
  const [jobList, setJobList] = useState([
    {
      id: 1,
      jobTitle: 'Java Developer',
      numberOfPosts: 10,
      qualification: 'B.Tech, M.Tech',
      experience: '0-1 Year',
      lastDate: '2024-08-30',
      companyName: 'X Company',
      country: 'India',
      state: 'Karnataka',
      jobPostedDate: '08/14/2024',
    },
    {
      id: 2,
      jobTitle: 'Data Scientist',
      numberOfPosts: 6,
      qualification: 'B.Tech, MCA',
      experience: '0-1 Year',
      lastDate: '2024-08-30',
      companyName: 'Y Company',
      country: 'India',
      state: 'Karnataka',
      jobPostedDate: '08/13/2024',
    },
    {
      id: 3,
      jobTitle: 'Software Engineer',
      numberOfPosts: 8,
      qualification: 'B.Tech, M.Tech',
      experience: '0-1 Year',
      lastDate: '2024-08-24',
      companyName: 'Z Company',
      country: 'India',
      state: 'Karnataka',
      jobPostedDate: '08/18/2024',
    },
    {
      id: 4,
      jobTitle: 'Backend Developer',
      numberOfPosts: 7,
      qualification: 'B.Tech, M.Tech',
      experience: '2 Year',
      lastDate: '2024-08-29',
      companyName: 'A Company',
      country: 'India',
      state: 'Karnataka',
      jobPostedDate: '08/19/2024',
    },
    // Add more job objects as needed
  ]);

  
   const [editJob, setEditJob] = useState(null);

  const navigate = useNavigate();

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      'jobTitle',
      'numberOfPosts',
      'qualification',
      'experience',
      'lastDate',
      'salary',
      'jobType',
      'email',
      'address',
      'country',
      'state',
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (editJob) {
        const updatedJobList = jobList.map((job) =>
          job.id === editJob.id ? { ...editJob, ...formData } : job
        );
        setJobList(updatedJobList);
        setEditJob(null); // Clear edit form
      } else {
        const newJob = {
          id: jobList.length ? jobList[jobList.length - 1].id + 1 : 1,
          ...formData,
          jobPostedDate: new Date().toLocaleDateString(),
        };
        setJobList([...jobList, newJob]);
      }
      setFormData({
        jobTitle: '',
        numberOfPosts: '',
        qualification: '',
        experience: '',
        lastDate: '',
        salary: '',
        jobType: '',
        companyName: '',
        email: '',
        address: '',
        country: '',
        state: '',
      }); // Reset form data
      setErrors({});
    }
  };

  const handleEdit = (job) => {
    setEditJob(job);
    setFormData(job);
    setActiveSection('new-job'); // Navigate to the form section
  };

  const handleDelete = (id) => {
    setJobList(jobList.filter((job) => job.id !== id));
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
          {/* <li
            className={activeSection === 'job-requirements' ? 'active' : ''}
            onClick={() => handleSectionChange('job-requirements')}
          >
            <i className="fas fa-clipboard-list"></i> Job Requirements
          </li> */}
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
              <div className="dashboard-boxes">
                <div className="dashboard-box box-1">
                  <h3>Total Users</h3>
                  <p>4</p>
                </div>
                <div className="dashboard-box box-2">
                  <h3>Total Jobs</h3>
                  <p>12</p>
                </div>
                <div className="dashboard-box box-3">
                  <h3>Applied Jobs</h3>
                  <p>5</p>
                </div>
                <div className="dashboard-box box-4">
                  <h3>Contacted Users</h3>
                  <p>6</p>
                </div>
              </div>
            </div>
          )}
          {activeSection === 'new-job' && (
            <div id="new-job" className="add-job-form">
               <h2>{editJob ? 'Edit Job' : 'Add Job'}</h2>
               <form onSubmit={handleSubmit}>
                <div className="form-group row">
                  <div className="form-item col">
                    <label htmlFor="jobTitle">Job Title <span className="required">*</span></label>
                    <input
                      type="text"
                      id="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                    />
                    {errors.jobTitle && <div className="error-message">{errors.jobTitle}</div>}
                  </div>
                  <div className="form-item col">
                    <label htmlFor="numberOfPosts">Number of Posts <span className="required">*</span></label>
                    <input
                      type="number"
                      id="numberOfPosts"
                      value={formData.numberOfPosts}
                      onChange={handleChange}
                    />
                    {errors.numberOfPosts && <div className="error-message">{errors.numberOfPosts}</div>}
                  </div>
                </div>
                <div className="form-group row">
                  <div className="form-item col">
                    <label htmlFor="qualification">Qualification/Education Required <span className="required">*</span></label>
                    <textarea
                      id="qualification"
                      rows="4"
                      value={formData.qualification}
                      onChange={handleChange}
                    ></textarea>
                    {errors.qualification && <div className="error-message">{errors.qualification}</div>}
                  </div>
                </div>
                <div className="form-group row">
                  <div className="form-item col">
                    <label htmlFor="experience">Experience Required <span className="required">*</span></label>
                    <input
                      type="text"
                      id="experience"
                      value={formData.experience}
                      onChange={handleChange}
                    />
                    {errors.experience && <div className="error-message">{errors.experience}</div>}
                  </div>
                </div>
                <div className="form-group row">
                  <div className="form-item col">
                    <label htmlFor="lastDate">Last Date to Apply <span className="required">*</span></label>
                    <input
                      type="date"
                      id="lastDate"
                      value={formData.lastDate}
                      onChange={handleChange}
                    />
                    {errors.lastDate && <div className="error-message">{errors.lastDate}</div>}
                  </div>
                  <div className="form-item col">
                    <label htmlFor="salary">Salary <span className="required">*</span></label>
                    <input
                      type="text"
                      id="salary"
                      value={formData.salary}
                      onChange={handleChange}
                    />
                    {errors.salary && <div className="error-message">{errors.salary}</div>}
                  </div>
                </div>
                <div className="form-group row">
                  <div className="form-item col">
                    <label htmlFor="jobType">Job Type <span className="required">*</span></label>
                    <select
                      id="jobType"
                      value={formData.jobType}
                      onChange={handleChange}
                    >
                      <option value="">Select Job Type</option>
                      <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Contract">Contract</option>
                    </select>
                    {errors.jobType && <div className="error-message">{errors.jobType}</div>}
                  </div>
                </div>
                <div className="form-group row">
                  <div className="form-item col">
                    <label htmlFor="companyName">Company Name</label>
                    <input
                      type="text"
                      id="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-item col">
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                  </div>
                </div>
                <div className="form-group row">
                  <div className="form-item col">
                    <label htmlFor="address">Address <span className="required">*</span></label>
                    <input
                      type="text"
                      id="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                    {errors.address && <div className="error-message">{errors.address}</div>}
                  </div>
                  <div className="form-item col">
                    <label htmlFor="country">Country <span className="required">*</span></label>
                    <input
                      type="text"
                      id="country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                    {errors.country && <div className="error-message">{errors.country}</div>}
                  </div>
                  <div className="form-item col">
                    <label htmlFor="state">State <span className="required">*</span></label>
                    <input
                      type="text"
                      id="state"
                      value={formData.state}
                      onChange={handleChange}
                    />
                    {errors.state && <div className="error-message">{errors.state}</div>}
                  </div>
                </div>
                <button className="submit-button" type="submit">{editJob ? 'Update Job' : 'Add Job'}</button>
              </form>
            </div>
          )}
          {activeSection === 'job-list' && (
            <div id="job-list" className="job-list">
              <h2>Job List</h2>
              <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Job Title</th>
            <th>Number of Posts</th>
            <th>Qualification</th>
            <th>Experience</th>
            <th>Last Date</th>
            <th>Company Name</th>
            <th>Country</th>
            <th>State</th>
            <th>Job Posted Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {jobList.map((job) => (
            <tr key={job.id}>
              <td>{job.id}</td>
              <td>{job.jobTitle}</td>
              <td>{job.numberOfPosts}</td>
              <td>{job.qualification}</td>
              <td>{job.experience}</td>
              <td>{job.lastDate}</td>
              <td>{job.companyName}</td>
              <td>{job.country}</td>
              <td>{job.state}</td>
              <td>{job.jobPostedDate}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(job)}>
                  <i className="fas fa-edit"></i>
                </button>
              </td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(job.id)}>
                  <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
            </div>
          )}
          
          {/* {activeSection === 'job-requirements' && (
            <div id="job-requirements">
              <h2>Job Requirements</h2>
               content for job requirements
            </div>
          )} */}

        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
