import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
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
                key={activities.id}
                activities={activities}
                ></Activities>
            </div>
            <div className="activities-record-container">
                    
            </div>
        </div>
    );
};

export default Home;