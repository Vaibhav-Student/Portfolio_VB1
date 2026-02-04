import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            {/* Animated Background Elements */}
            <div className="footer-bg-elements">
                <div className="footer-glow footer-glow-1"></div>
                <div className="footer-glow footer-glow-2"></div>
            </div>
            
            {/* Wave Decoration */}
            <div className="footer-wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" preserveAspectRatio="none">
                    <path fill="rgba(255, 255, 255, 0.02)" d="M0,64L60,69.3C120,75,240,85,360,90.7C480,96,600,96,720,85.3C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,150L1380,150C1320,150,1200,150,1080,150C960,150,840,150,720,150C600,150,480,150,360,150C240,150,120,150,60,150L0,150Z"></path>
                </svg>
            </div>

            <div className="footer-content">
                {/* Main Footer Content */}
                <div className="footer-main">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-bracket">&lt;</span>
                            <span className="logo-text">VB</span>
                            <span className="logo-bracket">/&gt;</span>
                        </div>
                        <p className="footer-tagline">Crafting digital experiences with passion and precision</p>
                        <div className="footer-social-main">
                            <a href="https://github.com/Vaibhav-Student" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
                                <i className="fab fa-github"></i>
                                <span className="social-tooltip">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/vaibhav-beladiya-4b78892a2/" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                                <span className="social-tooltip">LinkedIn</span>
                            </a>
                            <a href="https://leetcode.com/u/bvm_im/" target="_blank" rel="noreferrer" className="social-btn" aria-label="LeetCode">
                                <i className="fas fa-code"></i>
                                <span className="social-tooltip">LeetCode</span>
                            </a>
                            <a href="mailto:temperfor2026@gmail.com" className="social-btn" aria-label="Email">
                                <i className="fas fa-envelope"></i>
                                <span className="social-tooltip">Email</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links-section">
                        <div className="footer-column">
                            <h4 className="footer-heading">
                                <span className="heading-icon"><i className="fas fa-compass"></i></span>
                                Quick Links
                            </h4>
                            <ul className="footer-list">
                                <li><a href="#home"><i className="fas fa-chevron-right"></i>Home</a></li>
                                <li><a href="#about"><i className="fas fa-chevron-right"></i>About</a></li>
                                <li><a href="#skills"><i className="fas fa-chevron-right"></i>Skills</a></li>
                                <li><a href="#projects"><i className="fas fa-chevron-right"></i>Projects</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4 className="footer-heading">
                                <span className="heading-icon"><i className="fas fa-link"></i></span>
                                More
                            </h4>
                            <ul className="footer-list">
                                <li><a href="#education"><i className="fas fa-chevron-right"></i>Education</a></li>
                                <li><a href="#contact"><i className="fas fa-chevron-right"></i>Contact</a></li>
                                <li><a href="https://github.com/Vaibhav-Student" target="_blank" rel="noreferrer"><i className="fas fa-chevron-right"></i>GitHub</a></li>
                                <li><a href="https://leetcode.com/u/bvm_im/" target="_blank" rel="noreferrer"><i className="fas fa-chevron-right"></i>LeetCode</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider with design */}
                <div className="footer-divider">
                    <span className="divider-star"><i className="fas fa-star"></i></span>
                </div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <p className="footer-credit">
                        Designed & Built with <span className="heart"><i className="fas fa-heart"></i></span> by 
                        <span className="author-name"> Vaibhav Beladiya</span>
                    </p>
                    <p className="footer-copyright">
                        <i className="far fa-copyright"></i> 2026 All Rights Reserved
                    </p>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                id="backToTop"
                className={`back-to-top ${visible ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Back to top"
            >
                <i className="fas fa-arrow-up"></i>
                <span className="btn-glow"></span>
            </button>
        </footer>
    );
};

export default Footer;
