import React from 'react';
import './SingleActivity.css'
const SingleActivity = ({ activity }) => {
    const {name, age, time, description, picture} = activity;

    const handleAddActivities = () => {
        let prevTime = 0;
        prevTime = activity.time + prevTime;
        return prevTime;
    }
    return (
        <div>
            
            <div className='card'>
                        <img src={picture} alt=''/>
                        <div className='card-info'>
                            <h2>{name}</h2>
                            <p><b>Age:</b>  {age}</p>
                            <p><b>Time:</b>  {time}hr</p>
                            <p>{description.slice(0, 100)}...</p>
                            <button onClick={handleAddActivities} className='btn-add'><p>Add this activities</p></button>
                        </div>
                    </div>
        </div>
    );
};

export default SingleActivity;