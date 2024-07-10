const express = require('express');
const { addCollege, getColleges } = require('../controllers/collegeController');
const router = express.Router();

router.post('/add', addCollege);
router.get('/', getColleges);

module.exports = router;
