import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FindAJob from './pages/FindAJob';
import About from './pages/About';
import Contact from './pages/Contact';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-a-job" element={<FindAJob />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} /> {/* Catch-all route */}
      </Routes>
    </Router>
  );
};

export default App;
