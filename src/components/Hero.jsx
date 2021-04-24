import React from 'react';
import selfie from '../images/IMG_1394.jpeg';

const Hero = () => {
    return  (
    <div className="hero">
    <div className="ben-pic title">
        <img src={selfie} alt="A beautiful persons face." />
    </div>
    <div className="words">
    <p>I'm currently working as a garbage man, in San Francisco CA, with the goal to pivot careers into a web-development roll. I'm proficient with HTML5, CSS3, JavaScript, jQuery, Node.js, MySQL, and learning more every day. </p>
    </div>
</div>)
}

export default Hero;