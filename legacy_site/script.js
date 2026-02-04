// ==================== 
// Preloader
// ====================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 500);
});

// ==================== 
// Navbar Scroll Effect
// ====================
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        backToTop.classList.add('visible');
    } else {
        navbar.classList.remove('scrolled');
        backToTop.classList.remove('visible');
    }
});

// ==================== 
// Mobile Navigation
// ====================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navLinksItems = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ==================== 
// Active Navigation Link
// ====================
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==================== 
// Typing Effect
// ====================
const typedTextElement = document.getElementById('typed-text');
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

function typeText() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500; // Pause before new word
    }
    
    setTimeout(typeText, typingSpeed);
}

// Start typing effect
setTimeout(typeText, 1000);

// ==================== 
// Particle Background
// ====================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// ==================== 
// Skills Animation
// ====================
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
}

// ==================== 
// Scroll Animations
// ====================
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate skills when skills section is visible
            if (entry.target.id === 'skills') {
                animateSkills();
            }

            // Animate About stats when About section is visible
            if (entry.target.id === 'about') {
                animateAboutStats();
            }
        }
    });
}, observerOptions);

// ==================== 
// About Stats Count-Up Animation
// ====================
let aboutStatsAnimated = false;

function animateAboutStats() {
    if (aboutStatsAnimated) return;

    const statEls = document.querySelectorAll('#about .stat-number-liquid[data-count]');
    if (!statEls.length) return;

    aboutStatsAnimated = true;

    statEls.forEach((el) => {
        const target = Number(el.getAttribute('data-count') || '0');
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1200; // ms
        const startTime = performance.now();

        function tick(now) {
            const t = Math.min(1, (now - startTime) / duration);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - t, 3);
            const value = Math.round(target * eased);
            el.textContent = `${value}${suffix}`;

            if (t < 1) requestAnimationFrame(tick);
        }

        el.textContent = `0${suffix}`;
        requestAnimationFrame(tick);
    });
}

// Observe sections
sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// ==================== 
// Project Filtering
// ====================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.classList.remove('hide');
                card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                card.classList.add('hide');
            }
        });
    });
});

// ==================== 
// Contact Form
// ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email', 'error');
        return;
    }
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('.submit-btn');
    submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showNotification('Message sent successfully!', 'success');
        contactForm.reset();
        submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
        submitBtn.disabled = false;
    }, 2000);
});

// ==================== 
// Notification System
// ====================
function showNotification(message, type) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #00d4ff, #6c63ff)' : 'linear-gradient(135deg, #ff6b6b, #ffa500)'};
        color: white;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 500;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideIn 0.5s ease;
    `;
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.5s ease reverse';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// ==================== 
// Back to Top
// ====================
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== 
// Smooth Scroll for All Anchor Links
// ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== 
// Initialize Animations on Load
// ====================
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to elements
    const animatedElements = document.querySelectorAll('.skill-row, .skills-panel, .tool-pill, .project-card, .timeline-item, .cert-card');
    
    animatedElements.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => animateOnScroll.observe(el));
});

// ==================== 
// Tilt Effect for Cards (Optional Enhancement)
// ====================
function addTiltEffect() {
    const cards = document.querySelectorAll('.skill-card, .project-card, .cert-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

addTiltEffect();

// ==================== 
// Console Easter Egg
// ====================
console.log('%c Welcome to my Portfolio! ', 'background: linear-gradient(135deg, #6c63ff, #00d4ff); color: white; font-size: 20px; padding: 10px 20px; border-radius: 5px;');
console.log('%c Built with ❤️ by an MCA-AI Student ', 'color: #6c63ff; font-size: 14px;');
