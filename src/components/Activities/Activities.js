import React from 'react';
import './Activities.css';
const Activities = ({ activities }) => {
    return (
        <div className='activities'>
            <h2>Animals Themed Activities and Crafts for Children</h2>
            {
                activities.map(activity => (
                        <div>
                            <img src={activity.picture} alt=''/>
                            <h2>{activity.name}</h2>
                        </div>
                    
                ))
            }
        </div>
    );
};

export default Activities;