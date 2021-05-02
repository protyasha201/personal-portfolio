import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Projects.css';
import travel360 from '../../images/travel-360.png';
import stairway from '../../images/stairway-heaven.png';
import godoth from '../../images/godoth-jorney.png';
import codePunk from '../../images/code-punk.png';
import calculator from '../../images/calculator.png';
import hungryMonster from '../../images/hungry-monster.png';
import pinGenerator from '../../images/pin-generator.png';
import clock from '../../images/clock.png';
import drums from '../../images/virtual-drums.png';

const Projects = () => {
    const fullStack = [
        {
            title: 'Travel 360',
            des: 'A travel management website.',
            img: travel360,
            liveLink: 'https://travel-360-81e93.web.app/'
        },
        {
            title: 'Stairway Heaven',
            des: 'E-commerce site with admin panel',
            img: stairway,
            liveLink: 'https://stairway-heaven.web.app/'
        },
        {
            title: 'Godoth Journey',
            des: 'Vehicle service website with google map',
            img: godoth,
            liveLink: 'https://godoth-journey-5c449.web.app/'
        },
    ]

    const webApps = [
        {
            title: 'Code Punk',
            des: 'A Code Editor to make websites.',
            img: codePunk,
            liveLink: 'https://protyasha201.github.io/code-punk/'
        },
        {
            title: 'Virtual Drums',
            des: 'Virtual Drum kit with mouseover.',
            img: drums,
            liveLink: 'https://protyasha201.github.io/virtual-drums/'
        },
        {
            title: 'Calculator',
            des: 'A Simple Calculator web app.',
            img: calculator,
            liveLink: 'https://protyasha201.github.io/Calculator/'
        },
        {
            title: 'Clock',
            des: 'This is a virtual clock with some animation',
            img: clock,
            liveLink: 'https://protyasha201.github.io/virtual-clock/'
        },
        {
            title: 'Pin Generator',
            des: 'A Pin Generator Web app.',
            img: pinGenerator,
            liveLink: 'https://protyasha201.github.io/pin-generator/'
        },
    ]

    const apiBased = [
        {
            title: 'Hungry Monster',
            des: 'A online food shop website',
            img: hungryMonster,
            liveLink: 'https://protyasha201.github.io/Hungry-Monster/'
        },
    ]

    return (
        <section className="projectsSection">
            <div className="projectsHeader d-flex justify-content-space align-center">
                <h1 className="roboto-condensed headTitle text-white">Projects</h1>
                <a className="text-cornBlue f-30 hoverIcon transition" href="https://github.com/protyasha201">
                    <span className="f-20 text-coral m-r-10">Codes</span>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>

            <div>
                <h1 className="text-cornBlue montserrat">Full-Stack</h1>
                <div className="projectsContainer">
                    {
                        fullStack.map(project =>
                            <div key={project.title} className="projects">
                                <div className="projectImg">
                                    <img alt={project.title} src={project.img} />
                                </div>
                                <div className="p-10 projectDetail">
                                    <h1 className="roboto-condensed">{project.title}</h1>
                                    <p className="montserrat">{project.des}</p>
                                    <a href={`${project.liveLink}`}>Preview</a>
                                </div>
                            </div>)
                    }
                </div>
            </div>

            <div>
                <h1 className="text-cornBlue montserrat">Full-Stack</h1>
                <div className="projectsContainer">
                    {
                        webApps.map(project =>
                            <div key={project.title} className="projects">
                                <div className="projectImg">
                                    <img alt={project.title} src={project.img} />
                                </div>
                                <div className="p-10 projectDetail">
                                    <h1 className="roboto-condensed">{project.title}</h1>
                                    <p className="montserrat">{project.des}</p>
                                    <a href={`${project.liveLink}`}>Preview</a>
                                </div>
                            </div>)
                    }
                </div>
            </div>

            <div>
                <h1 className="text-cornBlue montserrat">Full-Stack</h1>
                <div className="projectsContainer">
                    {
                        apiBased.map(project =>
                            <div key={project.title} className="projects">
                                <div className="projectImg">
                                    <img alt={project.title} src={project.img} />
                                </div>
                                <div className="p-10 projectDetail">
                                    <h1 className="roboto-condensed">{project.title}</h1>
                                    <p className="montserrat">{project.des}</p>
                                    <a href={`${project.liveLink}`}>Preview</a>
                                </div>
                            </div>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Projects;