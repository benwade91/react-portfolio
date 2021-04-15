import React from 'react';
import selfie from '../images/IMG_1394.jpeg';

const Hero = () => {
    return  (
    <div className="hero">
    <div className="ben-pic">
        <img src={selfie} alt="A beautiful persons face." />
    </div>
    <div className="cool-subtitle">
        <p>The Garbage Man</p>
    </div>
</div>)
}

export default Hero;