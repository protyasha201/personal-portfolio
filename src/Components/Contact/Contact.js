import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css';

const Contact = () => {
    const sendMessage = () => {
        alert('Message sent successfully');
    }
    return (
        <section className="d-flex width-70 m-align brr-10 p-20 contactSection montserrat text-white">
            <div className="d-flex flex-col generalContact">
                <h1 className="text-coral">Contact Me <br /><span className="text-white">If You Want To Know Something More.</span></h1>
                <div className="d-flex flex-col">
                    <p><FontAwesomeIcon className="icons text-coral" icon={faMailBulk} />protyasha0999@gmail.com</p>
                    <p><FontAwesomeIcon className="icons text-white" icon={faPhone} />01866557428</p>
                    <p><FontAwesomeIcon className="icons text-crimson" icon={faMapMarker} />Dinajpur,Bangladesh</p>
                </div>
                <div className="width-50 m-align">
                    <h3 className="text-center">Social Profiles</h3>
                    <div className="d-flex justify-content-evenly">
                        <a href="#">
                            <FontAwesomeIcon className="socialIcons text-cornBlue f-30" icon={faFacebook} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon className="socialIcons text-coral f-30" icon={faInstagram} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon className="socialIcons text-white f-30" icon={faTwitter} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="width-50">
                <h1 className="text-coral">Let's Talk</h1>
                <form onSubmit={sendMessage} className="d-flex flex-col form">
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