import React from 'react';
import { FiFacebook, FiInstagram, FiLinkedin, FiMail, FiPhone, FiTwitter } from 'react-icons/fi';

import './styles.css';

export default function Footer() {
    return (
        <footer className="footer-container">

            <div className="contact-container">

                <div className="email-text">
                    <FiMail />
                    <p>support@taskorganizer.com</p>
                </div>
                <div className="telefone-text">
                    <FiPhone />
                    <p>+55 555 5555 5555</p>
                </div>
                <div className="copyright-text">
                    <p>2021, TASK ORGANIZER</p>
                </div>

            </div>

            <div className="about-container">
                <h4 className="about-title">ABOUT THE SITE</h4>
                <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus hic voluptates laboriosam
                exercitationem.</p>
            </div>

            <div className="social-media-container">
                <FiInstagram />
                <FiFacebook />
                <FiLinkedin />
                <FiTwitter />
            </div>
        </footer>
    );
}