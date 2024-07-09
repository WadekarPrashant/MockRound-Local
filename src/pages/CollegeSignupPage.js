import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', { email, password });
            localStorage.setItem('token', response.data.token);
            navigate('/college-profile');
        } catch (error) {
            console.error('Signup error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto' }}>
            <h2>Signup</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                required
                style={{ margin: '10px 0', padding: '10px' }}
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                required
                style={{ margin: '10px 0', padding: '10px' }}
            />
            <button type="submit" style={{ margin: '20px 0', padding: '10px' }}>Signup</button>
        </form>
    );
};

export default Signup;
