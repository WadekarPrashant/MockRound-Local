import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic
        console.log('Login submitted:', { email, password });
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto' }}>
            <h2>Login</h2>
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
            <button type="submit" style={{ margin: '20px 0', padding: '10px' }}>Login</button>
            <Link to="/signup" style={{ textAlign: 'center', marginTop: '10px' }}>Don't have an account? Sign up</Link>
        </form>
    );
};

export default Login;
