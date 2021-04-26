import React from 'react';
import selfie from '../../images/IMG_1394.jpeg';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="content">
                <div className="ben-pic title">
                    <img className="" src={selfie} alt="A beautiful persons face." />
                </div>
                <div className="words">
                    <p>Based in the San Francisco Bay Area, I'm a full stack web developer with a passion for front end development. Proficient with HTML, CSS, JavaScript, NodeJS, Jquery, Express, ReactJS, Git, GitHub SQL, NoSQL, MySQL, Mongoose, MongoDB, Bootstrap, HandlebarsJS, Webpack and more...</p>
                </div>
            </div>
        </div>)
}

export default Hero;