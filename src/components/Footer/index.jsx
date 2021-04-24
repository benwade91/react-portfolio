import React from 'react';
import './style.css'
const Footer = () => {

    return <footer>
        <div className="copyright">
            <p>Thanks for checking me out!</p>
        </div>
        <div className="social">
            <a href="https://www.instagram.com/_benwade_/" className="face fa fa-instagram"> </a>
            <a href="https://github.com/benwade91" className="tweet fa fa-github"> </a>
            <a href="https://www.linkedin.com/in/ben-wade-6abb621b7/" className="linked fa fa-linkedin"> </a>
        </div>
    </footer>
}

export default Footer;