import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import RecordActivity from '../RecordActivity/RecordActivity';
import './Home.css';
const Home = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, []);

    return (
        <div className='home'>
            <div className="activities-container">
                <Activities
                activities={activities}
                ></Activities>
            </div>
            <div className="activities-record-container">
                    <RecordActivity></RecordActivity>
            </div>
        </div>
    );
};

export default Home;