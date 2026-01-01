import React, { useContext } from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import ThemeContext from '../context/ThemeContext';
import './Contact.css';

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const socialLinks = [
    { icon: Mail, label: 'Email', url: 'mailto:your.email@example.com' },
    { icon: Github, label: 'GitHub', url: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com' }
  ];

  return (
    <section id="contact" className={`contact ${theme}-mode`}>
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's create something amazing together</p>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-text">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link ${theme}-mode`}
                    aria-label={social.label}
                  >
                    <Icon size={22} />
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className={`contact-form-container ${theme}-mode`}>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  className="form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className={`submit-btn ${theme}-mode`}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

