import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import './Experience.css';

const Experience = () => {
  const { theme } = useContext(ThemeContext);

  const experiences = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'Company Name',
      location: 'Location',
      period: '2023 - Present',
      description: 'Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      technologies: ['React', 'Node.js', 'TypeScript']
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Previous Company',
      location: 'Location',
      period: '2021 - 2023',
      description: 'Built responsive and interactive user interfaces. Optimized application performance and improved user experience.',
      technologies: ['JavaScript', 'CSS3', 'Vue.js']
    },
    {
      id: 3,
      title: 'Junior Developer',
      company: 'First Company',
      location: 'Location',
      period: '2020 - 2021',
      description: 'Started my journey in software development. Learned best practices and contributed to various projects.',
      technologies: ['HTML5', 'JavaScript', 'React']
    }
  ];

  return (
    <section id="experience" className={`experience ${theme}-mode`}>
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey</p>
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

