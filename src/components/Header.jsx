import React from 'react';


const Header = () => {
return (
<header>
        <h1> Ben Wade</h1>
        <nav>
            <ul>
                <p className="menu-btn">Menu</p>
                <li>
                    <a className="menu-item" href="#about-me">About Me</a>
                </li>
                <li>
                    <a className="menu-item" href="#work">Projects</a>
                </li>
                <li>
                    <a className="menu-item" href="#contact-me">Contact Me</a>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;