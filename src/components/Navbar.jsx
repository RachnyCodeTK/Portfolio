import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import "../styles/Navbar.css";

export default function Navbar({ dark, setDark }) {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const onScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.clientHeight;

        if (window.scrollY >= top - height / 3) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="custom-navbar">
      <a className="navbar-logo" href="#">
        3AM CODING
      </a>

      <div className="navbar-links-container">
        <a className={`nav-link ${active === "about" ? "active" : ""}`} href="#about">About</a>
        <a className={`nav-link ${active === "skills" ? "active" : ""}`} href="#skills">Skills</a>
        <a className={`nav-link ${active === "projects" ? "active" : ""}`} href="#projects">Projects</a>
        <a className={`nav-link ${active === "contact" ? "active" : ""}`} href="#contact">Contact</a>

        <ThemeToggle dark={dark} setDark={setDark} />
      </div>
    </nav>
  );
}