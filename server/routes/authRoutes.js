require('dotenv').config();
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET || 'secretkey', {
        expiresIn: '30d',
    });
};


router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }


        const newUser = new User({ email, password });
        await newUser.save();

        
        const token = generateToken(newUser._id);

        res.status(201).json({
            _id: newUser._id,
            email: newUser.email,
            token: token,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
