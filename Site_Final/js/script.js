/* ═══════════════════════════════════════════════════════════════
   INTELLIGENT SYSTEMS LAB — JavaScript
   Arduino Portfolio — Interactive & Animation Layer
═══════════════════════════════════════════════════════════════ */

'use strict';

// ── Utility: safe querySelector ────────────────────────────────
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ── Reduce motion preference ───────────────────────────────────
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ═══════════════════════════════════════════════════════════════
   1. LOADING SCREEN
═══════════════════════════════════════════════════════════════ */
(function initLoader() {
  const screen   = $('#loading-screen');
  const bar      = $('#loader-bar');
  const percent  = $('#loader-percent');
  const status   = $('#loader-status');
  const lm1      = $('#lm1');
  const lm2      = $('#lm2');
  const lm3      = $('#lm3');
  const ready    = $('#loader-ready');
  const canvas   = $('#loader-canvas');

  if (!screen) return;

  // Canvas grid background for loader
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext('2d');
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    function drawLoaderGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.06)';
      ctx.lineWidth = 0.5;
      const step = 48;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    }
    drawLoaderGrid();
  }

  // Sequenced loading animation
  const steps = [
    { pct: 20, delay: 200,  label: 'LOADING ARDUINO MODULES', el: lm1 },
    { pct: 55, delay: 600,  label: 'LOADING SENSORS',          el: lm2 },
    { pct: 85, delay: 1000, label: 'LOADING EXPERIMENTS',      el: lm3 },
    { pct: 100, delay: 1400, label: 'SYSTEM READY',             el: null },
  ];

  function animatePct(target, onDone) {
    const current = parseInt(bar.style.width) || 0;
    const diff = target - current;
    const duration = 300;
    const start = performance.now();

    function step(now) {
      const t = Math.min((now - start) / duration, 1);
      const val = Math.round(current + diff * easeOut(t));
      bar.style.width = val + '%';
      percent.textContent = val + '%';
      if (t < 1) requestAnimationFrame(step);
      else if (onDone) onDone();
    }
    requestAnimationFrame(step);
  }

  function easeOut(t) { return 1 - Math.pow(1 - t, 2); }

  let stepIdx = 0;

  function runStep() {
    if (stepIdx >= steps.length) return;
    const s = steps[stepIdx++];

    setTimeout(() => {
      animatePct(s.pct, () => {
        if (s.el) {
          s.el.classList.add('visible');
          setTimeout(() => s.el.classList.add('done'), 400);
        }
        if (s.pct === 100) {
          status.textContent = 'SYSTEM READY';
          setTimeout(() => {
            ready.classList.add('visible');
            setTimeout(hideLoader, 700);
          }, 300);
        }
      });
      runStep();
    }, s.delay);
  }

  function hideLoader() {
    screen.classList.add('hidden');
    document.body.style.overflow = '';
    // Trigger hero animations
    initHeroCanvas();
  }

  document.body.style.overflow = 'hidden';
  setTimeout(runStep, 100);
})();

