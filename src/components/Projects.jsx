import React from "react";
import "../styles/Projects.css";

export default function Projects() {
    return (
        <section id="projects" className="projects-section">

            <h2 className="section-title">Projects</h2>

            <div className="projects-container">

                <div className="project-card">
                    <h3>POS System</h3>
                    <p>Full Stack POS Sales System</p>
                    <p>Technologies: React, Node.js, MySQL</p>

                    <img src="/assets/POS.png" alt="POS Project" />

                    <div className="project-links">
                        <a href="https://youtube.com/@ite3amcode?si=ZO8u9NulWZcs5oYB" target="_blank" rel="noreferrer">Demo</a>
                        <a href="https://github.com/RachnyCodeTK" target="_blank" rel="noreferrer">Github</a>
                    </div>
                </div>

                <div className="project-card">
                    <h3>Portfolio Website</h3>
                    <p>Modern developer portfolio</p>
                    <p>Technologies: React, CSS, Vite</p>

                    <img src="/assets/Portfolio.png" alt="Portfolio" />

                    <div className="project-links">
                        <a href="https://youtube.com/@ite3amcode?si=ZO8u9NulWZcs5oYB" target="_blank" rel="noreferrer">Demo</a>
                        <a href="https://github.com/RachnyCodeTK" target="_blank" rel="noreferrer">Github</a>
                    </div>
                </div>

                <div className="project-card">
                    <h3>Anime Shop UI</h3>
                    <p>Shopping UI design system</p>
                    <p>Technologies: React, API</p>

                    <img src="/assets/anime.jpg" alt="" />
                    <div className="project-links">
                        <a href="https://youtube.com/@ite3amcode?si=ZO8u9NulWZcs5oYB" target="_blank" rel="noreferrer">Demo</a>
                        <a href="https://github.com/RachnyCodeTK" target="_blank" rel="noreferrer">Github</a>
                    </div>
                </div>

                <div className="project-card">
                    <h3>Computer Shop</h3>
                    <p>Computer shop UI design system</p>
                    <p>Technologies: HTML, CSS, JavaScript</p>

                    <img src="/assets/Tech Shop.png" alt="Computer Shop" />

                    <div className="project-links">
                        <a href="https://youtube.com/@ite3amcode?si=ZO8u9NulWZcs5oYB" target="_blank" rel="noreferrer">Demo</a>
                        <a href="https://github.com/RachnyCodeTK" target="_blank" rel="noreferrer">Github</a>
                    </div>
                </div>

                <div className="project-card">
                    <h3>Download tools Website</h3>
                    <p>Website for downloading tools MP3 and MP4 from YouTube, etc.</p>
                    <p>Technologies: Node, React, Python</p>

                    <img src="/assets/tools.png" alt="Download tools" />

                    <div className="project-links">
                        <a href="https://youtube.com/@ite3amcode?si=ZO8u9NulWZcs5oYB" target="_blank" rel="noreferrer">Demo</a>
                        <a href="https://github.com/RachnyCodeTK" target="_blank" rel="noreferrer">Github</a>
                    </div>
                </div>

                  <div className="project-card">
                    <h3>Food Shop Website</h3>
                    <p>Website for a food shop</p>
                    <p>Technologies: Node, React, CSS</p>

                    <img src="/assets/Food.png" alt="Food Shop" />

                    <div className="project-links">
                        <a href="https://youtube.com/@ite3amcode?si=ZO8u9NulWZcs5oYB" target="_blank" rel="noreferrer">Demo</a>
                        <a href="https://github.com/RachnyCodeTK" target="_blank" rel="noreferrer">Github</a>
                    </div>
                </div>
            </div>
        </section>
    );
}