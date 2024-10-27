// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Assessment from './pages/Assessment';
import Attendance from './pages/Attendance';
import Contact from './pages/Contact';
import Registration from './pages/Registration';
import './App.css'; // Import external CSS for better styling

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/assessment">Assessment</Link></li>
            <li className="nav-item"><Link to="/attendance">Attendance</Link></li>
            <li className="nav-item"><Link to="/contact">Contact</Link></li>
            <li className="nav-item"><Link to="/registration">Registration</Link></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
