// Augmentous Systems — main.js

// Nav background intensifies on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        nav.style.background = 'rgba(8,11,16,0.97)';
    } else {
        nav.style.background = 'rgba(8,11,16,0.88)';
    }
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Intersection Observer — fade in sections on scroll
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
    });
    },
    { threshold: 0.1 }
);

document.querySelectorAll('.service-card, .credential-list li').forEach(el => {
    observer.observe(el);
});
