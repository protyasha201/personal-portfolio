import React from 'react';
import './Home.css';
import profileImage from '../../images/profileImage.jpg';
import Typing from 'react-typing-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    const aboutMe = {
        description: `Hey, I am Protyasha. I am a web developer. I love to learn new things about technology and apply them with my creativity. Now I am making interactive web-apps and websites using trending libraries and frameworks.`
    }
    const AnimatedTypingComponent = () => (
        <Typing>
            <h1 className="text-white f-30">Protyasha Roy</h1>
        </Typing>
    );

    return (
        <section className="homePage d-flex flex-col">
            <div className="homeHeader d-flex justify-content-around">
                <div className="d-flex justify-content-center profileImage">
                    <img src={profileImage} alt="protyasha" />
                </div>
                <div className="text-center d-flex flex-col shortInfo">
                    <AnimatedTypingComponent />
                    <p className="text-white">Full Stack Web Developer</p>
                    <div className="d-flex justify-content-evenly contactLinks">
                        <a href="https://www.facebook.com/joe.guy.503645/" ><FontAwesomeIcon icon={faFacebook} className="text-white" /></a>
                        <a href="#" ><FontAwesomeIcon icon={faTwitter} className="text-white" /></a>
                        <a href="https://www.instagram.com/protyasha_201/" ><FontAwesomeIcon icon={faInstagram} className="text-white" /></a>
                    </div>
                </div>
            </div>
            <div className="d-flex shortDescription">
                <div className="montserrat width-50 aboutShort">
                    <h2>About <span className="text-cornBlue">Me</span></h2>
                    {
                        <p>{aboutMe.description}</p>
                    }
                    <a href="https://drive.google.com/file/d/1GFh6qtqA8mDyuPN_0TSZSQbZx3hd0O3G/view?usp=sharing" download className="downloadResumeBtn">Download Resume</a>
                </div>
                <div className="width-50 montserrat d-flex shortContact">
                    <div className="width-50">
                        <h4>Age</h4>
                        <h4>Residence</h4>
                        <h4>Address</h4>
                        <h4>Phone</h4>
                        <h4>e-Mail</h4>
                    </div>
                    <div className="width-50 info">
                        <h4>16</h4>
                        <h4>Bangladesh</h4>
                        <h4>Dinajpur, Bangladesh</h4>
                        <h4>01866557428</h4>
                        <p>protyasha0999@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;