import React, { Fragment } from 'react';
import { SKILLS } from '../component/constant';

function Skills() {
    return (
        <Fragment>
            <section id="skills" className="section skills-section">
                <div className="container">
                    <h2 className="section-title">Skills</h2>
                    <div className="skills-grid">
                        {SKILLS.map(group => (
                            <div key={group.category} className="skill-group">
                                <h3 className="skill-category">{group.category}</h3>
                                <ul className="skill-list">
                                    {group.items.map(skill => (
                                        <li key={skill} className="skill-item">{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Skills;
