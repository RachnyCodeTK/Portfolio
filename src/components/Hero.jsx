import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import "../styles/Hero.css";


export default function Hero({ dark, setDark }) {
  const roles = [
    "Full Stack Developer",
    "React Developer",
    "UI Designer",
    "Freelancer",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[index];

    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % roles.length);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  return (
    <section className="hero-section">

      <div className="hero-container">

        {/* Left */}
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span>Lout Rachny</span>
          </h1>

          {/* Animated text */}
          <h2 className="hero-typing">
            {text}
            <span className="cursor">|</span>
          </h2>

          <p className="hero-subtitle">
            I build modern, scalable, and beautiful web applications.
          </p>

          <div className="hero-buttons">
            <button className="btn primary"><a href="https://github.com/RachnyCodeTK">Projects ON Github </a>
            </button>
            <button className="btn outline"><a href="#contact">Contact Me</a></button>
          </div>
        </div>

        {/* Right */}
        <div className="hero-image-container">
          <img src="./assets/1.jpg" alt="Hero Image" className="hero-image" /> 
        </div>

      </div>
    </section>
  );
}