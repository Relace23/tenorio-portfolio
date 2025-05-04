// component/Blog.jsx
import React, { useState } from "react";
import "./Blog.css";
import { NavLink } from "react-router-dom";

import muaythai from "../assets/muaythai.jpg";
import capstone from "../assets/capstone.jpg";
import pinning from "../assets/pinning.jpg";
import boulevard from "../assets/boulevard.jpg";
import culminating from "../assets/culminating.jpg";
import firstyear from "../assets/firstyear.jpg";
import halloween from "../assets/halloween.jpg";
import palaro from "../assets/palaro.jpg";
import pasonanca from "../assets/pasonanca.jpg";

const blogEntries = [
  {
    img: muaythai,
    title: "Muay Thai Training",
    description:
      "During my time training and improving myself doing a hobby of martial arts.",
  },
  {
    img: capstone,
    title: "Capstone Forum",
    description:
      "This image describes the research forum held in Western Mindanao State University, presenting our capstone project.",
  },
  {
    img: pinning,
    title: "Pinning Ceremony",
    description:
      "The pinning ceremony held for the OJT students of IT WMSU 4th year.",
  },
  {
    img: boulevard,
    title: "Boulevard Hangout",
    description:
      "The time after class where me and my classmate hangout in Boulevard to watch the sunset and talk about future plans.",
  },
  {
    img: culminating,
    title: "Culminating Event",
    description:
      "When the volleyball girls team from BSIT won as champion in our P.E culminating event.",
  },
  {
    img: firstyear,
    title: "First Year (Online Class)",
    description:
      "This was during online class where we could only interact virtually. This image served as a self-introduction for the freshies of BSIT 1C.",
  },
  {
    img: halloween,
    title: "Virtual Halloween",
    description:
      "Image from online class during our virtual Halloween event.",
  },
  {
    img: palaro,
    title: "Palaro Rave Party",
    description:
      "This was during Palaro's last day where we attended the rave party and enjoyed happy times with classmates.",
  },
  {
    img: pasonanca,
    title: "Pasonanca Park",
    description:
      "After class, we took a walk and bonded at Pasonanca Park with classmates.",
  },
];

const Blog = () => {
  const [selectedEntry, setSelectedEntry] = useState(null);

  return (
    <section className="blog-section">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <NavLink exact="true" to="/" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeclassname="active">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" activeclassname="active">
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeclassname="active">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeclassname="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <h2>Blog</h2>
      <div className="blog-grid">
        {blogEntries.map((entry, index) => (
          <div
            key={index}
            className="blog-card"
            onClick={() => setSelectedEntry(entry)}
          >
            <img src={entry.img} alt={entry.title} />
            <h3>{entry.title}</h3>
            <p>Click image to view more</p>
          </div>
        ))}
      </div>

      {selectedEntry && (
        <div className="lightbox" onClick={() => setSelectedEntry(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedEntry.img}
              alt={selectedEntry.title}
              className="lightbox-img"
            />
            <div className="lightbox-description">
              <h3>{selectedEntry.title}</h3>
              <p>{selectedEntry.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
