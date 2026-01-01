import React, { useContext } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import ThemeContext from '../context/ThemeContext';
import './Projects.css';

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A beautiful web application built with React and modern design principles.',
      tech: ['React', 'TypeScript', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://example.com',
      size: 'large'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'An innovative solution for modern problems.',
      tech: ['Next.js', 'Node.js'],
      github: 'https://github.com',
      live: 'https://example.com',
      size: 'medium'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A creative project showcasing design skills.',
      tech: ['React', 'CSS3'],
      github: 'https://github.com',
      live: 'https://example.com',
      size: 'medium'
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'A minimalist approach to web development.',
      tech: ['Vue.js', 'Firebase'],
      github: 'https://github.com',
      live: 'https://example.com',
      size: 'small'
    },
    {
      id: 5,
      title: 'Project Five',
      description: 'Exploring new technologies and frameworks.',
      tech: ['React', 'GraphQL'],
      github: 'https://github.com',
      live: 'https://example.com',
      size: 'small'
    },
    {
      id: 6,
      title: 'Project Six',
      description: 'A full-stack application with modern architecture.',
      tech: ['MERN', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
      size: 'large'
    }
  ];

  return (
    <section id="projects" className={`projects ${theme}-mode`}>
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">A collection of my recent work</p>
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

