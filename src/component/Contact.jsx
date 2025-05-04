import React, { useState } from "react";
import './contacts.css';
import { NavLink } from "react-router-dom";




const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission logic, like sending the data to a backend API or an email.
    console.log("Form submitted", formData);
  };

  return (
    <section className="contact">
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
      
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me for collaboration or inquiries.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn primary">
          Send Message
        </button>
      </form>

      <div className="contact-details">
        <h3>Other Ways to Reach Me</h3>
        <p><strong>Email:</strong> <a href="mailto:relacetenorio@gmail.com">relacetenorio@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+639533049414">09533049414</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Relace23" target="_blank" rel="noreferrer">github.com/Relace23</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rel-ace-tenorio-b124b227a/" target="_blank" rel="noreferrer">linkedin.com/in/rel-ace-tenorio-b124b227a</a></p>
        <p><strong>Facebook:</strong> <a href="https://www.facebook.com/relace.tenorio.5" target="_blank" rel="noreferrer">facebook.com/relace.tenorio.5</a></p>
      </div>

      {/* Map Section */}
      <div className="map-location">
        <h3>Find Me Here</h3>
        <div className="map-container">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.446437594449!2d122.08560701441657!3d6.923276421383836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff6cb774105425%3A0xf3b2e3d0f1d8581a!2sZamboanga%20City%2C%20Zamboanga%20del%20Sur%2C%20Philippines!5e0!3m2!1sen!2sus!4v1683367016466!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
