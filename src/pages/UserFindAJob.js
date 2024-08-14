// src/pages/UserFindAJob.js

import React, { useState } from 'react';

const UserFindAJob = () => {
  // Example job list; replace with actual job data
  const jobs = [
    { id: 1, title: "Software Engineer", location: "New York" },
    { id: 2, title: "Product Manager", location: "San Francisco" },
    // more jobs
  ];

  const [filter, setFilter] = useState("");
  const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="user-find-a-job">
      <h2>Find a Job</h2>
      <input
        type="text"
        placeholder="Filter jobs"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredJobs.map(job => (
          <li key={job.id}>
            {job.title} - {job.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserFindAJob;
