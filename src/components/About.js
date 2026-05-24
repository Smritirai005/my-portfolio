import React, { useContext } from 'react';
import { Download } from 'lucide-react';
import ThemeContext from '../context/ThemeContext';
import { LINKS } from '../data/links';
import Terminal from './Terminal';
import './About.css';

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="about" className={`about ${theme}-mode`}>
      <div className="about-container">
        <div className="about-content about-content-centered">
          <h1 className="about-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Smriti Rai</span>
          </h1>
          <p className="about-description">
            Computer Science undergraduate with a strong interest in Cloud Technologies, AI-powered applications, and Full-Stack
            Development. Experienced in building AI-driven dashboards, integrating Large Language Models (LLMs), and deploying
            containerized applications. Comfortable working across frontend, APIs, databases, and cloud platforms with a focus on clean,
            maintainable code.
          </p>
          <div className="about-tags">
            <span className="tag">Cloud</span>
            <span className="tag">AI (LLMs)</span>
            <span className="tag">Full-Stack</span>
            <span className="tag">AWS</span>
            <span className="tag">Docker</span>
            <span className="tag">React</span>
          </div>
          <div className="about-actions">
            <a
              href={LINKS.resume}
              className={`resume-btn block-btn ${theme}-mode`}
              download="Smriti_Rai_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
            <a
              href={LINKS.resumeView}
              className={`resume-btn resume-btn-secondary block-btn ${theme}-mode`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>
        <Terminal />
      </div>
    </section>
  );
};

export default About;
