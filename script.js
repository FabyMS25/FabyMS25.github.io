/* ============================================
   FABIOLA MORALES · PORTFOLIO JS
   i18n + canvas + cursor + scroll FX
   ============================================ */

// ============================================================
// TRANSLATIONS
// ============================================================
const translations = {
  en: {
    "nav.about": "about", "nav.experience": "exp",
    "nav.projects": "projects", "nav.skills": "skills", "nav.contact": "contact",

    "hero.tag": "Systems Engineer · Full Stack Developer",
    "hero.desc": "Architect of digital solutions for public management.<br/>Angular · Spring Boot · PostgreSQL · Docker.",
    "hero.cta1": "View Projects", "hero.cta2": "Get in Touch",
    "hero.available": "Available for projects",

    "about.label": "01 · about",
    "about.title1": "Clean code,", "about.title2": "real impact.",
    "about.p1": "I'm a Systems Engineer from UMSS with 3+ years building critical platforms for the Autonomous Municipal Government of Quillacollo. My work covers the full cycle: requirements analysis, design, implementation, and production deployment.",
    "about.p2": "I'm driven to build systems that simplify people's lives — with robust code, intuitive interfaces, and scalable architectures. I've led projects from scratch and optimized existing systems under real operational pressure.",
    "about.stat1": "Systems built", "about.stat2": "Years in public sector", "about.stat3": "Users impacted",
    "card.role": "Systems Engineer · Full Stack",
    "card.grad": "July 2022",
    "card.langs": " Spanish · English C1 · Quechua Basic",

    "exp.label": "02 · experience",
    "exp.title1": "Professional", "exp.title2": "journey.",
    "exp.job1.title": "Consultant · Programmer / Analyst", "exp.job1.type": "Full-time",
    "exp.job1.desc": "Led full-stack development of 14+ institutional systems for Quillacollo's Municipal Government. Built PROVEGAQ, GAMSIS (SSO), ODECO, DEPORTES, PAGO ÚNICO, MATADERO and more. Managed servers, databases and Docker deployments in production.",
    "exp.job2.title": "Software Developer", "exp.job2.type": "Freelance",
    "exp.job2.desc": "Designed and built a custom administrative system for community water payment control. Digitized manual records, attendance tracking and automated resident notifications.",
    "exp.job3.title": "IT Support Assistant", "exp.job3.type": "Internship",
    "exp.job3.desc": "Technical support in a high-demand banking environment. Managed infrastructure issues and resolved user incidents.",
    "chip.support": "IT Support", "chip.infra": "Infrastructure",

    "proj.label": "03 · projects",
    "proj.title1": "Systems in", "proj.title2": "production.",
    "proj.cat1": "Municipal Systems · GAMQ",
    "proj.cat2": "Community & Academic Projects",

    "p1.sub": "Vehicle Gas Verification · 2025",
    "p1.desc": "Comprehensive platform for vehicle emissions control at GAMQ's Red Mónica. Automatic PASS/FAIL decision engine, real-time RUAT integration, sanctions module, and air quality public data portal.",
    "p1.badge": "Full-stack lead",
    "p2.sub": "Municipal SSO · 2023–Present",
    "p2.desc": "Single Sign-On platform centralizing access to 10+ municipal systems. Granular permission management per module and unified authentication across the GAMQ ecosystem.",
    "p3.sub": "Task & Complaint Management · 2024",
    "p3.desc": "Internal task management integrated with ODECO via REST APIs. Automatically assigns and tracks citizen complaints as internal tasks for municipal staff.",
    "p4.sub": "Citizen Complaint Portal · 2023–Present",
    "p4.desc": "Public-facing portal for receiving and managing citizen complaints, suggestions and queries. Citizens can track the status of their requests in real time.",
    "p5.sub": "Sports Facilities · 2024–Present",
    "p5.desc": "Online booking and payment system for municipal sports courts. Schedule and availability management with RUAT integration for user validation.",
    "p6.sub": "Budget Management · 2024–Present",
    "p6.desc": "Platform for administering construction project budgets. Modules for creation, modification and consultation of budgets, optimizing workflows for the projects area.",
    "p7.sub": "Municipal Market Billing · 2024",
    "p7.desc": "Modernized payment collection system for municipal markets. Efficient RUAT integration for automatic rate liquidation, UX/UI redesign reducing transaction response times.",
    "p8.sub": "Vehicle Parking · 2024–Present",
    "p8.desc": "Digital administration of municipal parking. Modules for digital parking ticket generation, automatic notifications, and dual interface for control staff and vehicle owners.",
    "p9.sub": "Slaughterhouse Management · 2024",
    "p9.desc": "Full management of slaughterhouse orders and livestock requests. RUAT integration for automatic rate generation, detailed order tracking for sanitary control and traceability.",
    "p10.sub": "Cemetery Management · 2023",
    "p10.desc": "Digitization of municipal cemetery services. Modules for deceased registration, funeral service tracking, and administrative control ensuring data integrity.",
    "p11.sub": "Municipal Website · 2023",
    "p11.desc": "Official municipal portal with dynamic subpages per unit, news manager, and unified access to all digital services. Containerized with Docker for Linux/Windows servers.",
    "p12.sub": "Water Payments & Neighbors · 2022",
    "p12.desc": "Custom system for OTB AASABA automating water payment control, meeting attendance and automated neighbor notifications. Eliminated paper records entirely.",
    "p13.sub": "Software Quality Audit · Academic",
    "p13.desc": "Implementation and evaluation of the SAHI tool for software quality measurement. Applied metrics and audits to ensure compliance with quality standards.",
    "p14.sub": "Inventory & Sales · Academic",
    "p14.desc": "Information system for clothing commercialization with inventory management, sales tracking and customer management, optimizing the sale and distribution process.",
    "p15.sub": "AI · Map Search · Academic",
    "p15.desc": "API search implementation on a map using artificial intelligence techniques to improve efficiency in locating and navigating points of interest.",
    "p16.sub": "Artificial Intelligence · Academic",
    "p16.desc": "STRIPS-based planning implementation using PROLOG, applying AI concepts to solve automatic planning problems through logical inference.",
    "p17.sub": "Expert Systems · JESS · Academic",
    "p17.desc": "Expert system for vehicle parking planning and management using JESS, improving efficiency in space assignment and utilization through rule-based reasoning.",
    "p18.sub": "Fuzzy Logic · XFUZZY · Academic",
    "p18.desc": "Expert system using XFUZZY to calculate car wash rates, applying fuzzy logic to provide accurate and fair pricing based on multiple factors.",
    "p19.sub": "Software Engineering Workshop · Academic",
    "p19.desc": "Support system for a company developed within the Software Engineering Workshop, improving internal processes and project management through structured design.",
    "p20.sub": "Systems Simulation · Academic",
    "p20.desc": "Simulation system for medical care management at Hospital VIEDMA, optimizing patient flows and hospital resources through simulation models.",

    "skills.label": "04 · skills", "skills.title1": "Technical", "skills.title2": "stack.",
    "skills.group4": "Testing & Tools",

    "contact.label": "05 · contact",
    "contact.title1": "Let's talk about", "contact.title2": "your project.",
    "contact.sub": "Available for freelance projects, consulting, and full-stack development opportunities.",
    "footer.built": "Built with code ♥"
  },

  es: {
    "nav.about": "sobre mí", "nav.experience": "exp",
    "nav.projects": "proyectos", "nav.skills": "skills", "nav.contact": "contacto",

    "hero.tag": "Ingeniera de Sistemas · Desarrolladora Full Stack",
    "hero.desc": "Arquitecto de soluciones digitales para la gestión pública.<br/>Angular · Spring Boot · PostgreSQL · Docker.",
    "hero.cta1": "Ver Proyectos", "hero.cta2": "Contactar",
    "hero.available": "Disponible para proyectos",

    "about.label": "01 · sobre mí",
    "about.title1": "Código limpio,", "about.title2": "impacto real.",
    "about.p1": "Soy Ingeniera de Sistemas graduada de la UMSS con más de 3 años desarrollando plataformas críticas para el Gobierno Autónomo Municipal de Quillacollo. Mi trabajo abarca el ciclo completo: análisis de requerimientos, diseño, implementación y despliegue en producción.",
    "about.p2": "Me mueve construir sistemas que simplifican la vida de las personas — con código robusto, interfaces intuitivas y arquitecturas que escalan. He liderado proyectos desde cero y optimizado sistemas bajo presión operativa real.",
    "about.stat1": "Sistemas construidos", "about.stat2": "Años en sector público", "about.stat3": "Usuarios impactados",
    "card.role": "Ing. de Sistemas · Full Stack",
    "card.grad": "Julio 2022",
    "card.langs": " Español · Inglés C1 · Quechua Básico",

    "exp.label": "02 · experiencia",
    "exp.title1": "Trayectoria", "exp.title2": "profesional.",
    "exp.job1.title": "Consultora · Programador / Analista", "exp.job1.type": "Tiempo completo",
    "exp.job1.desc": "Lideré el desarrollo full-stack de 14+ sistemas institucionales para el GAMQ. Construí PROVEGAQ, GAMSIS (SSO), ODECO, DEPORTES, PAGO ÚNICO, MATADERO y más. Administré servidores, bases de datos y despliegues Docker en producción.",
    "exp.job2.title": "Desarrolladora de Software", "exp.job2.type": "Freelance",
    "exp.job2.desc": "Diseñé y desarrollé un sistema administrativo a medida para el control de pagos de agua potable. Digitalicé registros manuales, control de asistencia y notificaciones automáticas a vecinos.",
    "exp.job3.title": "Asistente de Soporte Técnico", "exp.job3.type": "Pasantía",
    "exp.job3.desc": "Soporte técnico en un entorno bancario de alta demanda. Gestioné incidencias de infraestructura y resolución de problemas de usuarios.",
    "chip.support": "Soporte TI", "chip.infra": "Infraestructura",

    "proj.label": "03 · proyectos",
    "proj.title1": "Sistemas en", "proj.title2": "producción.",
    "proj.cat1": "Sistemas Municipales · GAMQ",
    "proj.cat2": "Proyectos Comunitarios y Académicos",

    "p1.sub": "Verificación de Gases Vehiculares · 2025",
    "p1.desc": "Plataforma integral para el control de emisiones contaminantes en la Red Mónica del GAMQ. Motor automático APRUEBA/REPRUEBA, integración RUAT en tiempo real, módulo de sanciones y publicación de datos de calidad del aire.",
    "p1.badge": "Líder full-stack",
    "p2.sub": "SSO Municipal · 2023–Actualidad",
    "p2.desc": "Plataforma Single Sign-On que centraliza el acceso a +10 sistemas municipales. Gestión granular de permisos por módulo y autenticación unificada para todo el ecosistema GAMQ.",
    "p3.sub": "Gestión de Tareas y Reclamos · 2024",
    "p3.desc": "Gestión interna de tareas integrada con ODECO vía REST APIs. Asigna y hace seguimiento automático de reclamos ciudadanos como tareas internas para funcionarios municipales.",
    "p4.sub": "Portal de Reclamos Ciudadanos · 2023–Actualidad",
    "p4.desc": "Portal público para recepción y gestión de reclamos, sugerencias y consultas ciudadanas. Los ciudadanos pueden hacer seguimiento en tiempo real del estado de sus solicitudes.",
    "p5.sub": "Instalaciones Deportivas · 2024–Actualidad",
    "p5.desc": "Sistema de reservas y pagos en línea para canchas municipales. Gestión de horarios y disponibilidad con integración RUAT para validación de usuarios.",
    "p6.sub": "Gestión de Presupuestos · 2024–Actualidad",
    "p6.desc": "Plataforma para la administración de presupuestos en proyectos de construcción. Módulos de creación, modificación y consulta de presupuestos, optimizando flujos de trabajo del área de proyectos.",
    "p7.sub": "Cobranza en Mercados Municipales · 2024",
    "p7.desc": "Sistema modernizado de recaudación para mercados municipales. Integración eficiente con RUAT para liquidación automática de tasas, rediseño UX/UI reduciendo tiempos de transacción.",
    "p8.sub": "Estacionamiento Vehicular · 2024–Actualidad",
    "p8.desc": "Administración digital de parqueos municipales. Módulos para generación digital de boletas, notificaciones automáticas e interfaz dual para personal de control y propietarios de vehículos.",
    "p9.sub": "Gestión del Matadero Municipal · 2024",
    "p9.desc": "Gestión completa de órdenes de faenado y solicitudes de ganado. Integración RUAT para generación automática de tasas, seguimiento detallado para control sanitario y trazabilidad.",
    "p10.sub": "Gestión de Cementerios · 2023",
    "p10.desc": "Digitalización de servicios cementeriales municipales. Módulos de registro de difuntos, seguimiento de servicios funerarios y control administrativo garantizando la integridad de datos.",
    "p11.sub": "Página Web Municipal · 2023",
    "p11.desc": "Portal oficial con subpáginas dinámicas por unidad, gestor de noticias y acceso unificado a servicios digitales. Contenerizado con Docker para servidores Linux/Windows.",
    "p12.sub": "Pagos de Agua y Gestión Vecinal · 2022",
    "p12.desc": "Sistema a medida para OTB AASABA que automatiza el control de pagos de agua, asistencia a reuniones y notificaciones a vecinos. Eliminó registros en papel completamente.",
    "p13.sub": "Auditoría de Calidad de Software · Académico",
    "p13.desc": "Implementación y evaluación de la herramienta SAHI para medir la calidad del software. Aplicación de métricas y auditorías para asegurar el cumplimiento de estándares de calidad.",
    "p14.sub": "Inventario y Ventas · Académico",
    "p14.desc": "Sistema de información para la comercialización de prendas con gestión de inventarios, seguimiento de ventas y clientes, optimizando el proceso de venta y distribución.",
    "p15.sub": "IA · Búsqueda en Mapa · Académico",
    "p15.desc": "Implementación de búsqueda API en un mapa usando técnicas de inteligencia artificial para mejorar la eficiencia en la localización y navegación de puntos de interés.",
    "p16.sub": "Inteligencia Artificial · Académico",
    "p16.desc": "Implementación de planificación basada en STRIPS usando PROLOG, aplicando conceptos de IA para resolver problemas de planificación automática mediante inferencia lógica.",
    "p17.sub": "Sistemas Expertos · JESS · Académico",
    "p17.desc": "Sistema experto para la planificación y gestión de estacionamientos vehiculares con JESS, mejorando la eficiencia en asignación de espacios mediante razonamiento basado en reglas.",
    "p18.sub": "Lógica Difusa · XFUZZY · Académico",
    "p18.desc": "Sistema experto con XFUZZY para calcular tarifas de limpieza de automóviles, aplicando lógica difusa para proporcionar precios precisos y justos basados en múltiples factores.",
    "p19.sub": "Taller de Ingeniería de Software · Académico",
    "p19.desc": "Sistema de apoyo para empresa desarrollado en el Taller de Ingeniería de Software, mejorando procesos internos y gestión de proyectos mediante diseño estructurado.",
    "p20.sub": "Simulación de Sistemas · Académico",
    "p20.desc": "Sistema de simulación para la gestión de atención médica en el Hospital VIEDMA, optimizando flujos de pacientes y recursos hospitalarios mediante modelos de simulación.",

    "skills.label": "04 · skills", "skills.title1": "Stack", "skills.title2": "técnico.",
    "skills.group4": "Testing y Herramientas",

    "contact.label": "05 · contacto",
    "contact.title1": "¿Hablamos sobre", "contact.title2": "tu proyecto?",
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
  document.body.classList.add('lang-switching');
  setTimeout(() => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    ['EN','ES'].forEach(code => {
      document.querySelectorAll(`#lang${code}, #lang${code}m`).forEach(btn => {
        btn.classList.toggle('active', code.toLowerCase() === lang);
      });
    });
    document.body.classList.remove('lang-switching');
  }, 180);
  currentLang = lang;
  try { localStorage.setItem('fm-lang', lang); } catch(e) {}
}

