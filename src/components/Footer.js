import React, { useContext } from 'react';
import { Heart, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import ThemeContext from '../context/ThemeContext';
import './Footer.css';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${theme}-mode`}>
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-section">
            <h3 className="footer-section-title">Contact</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <Mail size={18} className="contact-icon" />
                <a href="mailto:your.email@example.com" className="contact-link">
                  your.email@example.com
                </a>
              </div>
              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <a href="tel:+1234567890" className="contact-link">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <span className="contact-text">Your City, Country</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Social</h3>
            <div className="footer-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link-footer">
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link-footer">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link-footer">
                <Twitter size={20} />
                <span>Twitter</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Quick Links</h3>
            <div className="footer-links">
              <a href="#about" className="footer-link">About</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#experience" className="footer-link">Experience</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-text">
            Made with <Heart size={16} className="heart-icon" /> by Smriti Rai
          </p>
          <p className="footer-copyright">
            © {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

