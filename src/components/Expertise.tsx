import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "TypeScript",
    "JavaScript",
    "HTML5",
    "Python",
    "Java",
    "C++",
    "Python",
];

const labelsSecond = [
    "Organization",
    "Time Management",
    "Teamwork",
    "Leadership",
    "Communication",
    "Multitasking",
];

const labelsThird = [
    "Photoshop",
    "Illustrator",
    "Canva",
    "Blender"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in many technical aspects and am always eager to learn more!</p>
                    <div className="flex-chips">
                        <span className="chip-title">Languages:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCalendar} size="3x"/>
                    <h3>Management</h3>
                    <p>I have worked in management positions for organizations such as Princeton Triangle Club. I helped with scheduling, overseeing large meetings, and maintaining lines of communication between different teams.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Design</h3>
                    <p>I am passionate about the intersection between the arts and technology! I have always been involved in the arts through music, video games, and designing posters for school events.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;