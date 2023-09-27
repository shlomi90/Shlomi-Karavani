import React, { useState, useEffect } from 'react';
import '../Style/App.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import CV from '../Assets/Shlomi_Karavani_CV.pdf';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [overlayOpacity, setOverlayOpacity] = useState(0.8);

  useEffect(() => {
    const handleScroll = () => {

      const aboutSection = document.getElementById('home');
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  const h1Style = {
    fontSize: '2em',
    fontFamily: 'Verdana, Arial, Tahoma, Serif',
  };

  const h2Style = {
    fontSize: '1.2em',
    fontFamily: 'Verdana, Arial, Tahoma, Serif',
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg  fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home"></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSection('home')} href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSection('about')} href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSection('projects')} href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-contact" onClick={() => scrollToSection('contact')} href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br>
      </br>

      <section id="home" className="App-section">
        <div className="overlay" style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}></div>
        <header className="App-header">
          <h1 style={h1Style}>Not Your Average</h1>
          <h1 style={h1Style}>Software Engineer</h1>
          <br />
          <p style={h2Style}>Fullstack developer with passion for code</p>
          <p style={h2Style}>Turning ideas into code, one line at a time.</p>

          <a href={CV} download="Shlomi Karavani" className="header-resume-link">Download CV</a>
        </header>
      </section>

      <About />
      <br>
      </br>
      <br>
      </br>

      <Projects />
      <br>
      </br>
      <br>
      </br>

      <Contact />
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>s

    </div>
  );
}

export default App;
