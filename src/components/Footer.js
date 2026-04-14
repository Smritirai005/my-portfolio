import React, { useContext } from 'react';
import { Heart, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
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
                <a href="mailto:smritirai2005@gmail.com" className="contact-link">
                  smritirai2005@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <a href="tel:+919455758887" className="contact-link">
                  +91 94557 58887
                </a>
              </div>
              <div className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <span className="contact-text">Greater Noida, India</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Social</h3>
            <div className="footer-social">
              <a href="https://github.com/Smritirai005" target="_blank" rel="noopener noreferrer" className="social-link-footer">
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/SmritiRai" target="_blank" rel="noopener noreferrer" className="social-link-footer">
                <Linkedin size={20} />
                <span>LinkedIn</span>
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

