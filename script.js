// ===================================
// Preloader
// ===================================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1000);
});

// ===================================
// Navigation
// ===================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky Navbar on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ===================================
// Typing Animation
// ===================================
const typingText = document.querySelector('.typing-text');
const phrases = [
    'Machine Learning Engineer',
    'Deep Learning Specialist',
    'Full-Stack Developer',
    'Published Researcher',
    'AI Enthusiast'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Pause before typing next phrase
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// Start typing animation
typeEffect();

// ===================================
// Counter Animation for Stats
// ===================================
const statNumbers = document.querySelectorAll('.stat-number');
let hasAnimated = false;

function animateCounters() {
    if (hasAnimated) return;
    
    const aboutSection = document.getElementById('about');
    const aboutPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    
    if (aboutPosition < screenPosition) {
        hasAnimated = true;
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const increment = target / 50;
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.ceil(current);
                    setTimeout(updateCounter, 30);
                } else {
                    stat.textContent = target;
                }
            };
            
            updateCounter();
        });
    }
}

window.addEventListener('scroll', animateCounters);

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
const animatedElements = document.querySelectorAll(
    '.timeline-item, .project-card, .skill-category, .cert-card, .publication-card'
);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Create mailto link
    const mailtoLink = `mailto:abhishekbs242@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Your default email client will open. Please send the email from there.');
    
    // Reset form
    contactForm.reset();
});

// ===================================
// Back to Top Button
// ===================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Smooth Scroll for all anchor links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Dynamic Year in Footer
// ===================================
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-content p');
if (footerYear) {
    footerYear.innerHTML = footerYear.innerHTML.replace('2025', currentYear);
}

// ===================================
// Cursor Trail Effect (Optional)
// ===================================
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// ===================================
// Parallax Effect for Hero Section
// ===================================
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (heroSection && scrolled < window.innerHeight) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroSection.style.opacity = 1 - scrolled / 800;
    }
});

// ===================================
// Project Cards - Add ripple effect
// ===================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ===================================
// Loading Animation for Images
// ===================================
const images = document.querySelectorAll('img');

images.forEach(img => {
    img.addEventListener('load', function() {
        this.classList.add('loaded');
    });
    
    // If image is already loaded (cached)
    if (img.complete) {
        img.classList.add('loaded');
    }
});

// ===================================
// Console Message
// ===================================
console.log('%c👋 Hi there!', 'font-size: 20px; font-weight: bold; color: #6C63FF;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 14px; color: #A0AEC0;');
console.log('%cBuilt with ❤️ by Abhishek B S', 'font-size: 12px; color: #FF6584;');

// ===================================
// Performance Optimization
// ===================================
// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Theme Toggle (Optional - Dark/Light)
// ===================================
// Uncomment this section if you want to add theme toggle functionality
/*
const themeToggle = document.createElement('button');
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
themeToggle.classList.add('theme-toggle');
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('light-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});
*/
