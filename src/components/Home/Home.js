import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import RecordActivity from '../RecordActivity/RecordActivity';
import './Home.css';
const Home = () => {
    const [activities, setActivities] = useState([]);
    const [totalTime, setTotalTime] = useState(0);

    const handleAddActivities = (currentTime) => {
        const updatedTime = totalTime + currentTime
        setTotalTime(updatedTime);
        localStorage.setItem("Craft-time", JSON.stringify(updatedTime));
        return;
    };

    useEffect(() => {
        const craftData = localStorage.getItem("Craft-time");
        handleAddActivities(JSON.parse(craftData));
    }, []);

    

    
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
                handleAddActivities={handleAddActivities}
                ></Activities>
            </div>
            <div className="activities-record-container">
                    <RecordActivity
                    handleAddActivities={handleAddActivities}
                    totalTime={totalTime}
                    ></RecordActivity>
            </div>
        </div>
    );
};

export default Home;