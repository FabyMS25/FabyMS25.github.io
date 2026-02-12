// ===========================
// Mobile Menu Toggle
// ===========================
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });
}

// ===========================
// Smooth Scroll for Navigation Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offset = 80; // Height of fixed nav
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Navbar Background on Scroll
// ===========================
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 50) {
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
    } else {
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Scroll Reveal Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with data-animate attribute
document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
});

// Add data-animate to sections on load
window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.about, .experience, .projects, .skills, .contact');
    sections.forEach(section => {
        section.setAttribute('data-animate', '');
        observer.observe(section);
    });
    
    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.setAttribute('data-animate', '');
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
    
    // Animate project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.setAttribute('data-animate', '');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
});

// ===========================
// Skill Bars Animation
// ===========================
const skillsSection = document.querySelector('.skills');
let skillsAnimated = false;

const animateSkillBars = () => {
    if (skillsAnimated) return;
    
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = width;
        }, index * 100);
    });
    
    skillsAnimated = true;
};

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
        }
    });
}, { threshold: 0.3 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// ===========================
// Typing Effect for Hero Title (Optional Enhancement)
// ===========================
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.style.opacity = '0';
    
    setTimeout(() => {
        heroTitle.style.opacity = '1';
    }, 100);
}

// ===========================
// Active Navigation Link on Scroll
// ===========================
const sections = document.querySelectorAll('section[id]');

const highlightNavigation = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.style.color = 'var(--color-primary)';
            } else {
                navLink.style.color = 'var(--color-text-secondary)';
            }
        }
    });
};

window.addEventListener('scroll', highlightNavigation);

// ===========================
// Parallax Effect for Hero Background
// ===========================
const heroBackground = document.querySelector('.hero-background');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${rate}px)`;
    }
});

// ===========================
// Project Cards Hover Effect Enhancement
// ===========================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// ===========================
// Add Cursor Trail Effect (Optional)
// ===========================
let cursorTrail = [];
const trailLength = 20;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({
        x: e.clientX,
        y: e.clientY,
        time: Date.now()
    });
    
    // Keep only recent positions
    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
});

// ===========================
// Gradient Orbs Movement with Mouse
// ===========================
const orbs = document.querySelectorAll('.gradient-orb');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 10;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ===========================
// Loading Animation
// ===========================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        highlightNavigation();
    }, 500);
});

// ===========================
// Console Easter Egg
// ===========================
console.log('%c¡Hola Developer! 👋', 'color: #FF6B35; font-size: 20px; font-weight: bold;');
console.log('%c¿Interesado en el código? Visita mi GitHub!', 'color: #1AE5BE; font-size: 14px;');
console.log('%cGitHub: github.com/fabiola-morales', 'color: #004E89; font-size: 12px;');

// ===========================
// Performance Optimization
// ===========================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
const debouncedHighlight = debounce(highlightNavigation, 100);
window.removeEventListener('scroll', highlightNavigation);
window.addEventListener('scroll', debouncedHighlight);

// ===========================
// Accessibility Enhancements
// ===========================
// Add skip to main content link
const skipLink = document.createElement('a');
skipLink.href = '#about';
skipLink.className = 'skip-link';
skipLink.textContent = 'Saltar al contenido principal';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--color-primary);
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 100;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});

document.body.insertBefore(skipLink, document.body.firstChild);

// ===========================
// Form Validation (if contact form is added)
// ===========================
const contactForm = document.querySelector('#contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        
        // Here you would typically send the data to a server
        // For now, just show a success message
        alert('¡Mensaje enviado! Te contactaré pronto.');
        contactForm.reset();
    });
}

// ===========================
// Theme Toggle (Optional - for future enhancement)
// ===========================
const themeToggle = document.querySelector('.theme-toggle');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        localStorage.setItem('theme', 
            document.body.classList.contains('light-theme') ? 'light' : 'dark'
        );
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
}

// ===========================
// Intersection Observer for Counter Animation
// ===========================
const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (element) => {
    const target = parseInt(element.textContent);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const counter = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});