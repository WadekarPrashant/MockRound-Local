const mongoose = require('mongoose');

const CollegeSchema = new mongoose.Schema({
    collegeName: String,
    address: String,
    coursesAvailable: [String],
    cutOffRequired: Number,
    casteCategoryCutOff: Map,
    minCriteria: Number,
    maxCriteria: Number,
    spotRoundDates: [Date],
    approvedBy: [String],
});

module.exports = mongoose.model('College', CollegeSchema);
