/* ============================================
   FABIOLA MORALES · TEMPLATES DATA
   ─────────────────────────────────────────
   HOW TO ADD A TEMPLATE:
   1. Add an entry to the TEMPLATES array below
   2. Fill in: title, desc (en + es), url, img, tags
   3. For img: put the screenshot file in /img/templates/
      e.g. img: "img/templates/template-01.jpg"
      or leave img: null to show a placeholder icon
   4. For url: the live URL of the template
      or leave url: null if not published yet
   ============================================ */

const TEMPLATES = [
  {
    id: "t01",
    title: "Template 01",
    desc: {
      en: "Add your description here. Describe the purpose, style and features of this template.",
      es: "Agrega tu descripción aquí. Describe el propósito, estilo y características de esta plantilla."
    },
    url: "https://your-template-url.com",   // ← replace with live URL or set null
    img: null,                               // ← replace with "img/templates/t01.jpg"
    tags: ["HTML", "CSS", "JS"],
    icon: "🌐"
  },
  {
    id: "t02",
    title: "Template 02",
    desc: {
      en: "Add your description here. Describe the purpose, style and features of this template.",
      es: "Agrega tu descripción aquí. Describe el propósito, estilo y características de esta plantilla."
    },
    url: null,
    img: null,
    tags: ["HTML", "CSS"],
    icon: "🎨"
  },
  {
    id: "t03",
    title: "Template 03",
    desc: {
      en: "Add your description here. Describe the purpose, style and features of this template.",
      es: "Agrega tu descripción aquí. Describe el propósito, estilo y características de esta plantilla."
    },
    url: null,
    img: null,
    tags: ["Angular", "CSS"],
    icon: "⚡"
  },
  {
    id: "t04",
    title: "Template 04",
    desc: {
      en: "Add your description here. Describe the purpose, style and features of this template.",
      es: "Agrega tu descripción aquí. Describe el propósito, estilo y características de esta plantilla."
    },
    url: null,
    img: null,
    tags: ["HTML", "Bootstrap"],
    icon: "📐"
  },
  {
    id: "t05",
    title: "Template 05",
    desc: {
      en: "Add your description here. Describe the purpose, style and features of this template.",
      es: "Agrega tu descripción aquí. Describe el propósito, estilo y características de esta plantilla."
    },
    url: null,
    img: null,
    tags: ["HTML", "CSS", "JS"],
    icon: "🏢"
  },
  {
    id: "t06",
    title: "Template 06",
    desc: {
      en: "Add your description here. Describe the purpose, style and features of this template.",
      es: "Agrega tu descripción aquí. Describe el propósito, estilo y características de esta plantilla."
    },
    url: null,
    img: null,
    tags: ["PHP", "CSS"],
    icon: "🛒"
  },
  {
    id: "t07",
    title: "Template 07",
    desc: {
      en: "Add your description here. Describe the purpose, style and features of this template.",
      es: "Agrega tu descripción aquí. Describe el propósito, estilo y características de esta plantilla."
    },
    url: null,
    img: null,
    tags: ["HTML", "CSS"],
    icon: "📰"
  },
  {
    id: "t08",
    title: "Template 08",
    desc: {
      en: "Add your description here. Describe the purpose, style and features of this template.",
      es: "Agrega tu descripción aquí. Describe el propósito, estilo y características de esta plantilla."
    },
    url: null,
    img: null,
    tags: ["HTML", "CSS", "JS"],
    icon: "🎯"
  },
  {
    id: "t09",
    title: "Template 09",
    desc: {
      en: "Add your description here. Describe the purpose, style and features of this template.",
      es: "Agrega tu descripción aquí. Describe el propósito, estilo y características de esta plantilla."
    },
    url: null,
    img: null,
    tags: ["Angular", "Material"],
    icon: "📊"
  },
  {
    id: "t10",
    title: "Template 10",
    desc: {
      en: "Add your description here. Describe the purpose, style and features of this template.",
      es: "Agrega tu descripción aquí. Describe el propósito, estilo y características de esta plantilla."
    },
    url: null,
    img: null,
    tags: ["HTML", "CSS"],
    icon: "🌿"
  },
  {
    id: "t11",
    title: "Template 11",
    desc: {
      en: "Add your description here. Describe the purpose, style and features of this template.",
      es: "Agrega tu descripción aquí. Describe el propósito, estilo y características de esta plantilla."
    },
    url: null,
    img: null,
    tags: ["HTML", "CSS", "JS"],
    icon: "✨"
  },
  // ─── ADD MORE BELOW ───
  // {
  //   id: "t12",
  //   title: "My New Template",
  //   desc: { en: "...", es: "..." },
  //   url: "https://...",
  //   img: "img/templates/t12.jpg",
  //   tags: ["HTML", "CSS"],
  //   icon: "🚀"
  // },
];

/* ============================================
   RENDER HELPERS
   ============================================ */

function getLang() {
  try { return localStorage.getItem('fm-lang') || 'en'; } catch(e) { return 'en'; }
}

/* ── Build a small card for the index.html grid ── */
function buildIndexCard(t, index) {
  const card = document.createElement('div');
  card.className = 'tmpl-card reveal';
  card.dataset.index = index;
  card.innerHTML = `
    <span class="tmpl-num">${String(index + 1).padStart(2, '0')}</span>
    ${t.img
      ? `<img class="tmpl-img" src="${t.img}" alt="${t.title}" loading="lazy" />`
      : `<div class="tmpl-placeholder">
           <div class="tmpl-placeholder-icon">${t.icon || '🌐'}</div>
           <div class="tmpl-placeholder-label">${t.title}</div>
         </div>`
    }
    <div class="tmpl-overlay">
      <div class="tmpl-overlay-title">${t.title}</div>
      <div class="tmpl-overlay-hint">Click to preview</div>
    </div>
  `;
  card.addEventListener('click', () => openLightbox(index));
  return card;
}

