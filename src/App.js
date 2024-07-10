import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CollegeSignupPage from './pages/CollegeSignupPage';
import LoginPage from './pages/CollegeLoginPage';
import CollegeProfile from './pages/CollegeProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<CollegeSignupPage />} />
        <Route path="/login" element={<CollegeProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
