import React, { useState } from 'react';

const CollegeForm = () => {
    const [collegeName, setCollegeName] = useState('');
    const [address, setAddress] = useState('');
    const [courses, setCourses] = useState('');
    const [cutoff, setCutoff] = useState('');
    const [casteCategoryCutoff, setCasteCategoryCutoff] = useState('');
    const [minStudentCriteria, setMinStudentCriteria] = useState('');
    const [maxCriteria, setMaxCriteria] = useState('');
    const [spotRoundDates, setSpotRoundDates] = useState('');
    const [approvedBy, setApprovedBy] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', { 
            collegeName, 
            address, 
            courses, 
            cutoff, 
            casteCategoryCutoff, 
            minStudentCriteria, 
            maxCriteria, 
            spotRoundDates, 
            approvedBy 
        });
        // Reset form fields
        setCollegeName('');
        setAddress('');
        setCourses('');
        setCutoff('');
        setCasteCategoryCutoff('');
        setMinStudentCriteria('');
        setMaxCriteria('');
        setSpotRoundDates('');
        setApprovedBy('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto' }}>
            <input
                type="text"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                placeholder="Enter College Name"
                required
                style={{ margin: '10px 0', padding: '10px' }}
            />
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Address"
                required
                style={{ margin: '10px 0', padding: '10px' }}
            />
            <input
                type="text"
                value={courses}
                onChange={(e) => setCourses(e.target.value)}
                placeholder="Enter Courses Available"
                required
                style={{ margin: '10px 0', padding: '10px' }}
            />
            <input
                type="text"
                value={cutoff}
                onChange={(e) => setCutoff(e.target.value)}
                placeholder="Enter Cut-off required for spot round"
                required
                style={{ margin: '10px 0', padding: '10px' }}
            />
            <input
                type="text"
                value={casteCategoryCutoff}
                onChange={(e) => setCasteCategoryCutoff(e.target.value)}
                placeholder="Enter Caste / Category Specific Cut-off"
                required
                style={{ margin: '10px 0', padding: '10px' }}
            />
            <input
                type="text"
                value={minStudentCriteria}
                onChange={(e) => setMinStudentCriteria(e.target.value)}
                placeholder="Enter Minimum Student Criteria"
                required
                style={{ margin: '10px 0', padding: '10px' }}
            />
            <input
                type="text"
                value={maxCriteria}
                onChange={(e) => setMaxCriteria(e.target.value)}
                placeholder="Enter Max Criteria (if any)"
                style={{ margin: '10px 0', padding: '10px' }}
            />
            <input
                type="text"
                value={spotRoundDates}
                onChange={(e) => setSpotRoundDates(e.target.value)}
                placeholder="Enter Dates of Conducting Spot Round"
                required
                style={{ margin: '10px 0', padding: '10px' }}
            />
            <input
                type="text"
                value={approvedBy}
                onChange={(e) => setApprovedBy(e.target.value)}
                placeholder="Approved by (AICTE / UGC / NIRF)"
                required
                style={{ margin: '10px 0', padding: '10px' }}
            />
            <button type="submit" style={{ margin: '20px 0', padding: '10px' , cursor : "pointer"}}>Save</button>
        </form>
    );
};

export default CollegeForm;
