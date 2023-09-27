import React from "react";
import '../Style/Contact.css'
import { useState, useEffect } from 'react';

function Contact() {

    const [overlayOpacity, setOverlayOpacity] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('contact');
            const aboutSectionHeight = aboutSection.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY;

            const distanceFromTop = aboutSection.offsetTop - scrollPosition;

            if (distanceFromTop <= windowHeight) {
                const progress = 1 - distanceFromTop / aboutSectionHeight;
                setOverlayOpacity(progress);
            } else {
                setOverlayOpacity(0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleEmailClick = () => {
        window.location.href = "mailto:shlomikaravani@gmail.com";
    };
    return (
        <section id="contact" className="Contact-section">
            <div className="overlay" style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}></div>
            <h1 className="pageHeader">Contact </h1>
            <div className="page_contactContent__ZnvL_ glass">
                <div className="page_linksSection__oE46i glass">
                    <div className="page_linksDiv__piddR glass">
                        <p>contact me at</p>
                        <a href="https://github.com/shlomi90" className="page_links__XDbcp" aria-label="github link" target="_blank">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <title>github</title>
                                    <rect width="24" height="24" fill="none"></rect>
                                    <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path>
                                </g>
                            </svg>
                        </a>
                        <span className="page_or__k2Dn2">or</span>
                        <a href="https://www.linkedin.com/in/shlomi-karavani-9a69861bb/" className="page_links__XDbcp" aria-label="linkedin link" target="_blank">
                            <svg fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-143 145 512 512" stroke="#ffffff">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"></path>
                                        <rect x="-8.5" y="348.4" width="49.9" height="159.7"></rect>
                                        <path d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C45.1,284.9,33.8,273,15.4,273z"></path>
                                        <path d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-86.3C241,360.2,231.1,346.9,177.7,346.9z"></path>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <button className="email_btn" onClick={handleEmailClick}>Email Me</button>
                </div>
            </div>
            <footer className="site-footer">
                <p>Shlomikaravani@gmail.com</p>
                <p>0528086889</p>
            </footer>

        </section>





    );
}

export default Contact;

