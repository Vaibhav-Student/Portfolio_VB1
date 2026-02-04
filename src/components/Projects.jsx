import React, { useState } from 'react';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            category: 'web',
            icon: 'fas fa-tasks',
            title: 'TO-Do Web Site',
            desc: 'A task management web application to organize and track your daily tasks efficiently.',
            tech: ['React', 'JavaScript'],
            demoLink: 'https://vaibhav-student.github.io/To_Do/',
            codeLink: 'https://github.com/Vaibhav-Student/To_Do'
        }
    ];

    const filteredProjects = projects.filter(project => filter === 'all' || project.category === filter);

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="about-header">
                    <div className="about-title-container">
                        <div className="about-title-decoration"></div>
                        <div className="about-title-wrapper">
                            <span className="about-label">Projects</span>
                            <div className="about-title-divider"></div>
                            <h2 className="about-title">
                                <span className="title-text">My Projects</span>
                                <span className="title-glow"></span>
                            </h2>
                        </div>
                        <div className="about-title-decoration"></div>
                    </div>
                    <p className="about-subtitle">
                        <span className="subtitle-line"></span>
                        <span className="subtitle-text">Some things I've built</span>
                        <span className="subtitle-line"></span>
                    </p>
                </div>

                <div className="projects-shell">
                    <aside className="projects-side">
                        <div className="spotlight-card">
                            <span className="spotlight-label">Featured Project</span>
                            <h3 className="spotlight-title">TO-Do Web Site</h3>
                            <p className="spotlight-text">
                                A task management web application to organize and track your daily tasks efficiently with a clean and intuitive interface.
                            </p>
                            <div className="spotlight-actions">
                                <a href="https://vaibhav-student.github.io/To_Do/" target="_blank" rel="noreferrer" className="btn btn-primary">
                                    <span>View Demo</span>
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                                <a href="https://github.com/Vaibhav-Student/To_Do" target="_blank" rel="noreferrer" className="btn btn-secondary">
                                    <span>View Code</span>
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                            <div className="spotlight-stack">
                                <span>React</span>
                                <span>JavaScript</span>
                            </div>
                        </div>

                        <div className="projects-metrics">
                            <div className="metric-card">
                                <span className="metric-number">1</span>
                                <span className="metric-label">Projects</span>
                            </div>
                            <div className="metric-card">
                                <span className="metric-number">1</span>
                                <span className="metric-label">Domains</span>
                            </div>
                            <div className="metric-card">
                                <span className="metric-number">2</span>
                                <span className="metric-label">Tech Stacks</span>
                            </div>
                        </div>
                    </aside>

                    <div className="projects-main">
                        <div className="project-filters">
                            <button
                                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                                onClick={() => setFilter('all')}
                            >All</button>
                            <button

                                className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
                                onClick={() => setFilter('web')}
                            >Web</button>
                        </div>

                        <div className="projects-grid">
                            {filteredProjects.map((project, index) => (
                                <div key={index} className="project-card" data-category={project.category} style={{ animation: 'fadeIn 0.5s ease forwards' }}>
                                    <div className="project-glass">
                                        <div className="project-header">
                                            <div className="project-icon">
                                                <i className={project.icon}></i>
                                            </div>
                                            <div className="project-links">
                                                <a href={project.demoLink} target="_blank" rel="noreferrer" className="project-link" title="View Demo">
                                                    <i className="fas fa-external-link-alt"></i>
                                                </a>
                                                <a href={project.codeLink} target="_blank" rel="noreferrer" className="project-link" title="View Code">
                                                    <i className="fab fa-github"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="project-body">
                                            <h3 className="project-title">{project.title}</h3>
                                            <p>{project.desc}</p>
                                        </div>
                                        <div className="project-tech">
                                            {project.tech.map((t, i) => <span key={i}>{t}</span>)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
