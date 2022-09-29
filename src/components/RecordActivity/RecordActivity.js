import React from 'react';
import './RecordActivity.css'
import user from './parent.jpg'

const RecordActivity = () => {
    return (
        <div>
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
            <div className="break-container">
            <h3>Need Break</h3>
            <div className="child-info">
                <button className='break-btn'>5m</button>
                <button className='break-btn'>10m</button>
                <button className='break-btn'>15m</button>
                <button className='break-btn'>20m</button>
            </div>
            </div>
        </div>
    );
};

export default RecordActivity;