import React, { useState, useEffect } from 'react';
import './App.css';
import ThemeContext from './context/ThemeContext';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Squares from './components/Squares';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    document.body.className = `${theme}-mode`;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeToggle />
      <div className={`app ${theme}-mode`}>
        {theme === 'dark' && (
          <Squares
            speed={0.5}
            squareSize={40}
            direction="diagonal"
            borderColor="#271E37"
            hoverFillColor="#a76280"
            className="background"
          />
        )}
        {theme === 'light' && (
          <Squares
            speed={0.5}
            squareSize={55}
            direction="diagonal"
            borderColor="#271E37"
            hoverFillColor="#ebadc8"
            className="background"
          />
        )}
        <Header />
        <main>
          <About />
          <Projects />
          <TechStack />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

