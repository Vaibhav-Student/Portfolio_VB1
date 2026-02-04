import React, { useEffect, useRef } from 'react';

const Skills = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    animateSkills();
                }
            });
        }, { threshold: 0.2 });

        if (sectionRef.current) {
            sectionRef.current.classList.add('fade-in');
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const animateSkills = () => {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        });
    };

    const coreSkills = [
        { name: 'Java', icon: 'fab fa-java', level: 90, category: 'Backend' },
        { name: 'DSA', icon: 'fas fa-project-diagram', level: 80, category: 'Problem Solving' },
        { name: 'SQL', icon: 'fas fa-database', level: 85, category: 'Database' },
        { name: 'MySQL', icon: 'fas fa-server', level: 85, category: 'RDBMS' },
        { name: 'PHP', icon: 'fab fa-php', level: 75, category: 'Web' },
    ];

    const tools = [
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'GitHub', icon: 'fab fa-github' },
        { name: 'VS Code', icon: 'fas fa-terminal' },
        { name: 'Android Studio', icon: 'fab fa-android' },
    ];

    return (
        <section id="skills" className="skills-compact" ref={sectionRef}>
            <div className="container">
                <div className="about-header">
                    <div className="about-title-container">
                        <div className="about-title-decoration"></div>
                        <div className="about-title-wrapper">
                            <span className="about-label">Skills</span>
                            <div className="about-title-divider"></div>
                            <h2 className="about-title">
                                <span className="title-text">My Skills</span>
                                <span className="title-glow"></span>
                            </h2>
                        </div>
                        <div className="about-title-decoration"></div>
                    </div>
                    <p className="about-subtitle">
                        <span className="subtitle-line"></span>
                        <span className="subtitle-text">Technologies I work with</span>
                        <span className="subtitle-line"></span>
                    </p>
                </div>

                <div className="skills-compact-grid">
                    {/* Core Skills */}
                    <div className="skills-core-section">
                        <div className="section-label">
                            <i className="fas fa-code"></i>
                            <span>Core Stack</span>
                        </div>
                        <div className="skills-cards-grid">
                            {coreSkills.map((skill, index) => (
                                <div key={index} className="skill-card-compact">
                                    <div className="skill-card-top">
                                        <div className="skill-icon-mini">
                                            <i className={skill.icon}></i>
                                        </div>
                                        <div className="skill-info-compact">
                                            <h4>{skill.name}</h4>
                                            <span>{skill.category}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="skills-tools-section">
                        <div className="section-label">
                            <i className="fas fa-wrench"></i>
                            <span>Tools & Platforms</span>
                        </div>
                        <div className="tools-compact-grid">
                            {tools.map((tool, index) => (
                                <div key={index} className="tool-card-compact">
                                    <i className={tool.icon}></i>
                                    <span>{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
