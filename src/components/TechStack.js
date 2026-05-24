import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import './TechStack.css';

const stackCategories = [
  {
    title: 'Languages',
    items: ['Python', 'C++', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'React Native', 'Vite', 'HTML/CSS'],
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'FastAPI', 'C++', 'REST APIs', 'Serverless'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Kinesis', 'Lambda', 'SageMaker', 'CI/CD'],
  },
  {
    title: 'AI & Data',
    items: ['LLMs', 'Ollama', 'RAG', 'LSTM', 'Vector DB', 'HNSW'],
  },
  {
    title: 'Databases & Tools',
    items: ['PostgreSQL', 'MongoDB', 'Firebase', 'Supabase', 'Git', 'Grafana'],
  },
];

const TechStack = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="tech-stack" className={`tech-stack ${theme}-mode`}>
      <div className="tech-stack-container">
        <h2 className="section-title block-title">Tech Stack</h2>
        <p className="section-subtitle">Technologies I build with daily</p>
        <div className="tech-stack-grid">
          {stackCategories.map((category) => (
            <div key={category.title} className={`tech-block ${theme}-mode`}>
              <h3 className="tech-block-title">{category.title}</h3>
              <div className="tech-block-items">
                {category.items.map((item) => (
                  <span key={item} className="tech-block-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
