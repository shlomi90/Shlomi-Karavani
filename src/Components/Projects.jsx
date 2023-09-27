import React, { useState } from 'react';
import '../Style/Projects.css';
import { useEffect } from 'react';

const img1 = require('../Assets/Showarma.png')
const img2 = require('../Assets/simongame.png')
const img3 = require('../Assets/memory.png')
const img4 = require('../Assets/drum.png')


function Projects() {
    const [overlayOpacity, setOverlayOpacity] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('projects');
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

    ///////////////////////////////////////////////////////////////////////
    const projects = [{
        id: 1, title: 'ShoeWarma',
        description: (
            <>
                <p>
                    <span className='first-sentence'>
                        ShoeWarma is an online store that sells top brands shoes
                        and provides additional features
                        such as a shopping cart, Google API Map integration, web sockets, etc..
                    </span> </p>
                <div className="tech-section">
                    <h3>Front-end:</h3>
                    <ul>
                        <li>HTML, CSS, JavaScript</li>
                        <li>jQuery, AJAX requests</li>
                        <li>Bootstrap.</li>
                    </ul>
                </div>
                <div className="tech-section">
                    <h3>Back-end:</h3>
                    <ul>
                        <li>Node.js with Express.js as the web server framework</li>
                        <li>MongoDB for the database</li>
                        <li>Mongoose as the MongoDB object modeling tool</li>
                    </ul>
                </div>
                <div className="tech-section">
                    <h3>APIs:</h3>
                    <ul>
                        <li>Google Maps API for Stores Location.</li>
                    </ul>
                </div>
            </>
        ),
        image: (img1),
        link: 'https://github.com/shlomi90/ShoeWarma'
    },
    {
        id: 2,
        title: 'Simon Game',
        description: (
            <>
                <p>
                    <span className='first-sentence'>
                        The Simon game is the exciting electronic game of lights and sounds
                        in which players must repeat random sequences of lights
                        by pressing the colored pads in the correct order
                    </span> </p>
                <div className="tech-section">
                    <h3>Front-end:</h3>
                    <ul>
                        <li>HTML, CSS, JavaScript</li>
                        <li>jQuery</li>
                        <li>Bootstrap.</li>
                    </ul>
                </div>
            </>
        ),
        image: (img2),
        link: 'https://github.com/shlomi90/Simon-Game'
    },
    {
        id: 3,
        title: 'Memory Game',
        description: (
            <>
                <p>
                    <span className='first-sentence'>
                        A version of the classic game where we have to exercise our memory
                    </span> </p>
                <div className="tech-section">
                    <h3>Front-end:</h3>
                    <ul>
                        <li>HTML, CSS, JavaScript</li>
                        <li>jQuery</li>
                        <li>Bootstrap.</li>
                    </ul>
                </div>
            </>
        ),
        image: (img3),
        link: 'https://github.com/shlomi90/Memory-Game'
    },
    {
        id: 4,
        title: 'Drum Kit',
        description: (
            <>
                <p>
                    <span className='first-sentence'>
                        Virtual drum games where you can play Hip hop beats with  drum kits of the best drummers
                    </span> </p>
                <div className="tech-section">
                    <h3>Front-end:</h3>
                    <ul>
                        <li>HTML, CSS, JavaScript</li>
                        <li>jQuery</li>
                        <li>Bootstrap.</li>
                    </ul>
                </div>
            </>
        ),
        image: (img4),
        link: 'https://github.com/shlomi90/Drum-kit'
    },
        // Add more projects as needed
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    const openProjectModal = (project) => {
        setSelectedProject(project);
    }

    const closeProjectModal = () => {
        setSelectedProject(null);
    }


    return (
        <section id="projects" className="Projects-section">
            <h1>Projects</h1>
            <div className="overlay" style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}></div>

            {projects.map(project => (
                <div className="project" key={project.id} onClick={() => openProjectModal(project)}>

                    <h2>{project.title}</h2>
                    <img src={project.image} alt={project.title} />
                </div>
            ))}
            {selectedProject && (
                <div className="project-modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeProjectModal}>&times;</span>
                        <h2>{selectedProject.title}</h2>
                        <p>{selectedProject.description}</p>
                        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                    </div>
                </div>
            )}

        </section>
    );
}

export default Projects;
