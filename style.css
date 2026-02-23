/* ============================================
   FABIOLA MORALES · PORTFOLIO SCRIPTS
   ============================================ */

// ---- CUSTOM CURSOR ----
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');
let mx = 0, my = 0, cx = 0, cy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursorDot.style.left = mx + 'px';
  cursorDot.style.top = my + 'px';
});

function animCursor() {
  cx += (mx - cx) * 0.12;
  cy += (my - cy) * 0.12;
  cursor.style.left = cx + 'px';
  cursor.style.top = cy + 'px';
  requestAnimationFrame(animCursor);
}
animCursor();

// Scale cursor on hover
document.querySelectorAll('a, button, .project-card').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%,-50%) scale(1.8)');
  el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%,-50%) scale(1)');
});

// ---- NAV SCROLL ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ---- MOBILE MENU ----
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuToggle.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuToggle.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ---- HERO CANVAS GRID ----
const canvas = document.getElementById('gridCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
}

function initParticles() {
  particles = [];
  const cols = Math.floor(canvas.width / 60);
  const rows = Math.floor(canvas.height / 60);
  for (let i = 0; i <= cols; i++) {
    for (let j = 0; j <= rows; j++) {
      particles.push({
        x: i * 60,
        y: j * 60,
        ox: i * 60,
        oy: j * 60,
        vx: 0, vy: 0,
        size: Math.random() > 0.85 ? 2 : 1,
        bright: Math.random() > 0.9
      });
    }
  }
}

let mouseX = 0, mouseY = 0;
window.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const time = Date.now() * 0.0005;

  // Draw grid lines
  ctx.strokeStyle = 'rgba(39,39,39,0.6)';
  ctx.lineWidth = 0.5;
  const cols = Math.floor(canvas.width / 60);
  const rows = Math.floor(canvas.height / 60);
  for (let i = 0; i <= cols; i++) {
    ctx.beginPath();
    ctx.moveTo(i * 60, 0);
    ctx.lineTo(i * 60, canvas.height);
    ctx.stroke();
  }
  for (let j = 0; j <= rows; j++) {
    ctx.beginPath();
    ctx.moveTo(0, j * 60);
    ctx.lineTo(canvas.width, j * 60);
    ctx.stroke();
  }

  // Draw dots at intersections
  particles.forEach(p => {
    const dx = mouseX - p.ox;
    const dy = mouseY - p.oy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const repel = Math.max(0, 1 - dist / 120);

    p.vx += (-dx / dist || 0) * repel * 2;
    p.vy += (-dy / dist || 0) * repel * 2;
    p.vx *= 0.88;
    p.vy *= 0.88;
    p.vx += (p.ox - p.x) * 0.12;
    p.vy += (p.oy - p.y) * 0.12;
    p.x += p.vx;
    p.y += p.vy;

    const glow = p.bright ? Math.sin(time * 2 + p.ox * 0.05) * 0.5 + 0.5 : 0;
    const alpha = 0.25 + repel * 0.6 + glow * 0.4;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size + repel * 2, 0, Math.PI * 2);
    ctx.fillStyle = p.bright
      ? `rgba(200,240,85,${alpha})`
      : `rgba(100,100,100,${alpha})`;
    ctx.fill();
  });

  requestAnimationFrame(drawGrid);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
drawGrid();

// ---- INTERSECTION OBSERVER: REVEAL ----
const revealEls = document.querySelectorAll('.reveal, .timeline-item, .project-card, .skill-group, .about-card, .stat');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // For bars
      const bars = entry.target.querySelectorAll('.bar');
      bars.forEach(bar => {
        const w = bar.dataset.w;
        bar.style.setProperty('--w', w);
      });
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// Also observe bars directly if not inside observed parent
const allBars = document.querySelectorAll('.bar');
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const w = entry.target.dataset.w;
      entry.target.style.setProperty('--w', w);
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
allBars.forEach(b => barObserver.observe(b));

// ---- COUNTER ANIMATION ----
function animateCounter(el, target) {
  let start = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    start += step;
    el.textContent = Math.floor(start);
    if (start >= target) {
      el.textContent = target;
      clearInterval(timer);
    }
  }, 16);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      animateCounter(el, parseInt(el.dataset.target));
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num').forEach(el => counterObserver.observe(el));

// ---- ACTIVE NAV LINKS ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + entry.target.id
          ? 'var(--accent)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ---- ADD STAGGER TO TIMELINE ----
document.querySelectorAll('.timeline-item').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.1}s`;
});

document.querySelectorAll('.project-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.08}s`;
});
