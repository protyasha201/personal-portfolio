import React from 'react';
import './Skills.css';

const Skills = () => {
    const frontendSkills = [
        {
            title: 'JavaScript ES6',
            completed: '90'
        },
        {
            title: 'Typescript',
            completed: '85'
        },
        {
            title: 'HTML5',
            completed: '95'
        },
        {
            title: 'SASS',
            completed: '90'
        },
        {
            title: 'Styled-components',
            completed: '85'
        },
        {
            title: 'CSS3',
            completed: '90'
        },
    ]

    const backendSkills = [
        {
            title: 'MongoDb',
            completed: '85'
        },
        {
            title: 'Node Js',
            completed: '95'
        },
        {
            title: 'Mongoose',
            completed: '75'
        },
        {
            title: 'Express Js',
            completed: '90'
        },
    ]

    const frameWorkSkills = [
        {
            title: 'React Js',
            completed: '85'
        },
        {
            title: 'React-router-dom',
            completed: '90'
        },
        {
            title: 'Material UI',
            completed: '80'
        },
        {
            title: 'BootStrap',
            completed: '80'
        },
        {
            title: 'React BootStrap',
            completed: '75'
        },
        {
            title: 'Redux',
            completed: '70'
        },
        {
            title: 'Next Js',
            completed: '75'
        },
    ]

    const tools = [
        {
            title: 'NPM',
            completed: '95'
        },
        {
            title: 'Git',
            completed: '85'
        },
        {
            title: 'REST, HTTP',
            completed: '95'
        },
        {
            title: 'Heroku',
            completed: '90'
        },
        {
            title: 'Github',
            completed: '95'
        },
        {
            title: 'Postman',
            completed: '95'
        },
        {
            title: 'VS Code',
            completed: '80'
        },
        {
            title: 'Netlify',
            completed: '95'
        },
        {
            title: 'Firebase',
            completed: '85'
        },
        {
            title: 'OOP',
            completed: '80'
        },
        {
            title: 'Data Structure & Algorithm',
            completed: '70'   
        },
        {
            title: 'Figma',
            completed: '80'
        }
    ]

    return (
        <section className="skillsSection">
            <h1 className="text-coral f-30 text-center">SKILLS</h1>
            <div className="skills">
                <div className="d-flex flex-col skillsContainer">
                    <h1 className="roboto-condensed f-30 text-white">Frontend</h1>
                    {
                        frontendSkills.map(skills =>
                            <div key={skills.title} className="montserrat text-coral d-flex align-center">
                                <p className="width-20">{skills.title}</p>
                                <div className="lineContainer borderWhite brr-10">
                                    <div className={`width-${skills.completed} line`}></div>
                                </div>
                            </div>)
                    }
                </div>

                <div className="d-flex flex-col skillsContainer">
                    <h1 className="roboto-condensed f-30 text-white">Backend</h1>
                    {
                        backendSkills.map(skills =>
                            <div key={skills.title} className="montserrat text-coral d-flex align-center">
                                <p className="width-20">{skills.title}</p>
                                <div className="lineContainer borderWhite brr-10">
                                    <div className={`width-${skills.completed} line`}></div>
                                </div>
                            </div>)
                    }
                </div>

                <div className="d-flex flex-col skillsContainer">
                    <h1 className="roboto-condensed f-30 text-white">Libraries and Frameworks</h1>
                    {
                        frameWorkSkills.map(skills =>
                            <div key={skills.title} className="montserrat text-coral d-flex align-center">
                                <p className="width-20">{skills.title}</p>
                                <div className="lineContainer borderWhite brr-10">
                                    <div className={`width-${skills.completed} line`}></div>
                                </div>
                            </div>)
                    }
                </div>

                <div className="d-flex flex-col skillsContainer">
                    <h1 className="roboto-condensed f-30 text-white">Other Tools</h1>
                    {
                        tools.map(skills =>
                            <div key={skills.title} className="montserrat text-coral d-flex align-center">
                                <p className="width-20">{skills.title}</p>
                                <div className="lineContainer borderWhite brr-10">
                                    <div className={`width-${skills.completed} line`}></div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Skills;