import React, { useContext } from 'react';
import { Mail, Linkedin, Github, Code2, Download } from 'lucide-react';
import ThemeContext from '../context/ThemeContext';
import { LINKS } from '../data/links';
import './Contact.css';

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const socialLinks = [
    { icon: Mail, label: 'Email', url: LINKS.emailHref, text: LINKS.email },
    { icon: Github, label: 'GitHub', url: LINKS.github, text: '@Smritirai005' },
    { icon: Linkedin, label: 'LinkedIn', url: LINKS.linkedin, text: 'Smriti Rai' },
    { icon: Code2, label: 'LeetCode', url: LINKS.leetcode, text: '@Smritirai' },
    {
      icon: Download,
      label: 'Resume',
      url: LINKS.resume,
      text: 'Download PDF',
      download: true,
    },
  ];

  return (
    <section id="contact" className={`contact ${theme}-mode`}>
      <div className="contact-container">
        <h2 className="section-title block-title">Get In Touch</h2>
        <p className="section-subtitle">Open to internships, collaborations, and project work</p>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-text">
              I’m always open to discussing new projects, AI + cloud ideas, and opportunities to build impactful products.
            </p>
            <div className="social-links">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={social.download ? 'Smriti_Rai_Resume.pdf' : undefined}
                    className={`social-link block-social ${theme}-mode`}
                    aria-label={social.label}
                  >
                    <Icon size={22} />
                    <span className="social-label">{social.label}</span>
                    <span className="social-text">{social.text}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className={`contact-form-container block-panel ${theme}-mode`}>
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
              <button type="submit" className={`submit-btn block-btn-submit ${theme}-mode`}>
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
