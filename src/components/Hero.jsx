import React, { useEffect, useRef } from 'react';

const Hero = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        // Typing Effect Logic
        const texts = [
            'MCA-AI Student',
            'Java Developer',
            'Database Expert',
            'Problem Solver'
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        let timeoutId;

        const typeText = () => {
            if (!typedRef.current) return;

            const currentText = texts[textIndex];

            if (isDeleting) {
                typedRef.current.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typedRef.current.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typingSpeed = 2000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500;
            }

            timeoutId = setTimeout(typeText, typingSpeed);
        };

        timeoutId = setTimeout(typeText, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        // Particles creation
        const particlesContainer = document.getElementById('particles');
        // In React we could map this in render, but to keep CSS logic exactly same for .particle children of #particles:
        // We can render them as list or manipulate DOM. 
        // Let's render them in JSX for better React pattern, OR stick to DOM manipulation if we want exact port.
        // JSX is better.
    }, []);

    // Creating particles array for rendering
    const particles = Array.from({ length: 50 }).map((_, i) => {
        const style = {
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 15 + 's',
            animationDuration: (Math.random() * 10 + 10) + 's'
        };
        return <div key={i} className="particle" style={style}></div>;
    });

    return (
        <section id="home" className="hero">
            <div className="hero-particles" id="particles">
                {particles}
            </div>
            <div className="hero-content">
                <div className="hero-text">
                    <p className="greeting">Hello, I'm</p>
                    <h1 className="name">Vaibhav Beladiya</h1>
                    <h2 className="title-wrapper">
                        <span className="static-text">I'm a </span>
                        <span className="dynamic-text" id="typed-text" ref={typedRef}></span>
                        <span className="cursor">|</span>
                    </h2>
                    <p className="tagline">Passionate MCA-AI Student | Building the Future with Code</p>
                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary">
                            <span>Hire Me</span>
                            <i className="fas fa-arrow-right"></i>
                        </a>
                        <a href="#projects" className="btn btn-secondary">
                            <span>View Projects</span>
                            <i className="fas fa-folder-open"></i>
                        </a>
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/Vaibhav-Student" target="_blank" className="social-link" title="GitHub" rel="noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/vaibhav-beladiya-4b78892a2/" target="_blank" className="social-link" title="LinkedIn" rel="noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://leetcode.com/u/bvm_im/" target="_blank" className="social-link" title="LeetCode" rel="noreferrer">
                            <i className="fas fa-code"></i>
                        </a>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-wrapper">
                        <div className="image-border"></div>
                        <img src="/profile.jpg" alt="Profile Photo" className="profile-img" />
                    </div>
                    <div className="floating-icons">
                        <div className="float-icon java"><i className="fab fa-java"></i></div>
                        <div className="float-icon database"><i className="fas fa-database"></i></div>
                        <div className="float-icon code"><i className="fas fa-code"></i></div>
                    </div>
                </div>
            </div>
            <a href="#about" className="scroll-down">
                <i className="fas fa-chevron-down"></i>
            </a>
        </section>
    );
};

export default Hero;
