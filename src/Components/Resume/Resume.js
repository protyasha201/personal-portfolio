import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Resume.css';

const Resume = () => {
    const experiences = [
        {
            title: 'Frontend Web developer',
            des: `I am working for 2 years developing frontend websites. Learnt to add useful and creative sections. Developing user friendly UI's`
        },
        {
            title: 'Backend Web developer',
            des: `Deploying backend codes deploying database in a live site using Heroku. 1 years of work experience in backend. Made 5 websites using backend including this one.`
        },
        {
            title: 'Web Designer',
            des: `Looking of a website is really important. I always try to make a well structured website with my own designs. All designs are different than each other. Applying new things give more interaction.`
        },
        {
            title: 'Management',
            des: `Team management, client management are important to work in a company so, I did some team works. Became leader in some projects. I always gave priority to make my codes more readable.`
        },
    ]

    return (
        <section className="resumeSection  width-70 m-align brr-10">
            <div className="d-flex justify-content-space">
                <h1 className="robot-condensed text-white titleResume">Resume</h1>
                <div className="d-flex align-center justify-content-evenly borderWhite width-20 p-5 brr-10">
                    <a className="profileIcons text-coral f-30" href="#">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <h3 className="text-white montserrat">Profiles</h3>
                    <a className="profileIcons text-cornBlue f-30" href="#">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>
            <div className="montserrat">
                <h1 className="text-coral text-center">Experiences</h1>
                <div className="experienceContainer">
                    {
                        experiences.map(experience =>
                            <div className="experiences width-80 p-20" key={experience.title}>
                                <h3 className="text-cornBlue">{experience.title}</h3>
                                <p className="text-gray">{experience.des}</p>
                            </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Resume;