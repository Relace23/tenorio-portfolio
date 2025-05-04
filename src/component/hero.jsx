import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./hero.css";
import profileImage from "./profile.jpg"; // Adjust the path as needed

const Hero = () => {
  return (
    <section className="hero">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <NavLink exact="true" to="/" activeclassname="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeclassname="active">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/experience" activeclassname="active">Experience</NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeclassname="active">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeclassname="active">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={profileImage} alt="Rel Ace" className="profile-img" />
          <h2 className="hero-name">Rel Ace A. Tenorio</h2>
          <p className="hero-role">Aspiring Web Developer & Designer</p>

          <div className="hero-buttons">
            <button className="btn primary">View Portfolio</button>
            <button className="btn secondary">Download CV</button>
          </div>

          <div className="card about-card">
            <h3>About Me</h3>
            <p><strong>Email:</strong> <a href="mailto:relace@example.com">relacetenorio@gmail.com</a></p>
            <p><strong>Address:</strong> Zamboanga City, Philippines</p>
            <p><strong>GitHub:</strong> <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">https://github.com/Relace23</a></p>
          </div>
        </motion.div>

        <motion.div
          className="right-content"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="card skills-card">
            <h3>My Skills</h3>
            <div className="skills">
              <span>React</span>
              <span>Django</span>
              <span>JavaScript</span>
              <span>Python</span>
              <span>HTML/CSS</span>
              <span>Git & GitHub</span>
            </div>
          </div>

          <div className="card code-card">
            <pre>{`// Cool Code to describe me
const name = "Rel Ace";
const role = "Web Developer";
const skills = ["React", "Django", "UI/UX"];
console.log(\`Hi, I'm \${name} — I build with \${skills.join(", ")}\`);`}</pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
