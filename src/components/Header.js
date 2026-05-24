import React, { useContext } from 'react';
import { Download } from 'lucide-react';
import ThemeContext from '../context/ThemeContext';
import { LINKS } from '../data/links';
import './Header.css';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme}-mode`}>
      <div className="header-container">
        <nav className="nav">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#tech-stack" className="nav-link">Stack</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a
            href={LINKS.github}
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={LINKS.resume}
            className={`nav-link nav-resume ${theme}-mode`}
            download="Smriti_Rai_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={14} />
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
