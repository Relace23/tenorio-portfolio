import React from 'react';
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';
import './experience.css';

const Experience = () => {
  return (
    <section className="experience">

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

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <motion.div
        className="experience-item"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Crew Member at Pedro's (Fast Food Restaurant)</h3>
        <p><strong>Role:</strong> Crew Member</p>
        <p><strong>Duration:</strong> March 2023 - July 2023, April 2024 - June 2024</p>
        <p>
          Worked as a crew member in a fast food restaurant selling burgers and fries.
          Responsibilities included taking orders, preparing food, maintaining cleanliness, 
          and providing excellent customer service. 
        </p>
      </motion.div>

      <motion.div
        className="experience-item"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Martial Arts Instructor at Local Muay Thai Gym</h3>
        <p><strong>Role:</strong> Martial Arts Instructor</p>
        <p><strong>Duration:</strong> June 2021 - August 2021</p>
        <p>
          Taught Muay Thai to beginners and intermediate students at a local gym.
          Responsibilities included planning training sessions, providing instructions 
          on technique, and ensuring the safety of students during practice.
        </p>
      </motion.div>

      <motion.div
        className="experience-item"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Archiver for Coffee Station Time Tracking System</h3>
        <p><strong>Role:</strong> Archiver</p>
        <p><strong>Duration:</strong> January 2024 - May 2024</p>
        <p>
          As an Archiver in the Coffee Station Time Tracking System project, I was responsible for organizing and managing project documentation and resources. This included ensuring that all project files were correctly labeled, archived, and easily accessible for team members. I collaborated closely with other members of the project to maintain a structured filing system and supported the overall flow of documentation throughout the development process.
        </p>
      </motion.div>

    </section>
  );
};

export default Experience;