/* ═══════════════════════════════════════════════════════════════
   2. HERO CANVAS — Particle / Circuit Background
═══════════════════════════════════════════════════════════════ */
function initHeroCanvas() {
  const canvas = $('#hero-canvas');
  if (!canvas || prefersReducedMotion) return;

  const ctx = canvas.getContext('2d');
  let W, H, particles, lines;
  let animId;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    buildScene();
  }

  function buildScene() {
    const count = Math.min(Math.floor((W * H) / 18000), 60);
    particles = Array.from({ length: count }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r:  Math.random() * 1.5 + 0.5,
      o:  Math.random() * 0.4 + 0.1,
    }));

    // Static circuit-like lines
    lines = [];
    for (let i = 0; i < 6; i++) {
      const x = Math.random() * W;
      const y = Math.random() * H;
      lines.push({ x1: x, y1: y, x2: x + (Math.random() - 0.5) * 300, y2: y + (Math.random() - 0.5) * 80 });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Grid
    ctx.strokeStyle = 'rgba(0,212,255,0.03)';
    ctx.lineWidth = 0.5;
    const step = 70;
    for (let x = 0; x < W; x += step) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += step) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    // Circuit lines
    ctx.strokeStyle = 'rgba(0,212,255,0.04)';
    ctx.lineWidth = 1;
    lines.forEach(l => {
      ctx.beginPath();
      ctx.moveTo(l.x1, l.y1);
      // orthogonal circuit style
      ctx.lineTo(l.x1, l.y2);
      ctx.lineTo(l.x2, l.y2);
      ctx.stroke();
    });

    // Particles + connections
    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,212,255,${p.o})`;
      ctx.fill();

      // Connect close particles
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x, dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(0,212,255,${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });

    animId = requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', () => { cancelAnimationFrame(animId); resize(); draw(); });
  draw();
}

/* ═══════════════════════════════════════════════════════════════
   3. HEADER — Scroll Behaviour & Active Nav
═══════════════════════════════════════════════════════════════ */
(function initHeader() {
  const header = $('#main-header');
  const navLinks = $$('.nav-link');
  const sections = $$('section[id], div[id="overview"]');

  if (!header) return;

  // Scroll-based header style
  function onScroll() {
    const scrolled = window.scrollY > 60;
    header.classList.toggle('scrolled', scrolled);

    // Back to top
    const btt = $('#back-to-top');
    if (btt) btt.classList.toggle('visible', window.scrollY > 400);

    // Active nav highlight
    updateActiveNav();
  }

  function updateActiveNav() {
    let current = '';
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top <= 120) current = sec.id;
    });

    navLinks.forEach(link => {
      const section = link.getAttribute('data-section');
      link.classList.toggle('active', section === current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ═══════════════════════════════════════════════════════════════
   4. MOBILE MENU
═══════════════════════════════════════════════════════════════ */
(function initMobileMenu() {
  const hamburger = $('#hamburger');
  const menu      = $('#mobile-menu');
  const closeBtn  = $('#mobile-close');
  const mobileLinks = $$('.mobile-nav-link');

  if (!hamburger || !menu) return;

  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'mobile-overlay';
  overlay.id = 'mobile-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  document.body.appendChild(overlay);

  function openMenu() {
    menu.removeAttribute('hidden');
    // Force reflow before adding class for transition
    menu.getBoundingClientRect();
    menu.classList.add('open');
    overlay.classList.add('visible');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // Focus first link
    const first = menu.querySelector('a, button');
    if (first) first.focus();
  }

  function closeMenu() {
    menu.classList.remove('open');
    overlay.classList.remove('visible');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(() => menu.setAttribute('hidden', ''), 350);
  }

  hamburger.addEventListener('click', () => {
    menu.hasAttribute('hidden') ? openMenu() : closeMenu();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Keyboard trap in menu
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('open')) closeMenu();
  });
})();

/* ═══════════════════════════════════════════════════════════════
   5. SMOOTH SCROLL — All anchor links
═══════════════════════════════════════════════════════════════ */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

/* ═══════════════════════════════════════════════════════════════
   6. BACK TO TOP
═══════════════════════════════════════════════════════════════ */
(function initBackToTop() {
  const btn = $('#back-to-top');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ═══════════════════════════════════════════════════════════════
   7. INTERSECTION OBSERVER — Reveal Items
═══════════════════════════════════════════════════════════════ */
(function initRevealAnimations() {
  const items = $$('.reveal-item');
  if (!items.length) return;

  if (prefersReducedMotion) {
    items.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach((el, idx) => {
    // Stagger siblings
    if (!el.dataset.delay) {
      const siblings = Array.from(el.parentElement?.children || []);
      const pos = siblings.indexOf(el);
      if (pos > 0) el.dataset.delay = pos * 80;
    }
    observer.observe(el);
  });
})();

/* ═══════════════════════════════════════════════════════════════
   8. CODE EDITOR — Copy & Expand
═══════════════════════════════════════════════════════════════ */
(function initCodeEditors() {

  // ── Copy buttons ─────────────────────────────────────────────
  $$('.btn-copy').forEach(btn => {
    btn.addEventListener('click', async () => {
      const targetId = btn.getAttribute('data-target');
      const target   = document.getElementById(targetId);
      if (!target) return;

      // Get plain text from code element
      const text = target.innerText || target.textContent || '';

      try {
        await navigator.clipboard.writeText(text);
        showCopyFeedback(btn, 'COPIADO!', true);
      } catch {
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none;';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showCopyFeedback(btn, 'COPIADO!', true);
      }
    });
  });

  function showCopyFeedback(btn, msg, success) {
    const span = btn.querySelector('span');
    const original = span ? span.textContent : '';
    if (span) span.textContent = msg;
    btn.classList.add(success ? 'copied' : 'error');
    btn.disabled = true;

    setTimeout(() => {
      if (span) span.textContent = original;
      btn.classList.remove('copied', 'error');
      btn.disabled = false;
    }, 2000);
  }

  // ── Expand buttons ────────────────────────────────────────────
  $$('.btn-expand').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const body = document.getElementById(targetId);
      if (!body) return;

      const isExpanded = body.classList.toggle('expanded');
      btn.setAttribute('aria-expanded', isExpanded);
      const span = btn.querySelector('span');
      if (span) span.textContent = isExpanded ? 'RECOLHER' : 'EXPANDIR';
    });
  });
})();

/* ═══════════════════════════════════════════════════════════════
   9. POTENTIOMETER ANIMATION (Desafio 02)
═══════════════════════════════════════════════════════════════ */
(function initPotAnimation() {
  const fill    = $('.pot-scale-fill');
  const thumb   = $('#pot-thumb');
  const display = $('#pot-value-display');

  if (!fill || !thumb || !display || prefersReducedMotion) {
    if (display) display.textContent = '512';
    return;
  }

  let value = 512;
  let direction = 1;
  let speed = 1.8;
  let raf;

  function animate() {
    value += direction * speed;
    if (value >= 1023) { value = 1023; direction = -1; }
    if (value <= 0)    { value = 0;    direction = 1; }

    const pct = (value / 1023) * 100;
    fill.style.width  = pct + '%';
    thumb.style.left  = pct + '%';
    display.textContent = Math.round(value);

    raf = requestAnimationFrame(animate);
  }

  // Only animate when visible
  const track = $('.pot-scale-track');
  if (!track) { animate(); return; }

  const potObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!raf) animate();
      } else {
        cancelAnimationFrame(raf);
        raf = null;
      }
    });
  }, { threshold: 0.1 });

  potObserver.observe(track);
})();

/* ═══════════════════════════════════════════════════════════════
   10. TRANSITION BLOCKS — Animate on scroll
═══════════════════════════════════════════════════════════════ */
(function initTransitions() {
  const blocks = $$('.transition-block');
  if (!blocks.length || prefersReducedMotion) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  blocks.forEach(b => {
    b.style.opacity = '0';
    b.style.transition = 'opacity 0.6s ease';
    obs.observe(b);
  });
})();

/* ═══════════════════════════════════════════════════════════════
   11. OVERVIEW CARDS — Keyboard & Focus Routing
═══════════════════════════════════════════════════════════════ */
(function initOverviewCards() {
  $$('.overview-card').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const href = card.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
})();

/* ═══════════════════════════════════════════════════════════════
   12. LED PULSE STAGGER — Condition Cards
═══════════════════════════════════════════════════════════════ */
(function initLEDStagger() {
  const cards = $$('.condition-card');
  if (!cards.length || prefersReducedMotion) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const leds = $$('.cc-led', entry.target);
        leds.forEach((led, i) => {
          led.style.animationDelay = `${i * 0.4}s`;
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(c => obs.observe(c));
})();

/* ═══════════════════════════════════════════════════════════════
   13. SUBTLE PARALLAX on Hero section
═══════════════════════════════════════════════════════════════ */
(function initParallax() {
  if (prefersReducedMotion) return;

  const heroCanvas = $('#hero-canvas');
  if (!heroCanvas) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        heroCanvas.style.transform = `translateY(${y * 0.25}px)`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

/* ═══════════════════════════════════════════════════════════════
   14. CODE LINE NUMBERS — Dynamic injection
═══════════════════════════════════════════════════════════════ */
(function initLineNumbers() {
  $$('.ce-pre').forEach(pre => {
    const code = pre.querySelector('code');
    if (!code) return;

    const lines = code.innerHTML.split('\n');
    const totalLines = lines.length;

    // Inject line numbers as a sibling element
    const lineCol = document.createElement('div');
    lineCol.className = 'ce-line-numbers';
    lineCol.setAttribute('aria-hidden', 'true');
    lineCol.style.cssText = `
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 40px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 1.5rem 0.5rem 1.5rem 0;
      font-family: var(--font-mono);
      font-size: clamp(0.6rem, 1.2vw, 0.72rem);
      line-height: 1.8;
      color: rgba(74, 86, 128, 0.7);
      user-select: none;
      border-right: 1px solid rgba(255,255,255,0.06);
      background: rgba(0,0,0,0.15);
      flex-shrink: 0;
      pointer-events: none;
    `;

    for (let i = 1; i <= totalLines; i++) {
      const span = document.createElement('span');
      span.textContent = i;
      lineCol.appendChild(span);
    }

    // Wrap pre content
    pre.style.position = 'relative';
    pre.style.paddingLeft = '3.5rem';
    pre.insertBefore(lineCol, pre.firstChild);
  });
})();

/* ═══════════════════════════════════════════════════════════════
   15. CHALLENGE SECTION TITLES — Glitch Effect on hover
═══════════════════════════════════════════════════════════════ */
(function initTitleEffects() {
  if (prefersReducedMotion) return;

  $$('.challenge-title').forEach(title => {
    title.addEventListener('mouseenter', () => {
      title.style.transition = 'letter-spacing 0.4s ease';
      title.style.letterSpacing = '0.08em';
    });
    title.addEventListener('mouseleave', () => {
      title.style.letterSpacing = '0.04em';
    });
  });
})();

/* ═══════════════════════════════════════════════════════════════
   16. HERO — Circuit board node animation toggle
═══════════════════════════════════════════════════════════════ */
(function initCircuitBoard() {
  if (prefersReducedMotion) return;

  const nodes = $$('.cb-node');
  // Randomize blink delays
  nodes.forEach(node => {
    const dot = node.querySelector('.node-dot');
    if (dot) {
      dot.style.animationDelay = `${Math.random() * 2}s`;
      dot.style.animationDuration = `${2 + Math.random() * 2}s`;
    }
  });
})();

/* ═══════════════════════════════════════════════════════════════
   17. VIDEO LAZY LOAD — Pause off-screen videos
═══════════════════════════════════════════════════════════════ */
(function initVideoManagement() {
  const videos = $$('video.challenge-video');
  if (!videos.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const video = entry.target;
      if (!entry.isIntersecting) {
        // Only pause if not playing from user intent
        if (!video.paused) video.pause();
      }
    });
  }, { threshold: 0.1 });

  videos.forEach(v => obs.observe(v));
})();

/* ═══════════════════════════════════════════════════════════════
   18. SECTION PROGRESS INDICATOR — Update on scroll
═══════════════════════════════════════════════════════════════ */
(function initSectionProgress() {
  const challengeSections = $$('.section-challenge');
  if (!challengeSections.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bgNum = entry.target.querySelector('.challenge-bg-number');
        if (bgNum && !prefersReducedMotion) {
          bgNum.style.transition = 'opacity 1s ease';
          bgNum.style.opacity = '1';
        }
      }
    });
  }, { threshold: 0.05 });

  challengeSections.forEach(sec => {
    const bgNum = sec.querySelector('.challenge-bg-number');
    if (bgNum) bgNum.style.opacity = '0';
    obs.observe(sec);
  });
})();

/* ═══════════════════════════════════════════════════════════════
   19. RESULTS TIMELINE — Animated connector lines
═══════════════════════════════════════════════════════════════ */
(function initResultsTimeline() {
  if (prefersReducedMotion) return;

  const connectors = $$('.rt-connector-line');
  connectors.forEach(line => {
    line.style.transform = 'scaleY(0)';
    line.style.transformOrigin = 'top';
    line.style.transition = 'transform 0.5s ease';
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lines = $$('.rt-connector-line', entry.target.parentElement || document);
        lines.forEach((l, i) => {
          setTimeout(() => { l.style.transform = 'scaleY(1)'; }, i * 200 + 400);
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const timeline = $('.results-timeline');
  if (timeline) obs.observe(timeline);
})();

/* ═══════════════════════════════════════════════════════════════
   20. KEYBOARD NAVIGATION — Tab order & focus management
═══════════════════════════════════════════════════════════════ */
(function initKeyboardNav() {
  // Visible focus for keyboard users
  document.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
  });

  // Add a CSS rule for keyboard navigation mode
  const style = document.createElement('style');
  style.textContent = `
    .keyboard-nav *:focus {
      outline: 2px solid var(--cyan) !important;
      outline-offset: 3px !important;
    }
  `;
  document.head.appendChild(style);
})();

/* ═══════════════════════════════════════════════════════════════
   21. FOOTER STATUS DOT — Pulse animation start on view
═══════════════════════════════════════════════════════════════ */
(function initFooterStatus() {
  const footer = $('footer.site-footer');
  const dot    = $('.fs-dot');
  if (!footer || !dot || prefersReducedMotion) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        dot.style.animation = 'blink 1.5s ease-in-out infinite';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  obs.observe(footer);
})();

/* ═══════════════════════════════════════════════════════════════
   22. INIT — Document ready
═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // All init functions are IIFE and run immediately,
  // but some depend on DOM being ready (already handled above since
  // script is at end of body). This is a safety net.
  console.info('[ISL] Intelligent Systems Lab — Initialized');
  console.info('[ISL] Arduino Challenge Portfolio v1.0');
});
