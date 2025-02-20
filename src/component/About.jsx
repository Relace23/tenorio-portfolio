import React from "react";
import "./about.css";
import profilePic from "./profile.jpg"; // Add your profile picture

const About = () => {
  return (
    
    <section className="about-container">
      <div className="about-content">
        <div className="about-left">
          <img src={profilePic} alt="Profile" className="profile-img" />
        </div>

        {}
        <div className="about-right">
          <h1>About Me</h1>
          <p>
            My name is <strong>Rel Ace A. Tenorio</strong>. I'm an aspiring Full Stack Developer passionate about building
            interactive and visually appealing web applications. With experience in web development, I continuously enhance my skills
            to create high-quality digital experiences.
          </p>

          {}
          <div className="about-info">
            <p><strong>Name:</strong> Rel Ace A. Tenorio</p>
            <p><strong>Age:</strong> 22</p>
            <p><strong>Experience:</strong> Aspiring Developer</p>
            <p><strong>Availability:</strong> Open for Projects</p>
            <p><strong>Location:</strong> Philippines</p>
          </div>

          {}
          <a href="/path-to-cv.pdf" download className="download-btn">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
