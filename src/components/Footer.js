import React, { useContext } from 'react';
import { Heart, Mail, Phone, MapPin, Github, Linkedin, Code2, Download } from 'lucide-react';
import ThemeContext from '../context/ThemeContext';
import { LINKS } from '../data/links';
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
                <a href={LINKS.emailHref} className="contact-link">
                  {LINKS.email}
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
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="social-link-footer">
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="social-link-footer">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href={LINKS.leetcode} target="_blank" rel="noopener noreferrer" className="social-link-footer">
                <Code2 size={20} />
                <span>LeetCode</span>
              </a>
              <a
                href={LINKS.resume}
                download="Smriti_Rai_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-footer"
              >
                <Download size={20} />
                <span>Resume</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Quick Links</h3>
            <div className="footer-links">
              <a href="#about" className="footer-link">About</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#tech-stack" className="footer-link">Tech Stack</a>
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
