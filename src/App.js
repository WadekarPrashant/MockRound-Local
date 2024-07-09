import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CollegeProfile from './pages/CollegeProfile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/college-profile" element={<ProtectedRoute element={<CollegeProfile />} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
