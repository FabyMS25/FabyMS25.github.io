/* ============================================
   FABIOLA MORALES · PORTFOLIO SCRIPTS
   Includes: i18n, canvas, cursor, scroll FX
   ============================================ */

// ============================================================
// i18n DATA
// ============================================================
const translations = {
  en: {
    "nav.about": "about",
    "nav.experience": "exp",
    "nav.projects": "projects",
    "nav.skills": "skills",
    "nav.contact": "contact",

    "hero.tag": "Systems Engineer · Full Stack Developer",
    "hero.desc": "Architect of digital solutions for public management.<br/>Angular · Spring Boot · PostgreSQL · Docker.",
    "hero.cta1": "View Projects",
    "hero.cta2": "Get in Touch",
    "hero.available": "Available for projects",

    "about.label": "01 · about",
    "about.title1": "Clean code,",
    "about.title2": "real impact.",
    "about.p1": "I'm a Systems Engineer from UMSS with 3+ years building critical platforms for the Autonomous Municipal Government of Quillacollo. My work covers the full cycle: requirements analysis, design, implementation, and production deployment.",
    "about.p2": "I'm driven to build systems that simplify people's lives — with robust code, intuitive interfaces, and scalable architectures. I've led projects from scratch and optimized existing systems under real operational pressure.",
    "about.stat1": "Systems in production",
    "about.stat2": "Years in public sector",
    "about.stat3": "Users impacted",
    "card.role": "Systems Engineer · Full Stack",
    "card.grad": "July 2022",
    "card.langs": "Spanish · English C1 · Quechua Basic",

    "exp.label": "02 · experience",
    "exp.title1": "Professional",
    "exp.title2": "journey.",
    "exp.job1.title": "Consultant · Programmer / Analyst",
    "exp.job1.type": "Full-time",
    "exp.job1.desc": "Led full-stack development of 10+ institutional systems for Quillacollo's Municipal Government. Built and deployed PROVEGAQ, GAMSIS (SSO), ODECO, DEPORTES, PAGO ÚNICO, MATADERO and more. Managed servers, databases and Docker deployments in production environments.",
    "exp.job2.title": "Software Developer",
    "exp.job2.type": "Freelance",
    "exp.job2.desc": "Designed and built a custom administrative system for community water payment control. Digitized manual records, implemented attendance tracking and automated notifications for residents.",
    "exp.job3.title": "IT Support Assistant",
    "exp.job3.type": "Internship",
    "exp.job3.desc": "Provided technical support in a high-demand banking environment. Managed infrastructure issues and resolved user incidents.",
    "chip.support": "IT Support",
    "chip.infra": "Infrastructure",

    "proj.label": "03 · projects",
    "proj.title1": "Systems in",
    "proj.title2": "production.",
    "p1.sub": "Vehicle Gas Verification · 2025",
    "p1.desc": "Comprehensive platform for controlling vehicle emissions at GAMQ's Red Mónica. Automatic PASS/FAIL decision engine, real-time RUAT integration, sanctions module, and public air quality data portal.",
    "p1.badge": "Full-stack lead",
    "p2.sub": "Municipal SSO · 2023–Present",
    "p2.desc": "Single Sign-On platform centralizing access to 10+ municipal systems. Granular permission management per module and unified authentication across the entire GAMQ ecosystem.",
    "p3.sub": "Citizen Complaint Management · 2023–2025",
    "p3.desc": "Integrated ecosystem via REST APIs: ODECO as the public citizen portal for complaints, and TaskBoard automatically assigning and tracking internal tasks for municipal staff.",
    "p4.sub": "Sports Facilities · 2024–Present",
    "p4.desc": "Online booking and payment system for municipal sports courts. Schedule and availability management with RUAT integration for user validation.",
    "p5.sub": "Municipal Website · 2023",
    "p5.desc": "Official municipal portal with dynamic subpages per unit, news manager, and unified access to all digital services. Containerized with Docker for Linux/Windows servers.",
    "p6.sub": "Municipal Services · 2023–2024",
    "p6.desc": "SIGECEM digitizes cemetery administration. MATADERO manages slaughterhouse orders with full traceability, RUAT integration, and sanitary control.",

    "skills.label": "04 · skills",
    "skills.title1": "Technical",
    "skills.title2": "stack.",
    "skills.group4": "Testing & Tools",

    "contact.label": "05 · contact",
    "contact.title1": "Let's talk about",
    "contact.title2": "your project.",
    "contact.sub": "Available for freelance projects, consulting, and full-stack development opportunities.",

    "footer.built": "Built with code ♥"
  },

  es: {
    "nav.about": "sobre mí",
    "nav.experience": "exp",
    "nav.projects": "proyectos",
    "nav.skills": "skills",
    "nav.contact": "contacto",

    "hero.tag": "Ingeniera de Sistemas · Desarrolladora Full Stack",
    "hero.desc": "Arquitecto de soluciones digitales para la gestión pública.<br/>Angular · Spring Boot · PostgreSQL · Docker.",
    "hero.cta1": "Ver Proyectos",
    "hero.cta2": "Contactar",
    "hero.available": "Disponible para proyectos",

    "about.label": "01 · sobre mí",
    "about.title1": "Código limpio,",
    "about.title2": "impacto real.",
    "about.p1": "Soy Ingeniera de Sistemas graduada de la UMSS con más de 3 años desarrollando plataformas críticas para el Gobierno Autónomo Municipal de Quillacollo. Mi trabajo abarca el ciclo completo: análisis de requerimientos, diseño, implementación y despliegue en producción.",
    "about.p2": "Me mueve construir sistemas que simplifican la vida de las personas — con código robusto, interfaces intuitivas y arquitecturas que escalan. He liderado proyectos desde cero y optimizado sistemas bajo presión operativa real.",
    "about.stat1": "Sistemas en producción",
    "about.stat2": "Años en sector público",
    "about.stat3": "Usuarios impactados",
    "card.role": "Ing. de Sistemas · Full Stack",
    "card.grad": "Julio 2022",
    "card.langs": "Español · Inglés C1 · Quechua Básico",

    "exp.label": "02 · experiencia",
    "exp.title1": "Trayectoria",
    "exp.title2": "profesional.",
    "exp.job1.title": "Consultora · Programador / Analista",
    "exp.job1.type": "Tiempo completo",
    "exp.job1.desc": "Lideré el desarrollo full-stack de 10+ sistemas institucionales para el GAMQ. Construí y desplegué PROVEGAQ, GAMSIS (SSO), ODECO, DEPORTES, PAGO ÚNICO, MATADERO y más. Administré servidores, bases de datos y despliegues Docker en producción.",
    "exp.job2.title": "Desarrolladora de Software",
    "exp.job2.type": "Freelance",
    "exp.job2.desc": "Diseñé y desarrollé un sistema administrativo a medida para el control de pagos de agua potable. Digitalicé registros manuales, implementé control de asistencia y notificaciones automáticas a vecinos.",
    "exp.job3.title": "Asistente de Soporte Técnico",
    "exp.job3.type": "Pasantía",
    "exp.job3.desc": "Proporcioné soporte técnico en un entorno bancario de alta demanda. Gestioné incidencias de infraestructura y resolución de problemas de usuarios.",
    "chip.support": "Soporte TI",
    "chip.infra": "Infraestructura",

    "proj.label": "03 · proyectos",
    "proj.title1": "Sistemas en",
    "proj.title2": "producción.",
    "p1.sub": "Verificación de Gases Vehiculares · 2025",
    "p1.desc": "Plataforma integral para el control de emisiones contaminantes en la Red Mónica del GAMQ. Motor automático APRUEBA/REPRUEBA, integración RUAT en tiempo real, módulo de sanciones y publicación de datos de calidad del aire.",
    "p1.badge": "Líder full-stack",
    "p2.sub": "SSO Municipal · 2023–Actualidad",
    "p2.desc": "Plataforma Single Sign-On que centraliza el acceso a +10 sistemas municipales. Gestión granular de permisos por módulo y autenticación unificada para todo el ecosistema GAMQ.",
    "p3.sub": "Gestión de Reclamos Ciudadanos · 2023–2025",
    "p3.desc": "Ecosistema integrado vía REST APIs: ODECO como portal ciudadano para reclamos y TaskBoard asignando automáticamente tareas internas a funcionarios municipales.",
    "p4.sub": "Instalaciones Deportivas · 2024–Actualidad",
    "p4.desc": "Sistema de reservas y pagos en línea para canchas municipales. Gestión de horarios y disponibilidad con integración RUAT para validación de usuarios.",
    "p5.sub": "Página Web Municipal · 2023",
    "p5.desc": "Portal oficial con subpáginas dinámicas por unidad, gestor de noticias y acceso unificado a servicios digitales. Contenerizado con Docker para servidores Linux/Windows.",
    "p6.sub": "Servicios Municipales · 2023–2024",
    "p6.desc": "SIGECEM digitaliza la administración de cementerios. MATADERO gestiona órdenes de faenado con trazabilidad completa, integración RUAT y control sanitario.",

    "skills.label": "04 · skills",
    "skills.title1": "Stack",
    "skills.title2": "técnico.",
    "skills.group4": "Testing y Herramientas",

    "contact.label": "05 · contacto",
    "contact.title1": "¿Hablamos sobre",
    "contact.title2": "tu proyecto?",
    "contact.sub": "Disponible para proyectos freelance, consultoría y oportunidades en desarrollo Full Stack.",

    "footer.built": "Hecho con código ♥"
  }
};

