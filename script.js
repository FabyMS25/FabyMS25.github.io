/* ===========================
   CURSOR
=========================== */
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursor-trail');

let trailX = 0, trailY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
  cursorX = e.clientX;
  cursorY = e.clientY;
  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';
});

function animateTrail() {
  trailX += (cursorX - trailX) * 0.12;
  trailY += (cursorY - trailY) * 0.12;
  trail.style.left = trailX + 'px';
  trail.style.top = trailY + 'px';
  requestAnimationFrame(animateTrail);
}
animateTrail();

document.addEventListener('mouseleave', () => {
  cursor.style.opacity = '0';
  trail.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
  cursor.style.opacity = '1';
  trail.style.opacity = '1';
});

/* ===========================
   NAV SCROLL
=========================== */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

/* ===========================
   TYPED EFFECT
=========================== */
const phrases = [
  'Full Stack Developer',
  'Ingeniera de Sistemas',
  'Backend Engineer',
  'Frontend Craftsperson',
  'DevOps Enthusiast',
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed');

function type() {
  const current = phrases[phraseIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typedEl.textContent = current.slice(0, charIndex);

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === current.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 400;
  }

  setTimeout(type, speed);
}

type();

/* ===========================
   REVEAL ON SCROLL
=========================== */
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // stagger within a batch
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = (idx * 0.1) + 's';
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px'
});

revealEls.forEach(el => observer.observe(el));

/* ===========================
   PROJECT CARD CLICK
=========================== */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const url = card.getAttribute('data-url');
    if (url) window.open(url, '_blank');
  });
});

/* ===========================
   NAV SMOOTH SCROLL & ACTIVE
=========================== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ===========================
   HERO PARALLAX GRID
=========================== */
const grid = document.querySelector('.hero-bg-grid');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (grid) {
    grid.style.transform = `translateY(${scrollY * 0.3}px)`;
  }
});

/* ===========================
   CODE WINDOW GLOW ON HOVER
=========================== */
const codeWindow = document.querySelector('.code-window');
if (codeWindow) {
  codeWindow.addEventListener('mousemove', (e) => {
    const rect = codeWindow.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    codeWindow.style.setProperty('--mouse-x', x + '%');
    codeWindow.style.setProperty('--mouse-y', y + '%');
  });
}

/* ===========================
   STAT COUNTER ANIMATION
=========================== */
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const isDecimal = target.toString().includes('.');
  const numeric = parseFloat(target);
  const duration = 1500;
  const step = numeric / (duration / 16);

  function update() {
    start = Math.min(start + step, numeric);
    el.textContent = (isDecimal ? start.toFixed(1) : Math.floor(start)) + suffix;
    if (start < numeric) requestAnimationFrame(update);
    else el.textContent = target + suffix;
  }
  update();
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.stat-num');
      nums.forEach(num => {
        const raw = num.textContent;
        const suffix = raw.replace(/[\d.]/g, '');
        const value = raw.replace(/[^\d.]/g, '');
        if (value) animateCounter(num, value, suffix);
      });
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) statObserver.observe(aboutStats);

/* ===========================
   SKILL TAGS STAGGER
=========================== */
document.querySelectorAll('.skill-tags .tag').forEach((tag, i) => {
  tag.style.animationDelay = (i * 0.05) + 's';
  tag.style.opacity = '0';
  tag.style.transform = 'translateY(10px)';
  tag.style.transition = `opacity 0.4s ${i * 0.05}s, transform 0.4s ${i * 0.05}s`;
});

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.tag').forEach(tag => {
        tag.style.opacity = '1';
        tag.style.transform = 'translateY(0)';
      });
      skillsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.skill-group').forEach(g => skillsObserver.observe(g));
