import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CollegeProfile from './pages/CollegeProfile';
import Login from './pages/CollegeLoginPage';
import Signup from './pages/CollegeSignupPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/college-profile" element={<CollegeProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
