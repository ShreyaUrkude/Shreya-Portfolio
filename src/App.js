import React, { useState } from "react";
import "./App.css";

import ShreyaImage from "./ShreyaImage.png";
import JobImage from "./Job.png";
import DigitalImage from "./Digital.jpeg";
import AssetImage from "./IT (2).png";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="main-container">
      {/* Sidebar */}
      <aside>
        <div className="logo">Shreya</div>
        <nav>
          <ul>
            <li>
              <a
                href="#home"
                onClick={() => setActiveSection("home")}
                className={activeSection === "home" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#bio"
                onClick={() => setActiveSection("bio")}
                className={activeSection === "bio" ? "active" : ""}
              >
                Biography
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => setActiveSection("skills")}
                className={activeSection === "skills" ? "active" : ""}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setActiveSection("projects")}
                className={activeSection === "projects" ? "active" : ""}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setActiveSection("contact")}
                className={activeSection === "contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <footer>&copy; 2025 Shreya Urkude</footer>
      </aside>

      
      <div className="content-section">
        {activeSection === "home" && (
          <section id="home" className="fade-in">
            <div className="profile-img">
              <img src={ShreyaImage} alt="Shreya Urkude" />
            </div>
            <div className="profile-details">
              <h1>Shreya Urkude</h1>
              <div className="typewriter">
                Website Developer | JavaScript | MERN Stack
              </div>
              <p><h2>Full Stack Developer</h2></p>
            </div>
          </section>
        )}

        {activeSection === "bio" && (
          <section id="bio" className="fade-in">
            <h1>Biography</h1>
            <p>
              I am a passionate full-stack web developer with a knack for solving
            <br></br>  real-world problems through code.<br></br> With experience in software
              development, I build scalable and <br></br> responsive web applications.
            </p>
            <br />
            <p>
              <strong>College:</strong> Graduated from JD College of Engineering
              <br></br>and Management, Nagpur with 9.65 CGPA.
            </p>
            
            <p>
              <strong>Degree:</strong> B.Tech in Information Technology
            </p> 
            <br />
            <a href="shreyaurkude.pdf" download className="download-resume">
              Download Resume
            </a>
          </section>
        )}

        {activeSection === "skills" && (
          <section id="skills" className="fade-in">
            <h1>Skills</h1>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React.js, Node.js, Express</li>
              <li>MongoDB, MySQL</li>
              <li>WordPress Development</li>
              <li>API Integration</li>
              <li>Git & GitHub</li>
              <li>PHP</li>
              <li>Responsive Design</li>
            </ul>
          </section>
        )}

        {activeSection === "projects" && (
          <section id="projects" className="fade-in">
            <h1>Projects</h1>
            <ul>
              <li>
                <strong>IT Asset Management System</strong> –{" "}
                <a href="https://github.com/ShreyaUrkude/IT-Asset-Management-System" target="_blank" rel="noreferrer">
                  View
                </a>
                <img src={AssetImage} alt="IT Asset Management System" />
                <p className="description">
                  A platform for managing IT assets (hardware and software),
                  allowing organizations to track usage, status, and allocation
                  in real-time.
                </p>
              </li>

              <li>
                <strong>Digital Forensics CMS</strong>
                <img src={DigitalImage} alt="Digital Forensics CMS" />
                <p className="description">
                  A secure CMS for digital forensic teams to organize, store, and
                  manage digital evidence effectively.
                </p>
              </li>

              <li>
                <strong>Job Board App</strong> –{" "}
                <a href="https://shreyaurkude.netlify.app/home" target="_blank" rel="noreferrer">
                  View
                </a>
                <img src={JobImage} alt="Job Board App" />
                <p className="description">
                  A job portal enabling recruiters to post jobs and applicants to
                  apply seamlessly, featuring search and filter functionality.
                </p>
              </li>
            </ul>
          </section>
        )}

        {activeSection === "contact" && (
          <section id="contact" className="fade-in">
            <h1>Contact</h1>
            <p>
              Email:{" "}
              <a href="mailto:shreyaurkude6@gmail.com">
                shreyaurkude6@gmail.com
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/shreya-urkude-3bb9142a3" target="_blank" rel="noreferrer">
                linkedin.com/in/shreya-urkude-3bb9142a3
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a href="https://github.com/ShreyaUrkude" target="_blank" rel="noreferrer">
                github.com/ShreyaUrkude
              </a>
            </p>
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
