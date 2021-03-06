import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';


const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_agr6ejb', 'template_ylbxz0k', e.target, 'user_S6woBqlbuBDFAiHcuDGON')
            .then((result) => {
                console.log(result.text);
                alert('Email send successfully');
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <section className="d-flex width-70 m-align brr-10 p-20 contactSection montserrat text-white">
            <div className="d-flex flex-col generalContact">
                <h1 className="text-coral">Contact Me <br /><span className="text-white">If You Want To Know Something More.</span></h1>
                <div className="d-flex flex-col">
                    <p><FontAwesomeIcon className="icons text-coral" icon={faMailBulk} />protyasha0999@gmail.com</p>
                    <p><FontAwesomeIcon className="icons text-coral" icon={faPhone} />01866557428</p>
                    <p><FontAwesomeIcon className="icons text-coral" icon={faMapMarker} />Dinajpur,Bangladesh</p>
                </div>
                <div className="width-50 m-align">
                    <h3 className="text-center text-coral">Social Profiles</h3>
                    <div className="d-flex justify-content-evenly">
                        <a href="https://www.facebook.com/joe.guy.503645/">
                            <FontAwesomeIcon className="socialIcons text-white f-30" icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com/protyasha_201/">
                            <FontAwesomeIcon className="socialIcons text-white f-30" icon={faInstagram} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon className="socialIcons text-white f-30" icon={faTwitter} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="width-50">
                <h1 className="text-=white">Let's Talk</h1>
                <form onSubmit={sendEmail} className="d-flex flex-col form">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="text" name="email" placeholder="Your e-Mail" required />
                    <textarea className="textarea" type="text" name="message" placeholder="Type Message" required />
                    <button className="sendMessageBtn" type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;