// ============================================================
// i18n ENGINE
// ============================================================
let currentLang = 'en';

function applyLang(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;

  // Fade out
  document.body.classList.add('lang-switching');

  setTimeout(() => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) {
        el.innerHTML = t[key]; // innerHTML to support <br/>
      }
    });

    // Update lang toggle indicators (both desktop + mobile)
    ['EN', 'ES'].forEach(code => {
      const lc = code.toLowerCase();
      document.querySelectorAll(`#lang${code}, #lang${code}m`).forEach(btn => {
        btn.classList.toggle('active', lc === lang);
      });
    });

    document.body.classList.remove('lang-switching');
  }, 180);

  currentLang = lang;
  localStorage.setItem('fm-lang', lang);
}

function toggleLang() {
  applyLang(currentLang === 'en' ? 'es' : 'en');
}

// Init language
const savedLang = localStorage.getItem('fm-lang') || 'en';
// Apply on DOM ready (called below after DOM load)

document.getElementById('langToggle').addEventListener('click', toggleLang);
document.getElementById('langToggleMobile').addEventListener('click', toggleLang);

// ============================================================
// CUSTOM CURSOR
// ============================================================
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');
let mx = 0, my = 0, cx = 0, cy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursorDot.style.left = mx + 'px';
  cursorDot.style.top = my + 'px';
});