function toggleLang() { applyLang(currentLang === 'en' ? 'es' : 'en'); }

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
  cursorDot.style.left = mx + 'px'; cursorDot.style.top = my + 'px';
});
(function animCursor() {
  cx += (mx - cx) * 0.13; cy += (my - cy) * 0.13;
  cursor.style.left = cx + 'px'; cursor.style.top = cy + 'px';
  requestAnimationFrame(animCursor);
})();

document.querySelectorAll('a, button, .project-card, .exp-row, .stack-item').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%,-50%) scale(1.7)');
  el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%,-50%) scale(1)');
});

// ============================================================
// NAV SCROLL
// ============================================================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60), { passive: true });

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
// HERO CANVAS — Purple interactive grid
// ============================================================
const canvas = document.getElementById('gridCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouseX = 0, mouseY = 0;
const SPACING = 58;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
}
function initParticles() {
  particles = [];
  const cols = Math.floor(canvas.width / SPACING) + 1;
  const rows = Math.floor(canvas.height / SPACING) + 1;
  for (let i = 0; i <= cols; i++) {
    for (let j = 0; j <= rows; j++) {
      particles.push({
        x: i * SPACING, y: j * SPACING,
        ox: i * SPACING, oy: j * SPACING,
        vx: 0, vy: 0,
        size: Math.random() > 0.88 ? 2.2 : 1,
        bright: Math.random() > 0.92,
        phase: Math.random() * Math.PI * 2
      });
    }
  }
}
window.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });

