import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../header-icons/index";

import "./Hamburger.styles.scss";

function Hamburger() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
      <div className="hamburger-component">
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'header-nav-menu active' : 'header-nav-menu'}>
            <li className="dropdown-member">
                <Link className="dropdown-login" to="/signin">login</Link>
                <Link className="dropdown-signup" to="/signup">join the fam</Link>
            </li>
            <li className='dropdown-nav-item'>
                <Link to='/rent' className='dropdown-link' onClick={closeMobileMenu}>
                    rent books
                </Link>
            </li>
            <li className='dropdown-nav-item'>
                <Link to='/return-renew' className='dropdown-link' onClick={closeMobileMenu}>
                    return/renew
                </Link>
            </li>
            <li className='dropdown-nav-item'>
                <Link to='/faqs' className='dropdown-link' onClick={closeMobileMenu}>
                    faqs
                </Link>
            </li>
            <li className='dropdown-nav-item'>
                <Link to='/policy' className='dropdown-link' onClick={closeMobileMenu}>
                    policies
                </Link>
            </li>
            <div className="dropdown-nav-menu-social">
                <a href="https://facebook.com/heliumbooks" rel="noopener noreferrer" target="_blank" className='social-links facebook' onClick={closeMobileMenu}>
                    <Icon className="fab fa-facebook-f" />                            </a>
            
                <a href="https://instagram.com/heliumbooks" rel="noopener noreferrer" target="_blank" className='social-links instagram' onClick={closeMobileMenu}>
                    <Icon className="fab fa-instagram" />
                </a>
            
                <a href="https://twitter.com/heliumbooks" rel="noopener noreferrer" target="_blank" className='social-links twitter' onClick={closeMobileMenu}>
                    <Icon className="fab fa-twitter" />
                </a>
            
                <a href="https://linkedin.com/company/helium-books" rel="noopener noreferrer" target="_blank" className='social-links linkedin' onClick={closeMobileMenu}>
                    <Icon className="fab fa-linkedin" />
                </a>
            
                <a href="https://tiktok.com/@heliumbooks?lang=en" rel="noopener noreferrer" target="_blank" className='social-links tiktok' onClick={closeMobileMenu}>
                    <Icon className="fab fa-tiktok" />
                </a>
            
                <a href="https://pinterest.com/heliumbooks/" rel="noopener noreferrer" target="_blank" className='social-links pinterest' onClick={closeMobileMenu}>
                    <Icon className="fab fa-pinterest" />
                </a>
            </div>
        </ul>
    </div>
    );
}
  export default Hamburger;