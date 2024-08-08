import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword } from '../firebase-config'; // Import the function from firebase-config.js

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // For navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Email validation (basic check)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Invalid email format');
      return;
    }
  
    // Password validation (minimum length)
    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }
  
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/welcome'); // Navigate to Welcome page on successful registration
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle errors here (e.g., display an error message)
    }
  };
  

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
