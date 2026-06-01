import React from "react";
import {
  FaTelegram,
  FaYoutube,
  FaTiktok,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../styles/Style.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* TOP */}
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-info">
          <h2>3AM CODING</h2>

          <p>
            Passionate Full Stack Developer building modern web applications.
          </p>

          <div className="footer-contact">
            <p>
              <FaPhone /> +855 93 416 110
            </p>

            <p>
              <FaEnvelope /> rachnyb.l@gmail.com
            </p>

            <p>
              <FaMapMarkerAlt /> Phnom Penh, Cambodia
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-social">

          <a
            href="https://t.me/loutrachnytk"
            target="_blank"
            rel="noreferrer"
          >
            <FaTelegram />
          </a>

          <a
            href="https://youtube.com/@ite3amcode"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>

          <a
            href="https://www.tiktok.com/@ite3amcode"
            target="_blank"
            rel="noreferrer"
          >
            <FaTiktok />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>

          <a
            href="https://instagram.com/ite3amcode"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 3AM CODING. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;