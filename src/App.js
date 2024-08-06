import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import FindAJob from './pages/FindAJob';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css'; // Import global CSS

// const DebugLocation = () => {
//   const location = useLocation();
//   console.log('Current URL:', location.pathname);
//   return null;
// };

const App = () => {
  return (
    <Router basename="/">
      <Header />
      {/* <DebugLocation /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-a-job" element={<FindAJob />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
