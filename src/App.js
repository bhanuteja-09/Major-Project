import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FindAJob from './pages/FindAJob';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Register from './pages/Register';
import Login from './pages/Login';
import AdminPortal from './pages/AdminPortal';
import UserPortal from './pages/UserPortal';
import UserProfile from './pages/UserProfile';
import Welcome from './pages/Welcome'; 
import UserFindAJob from './pages/UserFindAJob';

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-a-job" element={<FindAJob />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-portal" element={<AdminPortal />} />
      <Route path="/user-portal/*" element={<UserPortal />} />
      <Route path="/userfindajob" element={<UserFindAJob />} />
          <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
};

export default App;
