import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logos/crown.svg';
import Hamburger from './Hamburger/Hamburger.component';

import './Header.styles.scss';

function Header() {

    return (
        <div className="header-component">
            <div className="left-header">
                <Link className='navbar-logo' to='/'>
                    <Logo  />
                </Link>
            </div>
            <div className="right-header">
                <Link to='/about' className='header-item'>
                    About
                </Link>
                <Link to='/projects' className='header-item'>
                    Projects
                </Link>
                <Link to='/contact' className='header-item'>
                    Contact
                </Link>
                <Hamburger />
            </div>        
        </div>
    );
}

export default Header;