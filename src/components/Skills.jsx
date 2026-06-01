import React, { useEffect, useState } from "react";
import "../styles/Skills.css";

export default function Skills() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills");
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

  const skills = [
    { name: "HTML / CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 82 },
    { name: "Node.js", level: 80 },
    { name: "NPM", level: 70 },
    { name: "MySQL", level: 75 },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className={`skills-container ${visible ? "show" : ""}`}>

        <h2 className="skills-title">Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill.name}</h3>

              <div className="bar">
                <div
                  className="fill"
                  style={{ width: visible ? `${skill.level}%` : "0%" }}
                ></div>
              </div>

              <span>{skill.level}%</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}