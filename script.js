/* ===================================
   CHRISTOPHERAI - INTERACTIVE SCRIPTS
   =================================== */

// === GLOBAL VARIABLES ===
let typewriterIndex = 0;
let isTypewriterComplete = false;

// === DOCUMENT READY ===
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initTypewriter();
    initScrollAnimations();
    initNavbarScroll();
    initSmoothScrolling();
    
    console.log('ChristopherAI website initialized successfully!');
});

// === TYPEWRITER EFFECT FOR HERO TITLE ===
function initTypewriter() {
    const text = "Christopher Herrera";
    const typewriterElement = document.getElementById('typewriter-text');
    const cursor = document.querySelector('.cursor');
    
    if (!typewriterElement) return;
    
    // Start typing after a brief delay
    setTimeout(() => {
        typeWriter(text, typewriterElement, cursor);
    }, 1000);
}

function typeWriter(text, element, cursor) {
    if (typewriterIndex < text.length) {
        element.textContent += text.charAt(typewriterIndex);
        typewriterIndex++;
        // Random typing speed for more natural effect
        const speed = Math.random() * 150 + 50;
        setTimeout(() => typeWriter(text, element, cursor), speed);
    } else {
        // Typing complete - make cursor blink less frequently
        isTypewriterComplete = true;
        cursor.style.animation = 'blink 1.5s infinite';
    }
}

// === SCROLL ANIMATIONS & FADE-IN EFFECTS ===
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add stagger effect for cards
                if (entry.target.classList.contains('about-section')) {
                    staggerCards('.highlight-card', 100);
                }
                
                if (entry.target.classList.contains('projects-section')) {
                    staggerCards('.project-card', 150);
                }
            }
        });
    }, observerOptions);
    
    // Observe all fade-in sections
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    fadeInSections.forEach(section => {
        observer.observe(section);
    });
}

// === STAGGER ANIMATION FOR CARDS ===
function staggerCards(selector, delay) {
    const cards = document.querySelectorAll(selector);
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * delay);
    });
}

// === NAVBAR SCROLL EFFECTS ===
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Add/remove background blur based on scroll position
        if (currentScrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.backdropFilter = 'blur(25px)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.8)';
            navbar.style.backdropFilter = 'blur(20px)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// === SMOOTH SCROLLING FOR NAVIGATION LINKS ===
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate offset for fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// === CONTACT MODAL FUNCTIONS ===
function openContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Focus management for accessibility
        const firstLink = modal.querySelector('.contact-link');
        if (firstLink) {
            setTimeout(() => firstLink.focus(), 100);
        }
    }
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// === MODAL OUTSIDE CLICK TO CLOSE ===
window.addEventListener('click', (e) => {
    const modal = document.getElementById('contactModal');
    if (e.target === modal) {
        closeContactModal();
    }
});

// === KEYBOARD ACCESSIBILITY ===
document.addEventListener('keydown', (e) => {
    // Close modal on Escape key
    if (e.key === 'Escape') {
        const modal = document.getElementById('contactModal');
        if (modal && modal.style.display === 'block') {
            closeContactModal();
        }
    }
});

// === PERFORMANCE OPTIMIZATIONS ===
// Throttle scroll events for better performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// === ADDITIONAL INTERACTIVE FEATURES ===

// Add hover effects to project cards
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add subtle parallax effect to background particles
window.addEventListener('scroll', throttle(() => {
    const scrolled = window.pageYOffset;
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
        const speed = 0.1 + (index * 0.02);
        const yPos = -(scrolled * speed);
        particle.style.transform = `translateY(${yPos}px)`;
    });
}, 16));

// === UTILITY FUNCTIONS ===

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Smooth scroll to top function (if needed)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// === CONTACT FORM ANALYTICS (OPTIONAL) ===
// Track contact interactions
function trackContactInteraction(method) {
    console.log(`Contact method used: ${method}`);
    // You can add analytics tracking here if needed
    // Example: gtag('event', 'contact', { method: method });
}

// Add click tracking to contact links
document.addEventListener('DOMContentLoaded', () => {
    const contactLinks = document.querySelectorAll('.contact-link');
    
    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const method = link.textContent.trim();
            trackContactInteraction(method);
        });
    });
});

// === LOADING OPTIMIZATIONS ===
// Ensure all images and fonts are loaded
window.addEventListener('load', () => {
    // Hide any loading spinners if present
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
    
    // Initialize any deferred animations
    document.body.classList.add('loaded');
});

// === RESPONSIVE ADJUSTMENTS ===
// Handle window resize events
window.addEventListener('resize', throttle(() => {
    // Recalculate any position-dependent elements
    const hero = document.querySelector('.hero-section');
    if (hero) {
        // Adjust hero height if needed
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
}, 250));

// === ERROR HANDLING ===
window.addEventListener('error', (e) => {
    console.error('ChristopherAI website error:', e.error);
    // Handle gracefully without breaking the user experience
});

// === ACCESSIBILITY IMPROVEMENTS ===
// Add keyboard navigation for cards
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.classList.contains('project-card')) {
        const link = e.target.querySelector('.project-link');
        if (link) {
            link.click();
        }
    }
});

// === PERFORMANCE MONITORING ===
// Monitor scroll performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    
    scrollTimeout = setTimeout(() => {
        // Scroll ended - perform any cleanup if needed
    }, 150);
});

// === INITIALIZATION COMPLETE ===
console.log('🚀 ChristopherAI website scripts loaded successfully!');

/* ===================================
   EASY UPDATE SECTIONS FOR MANUAL EDITING
   
   To update content manually:
   
   1. HERO SECTION - Update text in initTypewriter():
      - Change "Chris Herrera" to new name
      - Update subtitle in HTML
   
   2. ABOUT SECTION - Update content in HTML:
      - Modify .about-text paragraph
      - Update .highlight-card numbers and labels
   
   3. PROJECTS SECTION - Update project cards in HTML:
      - Change .project-title
      - Update .project-description
      - Modify .tech-tag items
      - Update GitHub links
   
   4. CONTACT SECTION - Update links in HTML:
      - Modify email, LinkedIn, GitHub, Medium links
      - Update contact modal content
   
   5. COLORS - Update in CSS:
      - Main gradient: #40e0d0, #7b68ee
      - Background: #0a0a0a
      - Accent colors in :root variables
   
   =================================== */