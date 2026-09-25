import "../Styles/Contact.css"
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faInstagram,
    faYoutube,
    faLeetcode,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


export default function Contact() {
    const navigate = useNavigate();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                alert("Message sent!");
                form.current.reset();
            })
            .catch((err) => {
                console.error(err);
            });
    }
    return (
        <div className="contact-page">
            <div className="poster">
                <div className="poster-image">
                    <img src="/8881310.jpg" alt="J. Robert Oppenheimer" />
                    <span><a href="https://en.wikipedia.org/wiki/J._Robert_Oppenheimer" target="_blank" rel="noopener noreferrer">J. Robert Oppenheimer</a></span>
                </div>
                <div className="poster-content">
                    <button
                        type="button"
                        className="back-button-contact"
                        onClick={() => navigate('/')}
                        aria-label="Back to home"
                    >◂ Home</button>
                    <h1>BUILD SOMETHING UNFORGETTABLE!</h1>
                </div>
            </div>
            <div className="contact-section">
                <div className="social-handles">
                    <h1>Social Media Handles</h1>
                    <div className="social-links">
                        <h4>E-mail :</h4>
                        <p>
                            abhishekkushwah1359@gmail.com
                        </p>
                        <h4>Based in :</h4>
                        <p>Gwalior, Madhya Pradesh</p>
                        <ul>
                            <li><span><FontAwesomeIcon icon={faGithub} /></span><a href="https://github.com/abhishekkushwah777" target="_blank" rel="noopener noreferrer">Github</a></li>
                            <li><span><FontAwesomeIcon icon={faLinkedin} /></span><a href="https://www.linkedin.com/in/abhishek-kushwah-1b946a228/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><span><FontAwesomeIcon icon={faInstagram} /></span><a href="https://www.instagram.com/bigbrain_abhishek/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><span><FontAwesomeIcon icon={faYoutube} /></span><a href="https://www.youtube.com/@bigbrainabhishek" target="_blank" rel="noopener noreferrer">Youtube</a></li>
                            <li><span><FontAwesomeIcon icon={faLeetcode} /></span><a href="https://leetcode.com/u/AbhishekKushwah/" target="_blank" rel="noopener noreferrer">Leetcode</a></li>
                        </ul>
                    </div>
                </div>
                <div className="contact-form">
                    <h1>Get In Touch</h1>
                    <form id="contact-form" ref={form} onSubmit={sendEmail}>
                        <label htmlFor="user_name">Your Name</label>
                        <input type="text" id="user_name" name="user_name" required />

                        <label htmlFor="user_email">Your Email</label>
                        <input type="email" id="user_email" name="user_email" required />

                        <label htmlFor="company">Company (Optional)</label>
                        <input type="text" id="company" name="company" autoComplete="on" />

                        <label htmlFor="service_type">What do you need help with?</label>
                        <select id="service_type" name="service_type" required>
                            <option value="" defaultValue>Select a service...</option>
                            <option value="Sketching">Sketching</option>
                            <option value="UI Designing">UI Designing</option>
                            <option value="Graphic Designing">Graphic Designing</option>
                            <option value="Video Editing">Video Editing</option>
                            <option value="Web/Software Development">Web/Software Development</option>
                            <option value="Other">Other / Just saying hi!</option>
                        </select>

                        <label htmlFor="message">Message for me</label>
                        <textarea id="message" name="message" rows="5" required></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}