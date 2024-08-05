import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Adjust the path as needed
import Home from './pages/Home';
import FindAJob from './pages/FindAJob';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Header /> {/* Render Header on all routes */}
      <main style={{ marginTop: '70px' }}> {/* Adjust margin to prevent content from hiding under the fixed header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-a-job" element={<FindAJob />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
