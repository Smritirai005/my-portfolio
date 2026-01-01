import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
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
            A passionate developer who loves creating beautiful and functional web experiences. 
            I enjoy turning complex problems into simple, elegant solutions.
          </p>
          <div className="about-tags">
            <span className="tag">React</span>
            <span className="tag">JavaScript</span>
            <span className="tag">UI/UX</span>
            <span className="tag">Design</span>
          </div>
        </div>
        <Terminal />
      </div>
    </section>
  );
};

export default About;

