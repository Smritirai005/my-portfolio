import React, { useState, useRef, useEffect, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import './Terminal.css';

const Terminal = () => {
  const { theme } = useContext(ThemeContext);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome! Type "help" to see available commands.' }
  ]);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const responses = {
    help: `Available commands:
- about: Learn about me
- skills: View my technical skills
- experience: See my work experience
- education: Check my educational background
- contact: Get my contact information
- projects: View my projects
- clear: Clear the terminal
- help: Show this help message`,

    about: `I'm a passionate developer who loves creating beautiful and functional web experiences. 
I enjoy turning complex problems into simple, elegant solutions. 
I'm always learning and exploring new technologies to build better products.`,

    skills: `Technical Skills:
• Frontend: React, JavaScript, TypeScript, HTML5, CSS3
• Backend: Node.js, Express, Python
• Tools: Git, VS Code, Figma
• Other: UI/UX Design, Responsive Design, API Integration`,

    experience: `Work Experience:
• Software Developer (2023 - Present)
  - Developed and maintained web applications
  - Collaborated with cross-functional teams
  
• Frontend Developer (2021 - 2023)
  - Built responsive user interfaces
  - Optimized application performance`,

    education: `Education:
• Bachelor's Degree in Computer Science
• Various online courses and certifications
• Continuous learning through projects and practice`,

    contact: `Contact Information:
• Email: your.email@example.com
• GitHub: github.com/yourusername
• LinkedIn: linkedin.com/in/yourprofile
• Twitter: @yourusername`,

    projects: `Featured Projects:
• Project One - A beautiful web application
• Project Two - An innovative solution
• Project Three - A creative project

Type "projects" in the navigation to see more details!`,

    clear: ''
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const command = input.toLowerCase().trim();
    const newHistory = [...history, { type: 'input', text: `$ ${input}` }];

    if (command === 'clear') {
      setHistory([{ type: 'output', text: 'Terminal cleared. Type "help" for available commands.' }]);
    } else if (responses[command]) {
      newHistory.push({ type: 'output', text: responses[command] });
    } else {
      newHistory.push({ 
        type: 'error', 
        text: `Command not found: "${command}". Type "help" for available commands.` 
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={`terminal-container ${theme}-mode`}>
      <div className="terminal-header">
        <div className="terminal-controls">
          <span className="control close"></span>
          <span className="control minimize"></span>
          <span className="control maximize"></span>
        </div>
        <div className="terminal-title">Terminal - Ask me anything</div>
      </div>
      <div className="terminal-body" ref={terminalRef}>
        {history.map((item, index) => (
          <div key={index} className={`terminal-line ${item.type}`}>
            {item.type === 'input' && <span className="prompt">$</span>}
            <span className="terminal-text">{item.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="terminal-input-form">
        <span className="prompt">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="terminal-input"
          placeholder="Type a command..."
          autoFocus
        />
      </form>
    </div>
  );
};

export default Terminal;

