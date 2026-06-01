import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

import "../styles/About.css";

export default function About({ dark, setDark }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (!section) return;

      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="about-section">
      
      <div className="theme-toggle-wrapper">
        <ThemeToggle dark={dark} setDark={setDark} />
      </div>

      <div className={`about-container ${visible ? "show" : ""} ${dark ? "dark-mode" : "light-mode"}`}>

        <h2 className="about-title">About Me</h2>

        <p className="about-text">
          I am a detail-oriented Full Stack Developer who loves transforming complex problems into elegant,
          user-friendly web applications. With a solid foundation in both frontend design and backend
          architecture, I build scalable systems that deliver smooth digital experiences.
        </p>

        <p className="about-text">
          Whether designing responsive user interfaces, optimizing database queries, or deploying cloud
          infrastructure, I thrive on continuous learning and staying up-to-date with modern tech stacks.
          Let's build something impactful together!
        </p>

      </div>
    </section>
    
  );
}