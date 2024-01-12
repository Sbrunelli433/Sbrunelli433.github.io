import React from 'react';
import { Link } from 'react-router-dom';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styles';

const Menu = ({ open, ...props }) => {
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            <Link to='/about' className='header-item' tabIndex={tabIndex}>
                About
            </Link>
            <Link to='/projects' className='header-item' tabIndex={tabIndex}>
                Projects
            </Link>
            <Link to='/contact' className='header-item' tabIndex={tabIndex}>
                Contact
            </Link>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;