import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import './Header.css';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme}-mode`}>
      <div className="header-container">
        <nav className="nav">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a
            href="https://github.com/Smritirai005"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

