import React from 'react';
import { Link } from 'react-router-dom';

import './AboutPage.styles.scss';

const AboutPage = () => {

    return (
        <div className="about-page">
            <h1>This is my About Page</h1>
            <div className="top-content">
                <p>My Name is Steve Brunelli</p>
                <p>I am a devCodeCamp Alumnus</p>
                <p>I am a Front-End Web Developer</p>
                <p>Milwaukee is my home</p>
                <p>Driven by Growth and Passion</p>
            </div>
            <div className="bottom-content">
                <p>I am a Milwaukee Native</p>
                <p>I am a fan of the Milwaukee Bucks</p>
                <p>I coach part time for the Milwaukee Sting Volleyball Club</p>
            </div>
        </div>
    );
}

export default AboutPage;