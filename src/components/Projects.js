import React, { useContext, useRef } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import ThemeContext from '../context/ThemeContext';
import { projects } from '../data/projects';
import './Projects.css';

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.85;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="projects" className={`projects ${theme}-mode`}>
      <div className="projects-container">
        <h2 className="section-title block-title">Projects</h2>
        <p className="section-subtitle">Scroll through my builds — each block links to GitHub</p>

        <div className="projects-scroll-wrapper">
          <button
            type="button"
            className={`scroll-btn scroll-btn-left ${theme}-mode`}
            onClick={() => scroll('left')}
            aria-label="Scroll projects left"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="projects-scroll-hint" aria-hidden="true">
            <span className="scroll-hint-arrow">→</span>
            <span>drag or scroll</span>
          </div>

          <div className="projects-scroll-track" ref={scrollRef}>
            {projects.map((project, index) => (
              <article
                key={project.id}
                className={`project-card block-card ${theme}-mode`}
                style={{ '--card-index': index }}
              >
                {project.badge && (
                  <span className={`project-badge ${theme}-mode`}>{project.badge}</span>
                )}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link project-link-live"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className={`scroll-btn scroll-btn-right ${theme}-mode`}
            onClick={() => scroll('right')}
            aria-label="Scroll projects right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
