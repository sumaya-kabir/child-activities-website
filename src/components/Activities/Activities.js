import React from 'react';
import SingleActivity from '../SingleActivity/SingleActivity';
import './Activities.css';
const Activities = ({ activities, key }) => {
    return (
        <div className='activities'>
            <h2>Animals Themed Activities and Crafts for Children</h2>
            {
                <SingleActivity
                key={key}
                activities={activities}
                ></SingleActivity>
            }
        </div>
    );
};

export default Activities;