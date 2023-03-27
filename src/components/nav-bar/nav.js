import React from 'react';
import './nav.css';

function NavBar() {
  return (
    <div className='navbar'>
        <div className="logo">
            <h2>Joyce Kimojino-Weiss.<span class='logo-character'>_</span></h2>
        </div>
        {/* nav menu items */}
        <ul className='nav-menu'>
            <li>Home</li>
            <li>Expertise</li>
            <li>Projects</li>
            <li>Experience</li>
            <li>Contact Me</li>
        </ul>
    </div>
  )
}

export default NavBar