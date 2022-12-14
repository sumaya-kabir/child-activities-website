
import './SingleActivity.css'
const SingleActivity = ({ activity, handleAddActivities }) => {
    const {name, age, time, description, picture} = activity;

    return (
        <div>
            
            <div className='card'>
                        <img src={picture} alt=''/>
                        <div className='card-info'>
                            <h2>{name}</h2>
                            <p><b>Age:</b>  {age}</p>
                            <p><b>Time:</b>  {time}hr</p>
                            <p>{description.slice(0, 100)}...</p>
                            <button onClick={() => handleAddActivities(activity.time)} className='btn-add'><p>Add this activities</p></button>
                        </div>
                    </div>
        </div>
    );
};

export default SingleActivity;