// src/pages/UserProfile.js

import React from 'react';

const UserProfile = () => {
  // Mock user data; replace with actual user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    // other user info
  };

  return (
    <div className="user-profile">
      <h2>Profile</h2>
      <div>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        {/* Add more profile details as needed */}
      </div>
    </div>
  );
};

export default UserProfile;
