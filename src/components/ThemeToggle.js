import React, { useContext } from 'react';
import { Moon, Sun } from 'lucide-react';
import ThemeContext from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      className={`theme-toggle-corner ${theme}-mode`} 
      onClick={(e) => { 
        e.preventDefault(); 
        toggleTheme(); 
      }} 
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default ThemeToggle;

