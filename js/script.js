/* ============ Mobile Menu ============ */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

document.addEventListener('click', (e) => {
    if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});

/* ============ Sticky header + active nav link ============ */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        let link = document.querySelector('header nav a[href="#' + id + '"]');

        if (scrollY >= offset && scrollY < offset + height && link) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

/* ============ Typing animation ============ */
const typedTextEl = document.querySelector('.typed-text');
const phrases = [
    'Full-Stack Developer',
    'Angular & .NET Developer',
    'React / Node.js Developer',
    'Real-Time App Builder',
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 100;

function type() {
    const current = phrases[phraseIndex];

    if (isDeleting) {
        typedTextEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        delay = 50;
    } else {
        typedTextEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        delay = 110;
    }

    if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
        delay = 1800;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 400;
    }

    setTimeout(type, delay);
}

/* ============ Init ============ */
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 600);
    AOS.init({ duration: 750, once: true, offset: 80 });
});
