import React, { useContext } from 'react';
import { Moon, Sun } from 'lucide-react';
import ThemeContext from '../context/ThemeContext';
import './Header.css';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme}-mode`}>
      <div className="header-container">
        <nav className="nav">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

