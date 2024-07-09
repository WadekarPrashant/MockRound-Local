import React from 'react';
import CollegeForm from '../components/CollegeForm';
import { Link } from 'react-router-dom';

const CollegeProfile = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>College Profile</h2>
            <nav>
                <Link to="/login" style={{ margin: '0 10px' }}>Login</Link>
                <Link to="/signup" style={{ margin: '0 10px' }}>Signup</Link>
            </nav>
            <CollegeForm />
        </div>
    );
};

export default CollegeProfile;
