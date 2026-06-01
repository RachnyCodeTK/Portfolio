import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

import {
  FaTelegram,
  FaYoutube,
  FaTiktok,
  FaFacebook,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    emailjs.init("wG23rexOn_yE9eUj6");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    emailjs
      .sendForm(
        "service_c8brodk",
        "template_3zlhi5e",
        form.current,
        "wG23rexOn_yE9eUj6"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);

          setSuccess("✅ Message sent successfully!");
          setLoading(false);

          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error);

          setSuccess("❌ Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">

      <h2 className="section-title">Contact Me</h2>

      {/* SOCIAL ICONS */}
      <div className="social-container">

        <a
          href="https://t.me/loutrachnytk"
          target="_blank"
          rel="noreferrer"
        >
          <FaTelegram />
        </a>

        <a
          href="https://youtube.com/@ite3amcode?si=Inh3I47bhFawPdfl"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube />
        </a>

        <a
          href="https://www.tiktok.com/@ite3amcode?is_from_webapp=1&sender_device=pc"
          target="_blank"
          rel="noreferrer"
        >
          <FaTiktok />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100071705927260"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>

        <a
          href="https://github.com/RachnyCodeTK"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a href="mailto:rachnyb.l@gmail.com">
          <FaEnvelope />
        </a>

      </div>

      {/* CONTACT FORM */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
      >

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Write your message..."
          required
        ></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>

      {/* SUCCESS MESSAGE */}
      {success && (
        <p className="status-message">
          {success}
        </p>
      )}

    </section>
  );
}