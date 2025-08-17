// src/components/About.js
import React from "react";
import { Link } from "react-router-dom";
import "./About.css";


function About() {
  return (
    <div>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Project">Projects</Link>
        <Link to="/Contact">contact</Link>
      </nav>

      {/* About Section */}
      <section id="about">
        <div className="about-container">
          <div className="about-photo">
            {/* put the image in public folder and use /filename */}
            <img src="/IMG20231110084504.jpg" alt="Chandramohan S" />
          </div>
          <div className="about-text">
            <h1>Chandramohan S</h1>
            <p>Hi, I'm Chandramohan S</p>
            <p>Aspiring Web Developer</p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
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
          <a href="/resume.pdf" download className="resume-btn">
            📄 Download Resume
          </a>
        </div>
      </div>

      {/* Objective */}
      <div className="section objective">
        <h2>Objective</h2>
        <p>
          To become a skilled full-stack developer and create innovative web
          applications.
        </p>
      </div>

      {/* Education */}
      <div className="section education">
        <h2>Education</h2>
        <p>Government College of Engineering, Erode, Tamil Nadu</p>
        <p>B.E in Computer Science (2022–2026, Final Year)</p>
      </div>

      {/* Skills */}
      <div className="section skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-box">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              alt="Java"
            />
            <span>Java</span>
          </div>
          <div className="skill-box">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML5"
            />
            <span>HTML5</span>
          </div>
          <div className="skill-box">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS3"
            />
            <span>CSS3</span>
          </div>
          <div className="skill-box">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />
            <span>JavaScript</span>
          </div>
          <div className="skill-box">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="Python"
            />
            <span>Python</span>
          </div>
          <div className="skill-box">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
              alt="C"
            />
            <span>C</span>
          </div>
          <div className="skill-box">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
              alt="SQL"
            />
            <span>SQL</span>
          </div>

          {/* Frameworks */}
          <div className="skill-box">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
              alt="Spring Boot"
            />
            <span>Spring Boot</span>
          </div>

          {/* Databases */}
          <div className="skill-box">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              alt="MySQL"
            />
            <span>MySQL</span>
          </div>
          <div className="skill-box">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/h2/h2-original.svg"
              alt="H2 Database"
            />
            <span>H2</span>
          </div>
          <div className="skill-box">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              alt="MongoDB"
            />
            <span>MongoDB</span>
          </div>

          {/* Tools */}
          <div className="skill-box">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg"
              alt="IntelliJ"
            />
            <span>IntelliJ</span>
          </div>
          <div className="skill-box">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg"
              alt="Eclipse"
            />
            <span>Eclipse</span>
          </div>
          <div className="skill-box">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VS Code"
            />
            <span>VS Code</span>
          </div>
          <div className="skill-box">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/43/Sublime_Text_Logo.svg"
              alt="Sublime Text"
            />
            <span>Sublime</span>
          </div>
          <div className="skill-box">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              alt="Docker"
            />
            <span>Docker</span>
          </div>

          {/* Platforms */}
          <div className="skill-box">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
              alt="AWS"
            />
            <span>AWS</span>
          </div>
          <div className="skill-box">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Canva_Logo.png"
              alt="Canva"
            />
            <span>Canva</span>
          </div>
          {/* React.js */}
<div className="skill-box">
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    alt="React.js"
  />
  <span>React.js</span>
</div>

{/* Tailwind CSS */}
<div className="skill-box">
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
    alt="Tailwind CSS"
  />
  <span>Tailwind CSS</span>
</div>

        </div>
      </div>

      {/* Certifications */}
      <div className="section-certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Introduction to Front End Development - META</li>
          <li>CSS (Basics), SQL (Basic), Python (Basic) - Hackerrank</li>
          <li>Front End Development - HTML - Great Learning</li>
          <li>Programming with JavaScript - META</li>
          <li>
            Internship Certificate for Full Stack Developer - Incrix Company
          </li>
          <li>Programming in Java - NPTEL</li>
        </ul>
      </div>

      {/* Professional Development */}
      <div className="section profdev">
        <h2>Professional Development</h2>
        <p>
          Current Focus: Mastering Next.js for building server-rendered React
          applications and optimizing web performance.
        </p>
      </div>

      {/* Quick Links */}
      <div className="section quick-links">
        <h2>Quick Links</h2>
        <div>
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>Contact: nirmalasuseendiran@gmail.com | Phone: +91 63693 72049</p>
        <p>© 2025 CHANDRAMOHAN S. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