(function animCursor() {
  cx += (mx - cx) * 0.12;
  cy += (my - cy) * 0.12;
  cursor.style.left = cx + 'px';
  cursor.style.top = cy + 'px';
  requestAnimationFrame(animCursor);
})();

document.querySelectorAll('a, button, .project-card, .exp-row').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%,-50%) scale(1.8)');
  el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%,-50%) scale(1)');
});

// ============================================================
// NAV SCROLL
// ============================================================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ============================================================
// MOBILE MENU
// ============================================================
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

// ============================================================
// HERO CANVAS — Interactive grid
// ============================================================
const canvas = document.getElementById('gridCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouseX = 0, mouseY = 0;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
}

function initParticles() {
  particles = [];
  const spacing = 60;
  const cols = Math.floor(canvas.width / spacing);
  const rows = Math.floor(canvas.height / spacing);
  for (let i = 0; i <= cols; i++) {
    for (let j = 0; j <= rows; j++) {
      particles.push({
        x: i * spacing, y: j * spacing,
        ox: i * spacing, oy: j * spacing,
        vx: 0, vy: 0,
        size: Math.random() > 0.85 ? 2 : 1,
        bright: Math.random() > 0.9
      });
    }
  }
}

window.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });

let animTime = 0;
(function drawGrid() {
  animTime += 0.008;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Grid lines
  const spacing = 60;
  const cols = Math.floor(canvas.width / spacing);
  const rows = Math.floor(canvas.height / spacing);
  ctx.strokeStyle = 'rgba(39,39,39,0.55)';
  ctx.lineWidth = 0.5;
  for (let i = 0; i <= cols; i++) {
    ctx.beginPath(); ctx.moveTo(i * spacing, 0); ctx.lineTo(i * spacing, canvas.height); ctx.stroke();
  }
  for (let j = 0; j <= rows; j++) {
    ctx.beginPath(); ctx.moveTo(0, j * spacing); ctx.lineTo(canvas.width, j * spacing); ctx.stroke();
  }

  // Dots
  particles.forEach(p => {
    const dx = mouseX - p.ox, dy = mouseY - p.oy;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const repel = Math.max(0, 1 - dist / 130);

    p.vx += (-dx / dist) * repel * 2.5;
    p.vy += (-dy / dist) * repel * 2.5;
    p.vx *= 0.87; p.vy *= 0.87;
    p.vx += (p.ox - p.x) * 0.14;
    p.vy += (p.oy - p.y) * 0.14;
    p.x += p.vx; p.y += p.vy;

    const glow = p.bright ? Math.sin(animTime * 2.5 + p.ox * 0.04) * 0.5 + 0.5 : 0;
    const alpha = 0.2 + repel * 0.7 + glow * 0.5;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size + repel * 2.5, 0, Math.PI * 2);
    ctx.fillStyle = p.bright
      ? `rgba(200,240,85,${alpha})`
      : `rgba(120,110,100,${alpha})`;
    ctx.fill();
  });

  requestAnimationFrame(drawGrid);
})();

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// ============================================================
// INTERSECTION OBSERVER — Reveal on scroll
// ============================================================
const revealTargets = document.querySelectorAll(
  '.about-card, .about-text, .exp-row, .project-card, .skill-group, .stat, .contact-inner > *'
);

const revealObs = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
        // Trigger skill bars
        entry.target.querySelectorAll('.bar').forEach(bar => {
          bar.style.setProperty('--w', bar.dataset.w);
        });
      }, 0);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

revealTargets.forEach(el => {
  el.classList.add('reveal');
  revealObs.observe(el);
});

// Also catch bars that might not be in observed parents
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.setProperty('--w', e.target.dataset.w);
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.bar').forEach(b => barObs.observe(b));

// ============================================================
// COUNTER ANIMATION
// ============================================================
function animCounter(el, target, duration = 1000) {
  const start = Date.now();
  const tick = () => {
    const elapsed = Date.now() - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  };
  tick();
}

const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animCounter(e.target, parseInt(e.target.dataset.target));
      counterObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-num').forEach(el => counterObs.observe(el));

// ============================================================
// ACTIVE NAV HIGHLIGHT
// ============================================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + entry.target.id
          ? 'var(--accent)' : '';
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => sectionObs.observe(s));

// ============================================================
// STAGGER PROJECT CARDS on hover row
// ============================================================
document.querySelectorAll('.project-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.04}s`;
});

// ============================================================
// INIT — Apply saved language
// ============================================================
applyLang(savedLang);
