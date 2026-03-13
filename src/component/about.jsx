import React, { Fragment } from 'react';
import { PROFILE } from '../component/constant';

const About = () => {
    return (
            <section id="about" className="section about-section">
                <div className="container">
                    <h2 className="section-title">About</h2>
                    <p className="section-text">
                        {PROFILE.summary}
                    </p>
                    <p className="section-text">
                        Based in {PROFILE.location}. I enjoy building clean, responsive user interfaces
                        and learning new frontend technologies.
                    </p>
                </div>
            </section>
    );
};

export default About;
