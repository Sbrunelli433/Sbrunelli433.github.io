import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.styles.scss';

function Footer() {
    return (
        <div className="footer-component">
            <div className='footer-container'>
                <div className='footer-row'>
                    <div className='footer-column'>
                        <div className='footer-column-header'>
                            <Link to='/about' >
                                About
                            </Link>
                        </div>
                        <Link to='/about'  className="footer-link" >
                            About
                        </Link>
                        <Link to='/about' className="footer-link">
                            About
                        </Link>
                        <Link to='/about' className="footer-link">
                            About
                        </Link>
                    </div>
                    <div className='footer-column'>
                        <div className='footer-column-header'>
                            <Link to='/projects' >
                                Projects
                            </Link>
                        </div>
                        <Link to='/about'  className="footer-link" >
                            About
                        </Link>
                        <Link to='/about' className="footer-link">
                            About
                        </Link>
                        <Link to='/about' className="footer-link">
                            About
                        </Link>
                    </div>
                    <div className='footer-column'>
                        <div className='footer-column-header'>
                            <Link to='/contact' >
                                Contact
                            </Link>
                        </div>
                        <Link to='/about'  className="footer-link" >
                            About
                        </Link>
                        <Link to='/about' className="footer-link">
                            About
                        </Link>
                        <Link to='/about' className="footer-link">
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;