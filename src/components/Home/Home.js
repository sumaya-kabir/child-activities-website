import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import RecordActivity from '../RecordActivity/RecordActivity';
import './Home.css';
const Home = () => {
    const [activities, setActivities] = useState([]);
    const [record, setRecord] = useState([]);

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
                record={record}
                setRecord={setRecord}
                ></Activities>
            </div>
            <div className="activities-record-container">
                    <RecordActivity
                    record={record}
                    ></RecordActivity>
            </div>
        </div>
    );
};

export default Home;