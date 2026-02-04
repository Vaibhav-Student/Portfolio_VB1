import React, { useEffect, useRef, useState } from 'react';

const About = () => {
    const sectionRef = useRef(null);
    const [statsAnimated, setStatsAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    if (!statsAnimated) {
                        animateAboutStats();
                        setStatsAnimated(true);
                    }
                }
            });
        }, { threshold: 0.2 });

        if (sectionRef.current) {
            // Add fade-in class initially (handled by script.js previously, we do it here or via CSS)
            // script.js added 'fade-in' class to all sections.
            sectionRef.current.classList.add('fade-in');
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [statsAnimated]);

    const animateAboutStats = () => {
        const statEls = document.querySelectorAll('#about .stat-number-liquid[data-count]');
        statEls.forEach((el) => {
            const target = Number(el.getAttribute('data-count') || '0');
            const suffix = el.getAttribute('data-suffix') || '';
            const duration = 1200;
            const startTime = performance.now();

            function tick(now) {
                const t = Math.min(1, (now - startTime) / duration);
                const eased = 1 - Math.pow(1 - t, 3);
                const value = Math.round(target * eased);
                el.textContent = `${value}${suffix}`;
                if (t < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        });
    };

    return (
        <section id="about" className="about" ref={sectionRef}>
            {/* Liquid Glass Background Elements */}
            <div className="liquid-bg">
                <div className="liquid-blob liquid-blob-1"></div>
                <div className="liquid-blob liquid-blob-2"></div>
                <div className="liquid-blob liquid-blob-3"></div>
                <div className="liquid-wave"></div>
            </div>

            <div className="container">
                <div className="about-header">
                    <div className="about-title-container">
                        <div className="about-title-decoration"></div>
                        <div className="about-title-wrapper">
                            <span className="about-label">About</span>
                            <div className="about-title-divider"></div>
                            <h2 className="about-title">
                                <span className="title-text">Me</span>
                                <span className="title-glow"></span>
                            </h2>
                        </div>
                        <div className="about-title-decoration"></div>
                    </div>
                    <p className="about-subtitle">
                        <span className="subtitle-line"></span>
                        <span className="subtitle-text">Passionate developer building the future with code</span>
                        <span class="subtitle-line"></span>
                    </p>
                </div>

                <div className="about-layout">
                    {/* Left Column: Profile Card */}
                    <div className="liquid-card profile-liquid-card">
                        <div className="liquid-card-inner">
                            <div className="liquid-card-glow"></div>
                            <div className="profile-image-wrapper">
                                <div className="liquid-image-frame">
                                    <div className="liquid-shine"></div>
                                    <img src="/profile.jpg" alt="Vaibhav Beladiya" />
                                </div>
                                <div className="profile-badge">
                                    <span className="badge-pulse"></span>
                                    <span>Open to Work</span>
                                </div>
                            </div>
                            <div className="profile-info">
                                <h3>Vaibhav Beladiya</h3>
                                <p className="profile-role">MCA-AI Student</p>
                            </div>
                        </div>
                    </div>

                    {/* Center Column: Bio Card */}
                    <div className="liquid-card bio-liquid-card">
                        <div className="liquid-card-inner">
                            <div className="liquid-card-glow"></div>
                            <div className="card-header-icon">
                                <i className="fas fa-user-astronaut"></i>
                            </div>
                            <h3 className="bio-title">Who Am I?</h3>
                            <div className="bio-content">
                                <p>
                                    Hi, I'm <strong>Vaibhav</strong> — a passionate <span className="text-gradient">MCA-AI Student</span>
                                    crafting digital experiences. I'm dedicated to exploring the frontiers of
                                    <strong>Artificial Intelligence</strong> and <strong>Software Development</strong>.
                                </p>
                                <p>
                                    My journey is fueled by curiosity and a drive to build innovative solutions that solve
                                    real-world problems. Specializing in <strong>Java</strong> and
                                    <strong>Cloud Technologies</strong>, I create seamless digital experiences that make a difference.
                                </p>
                            </div>
                            <div className="bio-footer">
                                <div className="focus-inline">
                                    <span className="focus-label-inline"><i className="fas fa-bullseye"></i> Focus Areas</span>
                                    <div className="focus-tags-inline">
                                        <span className="focus-tag-liquid"><i className="fab fa-java"></i><span>Java</span></span>
                                        <span className="focus-tag-liquid"><i className="fas fa-brain"></i><span>AI/ML</span></span>
                                        <span className="focus-tag-liquid"><i className="fas fa-database"></i><span>SQL</span></span>
                                    </div>
                                </div>
                                <div className="bio-actions">
                                    <a href="#contact" className="btn-liquid btn-liquid-primary">
                                        <span>Hire Me</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                    <a href="#" className="btn-liquid btn-liquid-secondary" download>
                                        <i className="fas fa-file-download"></i>
                                        <span>Download CV</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Stats Only */}
                    <div className="liquid-stats-column">
                        <div className="liquid-card stats-liquid-card">
                            <div className="liquid-card-inner">
                                <div className="liquid-card-glow"></div>
                                <div className="stats-grid">
                                    <div className="stat-item-liquid">
                                        <div className="stat-icon"><i className="fas fa-code"></i></div>
                                        <span className="stat-number-liquid" data-count="1" data-suffix="+">0</span>
                                        <span className="stat-label-liquid">Years Coding</span>
                                    </div>
                                    <div className="stat-divider-liquid"></div>
                                    <div className="stat-item-liquid">
                                        <div className="stat-icon"><i className="fas fa-project-diagram"></i></div>
                                        <span className="stat-number-liquid" data-count="2" data-suffix="">0</span>
                                        <span className="stat-label-liquid">Projects Done</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
