import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ak46a9f", // Your Service ID
        "template_tl07p1o", // Your Template ID
        form.current,
        "YmNn-pPLO1fqS9z7X" // Your Public Key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          console.log(result.text);
          form.current.reset(); // clear form after success
        },
        (error) => {
          alert("❌ Failed to send. Try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Project">Projects</Link>
        <Link to="/Contact">Contact</Link>
      </nav>

      <br />
      <br />
      <div className="contact-wrap">
        <h1>Contact Me</h1>

        {/* Contact Form */}
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="section-info">
          <h2>Contact Information</h2>
          <div className="contact-row">
            <p>📍 Salem, India</p>
            <p>📞 +91 63693 72049</p>
            <p>
              📧{" "}
              <a href="mailto:nirmalasuseendiran@gmail.com">
                nirmalasuseendiran@gmail.com
              </a>
            </p>
            <p>
              💼{" "}
              <a
                href="https://www.linkedin.com/in/chandramohan27"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p>
              🖥{" "}
              <a
                href="https://github.com/chandramohan05"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </p>
            <a href="Your paragraph text (5.1).pdf" download className="resume-btn">
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
