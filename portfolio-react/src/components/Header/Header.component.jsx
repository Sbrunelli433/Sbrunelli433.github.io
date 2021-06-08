import React from 'react';
import { Link } from 'react-router-dom';

import './Header.styles.scss';

function Header() {

    return (
        <div className="header-component">
            <div className="left-header">

            </div>
            <div className="right-header">
                <Link to='/'>
                    Home
                </Link>
                <Link to='/about'>
                    About
                </Link>
                <Link to='/projects'>
                    Projects
                </Link>
                <Link to='/contact'>
                    Contact
                </Link>
            </div>        
        </div>
    );
}

export default Header;