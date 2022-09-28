import React from 'react';
import './SingleActivity.css'
const SingleActivity = ({ activities, key }) => {
    return (
        <div className='activity'>
            {
                activities.map(activity => (
                    <div className='card'>
                        <img src={activity.picture} alt=''/>
                        <div className='card-info'>
                            <h2>{activity.name}</h2>
                            <p><b>Age:</b>  {activity.age}</p>
                            <p><b>Time:</b>  {activity.time}hr</p>
                            <p>{activity.description.slice(0, 100)}...</p>
                            <button className='btn-add'><p>Add this activities</p></button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default SingleActivity;