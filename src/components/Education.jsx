import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const EducationCard = ({ date, title, institution, description, tags, location, delay }) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            className="edu-card group"
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            style={{
                "--mouse-x": useMotionTemplate`${mouseX}px`,
                "--mouse-y": useMotionTemplate`${mouseY}px`,
            }}
        >
            <div className="edu-content">
                <div className="edu-header">
                    <div>
                        <h3 className="edu-title">{title}</h3>
                        <h4 className="edu-institution">{institution}</h4>
                    </div>
                    <span className="edu-duration">{date}</span>
                </div>

                <div className="edu-details">
                    <div className="detail-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{location || 'India'}</span>
                    </div>
                    {/* Add more details if available in data, e.g., Grade */}
                </div>

                <p className="about-text" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    {description}
                </p>

                <div className="edu-highlights">
                    {tags.map((tag, index) => (
                        <span key={index} className="highlight-chip">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const CertificationCard = ({ title, provider, icon, downloadLink, delay }) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            className="cert-card-new group"
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay, type: "spring", stiffness: 100 }}
            style={{
                "--mouse-x": useMotionTemplate`${mouseX}px`,
                "--mouse-y": useMotionTemplate`${mouseY}px`,
            }}
        >
            <div className="cert-card-glow"></div>
            <div className="cert-card-content">
                <div className="cert-icon-wrapper">
                    <i className={icon}></i>
                </div>
                <div className="cert-info">
                    <h4 className="cert-title-new">{title}</h4>
                    <span className="cert-provider-new">{provider}</span>
                </div>
                <div className="cert-badge">
                    {downloadLink ? (
                        <a href={downloadLink} download className="cert-download-btn" title="Download Certificate">
                            <i className="fas fa-download"></i>
                        </a>
                    ) : (
                        <i className="fas fa-check-circle"></i>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Education = () => {
    const educationData = [
        {
            date: "2025 - 2027",
            title: "Master of Computer Applications (AI)",
            institution: "Parul University",
            description: "Specializing in Artificial Intelligence. Currently pursuing advanced coursework in AI.",
            tags: ["AI"],
            location: "Vadodara, Gujarat, India"
        },
        {
            date: "2022 - 2025",
            title: "Bachelor of Computer Applications",
            institution: "Sutex Bank College of Computer Applications & Science",
            description: "Completed undergraduate studies with focus on programming fundamentals, database management, and software development.",
            tags: ["Java", "Flutter", "DBMS", "App Development"],
            location: "Surat, Gujarat, India"
        },
        {
            date: "2020 - 2022",
            title: "Higher Secondary Education",
            institution: "J B & Karp Vidya Sankul",
            description: "Completed 11th and 12th standard with Science stream (PCM). Built strong foundation in mathematics and logical thinking.",
            tags: ["Science", "Mathematics"],
            location: "Surat, Gujarat, India"
        }
    ];

    const certifications = [
        {
            title: "Vadodara Hackathon 6.0",
            provider: "Parul Innovation & Entrepreneurship Research Centre",
            icon: "fas fa-trophy",
            downloadLink: "/Certificates/Vadodara_Hackathon_6.0.pdf"
        },
        {
            title: "Agenti AI Saksham",
            provider: "Capable",
            icon: "fas fa-certificate",
            downloadLink: "/Certificates/Agentic_AI__Saksham_Python_Programming_for_Agentic_AI.pdf"
        }
    ];

    return (
        <section id="education" className="education">
            <div className="container">
                <div className="about-header">
                    <div className="about-title-container">
                        <div className="about-title-decoration"></div>
                        <div className="about-title-wrapper">
                            <span className="about-label">Academic Journey</span>
                            <div className="about-title-divider"></div>
                            <h2 className="about-title">
                                <span className="title-text">Education</span>
                                <span className="title-glow"></span>
                            </h2>
                        </div>
                        <div className="about-title-decoration"></div>
                    </div>
                    <p className="about-subtitle">
                        <span className="subtitle-line"></span>
                        <span className="subtitle-text">Qualifications & Certifications</span>
                        <span className="subtitle-line"></span>
                    </p>
                </div>

                <div className="education-grid">
                    {educationData.map((edu, index) => (
                        <EducationCard
                            key={index}
                            {...edu}
                            delay={index * 0.2}
                        />
                    ))}
                </div>

                {/* Certifications Section */}
                <div className="certifications-section">
                    <div className="cert-section-header">
                        <div className="cert-header-line"></div>
                        <div className="cert-header-content">
                            <span className="cert-label">Achievements</span>
                            <h3 className="cert-section-title">Certifications</h3>
                        </div>
                        <div className="cert-header-line"></div>
                    </div>

                    <div className="certifications-grid">
                        {certifications.map((cert, index) => (
                            <CertificationCard
                                key={index}
                                {...cert}
                                delay={0.1 + (index * 0.15)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