/* ── Build a full card for templates.html ── */
function buildDetailCard(t, index) {
  const lang = getLang();
  const card = document.createElement('div');
  card.className = 'tmpl-detail-card reveal';
  card.innerHTML = `
    ${t.img
      ? `<img class="tmpl-detail-img" src="${t.img}" alt="${t.title}" loading="lazy" />`
      : `<div class="tmpl-detail-placeholder">${t.icon || '🌐'}</div>`
    }
    <div class="tmpl-detail-body">
      <div class="tmpl-detail-num">${String(index + 1).padStart(2, '0')}</div>
      <div class="tmpl-detail-title">${t.title}</div>
      <p class="tmpl-detail-desc">${t.desc[lang]}</p>
      <div class="tmpl-detail-footer">
        <div class="tmpl-detail-chips">
          ${t.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
        ${t.url
          ? `<a class="tmpl-detail-link" href="${t.url}" target="_blank">Live ↗</a>`
          : `<span style="font-family:var(--font-mono);font-size:0.62rem;color:var(--muted)">Coming soon</span>`
        }
      </div>
    </div>
  `;
  return card;
}

/* ============================================
   LIGHTBOX ENGINE  (used only on index.html)
   ============================================ */
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  updateLightbox(index);
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function updateLightbox(index) {
  const t = TEMPLATES[index];
  const lang = getLang();

  document.getElementById('lightboxNum').textContent = String(index + 1).padStart(2, '0') + ' / ' + String(TEMPLATES.length).padStart(2, '0');
  document.getElementById('lightboxTitle').textContent = t.title;
  document.getElementById('lightboxDesc').textContent = t.desc[lang];
  document.getElementById('lightboxUrl').textContent = t.url || '— no live URL yet —';

  // Tags
  const tagsEl = document.getElementById('lightboxTags');
  tagsEl.innerHTML = t.tags.map(tag => `<span>${tag}</span>`).join('');

  // Image
  const img = document.getElementById('lightboxImg');
  if (t.img) {
    img.src = t.img;
    img.style.display = 'block';
    img.parentElement.querySelector('.lightbox-no-img')?.remove();
  } else {
    img.style.display = 'none';
    let placeholder = img.parentElement.querySelector('.lightbox-no-img');
    if (!placeholder) {
      placeholder = document.createElement('div');
      placeholder.className = 'lightbox-no-img';
      placeholder.innerHTML = `<div style="font-size:3rem">${t.icon || '🌐'}</div><div>${t.title}</div>`;
      img.parentElement.appendChild(placeholder);
    } else {
      placeholder.innerHTML = `<div style="font-size:3rem">${t.icon || '🌐'}</div><div>${t.title}</div>`;
    }
  }

  // Buttons
  const liveBtn = document.getElementById('lightboxLiveBtn');
  const liveBtnBottom = document.getElementById('lightboxLiveBtnBottom');
  if (t.url) {
    liveBtn.href = t.url;
    liveBtnBottom.href = t.url;
    liveBtnBottom.style.opacity = '1';
    liveBtnBottom.style.pointerEvents = 'auto';
  } else {
    liveBtn.href = '#';
    liveBtnBottom.href = '#';
    liveBtnBottom.style.opacity = '0.3';
    liveBtnBottom.style.pointerEvents = 'none';
  }

  // Detail page link — pass template id
  document.getElementById('lightboxDetailBtn').href = `templates.html#${t.id}`;
}

function lightboxPrev() {
  currentIndex = (currentIndex - 1 + TEMPLATES.length) % TEMPLATES.length;
  updateLightbox(currentIndex);
}
function lightboxNext() {
  currentIndex = (currentIndex + 1) % TEMPLATES.length;
  updateLightbox(currentIndex);
}

/* ============================================
   INIT — runs on both pages
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  const isIndex = !!document.getElementById('templatesGrid');
  const isTemplatesPage = !!document.getElementById('tmplPageGrid');

  /* ── INDEX: build small grid + wire lightbox ── */
  if (isIndex) {
    const grid = document.getElementById('templatesGrid');
    // Show first 8 on index (teaser), rest on templates.html
    const preview = TEMPLATES.slice(0, 8);
    preview.forEach((t, i) => grid.appendChild(buildIndexCard(t, i)));

    // Lightbox controls
    document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
    document.getElementById('lightboxBackdrop').addEventListener('click', closeLightbox);
    document.getElementById('lbPrev').addEventListener('click', lightboxPrev);
    document.getElementById('lbNext').addEventListener('click', lightboxNext);

    // Keyboard
    document.addEventListener('keydown', e => {
      if (!document.getElementById('lightbox').classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') lightboxPrev();
      if (e.key === 'ArrowRight') lightboxNext();
    });

    // Scroll reveal for template cards
    const ro = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll('.tmpl-card').forEach(c => ro.observe(c));
  }

  /* ── TEMPLATES PAGE: build full grid ── */
  if (isTemplatesPage) {
    const grid = document.getElementById('tmplPageGrid');
    TEMPLATES.forEach((t, i) => grid.appendChild(buildDetailCard(t, i)));

    // Scroll reveal
    const ro = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } });
    }, { threshold: 0.06 });
    document.querySelectorAll('.tmpl-detail-card').forEach(c => ro.observe(c));

    // Scroll to highlighted template if hash present
    const hash = window.location.hash.slice(1);
    if (hash) {
      const idx = TEMPLATES.findIndex(t => t.id === hash);
      if (idx >= 0) {
        setTimeout(() => {
          const cards = document.querySelectorAll('.tmpl-detail-card');
          if (cards[idx]) cards[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 400);
      }
    }
  }
});
