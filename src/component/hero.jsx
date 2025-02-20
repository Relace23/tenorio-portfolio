import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";
import Photo from "./profile.jpg";

function Hero() {
    return (
        <div className="hero-container">
            {}
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact" className="contact-btn">Contact Me</Link></li>
                </ul>
            </nav>

            {}
            <div className="hero-content">
                <div className="overlay"></div> {}
                <div className="hero-photo">
                    <img src={Photo} alt="Rel Ace, Web Developer" />
                </div>
                <div className="hero-text">
                    <h1><span>Rel Ace A. Tenorio</span></h1>
                    <p>Aspiring Web Developer & Designer</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
