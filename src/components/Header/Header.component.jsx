import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logos/crown.svg';
import Menu from "../Menu/Menu.component";
import Hamburger from './Hamburger/Hamburger.component';
import FocusLock from 'react-focus-lock';


import './Header.styles.scss';

function Header() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
    const useOnClickOutside = (ref, handler) => {
        useEffect(() => {
            const listener = event => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            
            document.addEventListener('mousedown', listener);
        
            return () => {
                document.removeEventListener('mousedown', listener);
            };
        },

        [ref, handler],

        );
    }

  useOnClickOutside(node, () => setOpen(false));


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
                <div ref={node}>
                <FocusLock disabled={!open}>

                    <Hamburger open={open} setOpen={setOpen} aria-controls={menuId} />
                    <Menu open={open} setOpen={setOpen} id={menuId} />
                    </FocusLock>
                </div>
                
            </div>        
        </div>
    );
}

export default Header;