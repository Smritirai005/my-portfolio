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

    about: `Computer Science undergraduate interested in Cloud Technologies, AI-powered applications, and Full-Stack Development.
Experienced in building AI-driven dashboards, integrating LLMs, and deploying containerized applications.`,

    skills: `Technical Skills:
• Programming: Python, C++, JavaScript
• AI & ML: LLM Integration, Prompt Engineering, AI-powered Applications
• Cloud: AWS (EC2, S3), Docker, GitHub Actions (CI/CD)
• Full-Stack: React.js, Next.js, FastAPI, Node.js
• Databases: PostgreSQL, MongoDB, Supabase, Firebase
• Core CS: DSA, DBMS, Operating Systems, OOP
• Tools: Git, Postman`,

    experience: `Work Experience:
• GeeksforGeeks Student Chapter - Bennett University (Aug 2023 – 2024)
  - Orchestrated 8+ hackathons managing 500+ participants and 3-day event logistics.

• IEEE Student Branch - Bennett University (Aug 2023 – 2024)
  - Built a club management website (React, Node.js, MongoDB) serving 300+ members with 95% uptime.
  - Supported technical infrastructure for 12+ workshops with zero downtime live streaming (500+ viewers).`,

    education: `Education:
• Bennett University, Greater Noida (2023 – 2027)
• B.Tech in Computer Science and Engineering — CGPA: 8.36
• Specialization: Cloud Computing`,

    contact: `Contact Information:
• Email: smritirai2005@gmail.com
• GitHub: github.com/Smritirai005
• LinkedIn: linkedin.com/in/SmritiRai`,

    projects: `Featured Projects:
• LogSentinel (March 2026)
  - Real-time log anomaly detection with an LSTM Autoencoder.
  - AWS pipeline: CloudWatch → Kinesis → Lambda → SageMaker; alerts via SNS; Grafana dashboard.

• Urja Arena (April 2025)
  - Gamified environmental learning platform with quizzes, tasks, leaderboards.
  - AI chatbot for concept explanations and personalized learning support.`,

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



