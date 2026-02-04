import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Scroll Spy Logic
            const sections = document.querySelectorAll('section');
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            if (current) setActiveLink(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMenu = (id) => {
        setMobileMenuOpen(false);
    };

    const navItems = [
        { id: 'home', label: 'Home', icon: 'fas fa-home' },
        { id: 'about', label: 'About', icon: 'fas fa-user' },
        { id: 'skills', label: 'Skills', icon: 'fas fa-code' },
        { id: 'projects', label: 'Projects', icon: 'fas fa-briefcase' },
        { id: 'education', label: 'Education', icon: 'fas fa-graduation-cap' },
        { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' }
    ];

    return (
        <nav className={`navbar-modern ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-backdrop"></div>
            <div className="navbar-content">
                {/* Logo */}
                <a href="#home" className="nav-logo">
                    <div className="logo-icon">
                        <span className="logo-bracket">&lt;</span>
                        <span className="logo-slash">/</span>
                        <span className="logo-bracket">&gt;</span>
                    </div>
                    <span className="logo-label">Portfolio</span>
                </a>

                {/* Desktop Navigation */}
                <div className="nav-menu-wrapper">
                    <ul className="nav-menu">
                        {navItems.map((item) => (
                            <li key={item.id} className="nav-item">
                                <a 
                                    href={`#${item.id}`} 
                                    className={`nav-item-link ${activeLink === item.id ? 'active' : ''}`}
                                    onClick={() => closeMenu(item.id)}
                                >
                                    <i className={item.icon}></i>
                                    <span>{item.label}</span>
                                    <span className="nav-item-indicator"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="nav-menu-glow"></div>
                </div>

                {/* CTA Button */}
                <div className="nav-actions">
                    <a href="#contact" className="nav-cta">
                        <span className="cta-text">Hire Me</span>
                        <i className="fas fa-arrow-right"></i>
                        <span className="cta-shine"></span>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className={`nav-toggle ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className="toggle-line"></span>
                    <span className="toggle-line"></span>
                    <span className="toggle-line"></span>
                    <span className="toggle-bg"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    {navItems.map((item, index) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`mobile-menu-item ${activeLink === item.id ? 'active' : ''}`}
                            onClick={() => closeMenu(item.id)}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            <div className="mobile-item-icon">
                                <i className={item.icon}></i>
                            </div>
                            <span className="mobile-item-label">{item.label}</span>
                            <div className="mobile-item-arrow">
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
