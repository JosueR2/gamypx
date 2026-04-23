/**
 * GamyPixel i18n Localization System v1.0
 * Shared between the Blogger theme and all standalone HTML pages.
 * Usage: Add data-i18n="key" to any element to translate it.
 *        Add data-i18n-placeholder="key" to inputs for placeholder translation.
 *        Call setLang('en') or setLang('es') to switch language.
 */
(function (global) {
  'use strict';

  var translations = {
    en: {
      /* ── Pixel Labs page ── */
      'labs-subtitle': 'Tutorials, guides and resources for video game development',
      'filter-all': '📚 All',
      'filter-unity': '🎯 Unity',
      'filter-ia': '🤖 AI',
      'filter-gamedesign': '🎨 Game Design',
      'filter-programacion': '💻 Programming',
      'filter-arte': '🖼️ Art & Pixel',
      'empty-text': 'No resources found in this category',

      /* ── Cards: pixel_labs ── */
      'card-light-title': 'Light Baking in Unity',
      'card-light-desc': 'Learn to optimize your game\'s lighting with baking techniques. Improve performance without sacrificing visual quality.',
      'card-light-level': '📊 Intermediate',
      'card-light-link': 'View Tutorial →',
      'card-physics-title': 'Physics in Unity 3D',
      'card-physics-desc': 'Complete guide on the physics system: Rigidbodies, Colliders, Joints and optimization in Unity 6.',
      'card-physics-level': '📊 Intermediate',
      'card-physics-link': 'View Guide →',
      'card-ia-title': 'AI for Generating Assets',
      'card-ia-desc': 'Discover how to use AI tools to create textures, sprites and assets for your projects quickly.',
      'card-ia-level': '📊 Beginner',
      'card-ia-link': 'View Tutorial →',
      'card-mechanics-title': 'Basic Game Mechanics',
      'card-mechanics-desc': 'Fundamentals of playable mechanics design. Learn to create fun and balanced systems from scratch.',
      'card-mechanics-level': '📊 Beginner',
      'card-mechanics-link': 'View Tutorial →',

      /* ── Theme UI ── */
      'cookie-text': 'Our website uses cookies to improve your experience. <a href="https://gamypixel.blogspot.com/p/politica-de-cookies.html">Learn more</a>',
      'cookie-accept': 'Accept',
      'nav-home': 'Home',
      'nav-nosotros': 'About Us',
      'nav-privacidad': 'Privacy Policy',
      'nav-cookies': 'Cookie Policy',
      'nav-contacto': 'Contact',
      'footer-about-caption': 'Every line of code, every pixel painted, is a testament to our commitment to quality and fun.',
      'widget-categories': 'Categories',
      'load-more': 'Load More',
      'no-more': 'That is All',
      'search-placeholder': 'Search...',
      'prev-post': 'Previous Post',
      'next-post': 'Next Post',

      /* ── IA para generar assets page (UI labels only) ── */
      'ia-toc-title': '📋 Table of Contents',
      'ia-recommended-tip': '<strong>Tip:</strong> for commercial games, always check each service\'s and model\'s license, especially for free or experimental tools.',
      'practical-example': 'Practical Example',
      'result-label': '<strong>Result:</strong>',
      'modal-close-btn': 'Got it',

      /* ── Game Mechanics Guide (UI labels) ── */
      'mech-toc-title': '📋 Table of Contents',
      'mech-see-impact': '📊 See Impact',
      'modal-info-title': 'Information',

      /* ── Unity Bakemaster (UI labels) ── */
      'bake-filter-all': 'All',
      'bake-filter-seams': 'Seams',
      'bake-filter-splotches': 'Splotches / Noise',
      'bake-filter-leaks': 'Light Leaks',
      'bake-fix-label': '<strong>Fix:</strong>',
    },

    es: {
      /* ── Pixel Labs page ── */
      'labs-subtitle': 'Tutoriales, guías y recursos para el desarrollo de videojuegos',
      'filter-all': '📚 Todos',
      'filter-unity': '🎯 Unity',
      'filter-ia': '🤖 IA',
      'filter-gamedesign': '🎨 Game Design',
      'filter-programacion': '💻 Programación',
      'filter-arte': '🖼️ Arte & Pixel',
      'empty-text': 'No se encontraron recursos en esta categoría',

      /* ── Cards: pixel_labs ── */
      'card-light-title': 'Light Baking en Unity',
      'card-light-desc': 'Aprende a optimizar la iluminación de tus juegos con técnicas de baking. Mejora el rendimiento sin sacrificar calidad visual.',
      'card-light-level': '📊 Intermedio',
      'card-light-link': 'Ver Tutorial →',
      'card-physics-title': 'Físicas en Unity 3D',
      'card-physics-desc': 'Guía completa sobre el sistema de físicas: Rigidbodies, Colliders, Joints y optimización en Unity 6.',
      'card-physics-level': '📊 Intermedio',
      'card-physics-link': 'Ver Guía →',
      'card-ia-title': 'IA para Generar Assets',
      'card-ia-desc': 'Descubre cómo usar herramientas de IA para crear texturas, sprites y assets para tus proyectos de manera rápida.',
      'card-ia-level': '📊 Principiante',
      'card-ia-link': 'Ver Tutorial →',
      'card-mechanics-title': 'Mecánicas de Juego Básicas',
      'card-mechanics-desc': 'Fundamentos del diseño de mecánicas jugables. Aprende a crear sistemas divertidos y balanceados desde cero.',
      'card-mechanics-level': '📊 Principiante',
      'card-mechanics-link': 'Ver Tutorial →',

      /* ── Theme UI ── */
      'cookie-text': 'Nuestro sitio web utiliza cookies para mejorar su experiencia. <a href="https://gamypixel.blogspot.com/p/politica-de-cookies.html">Saber más</a>',
      'cookie-accept': 'Aceptar',
      'nav-home': 'Inicio',
      'nav-nosotros': 'Nosotros',
      'nav-privacidad': 'Política de privacidad',
      'nav-cookies': 'Política de cookies',
      'nav-contacto': 'Contacto',
      'footer-about-caption': 'Cada línea de código, cada píxel pintado, es un testimonio de nuestro compromiso con la calidad y la diversión.',
      'widget-categories': 'Categorías',
      'load-more': 'Carga Más',
      'no-more': 'Eso es Todo',
      'search-placeholder': 'Buscar...',
      'prev-post': 'Artículo Anterior',
      'next-post': 'Artículo Siguiente',

      /* ── IA para generar assets page (UI labels only) ── */
      'ia-toc-title': '📋 Índice de Contenidos',
      'ia-recommended-tip': '<strong>Tip:</strong> para juegos comerciales, revisa siempre las licencias de cada servicio y modelo, especialmente en herramientas gratuitas o experimentales.',
      'practical-example': 'Ejemplo práctico',
      'result-label': '<strong>Resultado:</strong>',
      'modal-close-btn': 'Entendido',

      /* ── Game Mechanics Guide (UI labels) ── */
      'mech-toc-title': '📋 Índice de Contenidos',
      'mech-see-impact': '📊 Ver Impacto',
      'modal-info-title': 'Información',

      /* ── Unity Bakemaster (UI labels) ── */
      'bake-filter-all': 'Todos',
      'bake-filter-seams': 'Costuras / Seams',
      'bake-filter-splotches': 'Manchas / Ruido',
      'bake-filter-leaks': 'Fugas de Luz',
      'bake-fix-label': '<strong>Solución:</strong>',
    }
  };

  /* ─── Core helpers ─────────────────────────────────────────── */

  function t(key, lang) {
    return (translations[lang] || translations['en'])[key] || (translations['en'][key]) || '';
  }

  function detectLang() {
    var saved = localStorage.getItem('gamy_lang');
    if (saved && translations[saved]) return saved;
    var nav = ((navigator.language || navigator.userLanguage || 'en')
      .substring(0, 2)).toLowerCase();
    return translations[nav] ? nav : 'en';
  }

  function applyTranslations(lang) {
    var dict = translations[lang] || translations['en'];

    /* data-i18n → innerHTML */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    /* data-i18n-placeholder → placeholder attribute */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    /* Update lang switcher buttons */
    document.querySelectorAll('.gamy-lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    /* Update <html lang=""> */
    document.documentElement.setAttribute('lang', lang);
  }

  /* ─── Public API ────────────────────────────────────────────── */

  global.setLang = function (lang) {
    if (!translations[lang]) return;
    localStorage.setItem('gamy_lang', lang);
    applyTranslations(lang);
  };

  global.getCurrentLang = function () {
    return detectLang();
  };

  /* ─── Auto-init on DOM ready ────────────────────────────────── */
  function init() {
    applyTranslations(detectLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})(window);
