import React, { useContext } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import ThemeContext from '../context/ThemeContext';
import './Projects.css';

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  const projects = [
    {
      id: 1,
      title: 'LogSentinel',
      description: 'Real-time log anomaly detection with an LSTM Autoencoder and an AWS streaming pipeline, with alerts + Grafana monitoring.',
      tech: ['Python', 'AWS SageMaker', 'Kinesis', 'Lambda', 'CloudWatch', 'Grafana', 'SNS'],
      github: 'https://github.com/Smritirai005',
      live: null,
      size: 'large'
    },
    {
      id: 2,
      title: 'Urja Arena',
      description: 'Gamified environmental learning platform with quizzes, tasks, competitions, leaderboards, and an AI chatbot for personalized support.',
      tech: ['Next.js', 'React', 'Supabase', 'Firebase Auth', 'Gemini API', 'Serverless Functions'],
      github: 'https://github.com/Smritirai005',
      live: null,
      size: 'medium'
    }
  ];

  return (
    <section id="projects" className={`projects ${theme}-mode`}>
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Selected projects from my resume</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${project.size} ${theme}-mode`}
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;



