import React from 'react';
import logo from './logo.png';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
            <img src={logo} alt=''/>
            </nav>
        </div>
    );
};

export default Header;