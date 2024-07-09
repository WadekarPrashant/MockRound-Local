import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle signup logic
        console.log('Signup submitted:', { email, password, confirmPassword });
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
            <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
                style={{ margin: '10px 0', padding: '10px' }}
            />
            <button type="submit" style={{ margin: '20px 0', padding: '10px' }}>Signup</button>
        </form>
    );
};

export default Signup;
