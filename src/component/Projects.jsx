import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './projects.css';

function Projects() {
  const projects = [
    {
      name: 'Pokemon Go',
      description: 'A web game application inspired by the popular Pokemon Go game.',
      live: 'https://pokedex-rivero.netlify.app/',
    },
    {
      name: 'Todo List App',
      description: 'A React-based todo list app with CRUD features.',
      live: 'https://your-todo-app.netlify.app',
    },
     {
      name: 'Portfolio Website',
      description: 'My portfolio website created using reactjs',
      live: 'https://tenorio-portfolio.netlify.app/',
    },
    

  ];

  return (
    <section className="projects">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink>
          </li>
          <li>
            <NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>Experience</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
          </li>
        </ul>
      </nav>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h1>

      <div className="project-grid">
        {projects.map((proj, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2>{proj.name}</h2>
            <p>{proj.description}</p>
            <div className="project-links">
              <a href={proj.live} target="_blank" rel="noopener noreferrer">Live Site</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
