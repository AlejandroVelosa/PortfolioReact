import React from "react";
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaGithub,
    FaLinkedinIn,
    FaWhatsapp,
    FaDribbble,
} from "react-icons/fa";


import { FiSend } from "react-icons/fi";

import "./contact.css";

const Contact = () => {
    return (
        <section className="contact section">
            <h2 className="section_title">
                Get In <span>Touch</span>
            </h2>

            <div className="contact_container container grid">
                <div className="contact_data">
                    <h3 className="contact_title">Don't be Shy !</h3>

                    <p className="contact_description">
                        Let's talk! I'm excited to collaborate with you on exciting projects. Send me a message through the contact form to start our conversation.
                    </p>

                    <div className="contact_info">
                        <div className="info_item">
                            <FaEnvelopeOpen className="info__icon" />

                            <div>
                                <span className="info_title">Mail Me</span>
                                <h4 className="info_desc">Alejovelosa4@gmail.com</h4>
                            </div>
                        </div>

                        <div className="info_item">
                            <FaPhoneSquareAlt className="info__icon" />

                            <div>
                                <span className="info_title">Call Me</span>
                                <h4 className="info_desc">+57 3103366926</h4>
                            </div>
                        </div>
                    </div>

                    <div className="contact_socials">
                        <a href="https://github.com/AlejandroVelosa" className="contact_social-link">
                            <FaGithub />
                        </a>

                        <a href="https://www.linkedin.com/in/jairo-alejandro-velosa-bola%C3%B1os-879986270/" className="contact_social-link">
                            <FaLinkedinIn />
                        </a>

                        <a href="https://wa.me/34602543866" className="contact_social-link">
                            <FaWhatsapp />
                        </a>

                    </div>
                </div>

                <form className="contact_form">
                    <div className="form_input-group">
                        <div className="form_input-div">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="form_control"
                            />
                        </div>


                        <div className="form_input-div">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="form_control"
                            />
                        </div>


                        <div className="form_input-div">
                            <input
                                type="text"
                                placeholder="Your subject"
                                className="form_control"
                            />
                        </div>

                    </div>

                    <div className="form_input-div">
                        <textarea placeholder="Your Message" className="form_control textarea">
                        </textarea>
                    </div>


                    <button className="button">
                        send Message
                        <span className="button__icon contact_button-icon">
                            <FiSend />
                        </span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
