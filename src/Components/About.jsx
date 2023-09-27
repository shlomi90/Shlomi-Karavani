import React, { useState, useEffect } from "react";
import logo1 from '../Assets/github.png';
import logo2 from '../Assets/git.png';
import logo3 from '../Assets/js.png';
import logo4 from '../Assets/react.png';
import logo5 from '../Assets/node.png';
import logo6 from '../Assets/html.png';
import logo7 from '../Assets/java.png';
import logo8 from '../Assets/bootstrap.png';
import logo9 from '../Assets/mongodb.png';
import logo10 from '../Assets/angular.png';
import logo11 from '../Assets/sql.png';
import logo12 from '../Assets/oop.png';
import profileImage from '../Assets/good.png';


import '../Style/About.css';

function About() {
    const [overlayOpacity, setOverlayOpacity] = useState(0);
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12];

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about');
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

    return (
        <section id="about" className="About-section">
            <div className="overlay" style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}></div>
            <header className="About-header">
                <img src={profileImage} alt="Profile" className="profile-image" />

                <h1>Hey! I'm Shlomi, thanks for visiting!</h1>
                <p>Committed and hardworking individual who enjoys challenges.</p>
                <p>Possessing a passion for creating clean, efficient code, </p>
                <p>and a drive to continuously learn. </p>
                <div className="logo-toolbar">
                    <div className="logo-scroll">
                        {logos.map((logo, index) => (
                            <img key={index} src={logo} alt={`Logo ${index}`} />
                        ))}
                    </div>
                </div>
            </header>

        </section>
    )
}

export default About;
