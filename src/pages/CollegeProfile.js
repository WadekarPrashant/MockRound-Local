import React, { useEffect, useState } from 'react';

const CollegeProfilePage = () => {
    const [college, setCollege] = useState(null);

    useEffect(() => {
        const fetchCollege = async () => {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:5000/api/colleges/profile', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setCollege(data);
            } else {
                console.log('Failed to fetch college profile');
            }
        };

        fetchCollege();
    }, []);

    if (!college) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>College Profile</h1>
            <p>Name: {college.collegeName}</p>
            <p>Email: {college.email}</p>
            {/* Add more fields as necessary */}
        </div>
    );
};

export default CollegeProfilePage;
