import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [notification, setNotification] = useState(null);
    const [focusedField, setFocusedField] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const showNotification = (message, type) => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        showNotification('Sending...', 'info');

        try {
            // Create FormData directly from the form element
            const formDataToSend = new FormData(event.target);
            formDataToSend.append("access_key", "f34356f7-6ca0-4a29-b55c-285ac5aba7b3");

            // Submit to Web3Forms API
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                showNotification('Form Submitted Successfully!', 'success');
                event.target.reset();
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                console.log("Error", data);
                showNotification('Error: Failed to send message', 'error');
            }
        } catch (error) {
            showNotification('Error: An error occurred', 'error');
            console.error('Form submission error:', error);
        } finally {
            setSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: 'fas fa-envelope',
            label: 'Email',
            value: 'temperfor2026@gmail.com',
            link: 'mailto:temperfor2026@gmail.com'
        },
        {
            icon: 'fas fa-map-marker-alt',
            label: 'Location',
            value: 'Vadodara, Gujarat, India',
            link: null
        }
    ];

    const socialLinks = [
        { icon: 'fab fa-github', url: 'https://github.com/Vaibhav-Student', label: 'GitHub' },
        { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/vaibhav-beladiya-4b78892a2/', label: 'LinkedIn' }
    ];

    return (
        <section id="contact" className="contact">
            {notification && (
                <motion.div
                    className={`notification-toast ${notification.type}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                >
                    <div className="toast-icon">
                        <i className={`fas ${notification.type === 'success' ? 'fa-check' : 'fa-exclamation'}`}></i>
                    </div>
                    <span>{notification.message}</span>
                </motion.div>
            )}

            <div className="container">
                <div className="about-header">
                    <div className="about-title-container">
                        <div className="about-title-decoration"></div>
                        <div className="about-title-wrapper">
                            <span className="about-label">Contact</span>
                            <div className="about-title-divider"></div>
                            <h2 className="about-title">
                                <span className="title-text">Get In Touch</span>
                                <span className="title-glow"></span>
                            </h2>
                        </div>
                        <div className="about-title-decoration"></div>
                    </div>
                    <p className="about-subtitle">
                        <span className="subtitle-line"></span>
                        <span className="subtitle-text">Let's create something amazing together</span>
                        <span className="subtitle-line"></span>
                    </p>
                </div>

                <div className="contact-wrapper">
                    {/* Left Side - Info Cards */}
                    <motion.div 
                        className="contact-left"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="contact-intro">
                            <h3>Let's Talk</h3>
                            <p>I'm currently open to new opportunities and collaborations. Feel free to reach out!</p>
                        </div>

                        <div className="contact-cards">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    className="contact-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <div className="contact-card-icon">
                                        <i className={info.icon}></i>
                                    </div>
                                    <div className="contact-card-content">
                                        <span className="contact-card-label">{info.label}</span>
                                        {info.link ? (
                                            <a href={info.link} className="contact-card-value">{info.value}</a>
                                        ) : (
                                            <span className="contact-card-value">{info.value}</span>
                                        )}
                                    </div>
                                    <div className="contact-card-arrow">
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="contact-socials">
                            <span className="socials-label">Connect with me</span>
                            <div className="socials-row">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="social-link"
                                        aria-label={social.label}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                                        whileHover={{ y: -5 }}
                                    >
                                        <i className={social.icon}></i>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div 
                        className="contact-right"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="form-container">
                            <div className="form-decoration">
                                <div className="form-glow"></div>
                            </div>
                            
                            <form className="contact-form-new" onSubmit={handleSubmit}>
                                <div className="form-header">
                                    <div className="form-header-icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="form-header-text">
                                        <h4>Send a Message</h4>
                                        <p>I'd love to hear from you</p>
                                    </div>
                                </div>

                                <div className="form-body">
                                    <div className="form-row">
                                        <div className={`form-input-group ${focusedField === 'name' || formData.name ? 'active' : ''}`}>
                                            <div className="input-icon">
                                                <i className="fas fa-user"></i>
                                            </div>
                                            <div className="input-wrapper">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder=" "
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('name')}
                                                    onBlur={() => setFocusedField(null)}
                                                    required
                                                />
                                                <label>Your Name</label>
                                            </div>
                                        </div>

                                        <div className={`form-input-group ${focusedField === 'email' || formData.email ? 'active' : ''}`}>
                                            <div className="input-icon">
                                                <i className="fas fa-at"></i>
                                            </div>
                                            <div className="input-wrapper">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder=" "
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('email')}
                                                    onBlur={() => setFocusedField(null)}
                                                    required
                                                />
                                                <label>Your Email</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`form-input-group full ${focusedField === 'subject' || formData.subject ? 'active' : ''}`}>
                                        <div className="input-icon">
                                            <i className="fas fa-tag"></i>
                                        </div>
                                        <div className="input-wrapper">
                                            <input
                                                type="text"
                                                name="subject"
                                                placeholder=" "
                                                value={formData.subject}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('subject')}
                                                onBlur={() => setFocusedField(null)}
                                                required
                                            />
                                            <label>Subject</label>
                                        </div>
                                    </div>

                                    <div className={`form-input-group full textarea-group ${focusedField === 'message' || formData.message ? 'active' : ''}`}>
                                        <div className="input-icon textarea-icon">
                                            <i className="fas fa-comment-dots"></i>
                                        </div>
                                        <div className="input-wrapper">
                                            <textarea
                                                name="message"
                                                rows="4"
                                                placeholder=" "
                                                value={formData.message}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('message')}
                                                onBlur={() => setFocusedField(null)}
                                                required
                                            />
                                            <label>Your Message</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-footer">
                                    <button type="submit" className="form-submit-btn" disabled={submitting}>
                                        <span className="btn-content">
                                            <span className="btn-text">
                                                {submitting ? 'Sending...' : 'Send Message'}
                                            </span>
                                            <span className="btn-icon">
                                                <i className={`fas ${submitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
                                            </span>
                                        </span>
                                        <span className="btn-bg"></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