let animT = 0;
(function drawGrid() {
  animT += 0.007;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Grid lines — subtle purple tint
  const cols = Math.floor(canvas.width / SPACING) + 1;
  const rows = Math.floor(canvas.height / SPACING) + 1;
  ctx.lineWidth = 0.5;
  for (let i = 0; i <= cols; i++) {
    const alpha = 0.07 + (i % 4 === 0 ? 0.06 : 0);
    ctx.strokeStyle = `rgba(124,58,237,${alpha})`;
    ctx.beginPath(); ctx.moveTo(i * SPACING, 0); ctx.lineTo(i * SPACING, canvas.height); ctx.stroke();
  }
  for (let j = 0; j <= rows; j++) {
    const alpha = 0.07 + (j % 4 === 0 ? 0.06 : 0);
    ctx.strokeStyle = `rgba(124,58,237,${alpha})`;
    ctx.beginPath(); ctx.moveTo(0, j * SPACING); ctx.lineTo(canvas.width, j * SPACING); ctx.stroke();
  }

  // Intersection dots
  particles.forEach(p => {
    const dx = mouseX - p.ox, dy = mouseY - p.oy;
    const dist = Math.sqrt(dx*dx + dy*dy) || 1;
    const repel = Math.max(0, 1 - dist / 140);
    p.vx += (-dx/dist) * repel * 2.8;
    p.vy += (-dy/dist) * repel * 2.8;
    p.vx *= 0.86; p.vy *= 0.86;
    p.vx += (p.ox - p.x) * 0.15; p.vy += (p.oy - p.y) * 0.15;
    p.x += p.vx; p.y += p.vy;

    const glow = p.bright ? Math.sin(animT * 2.2 + p.phase) * 0.5 + 0.5 : 0;
    const alpha = 0.15 + repel * 0.7 + glow * 0.5;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size + repel * 2.5, 0, Math.PI * 2);
    if (p.bright && glow > 0.5) {
      ctx.fillStyle = `rgba(244,114,182,${alpha})`;   // pink sparkles
    } else if (repel > 0.3) {
      ctx.fillStyle = `rgba(192,132,252,${alpha})`;   // accent purple on hover
    } else {
      ctx.fillStyle = `rgba(94,90,128,${alpha})`;     // dim base
    }
    ctx.fill();
  });

  requestAnimationFrame(drawGrid);
})();

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// ============================================================
// SCROLL REVEAL
// ============================================================
const revealTargets = document.querySelectorAll(
  '.about-card, .about-text, .exp-row, .project-card, .skill-group, .stat, .contact-inner > *'
);

const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.querySelectorAll('.bar').forEach(bar => {
        bar.style.setProperty('--w', bar.dataset.w);
      });
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });

revealTargets.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 4) * 0.08}s`;
  revealObs.observe(el);
});

// Bars fallback
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.setProperty('--w', e.target.dataset.w);
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
document.querySelectorAll('.bar').forEach(b => barObs.observe(b));

// ============================================================
// COUNTER ANIMATION
// ============================================================
function animCounter(el, target) {
  const start = Date.now();
  const duration = 1200;
  const tick = () => {
    const p = Math.min((Date.now() - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(ease * target);
    if (p < 1) requestAnimationFrame(tick); else el.textContent = target;
  };
  tick();
}
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { animCounter(e.target, parseInt(e.target.dataset.target)); counterObs.unobserve(e.target); }
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
        const active = link.getAttribute('href') === '#' + entry.target.id;
        link.classList.toggle('active', active);
      });
    }
  });
}, { threshold: 0.35 });
sections.forEach(s => sectionObs.observe(s));

// ============================================================
// INIT LANGUAGE
// ============================================================
let initLang = 'en';
try { initLang = localStorage.getItem('fm-lang') || 'en'; } catch(e) {}
applyLang(initLang);
