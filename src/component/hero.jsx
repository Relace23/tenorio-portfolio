import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./hero.css";
import Photo from "./profile.jpg";

function Hero() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="hero-container">
            {/* Navbar */}
            <nav className="navbar">
                <ul className={isMobileMenuOpen ? "nav-menu active" : "nav-menu"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact" className="contact-btn">Contact Me</Link></li>
                </ul>
                <div className="menu-icon" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                    ☰
                </div>
            </nav>

            {/* Hero Section */}
            <div className="hero-content">
                <motion.div 
                    className="hero-photo"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={Photo} alt="Rel Ace, Web Developer" />
                </motion.div>
                
                <motion.div 
                    className="hero-text"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h1><span>Rel Ace A. Tenorio</span></h1>
                    <p>Aspiring Web Developer & Designer</p>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;