import React from "react";
import { bool, func } from 'prop-types';
import { StyledBurger } from './Hamburger.styled';


const  Hamburger = ({ open, setOpen, ...props }) => {
    const isExpanded = open ? true : false;
    console.log(isExpanded);

    return (
        <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
            <span />
            <span />
            <span />
        </StyledBurger>
    );
}

Hamburger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Hamburger;