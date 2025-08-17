import { Bars3Icon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <body>
        <nav>
   <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Project">Projects</Link>
      <Link to="/Contact">contact</Link>
</nav>
<br></br>
<br></br>
    <div id="home">
    <div class="header-container">
        
        <div class="header-image">
           <img src="/c3e1ff7f-593c-40bf-bfab-a7e0c8628bb6.png" alt="Chandramohan" />

        </div>

       
        <div class="header-content">
            <h1>Hello, I'm Chandramohan</h1>
            <p>Web Developer | Web Designer</p>
            <div class="card">
                <h2>🚀 Welcome to My Portfolio</h2>
                <p>Scroll down to explore my work</p>
            </div>
        </div>
    </div>
</div>


<div id="about1">
    <div class="about-container1">
        
        <div class="about-card skills-card">
            <h3>👨‍💻 Skills</h3>
            <div class="skills-icons">
                <i class="devicon-java-plain colored" title="Java"></i>
                <i class="devicon-html5-plain colored" title="HTML5"></i>
                <i class="devicon-css3-plain colored" title="CSS3"></i>
                <i class="devicon-javascript-plain colored" title="JavaScript"></i>
                <i class="devicon-python-plain colored" title="Python"></i>
                <i class="devicon-c-plain colored" title="C"></i>
                <i class="devicon-spring-plain-wordmark colored" title="Spring Boot"></i>
                <i class="devicon-mysql-plain colored" title="MySQL"></i>
                <i class="devicon-mongodb-plain colored" title="MongoDB"></i>
                <i class="devicon-docker-plain colored" title="Docker"></i>
                <i class="devicon-amazonwebservices-plain-wordmark colored" title="AWS"></i>
                <i class="devicon-linux-plain colored" title="Linux"></i>
            </div>
        </div>

        <div class="about-card">
            <h3>📚 Education</h3>
            <p>B.E. in Computer Science, 3rd Year</p>
        </div>

        <div class="about-card">
            <h3>🏆 Experience</h3>
            <p>Built projects like Student Management System, Rock Paper Scissors Game, Book Store API.</p>
        </div>

        <div class="about-card">
            <h3>🎯 Objective</h3>
            <p>To leverage my technical expertise in web development and passion for problem-solving to contribute to innovative software solutions.
Aspiring to become a skilled full-stack developer, continuously learning modern technologies, and delivering impactful projects.</p>
        </div>
    </div>
</div>



<div class="projects-wrap">
  <div class="projects-grid">
    
   
    <div class="project-card">
      <h3 class="project-title">Rock Paper Scissors</h3>
      <p class="project-desc">
        A simple interactive game built using HTML, CSS, and JavaScript.
      </p>
      <div class="tech-list">
        <span class="tech">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML"/> HTML
        </span>
        <span class="tech">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS"/> CSS
        </span>
        <span class="tech">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"/> JavaScript
        </span>
      </div>
      <div class="card-actions">
        <a href="#" class="btn-link">View Project</a>
        <a href="#" class="btn-link">Source Code</a>
      </div>
    </div>
<div class="project-card">
  <h3 class="project-title">To-Do List Application</h3>
  <p class="project-desc">
    A simple Spring Boot application to manage daily tasks, using H2 in-memory database for fast development and testing.
  </p>
  <div class="tech-list">
    <span class="tech">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java"/> Java
    </span>
    <span class="tech">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot"/> Spring Boot
    </span>
    <span class="tech">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/database/database-original.svg" alt="H2 Database"/> H2 Database
    </span>
  </div>
  <div class="card-actions">
    <a href="#" class="btn-link">View Project</a>
    <a href="#" class="btn-link">Source Code</a>
  </div>
</div>

    <div class="project-card">
      <h3 class="project-title">Student Management System</h3>
      <p class="project-desc">
        A Spring Boot + MySQL application for managing students and courses.
      </p>
      <div class="tech-list">
        <span class="tech">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML"/> HTML
        </span>
        <span class="tech">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS"/> CSS
        </span>
        <span class="tech">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"/> JavaScript
        </span>
        <span class="tech">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL"/> MySQL
        </span>
      </div>
      <div class="card-actions">
        <a href="#" class="btn-link">View Project</a>
        <a href="#" class="btn-link">Source Code</a>
      </div>
    </div>
<div class="project-card">
  <h3 class="project-title">Book Store API</h3>
  <p class="project-desc">
    A Spring Boot REST API for managing books, deployed on AWS with Docker, and connected to MySQL database.
  </p>
  <div class="tech-list">
    <div class="tech">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java"/> Java
    </div>
    <div class="tech">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot"/> Spring Boot
    </div>
    <div class="tech">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL"/> MySQL
    </div>
    <div class="tech">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker"/> Docker
    </div>
    <div class="tech">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS"/> AWS
    </div>
  </div>
  <div class="card-actions">
    <a href="#" class="btn-link">View API Docs</a>
    <a href="#" class="btn-link">Source Code</a>
  </div>
</div>
<div class="project-card">
  <h3 class="project-title">Portfolio Website</h3>
  <p class="project-desc">
    Personal portfolio built with React, showcasing projects and skills.
  </p>
  <div class="tech-list">
        <span class="tech">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML"/> HTML
        </span>
        <span class="tech">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS"/> CSS
        </span>
        <span class="tech">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"/> JavaScript
        </span>
         <span class="tech">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React"/> React
        </span>
      </div>
  <div class="card-actions">
    <a href="#" class="btn-link">View API Docs</a>
    <a href="#" class="btn-link">Source Code</a>
  </div>
</div>


  </div>
</div>



   <div class="section-info">
  <h2>Contact Information</h2>
  <div class="contact-row">
    <p>📍 Salem, India</p>
    <p>📞 +91 63693 72049</p>
    <p>📧 <a href="mailto:nirmalasuseendiran@gmail.com">nirmalasuseendiran@gmail.com</a></p>
    <p>💼 <a href="https://www.linkedin.com/in/chandramohan27" target="_blank">LinkedIn</a></p>
    <p>🖥 <a href="https://github.com/chandramohan05" target="_blank">GitHub</a></p>
    <a href="Your paragraph text (5.1).pdf" download class="resume-btn">📄 Download Resume</a>
  </div>
</div>
</body>
  )
}
