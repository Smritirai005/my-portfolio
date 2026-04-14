import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import './Experience.css';

const Experience = () => {
  const { theme } = useContext(ThemeContext);

  const experiences = [
    {
      id: 1,
      title: 'Management Team Member',
      company: 'GeeksforGeeks Student Chapter - Bennett University',
      location: 'Greater Noida, India',
      period: 'Aug 2023 – 2024',
      description: 'Orchestrated 8+ hackathons, managing 500+ participants and multi-day event logistics.',
      technologies: ['Leadership', 'Event Ops', 'Community']
    },
    {
      id: 2,
      title: 'Technical Team',
      company: 'IEEE Student Branch - Bennett University',
      location: 'Greater Noida, India',
      period: 'Aug 2023 – 2024',
      description: 'Engineered a club management website (React.js, Node.js, MongoDB) serving 300+ members with 95% uptime, and supported 12+ workshops with zero downtime live streams (500+ viewers).',
      technologies: ['React', 'Node.js', 'MongoDB']
    }
  ];

  return (
    <section id="experience" className={`experience ${theme}-mode`}>
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Leadership & technical contributions</p>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${theme}-mode`}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <div className="timeline-company">
                  <span className="company-name">{exp.company}</span>
                  <span className="company-location">{exp.location}</span>
                </div>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-tech">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;



