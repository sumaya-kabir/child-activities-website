import React from 'react';
import SingleActivity from '../SingleActivity/SingleActivity';
import './Activities.css';
const Activities = ({ activities }) => {
    return (
        <div className='activities'>
            <h2>Animals Themed Activities and Crafts for Children</h2>
                <div className='activity'>
                {
                    activities.map(activity => <SingleActivity
                    activity={activity}
                    ></SingleActivity> )
                }
                </div>
                
        </div>
    );
};

export default Activities;