import React from 'react';
import './RecordActivity.css';
import user from './parent.jpg';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const RecordActivity = () => {
    const notify = () => toast("Activity Completed!");
    return (
        <div className='record-container'>
            {/* Parent and child info */}
            <div className="parent-info">
                <img src={user} alt="" />
                <div>
                    <h4>Sumaya Kabir</h4>
                    <p>Narayanganj, Bangladesh</p>
                </div>
            </div>
            <div className='child-info'>
                <div>
                    <p>Child</p>
                    <h3>1</h3>
                </div>
                <div>
                    <p>Baby</p>
                    <h3>Girl</h3>
                </div>
                <div>
                    <p>Age</p>
                    <h3>2 yr</h3>
                </div>
            </div>

            {/* Break time  */}
            <div className="break-container">
            <h3>Need Break</h3>
            <div className="child-info">
                <button className='break-btn'>5m</button>
                <button className='break-btn'>10m</button>
                <button className='break-btn'>15m</button>
                <button className='break-btn'>20m</button>
            </div>
            </div>

            {/* Excercise Detail  */}
            <div className='activity-details'>
                <h3>Activity Details</h3>
                <div className="child-info">
                    <h4>Crafting Time</h4>
                    <p>200 seconds</p>
                </div>
                <div className="child-info">
                    <h4>Break Time</h4>
                    <p>100 seconds</p>
                </div>
            </div>
            <button onClick={notify} className='complete-btn'><p>Activity Completed</p></button>
            <ToastContainer />
        </div>
    );
};

export default RecordActivity;