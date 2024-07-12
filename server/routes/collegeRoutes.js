const express = require('express');
const router = express.Router();
const College = require('../models/College');
// const { protect } = require('../middleware/authMiddleware');

// Route to create a new college entry
router.post('/add', async (req, res) => {
    const { collegeName, address, coursesAvailable, cutOffSpotRound, casteCategoryCutOff, minStudentCriteria, maxCriteria, spotRoundDates, approvedBy } = req.body;

    try {
        const newCollege = new College({
            collegeName,
            address,
            coursesAvailable,
            cutOffSpotRound,
            casteCategoryCutOff,
            minStudentCriteria,
            maxCriteria,
            spotRoundDates,
            approvedBy
        });

        await newCollege.save();
        res.status(201).json(newCollege);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to get all college entries
router.get('/entries', async (req, res) => {
    try {
        const colleges = await College.find();
        res.json(colleges);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to get the profile of the logged-in college
router.get('/profile', async (req, res) => {
    try {
        const college = await College.findById(req.user.id); // Assuming College model
        if (!college) {
            return res.status(404).json({ message: 'College not found' });
        }
        res.json(college);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
