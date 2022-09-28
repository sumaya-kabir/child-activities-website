import React from 'react';
import Activities from '../Activities/Activities';
import './Home.css';
const Home = () => {
    return (
        <div>
            <div className="activities-container">
                <Activities></Activities>
            </div>
            <div className="activities-record-container">

            </div>
        </div>
    );
};

export default Home;