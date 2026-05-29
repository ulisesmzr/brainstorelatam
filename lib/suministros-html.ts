// FIX v6: footer-hero alineado izquierda, sin línea ni fondo, título Contacto
// + buscador solo abre con texto
// Size: 296 KB

export const SUMINISTROS_HTML = `<!-- CRITICAL ASSETS -->
<link rel="preconnect" href="https://cdn.tailwindcss.com" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script src="https://cdn.tailwindcss.com"></script>
<style>
    body {
      font-family: 'Inter', sans-serif;
      background: #FFFFFF;
      color: #0A0A0A;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .font-display-bold { font-family: 'Manrope', sans-serif; font-weight: 800; letter-spacing: -0.02em; }
    .font-mega { font-family: 'Manrope', sans-serif; font-weight: 800; letter-spacing: -0.04em; line-height: 0.95; }

    /* Yellow highlight */
    .yellow-highlight {
      position: relative;
      display: inline-block;
    }
    .yellow-highlight::before {
      content: '';
      position: absolute;
      inset-inline: -0.1em;
      bottom: 8%;
      height: 28%;
      background: #FFD400;
      z-index: -1;
    }

    /* Live dot */
    .live-dot {
      width: 8px;
      height: 8px;
      background: #FFD400;
      border-radius: 50%;
      display: inline-block;
      box-shadow: 0 0 0 0 rgba(255, 212, 0, 0.7);
      animation: pulse-yellow 2s infinite;
      flex-shrink: 0;
    }

    @keyframes pulse-yellow {
      0%, 100% { box-shadow: 0 0 0 0 rgba(255, 212, 0, 0.7); }
      50% { box-shadow: 0 0 0 16px rgba(255, 212, 0, 0); }
    }

    /* Reveal animation */
    .reveal {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* Counter animation */
    .counter-num {
      font-family: 'Manrope', sans-serif;
      font-weight: 800;
      letter-spacing: -0.04em;
    }

    /* ============================================
       HERO SEARCH BOX
       Buscador grande estilo Stripe/Linear
       ============================================ */
    .hero-search-wrap {
      position: relative;
      width: 100%;
      max-width: 720px;
      z-index: 30;
    }

    .hero-search-box {
      position: relative;
      display: flex;
      align-items: center;
      background: #FFFFFF;
      border: 2px solid #0A0A0A;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .hero-search-box:focus-within {
      box-shadow: 0 0 0 3px rgba(255, 212, 0, 0.3);
      border-color: #C9A227;
    }

    .hero-search-icon {
      flex-shrink: 0;
      width: 28px;
      height: 28px;
      margin-left: 18px;
      color: #0A0A0A;
    }

    .hero-search-input {
      flex: 1;
      padding: 22px 16px;
      font-size: 18px;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      color: #0A0A0A;
      background: transparent;
      border: 0;
      outline: 0;
    }

    .hero-search-input::placeholder {
      color: #999;
      font-weight: 400;
    }

    @media (max-width: 640px) {
      .hero-search-input { padding: 16px 12px; font-size: 16px; }
      .hero-search-icon { width: 22px; height: 22px; margin-left: 12px; }
    }

    .hero-search-btn {
      flex-shrink: 0;
      height: 100%;
      padding: 0 28px;
      background: #0A0A0A;
      color: #FFD400;
      font-family: 'Manrope', sans-serif;
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      cursor: pointer;
      border: 0;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: background 0.2s ease;
    }

    .hero-search-btn:hover { background: #1A1A1A; }

    @media (max-width: 640px) {
      .hero-search-btn { padding: 0 16px; font-size: 12px; }
      .hero-search-btn span:not(.hidden-mobile-search) { display: none; }
    }

    /* Popular searches chips */
    .pop-search-chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      background: transparent;
      border: 1px solid rgba(10, 10, 10, 0.15);
      font-size: 12px;
      font-family: 'JetBrains Mono', monospace;
      color: rgba(10, 10, 10, 0.7);
      cursor: pointer;
      transition: all 0.15s ease;
      white-space: nowrap;
    }

    .pop-search-chip:hover {
      background: #FFD400;
      border-color: #FFD400;
      color: #0A0A0A;
    }

    /* ============================================
       BADGE flotante de carrito en header
       ============================================ */
    .cart-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 22px;
      height: 22px;
      padding: 0 6px;
      background: #FFD400;
      color: #0A0A0A;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      border-radius: 50%;
      margin-left: 8px;
      transition: transform 0.2s ease;
    }

    .cart-badge.pulse {
      animation: badge-pulse 0.4s ease-out;
    }

    @keyframes badge-pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.4); }
      100% { transform: scale(1); }
    }

  /* ============================================
     DROPDOWN del buscador — PANEL FLOTANTE LATERAL DERECHO
     Aparece justo debajo del header sticky
     ============================================ */
  .search-dropdown {
    position: fixed !important;
    top: 88px !important;
    right: 4vw !important;
    bottom: auto !important;
    left: auto !important;
    width: min(600px, 42vw);
    height: min(640px, calc(100vh - 110px));
    background: #FFFFFF;
    border: 1px solid rgba(10, 10, 10, 0.08);
    box-shadow:
      0 2px 4px rgba(0, 0, 0, 0.04),
      0 24px 48px -12px rgba(0, 0, 0, 0.18),
      0 40px 80px -24px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    z-index: 100;
    opacity: 0;
    pointer-events: none;
    transform: translateX(40px);
    transition: opacity 280ms cubic-bezier(0.16, 1, 0.3, 1),
                transform 280ms cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 4px;
    overflow: hidden;
  }

  .search-dropdown.is-open {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(0);
  }

  /* En móvil únicamente (< 768px): bottom sheet */
  @media (max-width: 767px) {
    .search-dropdown {
      position: fixed !important;
      top: auto !important;
      bottom: 0 !important;
      right: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 85vh !important;
      transform: translateY(20px);
      border-radius: 12px 12px 0 0;
    }
    .search-dropdown.is-open {
      transform: translateY(0);
    }
  }

  /* Backdrop sutil cuando dropdown abierto */
  .search-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(10, 10, 10, 0);
    z-index: 99;
    pointer-events: none;
    transition: background-color 280ms ease;
  }

  .search-backdrop.is-active {
    background: rgba(10, 10, 10, 0.08);
    pointer-events: auto;
  }

  /* Contenedor scrolleable interno */
  .search-dropdown-scroll {
    flex: 1;
    overflow-y: auto;
    overscroll-behavior: contain;
  }

  .search-dropdown-scroll::-webkit-scrollbar { width: 10px; }
  .search-dropdown-scroll::-webkit-scrollbar-track { background: #FAFAF6; }
  .search-dropdown-scroll::-webkit-scrollbar-thumb {
    background: rgba(10, 10, 10, 0.2);
    border: 2px solid #FAFAF6;
    border-radius: 6px;
  }
  .search-dropdown-scroll::-webkit-scrollbar-thumb:hover {
    background: rgba(10, 10, 10, 0.4);
  }

  /* ============================================
     FOOTER FIJO del dropdown — Catálogo abierto
     Siempre visible al fondo del panel
     ============================================ */
  .search-dropdown-footer {
    flex-shrink: 0;
    background: linear-gradient(135deg, rgba(255, 212, 0, 0.10) 0%, rgba(255, 212, 0, 0.04) 100%);
    border-top: 1.5px dashed rgba(10, 10, 10, 0.15);
    padding: 14px 18px;
  }

  .footer-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(10, 10, 10, 0.6);
    margin-bottom: 4px;
  }

  .footer-title {
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 13px;
    color: #0A0A0A;
    margin-bottom: 4px;
    line-height: 1.3;
  }

  .footer-msg {
    font-size: 11px;
    color: rgba(10, 10, 10, 0.65);
    line-height: 1.4;
    margin-bottom: 10px;
  }

  .footer-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 14px;
    background: #0A0A0A;
    color: #FFD400;
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: 0;
    cursor: pointer;
    transition: background 0.15s ease;
    width: 100%;
    justify-content: center;
  }

  .footer-btn:hover { background: #1A1A1A; }

  /* Form custom dentro del footer */
  .footer-custom-form {
    display: none;
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid rgba(10, 10, 10, 0.1);
  }

  .footer-custom-form.is-open { display: block; }

  .footer-form-label {
    display: block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(10, 10, 10, 0.6);
    margin-bottom: 4px;
    margin-top: 8px;
  }

  .footer-form-label:first-child { margin-top: 0; }

  .footer-form-input,
  .footer-form-textarea {
    width: 100%;
    padding: 8px 10px;
    border: 1.5px solid rgba(10, 10, 10, 0.15);
    background: #FFFFFF;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    color: #0A0A0A;
    outline: 0;
    transition: border-color 0.15s ease;
  }

  .footer-form-input:focus,
  .footer-form-textarea:focus { border-color: #0A0A0A; }
  .footer-form-textarea { resize: vertical; min-height: 60px; }

  .footer-form-row {
    display: grid;
    grid-template-columns: 1fr 90px;
    gap: 8px;
    margin-top: 8px;
  }

  .footer-form-actions {
    display: flex;
    gap: 6px;
    margin-top: 12px;
  }

  .footer-form-submit {
    flex: 1;
    padding: 9px 14px;
    background: #FFD400;
    color: #0A0A0A;
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: 0;
    cursor: pointer;
    transition: background 0.15s ease;
  }

  .footer-form-submit:hover { background: #FFE040; }

  .footer-form-cancel {
    padding: 9px 14px;
    background: transparent;
    color: rgba(10, 10, 10, 0.6);
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: 1.5px solid rgba(10, 10, 10, 0.15);
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .footer-form-cancel:hover {
    color: #0A0A0A;
    border-color: #0A0A0A;
  }

  /* Double-check modal: alert para confirmar producto personalizado */
  .double-check-alert {
    margin-top: 10px;
    padding: 10px 12px;
    background: #FFF8E0;
    border: 1.5px solid #FFD400;
    border-radius: 2px;
    display: none;
  }

  .double-check-alert.is-visible { display: block; }

  .double-check-title {
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 12px;
    color: #0A0A0A;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .double-check-msg {
    font-size: 11px;
    color: rgba(10, 10, 10, 0.75);
    line-height: 1.4;
  }

  .double-check-suggestions {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .double-check-suggestion {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 8px;
    background: #FFFFFF;
    border: 1px solid rgba(10, 10, 10, 0.1);
    font-size: 11px;
    color: #0A0A0A;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .double-check-suggestion:hover {
    border-color: #0A0A0A;
    background: #FAFAF6;
  }

  .double-check-suggestion-text {
    flex: 1;
    text-align: left;
  }

  .double-check-suggestion-add {
    flex-shrink: 0;
    color: #C9A227;
    font-weight: 700;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Header del dropdown (fuera del scroll) */
  .dropdown-header {
    flex-shrink: 0;
    background: #FAFAF6;
    border-bottom: 1px solid rgba(10, 10, 10, 0.08);
    padding: 12px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
  }

  .dropdown-header-count {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(10, 10, 10, 0.6);
  }

  .dropdown-header-count strong {
    color: #0A0A0A;
    font-weight: 700;
  }

  .dropdown-close-btn {
    background: transparent;
    border: 0;
    color: rgba(10, 10, 10, 0.5);
    cursor: pointer;
    padding: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all 0.15s ease;
  }

  .dropdown-close-btn:hover {
    color: #0A0A0A;
    background: rgba(10, 10, 10, 0.05);
  }

  /* Empty state cuando input vacío */
  .dropdown-empty {
    padding: 28px 20px;
    text-align: center;
  }

  .dropdown-empty-icon {
    width: 48px;
    height: 48px;
    margin: 0 auto 12px;
    color: rgba(10, 10, 10, 0.2);
  }

  .dropdown-empty-title {
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 15px;
    color: #0A0A0A;
    margin-bottom: 6px;
  }

  .dropdown-empty-msg {
    font-size: 13px;
    color: rgba(10, 10, 10, 0.6);
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .dropdown-empty-suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    justify-content: center;
    margin-top: 12px;
  }

  /* Grupo por familia */
  .dropdown-group {
    border-bottom: 1px solid rgba(10, 10, 10, 0.08);
  }

  .dropdown-group:last-child {
    border-bottom: 0;
  }

  .dropdown-group-header {
    padding: 14px 16px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    background: #FAFAF6;
  }

  .dropdown-group-title {
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: #0A0A0A;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .dropdown-group-cat {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(10, 10, 10, 0.5);
  }

  .dropdown-group-cat-icon {
    width: 14px;
    height: 14px;
    color: rgba(10, 10, 10, 0.5);
    flex-shrink: 0;
  }

  .dropdown-group-brands {
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    color: rgba(10, 10, 10, 0.5);
    font-weight: 500;
  }

  .dropdown-group-brands strong { font-weight: 600; color: rgba(10, 10, 10, 0.7); }

  /* Items / variantes */
  .dropdown-item {
    padding: 11px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    cursor: pointer;
    transition: background-color 0.12s ease;
    border-top: 1px solid rgba(10, 10, 10, 0.04);
  }

  .dropdown-item:first-of-type {
    border-top: 0;
  }

  .dropdown-item:hover {
    background: #FFFCEB;
  }

  .dropdown-item-text {
    flex: 1;
    font-size: 13px;
    color: #0A0A0A;
    line-height: 1.4;
  }

  .dropdown-item-text mark {
    background: rgba(255, 212, 0, 0.5);
    color: #0A0A0A;
    padding: 0 2px;
    font-weight: 600;
  }

  .dropdown-add-btn {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border: 1.5px solid #0A0A0A;
    background: #FFFFFF;
    color: #0A0A0A;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s ease;
    position: relative;
  }

  .dropdown-add-btn:hover {
    background: #0A0A0A;
    color: #FFD400;
    transform: scale(1.05);
  }

  .dropdown-add-btn.is-added {
    background: #FFD400;
    border-color: #FFD400;
    color: #0A0A0A;
  }

  .dropdown-add-btn.is-added .icon-plus { display: none; }
  .dropdown-add-btn .icon-check { display: none; }
  .dropdown-add-btn.is-added .icon-check { display: block; }

  /* Custom product section */
  .dropdown-custom {
    background: linear-gradient(135deg, rgba(255, 212, 0, 0.08) 0%, rgba(255, 212, 0, 0.02) 100%);
    border-top: 2px dashed rgba(10, 10, 10, 0.15);
    padding: 16px;
  }

  .dropdown-custom-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(10, 10, 10, 0.6);
    margin-bottom: 10px;
  }

  .dropdown-custom-title {
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: #0A0A0A;
    margin-bottom: 6px;
  }

  .dropdown-custom-msg {
    font-size: 12px;
    color: rgba(10, 10, 10, 0.7);
    line-height: 1.5;
    margin-bottom: 12px;
  }

  .dropdown-custom-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    background: #0A0A0A;
    color: #FFD400;
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: 0;
    cursor: pointer;
    transition: background 0.15s ease;
  }

  .dropdown-custom-btn:hover {
    background: #1A1A1A;
  }

  /* Form inline para producto personalizado */
  .custom-form {
    display: none;
    padding: 14px;
    background: #FFFFFF;
    border: 2px solid #0A0A0A;
    margin-top: 12px;
  }

  .custom-form.is-open {
    display: block;
  }

  .custom-form-label {
    display: block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(10, 10, 10, 0.6);
    margin-bottom: 6px;
    margin-top: 12px;
  }

  .custom-form-label:first-child { margin-top: 0; }

  .custom-form-input,
  .custom-form-textarea {
    width: 100%;
    padding: 10px 12px;
    border: 1.5px solid rgba(10, 10, 10, 0.15);
    background: #FAFAF6;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: #0A0A0A;
    outline: 0;
    transition: border-color 0.15s ease;
  }

  .custom-form-input:focus,
  .custom-form-textarea:focus {
    border-color: #0A0A0A;
    background: #FFFFFF;
  }

  .custom-form-textarea {
    resize: vertical;
    min-height: 70px;
  }

  .custom-form-row {
    display: grid;
    grid-template-columns: 1fr 100px;
    gap: 10px;
    margin-top: 12px;
  }

  .custom-form-actions {
    display: flex;
    gap: 8px;
    margin-top: 14px;
  }

  .custom-form-submit {
    flex: 1;
    padding: 10px 16px;
    background: #FFD400;
    color: #0A0A0A;
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: 0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: background 0.15s ease;
  }

  .custom-form-submit:hover {
    background: #FFE040;
  }

  .custom-form-cancel {
    padding: 10px 16px;
    background: transparent;
    color: rgba(10, 10, 10, 0.6);
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: 1.5px solid rgba(10, 10, 10, 0.15);
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .custom-form-cancel:hover {
    color: #0A0A0A;
    border-color: #0A0A0A;
  }

  /* Toast cuando se agrega producto */
  .toast {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: #0A0A0A;
    color: #FFFFFF;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 500;
    box-shadow: 0 16px 40px -8px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  .toast.is-visible {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
    pointer-events: auto;
  }

  .toast .toast-icon {
    color: #FFD400;
    flex-shrink: 0;
  }

  .toast-action {
    margin-left: 12px;
    padding-left: 12px;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    color: #FFD400;
    font-weight: 700;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 0.05em;
  }

  .toast-action:hover { color: #FFE040; }
  /* ============================================
     SECCIÓN CATEGORÍAS
     ============================================ */
  .cats-section {
    padding: 96px 0 80px;
    background: #FFFFFF;
    position: relative;
    border-top: 1px solid rgba(10, 10, 10, 0.06);
  }

  .cats-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    background: #0A0A0A;
    color: #FFD400;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-weight: 600;
    margin-bottom: 24px;
  }

  .cats-eyebrow .dot {
    width: 6px;
    height: 6px;
    background: #FFD400;
    border-radius: 50%;
  }

  .cats-title {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: clamp(36px, 5vw, 60px);
    line-height: 1.0;
    letter-spacing: -0.025em;
    color: #0A0A0A;
    margin-bottom: 16px;
    max-width: 880px;
  }

  .cats-title-highlight {
    background: linear-gradient(180deg, transparent 60%, #FFD400 60%);
    padding: 0 4px;
  }

  .cats-subtitle {
    font-size: 17px;
    color: rgba(10, 10, 10, 0.7);
    max-width: 640px;
    line-height: 1.5;
    margin-bottom: 56px;
  }

  /* Grid de cards */
  .cats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  @media (max-width: 1023px) {
    .cats-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 639px) {
    .cats-grid { grid-template-columns: 1fr; }
  }

  /* Card individual */
  .cat-card {
    position: relative;
    padding: 32px 28px 28px;
    background: #FFFFFF;
    border: 1.5px solid rgba(10, 10, 10, 0.1);
    cursor: pointer;
    transition: background 180ms ease, border-color 180ms ease, transform 220ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 220ms cubic-bezier(0.16, 1, 0.3, 1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 240px;
    text-align: left;
    width: 100%;
    font-family: inherit;
  }

  /* Hover: fondo NEGRO con acento amarillo (estilo plataformas digitales) */
  .cat-card:hover {
    background: #0A0A0A;
    border-color: #0A0A0A;
    transform: translateY(-3px);
    box-shadow:
      0 1px 2px rgba(0, 0, 0, 0.06),
      0 20px 40px -12px rgba(10, 10, 10, 0.3);
  }

  .cat-card:active { transform: translateY(-1px); }

  /* Número en esquina superior derecha */
  .cat-card-num {
    position: absolute;
    top: 24px;
    right: 24px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    color: rgba(10, 10, 10, 0.35);
    font-weight: 600;
    transition: color 180ms ease;
  }

  .cat-card:hover .cat-card-num {
    color: #FFD400;
  }

  .cat-card-icon {
    width: 32px;
    height: 32px;
    color: #0A0A0A;
    margin-bottom: 24px;
    transition: color 180ms ease, transform 220ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .cat-card:hover .cat-card-icon {
    color: #FFD400;
    transform: scale(1.08);
  }

  .cat-card-title {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: 22px;
    color: #0A0A0A;
    margin-bottom: 14px;
    line-height: 1.15;
    letter-spacing: -0.015em;
    transition: color 180ms ease;
  }

  .cat-card:hover .cat-card-title {
    color: #FFFFFF;
  }

  /* Descripción de la categoría dentro de la card */
  .cat-card-desc {
    font-size: 14px;
    color: rgba(10, 10, 10, 0.65);
    line-height: 1.5;
    flex: 1;
    transition: color 180ms ease;
  }

  .cat-card:hover .cat-card-desc {
    color: rgba(255, 255, 255, 0.75);
  }

  /* CTA invisible que aparece en hover */
  .cat-card-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: transparent;
    margin-top: 20px;
    opacity: 0;
    transform: translateY(8px);
    transition: color 180ms ease, opacity 200ms ease, transform 220ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .cat-card:hover .cat-card-cta {
    color: #FFD400;
    opacity: 1;
    transform: translateY(0);
  }

  .cat-card-cta svg {
    width: 14px;
    height: 14px;
    transition: transform 220ms ease;
  }

  .cat-card:hover .cat-card-cta svg {
    transform: translateX(4px);
  }

  /* ============================================
     MODAL DE CATEGORÍA
     ============================================ */
  .cat-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(10, 10, 10, 0);
    z-index: 200;
    pointer-events: none;
    transition: background 280ms ease;
  }

  .cat-modal-backdrop.is-active {
    background: rgba(10, 10, 10, 0.5);
    pointer-events: auto;
  }

  .cat-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.96);
    width: min(720px, 92vw);
    max-height: 86vh;
    background: #FFFFFF;
    z-index: 201;
    opacity: 0;
    pointer-events: none;
    transition: opacity 280ms cubic-bezier(0.16, 1, 0.3, 1),
                transform 280ms cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
    box-shadow:
      0 2px 4px rgba(0, 0, 0, 0.04),
      0 32px 64px -12px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    overflow: hidden;
  }

  .cat-modal.is-open {
    opacity: 1;
    pointer-events: auto;
    transform: translate(-50%, -50%) scale(1);
  }

  .cat-modal-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    padding: 28px 32px 20px;
    border-bottom: 1px solid rgba(10, 10, 10, 0.08);
    flex-shrink: 0;
  }

  .cat-modal-header-left {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    flex: 1;
  }

  .cat-modal-icon-wrap {
    width: 48px;
    height: 48px;
    background: #FFD400;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .cat-modal-icon-wrap svg {
    width: 24px;
    height: 24px;
    color: #0A0A0A;
  }

  .cat-modal-title {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: 24px;
    color: #0A0A0A;
    line-height: 1.1;
    letter-spacing: -0.015em;
    margin-bottom: 4px;
  }

  .cat-modal-meta {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: rgba(10, 10, 10, 0.55);
    letter-spacing: 0.04em;
  }

  .cat-modal-meta strong { color: #0A0A0A; font-weight: 700; }

  .cat-modal-close {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1.5px solid rgba(10, 10, 10, 0.15);
    color: #0A0A0A;
    cursor: pointer;
    transition: all 0.15s ease;
    flex-shrink: 0;
  }

  .cat-modal-close:hover {
    border-color: #0A0A0A;
    background: #0A0A0A;
    color: #FFD400;
  }

  .cat-modal-close svg { width: 14px; height: 14px; }

  .cat-modal-body {
    flex: 1;
    overflow-y: auto;
    overscroll-behavior: contain;
    padding: 24px 32px;
  }

  .cat-modal-body::-webkit-scrollbar { width: 8px; }
  .cat-modal-body::-webkit-scrollbar-track { background: #FAFAF6; }
  .cat-modal-body::-webkit-scrollbar-thumb {
    background: rgba(10, 10, 10, 0.2);
    border-radius: 4px;
  }

  .cat-modal-section-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: rgba(10, 10, 10, 0.5);
    margin-bottom: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .cat-modal-section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(10, 10, 10, 0.1);
  }

  .cat-modal-brands {
    margin-bottom: 28px;
  }

  /* Botón toggle del acordeón de marcas */
  .cat-modal-brands-toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px 14px;
    background: #FAFAF6;
    border: 1px solid rgba(10, 10, 10, 0.1);
    cursor: pointer;
    transition: all 0.15s ease;
    font-family: inherit;
    text-align: left;
  }

  .cat-modal-brands-toggle:hover {
    border-color: #0A0A0A;
    background: #FFFFFF;
  }

  .cat-modal-brands-toggle-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .cat-modal-brands-icon-bg {
    width: 28px;
    height: 28px;
    background: #0A0A0A;
    color: #FFD400;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .cat-modal-brands-icon-bg svg {
    width: 14px;
    height: 14px;
  }

  .cat-modal-brands-toggle-text {
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 13px;
    color: #0A0A0A;
    letter-spacing: -0.005em;
  }

  .cat-modal-brands-toggle-count {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    color: rgba(10, 10, 10, 0.5);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-weight: 600;
    margin-left: 6px;
  }

  .cat-modal-brands-chevron {
    width: 16px;
    height: 16px;
    color: rgba(10, 10, 10, 0.5);
    transition: transform 280ms cubic-bezier(0.16, 1, 0.3, 1);
    flex-shrink: 0;
  }

  .cat-modal-brands-toggle[aria-expanded="true"] .cat-modal-brands-chevron {
    transform: rotate(180deg);
    color: #0A0A0A;
  }

  /* Contenedor colapsable */
  .cat-modal-brands-collapse {
    max-height: 0;
    overflow: hidden;
    transition: max-height 320ms cubic-bezier(0.16, 1, 0.3, 1),
                margin 320ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .cat-modal-brands-collapse.is-open {
    max-height: 400px;
    margin-top: 10px;
  }

  .cat-modal-brands-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding: 4px 2px 2px;
  }

  .cat-modal-brand-chip {
    padding: 6px 12px;
    background: #FFFFFF;
    border: 1px solid rgba(10, 10, 10, 0.12);
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: #0A0A0A;
    font-weight: 500;
    transition: all 0.15s ease;
  }

  .cat-modal-brand-chip:hover {
    border-color: #0A0A0A;
    background: #FFD400;
  }

  .cat-modal-families {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  @media (max-width: 639px) {
    .cat-modal-families { grid-template-columns: 1fr; }
  }

  .cat-modal-family-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 12px 14px;
    background: #FFFFFF;
    border: 1px solid rgba(10, 10, 10, 0.08);
    cursor: pointer;
    transition: all 0.15s ease;
    text-align: left;
    width: 100%;
    font-family: inherit;
  }

  .cat-modal-family-item:hover {
    border-color: #0A0A0A;
    background: #FAFAF6;
    transform: translateX(2px);
  }

  .cat-modal-family-name {
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 13px;
    color: #0A0A0A;
    line-height: 1.3;
  }

  .cat-modal-family-count {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    color: rgba(10, 10, 10, 0.5);
    margin-top: 2px;
  }

  .cat-modal-family-arrow {
    width: 14px;
    height: 14px;
    color: rgba(10, 10, 10, 0.4);
    flex-shrink: 0;
    transition: all 0.15s ease;
  }

  .cat-modal-family-item:hover .cat-modal-family-arrow {
    color: #0A0A0A;
    transform: translateX(2px);
  }

  /* Footer del modal con CTA */
  .cat-modal-footer {
    padding: 18px 32px;
    background: #FAFAF6;
    border-top: 1px solid rgba(10, 10, 10, 0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-shrink: 0;
  }

  .cat-modal-footer-text {
    font-size: 12px;
    color: rgba(10, 10, 10, 0.6);
    line-height: 1.4;
  }

  .cat-modal-footer-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    background: #0A0A0A;
    color: #FFD400;
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: 0;
    cursor: pointer;
    transition: background 0.15s ease;
    flex-shrink: 0;
  }

  .cat-modal-footer-cta:hover { background: #1A1A1A; }

  .cat-modal-footer-cta svg { width: 14px; height: 14px; }

  @media (max-width: 639px) {
    .cat-modal-footer {
      flex-direction: column;
      align-items: stretch;
    }
    .cat-modal-footer-cta { justify-content: center; }
  }
  /* ============================================
     SECCIÓN CÓMO FUNCIONA
     ============================================ */
  .how-section {
    padding: 96px 0 96px;
    background: #FAFAF6;
    position: relative;
    border-top: 1px solid rgba(10, 10, 10, 0.06);
    overflow: hidden;
  }

  /* Decoración sutil de fondo */
  .how-section::before {
    content: '';
    position: absolute;
    top: -120px;
    right: -120px;
    width: 480px;
    height: 480px;
    border-radius: 50%;
    border: 1.5px dashed rgba(255, 212, 0, 0.25);
    pointer-events: none;
  }

  .how-section::after {
    content: '';
    position: absolute;
    bottom: -180px;
    left: -180px;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    border: 1.5px dashed rgba(10, 10, 10, 0.04);
    pointer-events: none;
  }

  .how-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    background: #0A0A0A;
    color: #FFD400;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-weight: 600;
    margin-bottom: 24px;
    position: relative;
    z-index: 1;
  }

  .how-eyebrow .dot {
    width: 6px;
    height: 6px;
    background: #FFD400;
    border-radius: 50%;
  }

  .how-title {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: clamp(36px, 5vw, 60px);
    line-height: 1.0;
    letter-spacing: -0.025em;
    color: #0A0A0A;
    margin-bottom: 20px;
    max-width: 880px;
    position: relative;
    z-index: 1;
  }

  .how-title-highlight {
    background: linear-gradient(180deg, transparent 60%, #FFD400 60%);
    padding: 0 6px;
  }

  .how-subtitle {
    font-size: 17px;
    color: rgba(10, 10, 10, 0.7);
    max-width: 640px;
    line-height: 1.5;
    margin-bottom: 72px;
    position: relative;
    z-index: 1;
  }

  /* ============================================
     TIMELINE DE 4 PASOS
     ============================================ */
  .how-timeline {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    position: relative;
    z-index: 1;
  }

  /* Línea conectora horizontal (solo desktop) */
  .how-timeline::before {
    content: '';
    position: absolute;
    top: 38px;
    left: 6%;
    right: 6%;
    height: 1.5px;
    background: repeating-linear-gradient(
      to right,
      rgba(10, 10, 10, 0.15) 0,
      rgba(10, 10, 10, 0.15) 6px,
      transparent 6px,
      transparent 12px
    );
    z-index: 0;
  }

  @media (max-width: 1023px) {
    .how-timeline {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
    }
    .how-timeline::before { display: none; }
  }

  @media (max-width: 639px) {
    .how-timeline {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }

  /* Step individual */
  .how-step {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 1;
  }

  /* Número con círculo */
  .how-step-num-wrap {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
    width: 100%;
  }

  .how-step-num-badge {
    width: 76px;
    height: 76px;
    background: #FFFFFF;
    border: 1.5px solid #0A0A0A;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: 28px;
    color: #0A0A0A;
    letter-spacing: -0.02em;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
  }

  /* Badge especial: el primer paso destacado */
  .how-step:hover .how-step-num-badge {
    background: #FFD400;
    transform: scale(1.05);
    box-shadow: 0 12px 24px -8px rgba(255, 212, 0, 0.5);
  }

  /* Punto pequeño sobre la línea */
  .how-step-num-badge::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -6px;
    width: 6px;
    height: 6px;
    background: #0A0A0A;
    border-radius: 50%;
    transform: translateY(-50%);
    opacity: 0;
  }

  /* Mostrar solo en desktop entre pasos */
  @media (min-width: 1024px) {
    .how-step:not(:last-child) .how-step-num-badge::after {
      opacity: 0;  /* dejamos solo la línea punteada como conector */
    }
  }

  .how-step-meta {
    flex: 1;
    min-width: 0;
  }

  .how-step-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: rgba(10, 10, 10, 0.5);
    margin-bottom: 4px;
    font-weight: 600;
  }

  .how-step-time {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: 16px;
    color: #0A0A0A;
    letter-spacing: -0.01em;
  }

  .how-step-time-accent {
    color: #C9A227;
  }

  /* Contenido del paso */
  .how-step-content {
    width: 100%;
    padding-left: 4px;
  }

  .how-step-icon {
    width: 22px;
    height: 22px;
    color: #0A0A0A;
    margin-bottom: 14px;
    opacity: 0.6;
  }

  .how-step-title {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: 20px;
    color: #0A0A0A;
    margin-bottom: 12px;
    line-height: 1.2;
    letter-spacing: -0.015em;
  }

  .how-step-desc {
    font-size: 14px;
    color: rgba(10, 10, 10, 0.65);
    line-height: 1.55;
  }

  .how-step-desc strong {
    color: #0A0A0A;
    font-weight: 700;
  }

  /* ============================================
     FILA INFERIOR: Garantías / Notas
     ============================================ */
  .how-footnote {
    margin-top: 72px;
    padding: 28px 32px;
    background: #FFFFFF;
    border: 1.5px solid rgba(10, 10, 10, 0.1);
    border-left: 4px solid #FFD400;
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }

  @media (max-width: 1023px) {
    .how-footnote {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  .how-footnote-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  .how-footnote-icon-wrap {
    width: 32px;
    height: 32px;
    background: #0A0A0A;
    color: #FFD400;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .how-footnote-icon-wrap svg {
    width: 14px;
    height: 14px;
  }

  .how-footnote-content {
    flex: 1;
  }

  .how-footnote-title {
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 13px;
    color: #0A0A0A;
    margin-bottom: 4px;
    letter-spacing: -0.005em;
  }

  .how-footnote-desc {
    font-size: 12px;
    color: rgba(10, 10, 10, 0.6);
    line-height: 1.45;
  }
  /* ============================================
     SECCIÓN PLATAFORMA
     ============================================ */
  .platform-section {
    padding: 120px 0 96px;
    background: #FFFFFF;
    position: relative;
    border-top: 1px solid rgba(10, 10, 10, 0.06);
    overflow: hidden;
  }

  /* Decoración de fondo */
  .platform-section::before {
    content: '';
    position: absolute;
    top: 80px;
    right: -80px;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    border: 1.5px dashed rgba(255, 212, 0, 0.2);
    pointer-events: none;
  }

  /* Hero 2 columnas */
  .platform-hero {
    display: grid;
    grid-template-columns: 1fr 1.15fr;
    gap: 80px;
    align-items: center;
    margin-bottom: 96px;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 1023px) {
    .platform-hero {
      grid-template-columns: 1fr;
      gap: 56px;
    }
  }

  /* Columna izquierda */
  .platform-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    background: #0A0A0A;
    color: #FFD400;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-weight: 600;
    margin-bottom: 24px;
  }

  .platform-eyebrow .dot {
    width: 6px;
    height: 6px;
    background: #FFD400;
    border-radius: 50%;
  }

  .platform-title {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: clamp(36px, 4.2vw, 56px);
    line-height: 1.0;
    letter-spacing: -0.025em;
    color: #0A0A0A;
    margin-bottom: 24px;
  }

  .platform-title-highlight {
    background: linear-gradient(180deg, transparent 60%, #FFD400 60%);
    padding: 0 6px;
  }

  .platform-desc {
    font-size: 17px;
    color: rgba(10, 10, 10, 0.7);
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .platform-desc strong { color: #0A0A0A; font-weight: 700; }

  .platform-desc-secondary {
    font-size: 14px;
    color: rgba(10, 10, 10, 0.55);
    line-height: 1.5;
    margin-bottom: 32px;
    padding-left: 16px;
    border-left: 2px solid #FFD400;
  }

  .platform-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 16px 28px;
    background: #0A0A0A;
    color: #FFD400;
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    border: 0;
    cursor: pointer;
    transition: all 200ms ease;
  }

  .platform-cta:hover {
    background: #1A1A1A;
    transform: translateY(-2px);
    box-shadow: 0 12px 24px -8px rgba(10, 10, 10, 0.3);
  }

  .platform-cta svg {
    width: 16px;
    height: 16px;
    transition: transform 200ms ease;
  }

  .platform-cta:hover svg { transform: translateX(4px); }

  /* ============================================
     MOCKUP DEL PANEL (lado derecho)
     ============================================ */
  .platform-mockup-wrap {
    position: relative;
  }

  .platform-mockup {
    position: relative;
    background: #FFFFFF;
    border: 1.5px solid rgba(10, 10, 10, 0.12);
    box-shadow:
      0 1px 2px rgba(0, 0, 0, 0.04),
      0 24px 48px -12px rgba(10, 10, 10, 0.18),
      0 40px 80px -24px rgba(10, 10, 10, 0.15);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Barra superior del browser */
  .mockup-browser-bar {
    background: #FAFAF6;
    border-bottom: 1px solid rgba(10, 10, 10, 0.1);
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .mockup-browser-dots {
    display: flex;
    gap: 6px;
  }

  .mockup-browser-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(10, 10, 10, 0.15);
  }
  .mockup-browser-dot:nth-child(1) { background: #FF5F57; }
  .mockup-browser-dot:nth-child(2) { background: #FEBC2E; }
  .mockup-browser-dot:nth-child(3) { background: #28C840; }

  .mockup-browser-url {
    flex: 1;
    background: #FFFFFF;
    border: 1px solid rgba(10, 10, 10, 0.08);
    padding: 5px 12px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    color: rgba(10, 10, 10, 0.6);
    border-radius: 3px;
  }

  .mockup-browser-url .url-lock { color: #28C840; margin-right: 4px; }
  .mockup-browser-url .url-domain { color: #0A0A0A; font-weight: 600; }

  /* Header del panel del cliente */
  .mockup-header {
    padding: 16px 18px;
    border-bottom: 1px solid rgba(10, 10, 10, 0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .mockup-header-brand {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .mockup-logo-square {
    width: 28px;
    height: 28px;
    background: #0A0A0A;
    color: #FFD400;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: 14px;
    border-radius: 3px;
  }

  .mockup-brand-name {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: 13px;
    color: #0A0A0A;
    letter-spacing: -0.01em;
  }

  .mockup-brand-sub {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    color: rgba(10, 10, 10, 0.5);
    letter-spacing: 0.04em;
    margin-top: 1px;
  }

  .mockup-user-pill {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 10px;
    background: #FAFAF6;
    border: 1px solid rgba(10, 10, 10, 0.08);
    border-radius: 999px;
  }

  .mockup-user-avatar {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #FFD400;
    color: #0A0A0A;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 9px;
  }

  .mockup-user-name {
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 10px;
    color: #0A0A0A;
  }

  /* Buscador del panel */
  .mockup-search {
    margin: 16px 18px;
    padding: 10px 14px;
    background: #FAFAF6;
    border: 1.5px solid rgba(10, 10, 10, 0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .mockup-search-icon {
    width: 14px;
    height: 14px;
    color: rgba(10, 10, 10, 0.4);
    flex-shrink: 0;
  }

  .mockup-search-text {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    color: rgba(10, 10, 10, 0.85);
    flex: 1;
  }

  .mockup-cursor {
    display: inline-block;
    width: 1.5px;
    height: 13px;
    background: #0A0A0A;
    margin-left: 1px;
    vertical-align: middle;
    animation: mockup-blink 1s steps(2) infinite;
  }

  @keyframes mockup-blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  /* Sección de categorías */
  .mockup-section-label {
    margin: 8px 18px 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: rgba(10, 10, 10, 0.45);
    font-weight: 600;
  }

  .mockup-cats {
    display: flex;
    gap: 6px;
    margin: 0 18px 16px;
    flex-wrap: wrap;
  }

  .mockup-cat-chip {
    padding: 5px 10px;
    background: #FFFFFF;
    border: 1px solid rgba(10, 10, 10, 0.12);
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 10px;
    color: #0A0A0A;
    transition: all 320ms ease;
  }

  .mockup-cat-chip.is-active {
    background: #0A0A0A;
    color: #FFD400;
    border-color: #0A0A0A;
  }

  .mockup-cat-chip-count {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    opacity: 0.6;
    margin-left: 4px;
  }

  /* Tabla de productos */
  .mockup-products {
    margin: 0 18px 16px;
    border: 1px solid rgba(10, 10, 10, 0.08);
    border-radius: 3px;
    overflow: hidden;
  }

  .mockup-product {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 10px 12px;
    border-bottom: 1px solid rgba(10, 10, 10, 0.06);
    background: #FFFFFF;
    transition: background 200ms ease;
  }

  .mockup-product:last-child { border-bottom: 0; }

  .mockup-product.is-highlighted {
    background: rgba(255, 212, 0, 0.08);
  }

  .mockup-product-left {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
    min-width: 0;
  }

  .mockup-product-icon {
    width: 24px;
    height: 24px;
    background: #FAFAF6;
    border: 1px solid rgba(10, 10, 10, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border-radius: 3px;
  }

  .mockup-product-icon svg {
    width: 12px;
    height: 12px;
    color: #0A0A0A;
  }

  .mockup-product-info {
    flex: 1;
    min-width: 0;
  }

  .mockup-product-name {
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 11px;
    color: #0A0A0A;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mockup-product-price {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    color: rgba(10, 10, 10, 0.55);
    margin-top: 2px;
    letter-spacing: 0.02em;
  }

  .mockup-product-price strong {
    color: #C9A227;
    font-weight: 700;
  }

  .mockup-product-add {
    width: 24px;
    height: 24px;
    background: #FFD400;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
    color: #0A0A0A;
    border-radius: 3px;
    transition: all 200ms ease;
  }

  .mockup-product-add svg {
    width: 12px;
    height: 12px;
  }

  /* Footer del mockup con carrito */
  .mockup-footer {
    background: #0A0A0A;
    padding: 12px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .mockup-cart-info {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .mockup-cart-icon {
    width: 18px;
    height: 18px;
    color: #FFD400;
  }

  .mockup-cart-label {
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 11px;
    color: #FFFFFF;
  }

  .mockup-cart-count {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.6);
    margin-left: 4px;
  }

  .mockup-cart-cta {
    padding: 6px 14px;
    background: #FFD400;
    color: #0A0A0A;
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border: 0;
    cursor: pointer;
    transition: background 200ms ease;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .mockup-cart-cta svg { width: 11px; height: 11px; }

  /* Badge flotante "EJEMPLO" sobre el mockup */
  .mockup-tag {
    position: absolute;
    top: -14px;
    right: -14px;
    background: #FFD400;
    color: #0A0A0A;
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-weight: 700;
    padding: 6px 12px;
    transform: rotate(4deg);
    box-shadow: 0 8px 20px -6px rgba(255, 212, 0, 0.5);
    z-index: 2;
  }

  /* ============================================
     4 BENEFICIOS EN GRID
     ============================================ */
  .platform-benefits {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 1023px) {
    .platform-benefits { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 639px) {
    .platform-benefits { grid-template-columns: 1fr; }
  }

  .platform-benefit {
    padding: 28px 24px;
    background: #FAFAF6;
    border: 1.5px solid transparent;
    transition: all 200ms ease;
    position: relative;
  }

  .platform-benefit:hover {
    background: #FFFFFF;
    border-color: #0A0A0A;
    transform: translateY(-3px);
    box-shadow: 0 16px 32px -12px rgba(10, 10, 10, 0.15);
  }

  .platform-benefit-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.15em;
    color: rgba(10, 10, 10, 0.4);
    font-weight: 600;
    margin-bottom: 16px;
  }

  .platform-benefit-icon-wrap {
    width: 40px;
    height: 40px;
    background: #0A0A0A;
    color: #FFD400;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    transition: all 200ms ease;
  }

  .platform-benefit:hover .platform-benefit-icon-wrap {
    background: #FFD400;
    color: #0A0A0A;
    transform: scale(1.05);
  }

  .platform-benefit-icon-wrap svg {
    width: 18px;
    height: 18px;
  }

  .platform-benefit-title {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: 16px;
    color: #0A0A0A;
    margin-bottom: 8px;
    line-height: 1.2;
    letter-spacing: -0.01em;
  }

  .platform-benefit-desc {
    font-size: 13px;
    color: rgba(10, 10, 10, 0.65);
    line-height: 1.45;
  }

  .platform-benefit-desc strong {
    color: #0A0A0A;
    font-weight: 700;
  }
  /* ============================================
     SECCIÓN MARCAS
     ============================================ */
  .brands-section {
    padding: 96px 0 96px;
    background: #FFFFFF;
    border-top: 1px solid rgba(10, 10, 10, 0.06);
    position: relative;
    overflow: hidden;
  }

  .brands-header {
    margin-bottom: 56px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 40px;
    flex-wrap: wrap;
  }

  .brands-header-left {
    flex: 1;
    min-width: 320px;
  }

  .brands-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    background: #0A0A0A;
    color: #FFD400;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-weight: 600;
    margin-bottom: 24px;
  }

  .brands-eyebrow .dot {
    width: 6px;
    height: 6px;
    background: #FFD400;
    border-radius: 50%;
  }

  .brands-title {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: clamp(32px, 4vw, 52px);
    line-height: 1.05;
    letter-spacing: -0.025em;
    color: #0A0A0A;
    margin-bottom: 16px;
  }

  .brands-title-highlight {
    background: linear-gradient(180deg, transparent 60%, #FFD400 60%);
    padding: 0 6px;
  }

  .brands-subtitle {
    font-size: 16px;
    color: rgba(10, 10, 10, 0.65);
    line-height: 1.5;
    max-width: 560px;
  }

  .brands-stat {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    flex-shrink: 0;
  }

  .brands-stat-num {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: 64px;
    line-height: 0.9;
    letter-spacing: -0.04em;
    color: #0A0A0A;
  }

  .brands-stat-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: rgba(10, 10, 10, 0.5);
    margin-top: 8px;
    font-weight: 600;
  }

  /* ============================================
     MARQUEE DE MARCAS
     Doble fila en direcciones opuestas
     ============================================ */
  .marquee-wrap {
    position: relative;
    margin: 0 -48px;
  }

  /* Fades laterales para efecto suave */
  .marquee-wrap::before,
  .marquee-wrap::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 120px;
    z-index: 2;
    pointer-events: none;
  }

  .marquee-wrap::before {
    left: 0;
    background: linear-gradient(to right, #FFFFFF 0%, transparent 100%);
  }

  .marquee-wrap::after {
    right: 0;
    background: linear-gradient(to left, #FFFFFF 0%, transparent 100%);
  }

  .marquee-row {
    display: flex;
    overflow: hidden;
    padding: 14px 0;
    mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  }

  .marquee-row + .marquee-row {
    margin-top: 12px;
  }

  /* Track interno con animación */
  .marquee-track {
    display: flex;
    gap: 14px;
    flex-shrink: 0;
    padding-right: 14px;
    animation: marquee-left 60s linear infinite;
  }

  .marquee-row.reverse .marquee-track {
    animation: marquee-right 60s linear infinite;
  }

  @keyframes marquee-left {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  @keyframes marquee-right {
    from { transform: translateX(-50%); }
    to { transform: translateX(0); }
  }

  /* Pausa al hover (solo si el dispositivo no es touch) */
  @media (hover: hover) {
    .marquee-row:hover .marquee-track {
      animation-play-state: paused;
    }
  }

  /* Brand chip */
  .brand-chip {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 22px;
    background: #FFFFFF;
    border: 1.5px solid rgba(10, 10, 10, 0.1);
    flex-shrink: 0;
    transition: all 180ms ease;
    cursor: default;
  }

  .brand-chip:hover {
    border-color: #0A0A0A;
    background: #0A0A0A;
    color: #FFD400;
    transform: translateY(-2px);
  }

  .brand-chip-dot {
    width: 6px;
    height: 6px;
    background: #FFD400;
    border-radius: 50%;
    flex-shrink: 0;
    transition: background 180ms ease;
  }

  .brand-chip:hover .brand-chip-dot {
    background: #FFFFFF;
  }

  .brand-chip-name {
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 15px;
    color: inherit;
    letter-spacing: -0.005em;
    color: #0A0A0A;
    transition: color 180ms ease;
  }

  .brand-chip:hover .brand-chip-name {
    color: #FFD400;
  }

  /* Footer del bloque: nota legal */
  .brands-footnote {
    margin-top: 56px;
    padding: 24px 0 0;
    border-top: 1px dashed rgba(10, 10, 10, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    flex-wrap: wrap;
  }

  .brands-footnote-text {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: rgba(10, 10, 10, 0.55);
    line-height: 1.5;
    letter-spacing: 0.02em;
    max-width: 760px;
  }

  .brands-footnote-text strong {
    color: #0A0A0A;
    font-weight: 700;
  }

  .brands-footnote-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #0A0A0A;
    text-decoration: underline;
    text-decoration-color: #FFD400;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
    cursor: pointer;
    background: transparent;
    border: 0;
    transition: text-decoration-color 180ms ease;
    flex-shrink: 0;
  }

  .brands-footnote-cta:hover {
    text-decoration-color: #0A0A0A;
  }

  .brands-footnote-cta svg {
    width: 12px;
    height: 12px;
  }
  /* ============================================
     CART DRAWER — panel lateral derecho
     ============================================ */
  .cart-drawer-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(10, 10, 10, 0);
    z-index: 200;
    pointer-events: none;
    transition: background 280ms ease;
  }

  .cart-drawer-backdrop.is-active {
    background: rgba(10, 10, 10, 0.4);
    pointer-events: auto;
  }

  .cart-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(540px, 100vw);
    background: #FFFFFF;
    z-index: 201;
    transform: translateX(100%);
    transition: transform 320ms cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
    box-shadow:
      -2px 0 4px rgba(0, 0, 0, 0.04),
      -24px 0 48px -12px rgba(10, 10, 10, 0.18);
  }

  .cart-drawer.is-open {
    transform: translateX(0);
  }

  /* Header sticky */
  .cart-drawer-header {
    padding: 24px 28px 20px;
    border-bottom: 1px solid rgba(10, 10, 10, 0.08);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    flex-shrink: 0;
    background: #FFFFFF;
  }

  .cart-drawer-header-left {
    flex: 1;
    min-width: 0;
  }

  .cart-drawer-eyebrow {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: rgba(10, 10, 10, 0.5);
    font-weight: 600;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .cart-drawer-eyebrow .dot {
    width: 6px;
    height: 6px;
    background: #FFD400;
    border-radius: 50%;
  }

  .cart-drawer-title {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: 22px;
    color: #0A0A0A;
    line-height: 1.15;
    letter-spacing: -0.015em;
    margin-bottom: 6px;
  }

  .cart-drawer-meta {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: rgba(10, 10, 10, 0.55);
    letter-spacing: 0.04em;
  }

  .cart-drawer-meta strong {
    color: #0A0A0A;
    font-weight: 700;
  }

  .cart-drawer-close {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1.5px solid rgba(10, 10, 10, 0.15);
    color: #0A0A0A;
    cursor: pointer;
    transition: all 0.15s ease;
    flex-shrink: 0;
  }

  .cart-drawer-close:hover {
    border-color: #0A0A0A;
    background: #0A0A0A;
    color: #FFD400;
  }

  .cart-drawer-close svg { width: 14px; height: 14px; }

  /* Body scrolleable */
  .cart-drawer-body {
    flex: 1;
    overflow-y: auto;
    overscroll-behavior: contain;
    padding: 16px 28px 24px;
  }

  .cart-drawer-body::-webkit-scrollbar { width: 8px; }
  .cart-drawer-body::-webkit-scrollbar-track { background: #FAFAF6; }
  .cart-drawer-body::-webkit-scrollbar-thumb {
    background: rgba(10, 10, 10, 0.2);
    border-radius: 4px;
  }

  /* Estado vacío */
  .cart-drawer-empty {
    padding: 60px 24px 40px;
    text-align: center;
  }

  .cart-drawer-empty-icon {
    width: 56px;
    height: 56px;
    background: #FAFAF6;
    border: 1.5px solid rgba(10, 10, 10, 0.1);
    border-radius: 50%;
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(10, 10, 10, 0.4);
  }

  .cart-drawer-empty-icon svg {
    width: 24px;
    height: 24px;
  }

  .cart-drawer-empty-title {
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #0A0A0A;
    margin-bottom: 8px;
  }

  .cart-drawer-empty-msg {
    font-size: 13px;
    color: rgba(10, 10, 10, 0.6);
    line-height: 1.5;
    max-width: 320px;
    margin: 0 auto 20px;
  }

  .cart-drawer-empty-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    background: #0A0A0A;
    color: #FFD400;
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border: 0;
    cursor: pointer;
    transition: background 180ms ease;
  }

  .cart-drawer-empty-cta:hover { background: #1A1A1A; }
  .cart-drawer-empty-cta svg { width: 12px; height: 12px; }

  /* Grupo por categoría */
  .cart-cat-group {
    margin-bottom: 24px;
  }

  .cart-cat-group:last-child { margin-bottom: 0; }

  .cart-cat-label {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    padding-bottom: 8px;
    border-bottom: 1px dashed rgba(10, 10, 10, 0.12);
  }

  .cart-cat-label-icon {
    width: 24px;
    height: 24px;
    background: #0A0A0A;
    color: #FFD400;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .cart-cat-label-icon svg {
    width: 12px;
    height: 12px;
  }

  .cart-cat-label-name {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #0A0A0A;
    font-weight: 700;
    flex: 1;
  }

  .cart-cat-label-count {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    color: rgba(10, 10, 10, 0.5);
    letter-spacing: 0.04em;
  }

  /* Item del carrito */
  .cart-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 12px;
    background: #FAFAF6;
    border: 1px solid rgba(10, 10, 10, 0.06);
    margin-bottom: 6px;
    transition: all 180ms ease;
  }

  .cart-item:hover {
    background: #FFFFFF;
    border-color: rgba(10, 10, 10, 0.15);
  }

  .cart-item-info {
    flex: 1;
    min-width: 0;
  }

  .cart-item-family {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: rgba(10, 10, 10, 0.5);
    margin-bottom: 4px;
    font-weight: 600;
  }

  .cart-item-text {
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 13px;
    color: #0A0A0A;
    line-height: 1.35;
    margin-bottom: 8px;
    word-break: break-word;
  }

  .cart-item-controls {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  /* Qty stepper */
  .cart-qty {
    display: flex;
    align-items: center;
    gap: 0;
    border: 1px solid rgba(10, 10, 10, 0.15);
    background: #FFFFFF;
  }

  .cart-qty-btn {
    width: 26px;
    height: 26px;
    background: transparent;
    border: 0;
    color: #0A0A0A;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 14px;
    transition: background 0.15s ease;
  }

  .cart-qty-btn:hover {
    background: #FFD400;
  }

  .cart-qty-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .cart-qty-btn:disabled:hover { background: transparent; }

  .cart-qty-value {
    min-width: 36px;
    text-align: center;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 700;
    font-size: 12px;
    color: #0A0A0A;
    border-left: 1px solid rgba(10, 10, 10, 0.15);
    border-right: 1px solid rgba(10, 10, 10, 0.15);
    padding: 4px 0;
  }

  /* Input numérico editable */
  .cart-qty-input {
    appearance: textfield;
    -moz-appearance: textfield;
    border: 0;
    background: transparent;
    outline: none;
    cursor: text;
    width: 44px;
    height: 26px;
    padding: 0 2px;
  }

  .cart-qty-input::-webkit-outer-spin-button,
  .cart-qty-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .cart-qty-input:focus {
    background: rgba(255, 212, 0, 0.15);
  }

  /* Remove button */
  .cart-item-remove {
    background: transparent;
    border: 1px solid rgba(10, 10, 10, 0.15);
    color: rgba(10, 10, 10, 0.5);
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 6px 10px;
    cursor: pointer;
    transition: all 0.15s ease;
    margin-left: auto;
  }

  .cart-item-remove:hover {
    border-color: #0A0A0A;
    color: #0A0A0A;
    background: rgba(10, 10, 10, 0.04);
  }

  /* Custom (producto personalizado) tag */
  .cart-item-custom-tag {
    display: inline-block;
    padding: 2px 6px;
    background: #FFD400;
    color: #0A0A0A;
    font-family: 'JetBrains Mono', monospace;
    font-size: 8px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-left: 6px;
    vertical-align: middle;
  }

  /* Footer sticky con recurrencia y CTA */
  .cart-drawer-footer {
    flex-shrink: 0;
    padding: 20px 28px 24px;
    border-top: 1px solid rgba(10, 10, 10, 0.08);
    background: #FFFFFF;
  }

  /* Bloque de recurrencia */
  .cart-recurrence {
    margin-bottom: 16px;
    padding: 14px 16px;
    background: #FAFAF6;
    border: 1px solid rgba(10, 10, 10, 0.08);
  }

  .cart-recurrence-toggle {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    user-select: none;
  }

  .cart-recurrence-checkbox {
    width: 18px;
    height: 18px;
    border: 1.5px solid rgba(10, 10, 10, 0.25);
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.15s ease;
  }

  .cart-recurrence-checkbox svg {
    width: 12px;
    height: 12px;
    color: #0A0A0A;
    opacity: 0;
    transition: opacity 0.15s ease;
  }

  .cart-recurrence-toggle[data-active="true"] .cart-recurrence-checkbox {
    background: #FFD400;
    border-color: #0A0A0A;
  }

  .cart-recurrence-toggle[data-active="true"] .cart-recurrence-checkbox svg {
    opacity: 1;
  }

  .cart-recurrence-label {
    flex: 1;
  }

  .cart-recurrence-title {
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 13px;
    color: #0A0A0A;
    margin-bottom: 2px;
  }

  .cart-recurrence-desc {
    font-size: 11px;
    color: rgba(10, 10, 10, 0.55);
    line-height: 1.4;
  }

  /* Selector de frecuencia */
  .cart-recurrence-options {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px dashed rgba(10, 10, 10, 0.12);
    display: none;
    gap: 6px;
    flex-wrap: wrap;
  }

  .cart-recurrence-toggle[data-active="true"] ~ .cart-recurrence-options {
    display: flex;
  }

  .cart-freq-chip {
    padding: 6px 12px;
    background: #FFFFFF;
    border: 1px solid rgba(10, 10, 10, 0.15);
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 11px;
    color: #0A0A0A;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .cart-freq-chip:hover {
    border-color: #0A0A0A;
  }

  .cart-freq-chip.is-active {
    background: #0A0A0A;
    color: #FFD400;
    border-color: #0A0A0A;
  }

  /* CTAs del footer */
  .cart-drawer-actions {
    display: flex;
    gap: 8px;
  }

  .cart-drawer-submit {
    flex: 1;
    padding: 14px 20px;
    background: #FFD400;
    color: #0A0A0A;
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border: 0;
    cursor: pointer;
    transition: all 180ms ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .cart-drawer-submit:hover {
    background: #FFE040;
    transform: translateY(-1px);
    box-shadow: 0 8px 20px -8px rgba(255, 212, 0, 0.6);
  }

  .cart-drawer-submit svg {
    width: 14px;
    height: 14px;
  }

  .cart-drawer-clear {
    padding: 14px 18px;
    background: transparent;
    color: rgba(10, 10, 10, 0.6);
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: 1.5px solid rgba(10, 10, 10, 0.15);
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .cart-drawer-clear:hover {
    color: #0A0A0A;
    border-color: #0A0A0A;
  }

  /* Nota legal del footer */
  .cart-drawer-note {
    margin-top: 12px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    color: rgba(10, 10, 10, 0.5);
    line-height: 1.5;
    letter-spacing: 0.02em;
    text-align: center;
  }
  /* ============================================
     MODAL DE FORMULARIO DE ENVÍO
     ============================================ */
  .submit-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(10, 10, 10, 0);
    z-index: 300;
    pointer-events: none;
    transition: background 280ms ease;
  }

  .submit-modal-backdrop.is-active {
    background: rgba(10, 10, 10, 0.55);
    pointer-events: auto;
  }

  .submit-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.96);
    width: min(680px, calc(100vw - 32px));
    max-height: calc(100vh - 64px);
    background: #FFFFFF;
    z-index: 301;
    opacity: 0;
    pointer-events: none;
    transition: opacity 280ms ease, transform 280ms cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
    box-shadow:
      0 1px 2px rgba(0, 0, 0, 0.04),
      0 24px 48px -12px rgba(10, 10, 10, 0.4);
  }

  .submit-modal.is-open {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    pointer-events: auto;
  }

  /* Header */
  .submit-modal-header {
    padding: 24px 32px 20px;
    border-bottom: 1px solid rgba(10, 10, 10, 0.08);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    flex-shrink: 0;
  }

  .submit-modal-header-left { flex: 1; }

  .submit-modal-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: rgba(10, 10, 10, 0.5);
    font-weight: 600;
    margin-bottom: 8px;
  }

  .submit-modal-eyebrow .dot {
    width: 6px;
    height: 6px;
    background: #FFD400;
    border-radius: 50%;
  }

  .submit-modal-title {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: 22px;
    color: #0A0A0A;
    line-height: 1.15;
    letter-spacing: -0.015em;
    margin-bottom: 6px;
  }

  .submit-modal-subtitle {
    font-size: 13px;
    color: rgba(10, 10, 10, 0.6);
    line-height: 1.5;
  }

  .submit-modal-close {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1.5px solid rgba(10, 10, 10, 0.15);
    color: #0A0A0A;
    cursor: pointer;
    transition: all 0.15s ease;
    flex-shrink: 0;
  }

  .submit-modal-close:hover {
    border-color: #0A0A0A;
    background: #0A0A0A;
    color: #FFD400;
  }

  .submit-modal-close svg { width: 14px; height: 14px; }

  /* Body */
  .submit-modal-body {
    flex: 1;
    overflow-y: auto;
    overscroll-behavior: contain;
    padding: 24px 32px 12px;
  }

  .submit-modal-body::-webkit-scrollbar { width: 8px; }
  .submit-modal-body::-webkit-scrollbar-track { background: #FAFAF6; }
  .submit-modal-body::-webkit-scrollbar-thumb {
    background: rgba(10, 10, 10, 0.2);
    border-radius: 4px;
  }

  /* Form */
  .submit-form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin-bottom: 14px;
  }

  .submit-form-grid.cols-1 {
    grid-template-columns: 1fr;
  }

  @media (max-width: 640px) {
    .submit-form-grid {
      grid-template-columns: 1fr;
    }
  }

  .submit-field {
    display: flex;
    flex-direction: column;
  }

  .submit-field-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(10, 10, 10, 0.6);
    font-weight: 600;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .submit-field-required {
    color: #C9A227;
    font-weight: 700;
  }

  .submit-field-input,
  .submit-field-select,
  .submit-field-textarea {
    width: 100%;
    padding: 11px 14px;
    border: 1.5px solid rgba(10, 10, 10, 0.15);
    background: #FFFFFF;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #0A0A0A;
    transition: border-color 0.15s ease, background 0.15s ease;
    outline: none;
    border-radius: 0;
  }

  .submit-field-input:focus,
  .submit-field-select:focus,
  .submit-field-textarea:focus {
    border-color: #0A0A0A;
    background: #FFFEF7;
  }

  .submit-field-input::placeholder,
  .submit-field-textarea::placeholder {
    color: rgba(10, 10, 10, 0.35);
  }

  .submit-field-textarea {
    resize: vertical;
    min-height: 80px;
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
  }

  .submit-field-select {
    appearance: none;
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%230A0A0A' d='M6 8L0 0h12z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    padding-right: 36px;
    cursor: pointer;
  }

  .submit-field.has-error .submit-field-input,
  .submit-field.has-error .submit-field-select {
    border-color: #DC2626;
    background: #FEF2F2;
  }

  .submit-field-error {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    color: #DC2626;
    margin-top: 4px;
    letter-spacing: 0.04em;
    display: none;
  }

  .submit-field.has-error .submit-field-error {
    display: block;
  }

  /* Aviso multi-país */
  .submit-country-notice {
    display: none;
    grid-column: 1 / -1;
    margin-top: 4px;
    padding: 12px 14px;
    background: #FFFEF7;
    border-left: 3px solid #FFD400;
    font-size: 12px;
    line-height: 1.55;
    color: rgba(10, 10, 10, 0.75);
  }

  .submit-country-notice.is-visible {
    display: block;
  }

  .submit-country-notice strong {
    color: #0A0A0A;
    font-weight: 700;
  }

  /* Resumen de la solicitud */
  .submit-summary {
    margin-top: 20px;
    padding: 16px 18px;
    background: #FAFAF6;
    border: 1px solid rgba(10, 10, 10, 0.1);
  }

  .submit-summary-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: rgba(10, 10, 10, 0.5);
    font-weight: 600;
    margin-bottom: 8px;
  }

  .submit-summary-stats {
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: #0A0A0A;
    margin-bottom: 6px;
  }

  .submit-summary-stats strong {
    color: #0A0A0A;
  }

  .submit-summary-recurrence {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: #C9A227;
    font-weight: 700;
    letter-spacing: 0.04em;
  }

  .submit-summary-recurrence-icon {
    width: 12px;
    height: 12px;
  }

  /* Upsell: plataforma in-house */
  .submit-upsell {
    margin-top: 20px;
    padding: 18px 20px;
    background: linear-gradient(135deg, #FFFEF7 0%, #FFF8D6 100%);
    border-left: 4px solid #FFD400;
    position: relative;
  }

  .submit-upsell-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #0A0A0A;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .submit-upsell-eyebrow svg {
    width: 14px;
    height: 14px;
    color: #C9A227;
  }

  .submit-upsell-title {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: 16px;
    color: #0A0A0A;
    line-height: 1.25;
    letter-spacing: -0.01em;
    margin-bottom: 6px;
  }

  .submit-upsell-desc {
    font-size: 12px;
    color: rgba(10, 10, 10, 0.65);
    line-height: 1.5;
    margin-bottom: 14px;
  }

  .submit-upsell-options {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .submit-upsell-radio {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    background: #FFFFFF;
    border: 1.5px solid rgba(10, 10, 10, 0.15);
    cursor: pointer;
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 12px;
    color: #0A0A0A;
    transition: all 0.15s ease;
    user-select: none;
  }

  .submit-upsell-radio:hover {
    border-color: #0A0A0A;
  }

  .submit-upsell-radio[data-selected="true"] {
    background: #0A0A0A;
    color: #FFD400;
    border-color: #0A0A0A;
  }

  .submit-upsell-radio-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1.5px solid currentColor;
    flex-shrink: 0;
    position: relative;
  }

  .submit-upsell-radio[data-selected="true"] .submit-upsell-radio-dot::after {
    content: '';
    position: absolute;
    inset: 2px;
    background: currentColor;
    border-radius: 50%;
  }

  /* Footer del modal */
  .submit-modal-footer {
    padding: 16px 32px 20px;
    border-top: 1px solid rgba(10, 10, 10, 0.08);
    background: #FFFFFF;
    flex-shrink: 0;
  }

  .submit-modal-disclaimer {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    color: rgba(10, 10, 10, 0.55);
    line-height: 1.55;
    margin-bottom: 14px;
    letter-spacing: 0.02em;
  }

  .submit-modal-disclaimer a {
    color: #0A0A0A;
    text-decoration: underline;
    text-decoration-color: #FFD400;
    text-underline-offset: 2px;
  }

  .submit-modal-actions {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }

  .submit-modal-back {
    padding: 12px 20px;
    background: transparent;
    color: rgba(10, 10, 10, 0.7);
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border: 1.5px solid rgba(10, 10, 10, 0.15);
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .submit-modal-back:hover {
    color: #0A0A0A;
    border-color: #0A0A0A;
  }

  .submit-modal-confirm {
    padding: 12px 22px;
    background: #FFD400;
    color: #0A0A0A;
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border: 0;
    cursor: pointer;
    transition: all 0.15s ease;
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }

  .submit-modal-confirm:hover {
    background: #FFE040;
    transform: translateY(-1px);
    box-shadow: 0 8px 20px -8px rgba(255, 212, 0, 0.6);
  }

  .submit-modal-confirm:disabled {
    background: rgba(10, 10, 10, 0.1);
    color: rgba(10, 10, 10, 0.4);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .submit-modal-confirm svg { width: 14px; height: 14px; }

  /* Loading state */
  .submit-modal-confirm.is-loading {
    pointer-events: none;
  }

  .submit-modal-confirm.is-loading .confirm-spinner {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 2px solid rgba(10, 10, 10, 0.2);
    border-top-color: #0A0A0A;
    border-radius: 50%;
    animation: confirm-spin 0.7s linear infinite;
  }

  @keyframes confirm-spin {
    to { transform: rotate(360deg); }
  }

  /* ============================================
     MODAL DE CONFIRMACIÓN (éxito)
     ============================================ */
  .success-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(10, 10, 10, 0);
    z-index: 310;
    pointer-events: none;
    transition: background 320ms ease;
  }

  .success-modal-backdrop.is-active {
    background: rgba(10, 10, 10, 0.6);
    pointer-events: auto;
  }

  .success-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.92);
    width: min(560px, calc(100vw - 32px));
    max-height: calc(100vh - 64px);
    background: #FFFFFF;
    z-index: 311;
    opacity: 0;
    pointer-events: none;
    transition: opacity 320ms ease, transform 380ms cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
    box-shadow:
      0 1px 2px rgba(0, 0, 0, 0.04),
      0 24px 48px -12px rgba(10, 10, 10, 0.4);
    overflow: hidden;
  }

  .success-modal.is-open {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    pointer-events: auto;
  }

  .success-modal-close {
    position: absolute;
    top: 18px;
    right: 18px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1.5px solid rgba(10, 10, 10, 0.15);
    color: #0A0A0A;
    cursor: pointer;
    transition: all 0.15s ease;
    z-index: 2;
  }

  .success-modal-close:hover {
    border-color: #0A0A0A;
    background: #0A0A0A;
    color: #FFD400;
  }

  .success-modal-close svg { width: 12px; height: 12px; }

  /* Hero del modal éxito */
  .success-hero {
    padding: 40px 32px 28px;
    text-align: center;
    background: linear-gradient(180deg, #FFFEF7 0%, #FFFFFF 100%);
    overflow: hidden;
    position: relative;
  }

  /* Decoración de fondo */
  .success-hero::before,
  .success-hero::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    border: 1.5px dashed rgba(255, 212, 0, 0.25);
    pointer-events: none;
  }

  .success-hero::before {
    width: 280px;
    height: 280px;
    top: -180px;
    left: -80px;
  }

  .success-hero::after {
    width: 220px;
    height: 220px;
    bottom: -160px;
    right: -60px;
  }

  /* Icono check grande */
  .success-icon-wrap {
    width: 72px;
    height: 72px;
    background: #FFD400;
    border-radius: 50%;
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0A0A0A;
    position: relative;
    z-index: 1;
    animation: success-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes success-pop {
    0% { transform: scale(0); opacity: 0; }
    60% { transform: scale(1.15); }
    100% { transform: scale(1); opacity: 1; }
  }

  .success-icon-wrap svg {
    width: 32px;
    height: 32px;
    stroke-width: 3;
    animation: success-check 0.4s ease 0.3s both;
  }

  @keyframes success-check {
    from { opacity: 0; transform: scale(0.5); }
    to { opacity: 1; transform: scale(1); }
  }

  .success-title {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: 28px;
    color: #0A0A0A;
    line-height: 1.1;
    letter-spacing: -0.025em;
    margin-bottom: 8px;
    position: relative;
    z-index: 1;
  }

  .success-folio {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: #0A0A0A;
    color: #FFD400;
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.06em;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
  }

  .success-folio-label {
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: rgba(255, 212, 0, 0.6);
    font-weight: 600;
  }

  .success-message {
    font-size: 14px;
    color: rgba(10, 10, 10, 0.7);
    line-height: 1.55;
    max-width: 420px;
    margin: 0 auto 4px;
    position: relative;
    z-index: 1;
  }

  .success-message strong {
    color: #0A0A0A;
    font-weight: 700;
  }

  /* Resumen */
  .success-summary {
    margin: 20px 32px;
    padding: 14px 18px;
    background: #FAFAF6;
    border: 1px solid rgba(10, 10, 10, 0.1);
    text-align: left;
  }

  .success-summary-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: rgba(10, 10, 10, 0.5);
    font-weight: 600;
    margin-bottom: 6px;
  }

  .success-summary-stats {
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 13px;
    color: #0A0A0A;
  }

  .success-summary-extra {
    font-size: 11px;
    color: rgba(10, 10, 10, 0.6);
    margin-top: 4px;
    line-height: 1.4;
  }

  /* Próximos pasos */
  .success-steps {
    padding: 20px 32px 8px;
  }

  .success-steps-title {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: rgba(10, 10, 10, 0.5);
    font-weight: 600;
    margin-bottom: 12px;
  }

  .success-step {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px dashed rgba(10, 10, 10, 0.08);
  }

  .success-step:last-of-type {
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .success-step.is-bonus {
    background: #FFFEF7;
    padding: 12px 14px;
    margin-left: -14px;
    margin-right: -14px;
    border-left: 3px solid #FFD400;
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: 12px;
  }

  .success-step-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 700;
    color: #0A0A0A;
    background: #FFD400;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border-radius: 50%;
  }

  .success-step.is-bonus .success-step-num {
    background: #0A0A0A;
    color: #FFD400;
  }

  .success-step-content {
    flex: 1;
    padding-top: 1px;
  }

  .success-step-title {
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 13px;
    color: #0A0A0A;
    line-height: 1.25;
    margin-bottom: 2px;
  }

  .success-step-desc {
    font-size: 11px;
    color: rgba(10, 10, 10, 0.55);
    line-height: 1.5;
  }

  /* Footer del modal éxito */
  .success-modal-footer {
    padding: 18px 32px 22px;
    border-top: 1px solid rgba(10, 10, 10, 0.08);
    background: #FFFFFF;
  }

  .success-modal-cta {
    width: 100%;
    padding: 14px 22px;
    background: #0A0A0A;
    color: #FFD400;
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border: 0;
    cursor: pointer;
    transition: all 0.15s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .success-modal-cta:hover {
    background: #1A1A1A;
  }

  .success-modal-cta svg { width: 14px; height: 14px; }
  /* ============================================
     FOOTER PRINCIPAL
     ============================================ */
  .footer {
    background: #0A0A0A;
    color: #FFFFFF;
    padding: 80px 0 0;
    position: relative;
    overflow: hidden;
  }

  /* Línea decorativa amarilla arriba */
  .footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #FFD400 0%, #FFD400 40%, #C9A227 40%, #C9A227 100%);
  }

  /* Decoración: círculo punteado */
  .footer::after {
    content: '';
    position: absolute;
    top: 40px;
    right: -200px;
    width: 480px;
    height: 480px;
    border-radius: 50%;
    border: 1.5px dashed rgba(255, 212, 0, 0.08);
    pointer-events: none;
  }

  /* ============================================
     SECCIÓN HERO DEL FOOTER
     ============================================ */
  .footer-hero {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 64px;
    align-items: flex-start;
    margin-bottom: 64px;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 1023px) {
    .footer-hero {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
  }

  .footer-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
  }

  .footer-logo-square {
    width: 32px;
    height: 32px;
    background: #FFD400;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transform: rotate(45deg);
  }

  .footer-logo-inner {
    width: 14px;
    height: 14px;
    background: #0A0A0A;
    transform: rotate(-45deg);
  }

  .footer-logo-text {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: 22px;
    color: #FFFFFF;
    letter-spacing: -0.025em;
  }

  .footer-tagline {
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: clamp(20px, 2.4vw, 28px);
    line-height: 1.15;
    color: #FFFFFF;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
    max-width: 540px;
  }

  .footer-tagline-highlight {
    color: #FFD400;
  }

  .footer-desc {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.55;
    max-width: 480px;
    margin-bottom: 28px;
  }

  /* Stat de cobertura destacado */
  .footer-coverage {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    padding: 16px 22px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 3px solid #FFD400;
  }

  .footer-coverage-num {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: 32px;
    color: #FFD400;
    line-height: 1;
    letter-spacing: -0.03em;
  }

  .footer-coverage-text {
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 13px;
    color: #FFFFFF;
    line-height: 1.3;
    letter-spacing: -0.005em;
  }

  .footer-coverage-text-sub {
    display: block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 2px;
    font-weight: 600;
  }

  /* CTA del hero del footer */
  .footer-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 22px;
    background: #FFD400;
    color: #0A0A0A;
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border: 0;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-top: 24px;
    align-self: flex-start;
  }

  .footer-cta:hover {
    background: #FFE040;
    transform: translateY(-2px);
    box-shadow: 0 12px 24px -8px rgba(255, 212, 0, 0.4);
  }

  .footer-cta svg {
    width: 14px;
    height: 14px;
  }

  /* ============================================
     GRID DE COLUMNAS
     ============================================ */
  .footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    padding-bottom: 56px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    z-index: 1;
  }

  @media (max-width: 1023px) {
    .footer-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px 32px;
    }
  }

  @media (max-width: 540px) {
    .footer-grid {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }

  .footer-col-title {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #FFD400;
    font-weight: 700;
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .footer-col-title::before {
    content: '';
    width: 6px;
    height: 6px;
    background: #FFD400;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .footer-link {
    display: flex;
    align-items: center;
    gap: 6px;
    color: rgba(255, 255, 255, 0.7);
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 1.4;
    padding: 6px 0;
    text-decoration: none;
    transition: color 0.15s ease, gap 0.2s ease;
    cursor: pointer;
  }

  .footer-link:hover {
    color: #FFD400;
    gap: 10px;
  }

  .footer-link svg {
    width: 10px;
    height: 10px;
    opacity: 0;
    transition: opacity 0.15s ease;
    flex-shrink: 0;
  }

  .footer-link:hover svg {
    opacity: 1;
  }

  /* Contact info */
  .footer-contact-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 8px 0;
    color: rgba(255, 255, 255, 0.7);
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    line-height: 1.5;
  }

  .footer-contact-icon {
    width: 14px;
    height: 14px;
    color: #FFD400;
    flex-shrink: 0;
    margin-top: 3px;
  }

  .footer-contact-text {
    flex: 1;
  }

  .footer-contact-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.45);
    font-weight: 600;
    display: block;
    margin-bottom: 2px;
  }

  .footer-contact-value {
    color: #FFFFFF;
    font-weight: 500;
    transition: color 0.15s ease;
    cursor: pointer;
    display: block;
    text-decoration: none;
  }

  .footer-contact-value:hover {
    color: #FFD400;
  }

  /* Social */
  .footer-social {
    display: flex;
    gap: 8px;
    margin-top: 16px;
  }

  .footer-social-btn {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #FFFFFF;
    transition: all 0.2s ease;
    text-decoration: none;
  }

  .footer-social-btn:hover {
    background: #FFD400;
    border-color: #FFD400;
    color: #0A0A0A;
    transform: translateY(-2px);
  }

  .footer-social-btn svg {
    width: 16px;
    height: 16px;
  }

  /* ============================================
     BARRA INFERIOR (LEGAL)
     ============================================ */
  .footer-bottom {
    padding: 32px 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
  }

  .footer-legal {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.5);
    line-height: 1.6;
    letter-spacing: 0.02em;
  }

  .footer-legal strong {
    color: rgba(255, 255, 255, 0.85);
    font-weight: 700;
  }

  .footer-legal-links {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-wrap: wrap;
  }

  .footer-legal-link {
    color: rgba(255, 255, 255, 0.6);
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    text-decoration: none;
    padding: 6px 10px;
    transition: color 0.15s ease, background 0.15s ease;
    cursor: pointer;
  }

  .footer-legal-link:hover {
    color: #FFD400;
    background: rgba(255, 255, 255, 0.04);
  }

  .footer-legal-sep {
    color: rgba(255, 255, 255, 0.2);
    font-size: 11px;
  }

  /* ============================================
     BANDA SUPERIOR DECORATIVA
     "Operamos en Latinoamérica"
     ============================================ */
  .footer-ticker {
    background: #FFD400;
    color: #0A0A0A;
    padding: 14px 0;
    overflow: hidden;
    position: relative;
  }

  .footer-ticker-track {
    display: flex;
    gap: 32px;
    animation: footer-ticker-scroll 40s linear infinite;
    white-space: nowrap;
    flex-shrink: 0;
    padding-right: 32px;
  }

  @keyframes footer-ticker-scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  .footer-ticker-item {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #0A0A0A;
    flex-shrink: 0;
  }

  .footer-ticker-item .sep {
    width: 4px;
    height: 4px;
    background: #0A0A0A;
    border-radius: 50%;
  }
  </style>
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://brainstore.com.mx/suministros-corporativos#service",
    "serviceType": "Suministros corporativos B2B",
    "provider": {"@id": "https://brainstore.com.mx/#organization"},
    "name": "Suministros corporativos e industriales",
    "description": "Catálogo abierto de más de 150,000 productos en 9 categorías corporativas e industriales con +250 marcas en distribución autorizada. Cotización formal en 24 horas con facturación local CFDI México y según normativa fiscal de cada país.",
    "areaServed": [
      "México", "Colombia", "Guatemala", "Ecuador",
      "Costa Rica", "Chile", "Panamá", "Perú",
      "República Dominicana", "Argentina"
    ],
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Empresas corporativas, departamentos de compras, procurement, recursos humanos, marketing, dirección general"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "9 categorías de suministros",
      "itemListElement": [
        {"@type": "OfferCatalog", "name": "Tecnología y cómputo"},
        {"@type": "OfferCatalog", "name": "Mobiliario de oficina"},
        {"@type": "OfferCatalog", "name": "Papelería"},
        {"@type": "OfferCatalog", "name": "Impresión"},
        {"@type": "OfferCatalog", "name": "Almacenamiento industrial"},
        {"@type": "OfferCatalog", "name": "Empaques y embalaje"},
        {"@type": "OfferCatalog", "name": "Herramientas y EPP"},
        {"@type": "OfferCatalog", "name": "Uniformes y calzado"},
        {"@type": "OfferCatalog", "name": "Maquinaria y manejo de carga"}
      ]
    }
  }
  </script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX', {
      'page_title': 'Suministros corporativos B2B',
      'page_path': '/suministros-corporativos',
      'send_page_view': true
    });
    // Eventos personalizados para tracking de conversión
    window.brainstoreTrack = function(eventName, params) {
      if (typeof gtag === 'function') {
        gtag('event', eventName, params || {});
      }
    };
  </script>
<script>
    (function(w,d,t,r,u){
      var f,n,i;w[u]=w[u]||[],f=function(){
        var o={ti:"REPLACE_WITH_BING_UET_TAG_ID"};
        o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
      },n=d.createElement(t),n.src=r,n.async=1,
      n.onload=n.onreadystatechange=function(){
        var s=this.readyState;
        s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
      },i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
    })(window,document,"script","//bat.bing.com/bat.js","uetq");
  </script>
<script>
    !function(f,b,e,v,n,t,s){
      if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)
    }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
    // fbq('init', 'REPLACE_WITH_PIXEL_ID');
    // fbq('track', 'PageView');
  </script>
<script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            ink: '#0A0A0A',
            yellow: { DEFAULT: '#FFD400', dark: '#C9A227' },
            gold: '#C9A227',
            paper: '#FAFAF6',
          },
          fontFamily: {
            display: ['Manrope', 'sans-serif'],
            'display-bold': ['Manrope', 'sans-serif'],
            sans: ['Inter', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
            mega: ['Manrope', 'sans-serif'],
          },
          fontSize: {
            'hero-int': ['clamp(2.25rem, 5vw + 1rem, 4.25rem)', { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '800' }],
            'section': ['clamp(1.75rem, 3vw + 0.5rem, 3rem)', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '800' }],
          },
        }
      }
    }
  </script>

<!-- JSON-LD -->
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://brainstore.com.mx/#organization",
    "name": "Brainstore",
    "alternateName": ["Brainstore Latinoamérica", "Brainstore México", "BSM"],
    "legalName": "BSM Cía. Internacional Multiservicios SA",
    "url": "https://brainstore.com.mx",
    "logo": "https://brainstore.com.mx/logo.png",
    "description": "Proveedor B2B multinacional con cobertura en 10 países de Latinoamérica. Catálogo abierto de más de 150,000 suministros corporativos e industriales en 9 categorías.",
    "foundingDate": "2014",
    "email": "team-bsm@brainstore.com.mx",
    "telephone": "+52-55-6506-7332",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Miguel de Cervantes Saavedra 169",
      "addressLocality": "Granada",
      "addressRegion": "Ciudad de México",
      "postalCode": "11520",
      "addressCountry": "MX"
    },
    "areaServed": [
      {"@type": "Country", "name": "México"},
      {"@type": "Country", "name": "Colombia"},
      {"@type": "Country", "name": "Guatemala"},
      {"@type": "Country", "name": "Ecuador"},
      {"@type": "Country", "name": "Costa Rica"},
      {"@type": "Country", "name": "Chile"},
      {"@type": "Country", "name": "Panamá"},
      {"@type": "Country", "name": "Perú"},
      {"@type": "Country", "name": "República Dominicana"},
      {"@type": "Country", "name": "Argentina"}
    ]
  }
  </script>
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://brainstore.com.mx/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Suministros corporativos",
        "item": "https://brainstore.com.mx/suministros-corporativos"
      }
    ]
  }
  </script>
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Categorías de suministros corporativos",
    "numberOfItems": 9,
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Tecnología y cómputo", "url": "https://brainstore.com.mx/suministros-corporativos#tecnologia"},
      {"@type": "ListItem", "position": 2, "name": "Mobiliario corporativo", "url": "https://brainstore.com.mx/suministros-corporativos#mobiliario"},
      {"@type": "ListItem", "position": 3, "name": "Papelería", "url": "https://brainstore.com.mx/suministros-corporativos#papeleria"},
      {"@type": "ListItem", "position": 4, "name": "Impresión", "url": "https://brainstore.com.mx/suministros-corporativos#impresion"},
      {"@type": "ListItem", "position": 5, "name": "Almacenamiento", "url": "https://brainstore.com.mx/suministros-corporativos#almacenamiento"},
      {"@type": "ListItem", "position": 6, "name": "Empaques y embalaje", "url": "https://brainstore.com.mx/suministros-corporativos#empaques"},
      {"@type": "ListItem", "position": 7, "name": "Herramientas y EPP", "url": "https://brainstore.com.mx/suministros-corporativos#herramientas"},
      {"@type": "ListItem", "position": 8, "name": "Uniformes y calzado", "url": "https://brainstore.com.mx/suministros-corporativos#uniformes"},
      {"@type": "ListItem", "position": 9, "name": "Maquinaria y manejo de carga", "url": "https://brainstore.com.mx/suministros-corporativos#maquinaria"}
    ]
  }
  </script>
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuántos productos abarca el catálogo de suministros corporativos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Más de 150,000 productos en 9 categorías corporativas e industriales: tecnología y cómputo, mobiliario, papelería, impresión, almacenamiento, empaques, herramientas y EPP, uniformes, maquinaria y manejo de carga."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué pasa si un producto no aparece en el catálogo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Se gestiona la cotización directamente con proveedores de la red en distribución autorizada. Catálogo abierto sin restricción de marca o categoría."
        }
      },
      {
        "@type": "Question",
        "name": "¿En cuánto tiempo se responde una solicitud de cotización?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Respuesta formal en 24 horas hábiles con propuesta en PDF, incluyendo precios negociados, tiempos de entrega y condiciones de pago."
        }
      },
      {
        "@type": "Question",
        "name": "¿Se pueden programar pedidos recurrentes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. La solicitud admite programación de recurrencia mensual, bimestral o trimestral, con entrega automática previa aprobación del cliente."
        }
      },
      {
        "@type": "Question",
        "name": "¿Se factura en CFDI México y en otros países de Latinoamérica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Facturación local CFDI 4.0 en México y facturación local en Colombia, Guatemala, Ecuador, Costa Rica, Chile, Panamá, Perú, República Dominicana y Argentina."
        }
      },
      {
        "@type": "Question",
        "name": "¿Existe una plataforma para administrar catálogos personalizados por empresa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. La Plataforma de Catálogos Digitales Corporativos permite crear catálogos white-label por cliente con productos y precios negociados, multi-tenant y con acceso individualizado por departamento."
        }
      }
    ]
  }
  </script>
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://brainstore.com.mx/#website",
    "url": "https://brainstore.com.mx",
    "name": "Brainstore",
    "description": "Proveedor B2B multi-categoría en Latinoamérica. Suministros corporativos, servicios ejecutivos y plataformas digitales con IA.",
    "publisher": {"@id": "https://brainstore.com.mx/#organization"},
    "inLanguage": ["es-MX", "es", "en-US"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://brainstore.com.mx/buscar?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }
  </script>
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://brainstore.com.mx/suministros-corporativos#service",
    "serviceType": "Suministros corporativos B2B",
    "provider": {"@id": "https://brainstore.com.mx/#organization"},
    "name": "Suministros corporativos e industriales",
    "description": "Catálogo abierto de más de 150,000 productos en 9 categorías corporativas e industriales con +250 marcas en distribución autorizada. Cotización formal en 24 horas con facturación local CFDI México y según normativa fiscal de cada país.",
    "areaServed": [
      "México", "Colombia", "Guatemala", "Ecuador",
      "Costa Rica", "Chile", "Panamá", "Perú",
      "República Dominicana", "Argentina"
    ],
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Empresas corporativas, departamentos de compras, procurement, recursos humanos, marketing, dirección general"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "9 categorías de suministros",
      "itemListElement": [
        {"@type": "OfferCatalog", "name": "Tecnología y cómputo"},
        {"@type": "OfferCatalog", "name": "Mobiliario de oficina"},
        {"@type": "OfferCatalog", "name": "Papelería"},
        {"@type": "OfferCatalog", "name": "Impresión"},
        {"@type": "OfferCatalog", "name": "Almacenamiento industrial"},
        {"@type": "OfferCatalog", "name": "Empaques y embalaje"},
        {"@type": "OfferCatalog", "name": "Herramientas y EPP"},
        {"@type": "OfferCatalog", "name": "Uniformes y calzado"},
        {"@type": "OfferCatalog", "name": "Maquinaria y manejo de carga"}
      ]
    }
  }
  </script>

<!-- BODY -->
<!-- ============================================
       SVG SYMBOLS — Iconos reutilizables
       ============================================ -->
  <svg xmlns="http://www.w3.org/2000/svg" style="display:none;">
    <defs>
      <symbol id="i-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14M13 5l7 7-7 7"/>
      </symbol>
      <symbol id="i-arrow-ur" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M7 17L17 7M7 7h10v10"/>
      </symbol>
      <symbol id="i-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>
      </symbol>
      <symbol id="i-cart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6L18 2zM3 6h18M16 10a4 4 0 0 1-8 0"/>
      </symbol>
      <symbol id="i-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 6h18M3 12h18M3 18h18"/>
      </symbol>
      <symbol id="i-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 6l12 12M18 6L6 18"/>
      </symbol>
      <symbol id="i-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 5v14M5 12h14"/>
      </symbol>
      <symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 6L9 17l-5-5"/>
      </symbol>
      <symbol id="i-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </symbol>
      <symbol id="i-repeat" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/>
      </symbol>
      <symbol id="i-trash" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
      </symbol>
      <symbol id="i-sparkle" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z"/>
      </symbol>
      <!-- Iconos por categoría -->
      <symbol id="i-tech" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="4" width="20" height="13" rx="1"/><path d="M2 20h20M9 20l1-3M15 20l-1-3"/>
      </symbol>
      <symbol id="i-furniture" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 4v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4M8 14v6M16 14v6M5 11h14"/>
      </symbol>
      <symbol id="i-paper" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>
      </symbol>
      <symbol id="i-printer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z"/>
      </symbol>
      <symbol id="i-storage" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="3" width="20" height="6" rx="1"/><rect x="2" y="11" width="20" height="6" rx="1"/><path d="M6 7v0M6 15v0M14 7h4M14 15h4"/>
      </symbol>
      <symbol id="i-package" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16.5 9.4L7.55 4.24M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </symbol>
      <symbol id="i-tools" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </symbol>
      <symbol id="i-uniform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
      </symbol>
      <symbol id="i-machine" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M5 17H3v-6l2-5h12l2 5v6h-2M9 17h6"/>
      </symbol>
      <symbol id="i-truck" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="1" y="7" width="13" height="10" rx="0.5"/><path d="M14 10h4l3 3v4h-7z"/><circle cx="6" cy="19" r="2"/><circle cx="17" cy="19" r="2"/>
      </symbol>
    </defs>
  </svg>

  <!-- ============================================
       HEADER STICKY
       ============================================ -->
  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-ink/10">
    <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
      <div class="flex items-center justify-between h-16 lg:h-20">

        <!-- Logo -->
        <a href="/" class="flex items-center gap-2.5 group">
          <img src="/brand/14-isotipo-gold.svg" alt="Brainstore" class="w-8 h-8 transition-transform group-hover:scale-110" />
          <span class="font-display-bold text-xl text-ink tracking-tight">brain<span style="color:#C9A227">·</span>store</span>
        </a>

        <!-- Nav desktop -->
        <nav class="hidden lg:flex items-center gap-8">
          <a href="/suministros-corporativos" class="text-sm font-semibold text-ink relative">
            Suministros corporativos
            <span class="absolute -bottom-2 left-0 right-0 h-0.5 bg-yellow"></span>
          </a>
          <a href="/servicios-ejecutivos" class="text-sm font-medium text-ink/70 hover:text-ink transition-colors">Servicios ejecutivos</a>
          <a href="/plataformas-digitales-ai" class="text-sm font-medium text-ink/70 hover:text-ink transition-colors">Plataformas digitales AI</a>
          <a href="/latam-direct" class="text-sm font-medium text-ink/70 hover:text-ink transition-colors">Latam Direct</a>
          <a href="/nosotros" class="text-sm font-medium text-ink/70 hover:text-ink transition-colors">Nosotros</a>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-3 lg:gap-4">
          <span class="hidden md:inline-flex items-center text-xs font-mono text-ink/60">
            <span class="live-dot"></span>
            <span class="ml-1">10 países · Latinoamérica</span>
          </span>

          <!-- Botón Solicitud con badge contador -->
          <button type="button" data-open-drawer class="group relative inline-flex items-center h-10 px-4 lg:px-5 bg-ink text-white text-sm font-semibold overflow-hidden cursor-pointer">
            <svg class="w-4 h-4 mr-2"><use href="#i-cart"/></svg>
            <span>Solicitud</span>
            <span class="cart-badge" id="cartBadge" style="display: none;">0</span>
          </button>

          <!-- Mobile menu button -->
          <button id="mobile-toggle" class="lg:hidden inline-flex items-center justify-center w-10 h-10 hover:bg-ink/5 transition-colors" aria-label="Abrir menú">
            <svg class="w-5 h-5"><use href="#i-menu"/></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-ink/10">
      <div class="px-4 py-6 space-y-1">
        <a href="/suministros-corporativos" class="block px-3 py-3 text-base font-semibold text-ink bg-yellow/10">Suministros corporativos</a>
        <a href="/servicios-ejecutivos" class="block px-3 py-3 text-base font-medium text-ink hover:bg-ink/5">Servicios ejecutivos</a>
        <a href="/plataformas-digitales-ai" class="block px-3 py-3 text-base font-medium text-ink hover:bg-ink/5">Plataformas digitales AI</a>
        <a href="/latam-direct" class="block px-3 py-3 text-base font-medium text-ink hover:bg-ink/5">Latam Direct</a>
        <a href="/nosotros" class="block px-3 py-3 text-base font-medium text-ink hover:bg-ink/5">Nosotros</a>
      </div>
    </div>
  </header>

  <main>

    <!-- ============================================
         HERO con BUSCADOR GRANDE
         ============================================ -->
    <section class="relative bg-white">

      <!-- Decoración: círculos grandes sutiles (contenedor con overflow-hidden interno) -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -bottom-32 -right-32 w-80 lg:w-[600px] h-80 lg:h-[600px] border-2 border-ink/[0.04] rounded-full"></div>
        <div class="absolute -top-20 -left-20 w-60 lg:w-[400px] h-60 lg:h-[400px] border-2 border-yellow/20 rounded-full"></div>
      </div>

      <div class="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 lg:pt-24 pb-12 lg:pb-16">

        <!-- Tag superior -->
        <div class="reveal mb-6 lg:mb-8">
          <span class="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-ink text-white">
            <span class="w-1.5 h-1.5 bg-yellow rounded-full animate-pulse"></span>
            <span class="font-mono text-[10px] sm:text-xs uppercase tracking-widest">/ Suministros corporativos</span>
          </span>
        </div>

        <!-- Grid 2 columnas: copy + buscador -->
        <div class="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-end mb-10 lg:mb-14">

          <!-- Columna izquierda: Headline -->
          <div>
            <h1 class="reveal font-mega text-hero-int text-ink mb-6 lg:mb-8">
              Proveedor único<br>
              multi-categoría en<br>
              <span class="yellow-highlight">Latinoamérica</span>.
            </h1>

            <p class="reveal text-base sm:text-lg lg:text-xl font-medium text-ink leading-relaxed max-w-2xl">
              Más de <span class="font-display-bold">150,000 productos</span> en
              <span class="font-display-bold">9 categorías</span> corporativas e industriales.<br>
              <span class="text-ink/60">Catálogo abierto con</span> <span class="font-display-bold">+250 marcas</span> <span class="text-ink/60">en distribución autorizada.</span>
            </p>
          </div>

          <!-- Columna derecha: stats compactos -->
          <div class="reveal grid grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 lg:pl-8 lg:border-l-2 lg:border-ink/10">
            <div>
              <div class="counter-num text-4xl sm:text-5xl lg:text-6xl text-ink leading-none" data-counter="150">0</div>
              <div class="font-mono text-[10px] uppercase tracking-widest text-ink/60 mt-2">mil productos</div>
              <div class="text-xs text-ink/40 mt-1">catálogo abierto</div>
            </div>
            <div>
              <div class="counter-num text-4xl sm:text-5xl lg:text-6xl text-ink leading-none" data-counter="250">0</div>
              <div class="font-mono text-[10px] uppercase tracking-widest text-ink/60 mt-2">marcas top</div>
              <div class="text-xs text-ink/40 mt-1">distribución autorizada</div>
            </div>
            <div>
              <div class="counter-num text-4xl sm:text-5xl lg:text-6xl text-ink leading-none" data-counter="9">0</div>
              <div class="font-mono text-[10px] uppercase tracking-widest text-ink/60 mt-2">categorías</div>
              <div class="text-xs text-ink/40 mt-1">cobertura total</div>
            </div>
            <div>
              <div class="counter-num text-4xl sm:text-5xl lg:text-6xl text-ink leading-none" data-counter="24">0</div>
              <div class="font-mono text-[10px] uppercase tracking-widest text-ink/60 mt-2">horas</div>
              <div class="text-xs text-ink/40 mt-1">cotización con PDF</div>
            </div>
          </div>
        </div>

        <!-- BUSCADOR GRANDE PROTAGONISTA -->
        <div class="reveal">
          <div class="hero-search-wrap">
            <label class="font-mono text-[10px] uppercase tracking-widest text-ink/60 mb-3 block">
              Construya solicitud de cotización
            </label>
            <div class="hero-search-box">
              <svg class="hero-search-icon"><use href="#i-search"/></svg>
              <input
                type="text"
                id="heroSearchInput"
                class="hero-search-input"
                placeholder="Escriba producto"
                autocomplete="off"
                aria-label="Buscar producto"
              />
              <button type="button" id="heroSearchBtn" class="hero-search-btn">
                <span>Buscar</span>
                <svg class="w-4 h-4"><use href="#i-arrow"/></svg>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>

  <!-- HTML del bloque 4 -->
<section id="categorias" class="cats-section">
  <div class="max-w-[1440px] mx-auto px-6 lg:px-12">

    <div class="cats-eyebrow reveal">
      <span class="dot"></span>
      <span>● / 9 CATEGORÍAS</span>
    </div>

    <h2 class="cats-title reveal">
      Catálogo abierto con
      <span class="cats-title-highlight">+250 marcas</span>
      en distribución autorizada.
    </h2>

    <p class="cats-subtitle reveal">
      Cada categoría incluye múltiples familias de productos y marcas líderes del mercado. Click en cualquier categoría para conocer las familias y marcas disponibles.
    </p>

    <div class="cats-grid" id="catsGrid">
      <!-- Las cards se generan por JS -->
    </div>

  </div>
</section>

<!-- HTML del bloque 5 -->
<section id="como-funciona" class="how-section">
  <div class="max-w-[1440px] mx-auto px-6 lg:px-12">

    <div class="how-eyebrow reveal">
      <span class="dot"></span>
      <span>● / CÓMO FUNCIONA</span>
    </div>

    <h2 class="how-title reveal">
      De solicitud a entrega en
      <span class="how-title-highlight">cuatro pasos.</span>
    </h2>

    <p class="how-subtitle reveal">
      Proceso ágil sin intermediarios. Cada solicitud recibe propuesta formal en 24 horas con marca, modelo, plazo de entrega y disponibilidad por país.
    </p>

    <div class="how-timeline">

      <!-- PASO 01 -->
      <div class="how-step reveal" style="transition-delay: 0ms;">
        <div class="how-step-num-wrap">
          <div class="how-step-num-badge">01</div>
          <div class="how-step-meta">
            <div class="how-step-label">Paso 01</div>
            <div class="how-step-time">Inmediato</div>
          </div>
        </div>
        <div class="how-step-content">
          <svg class="how-step-icon"><use href="#i-search"/></svg>
          <h3 class="how-step-title">Envíe la solicitud</h3>
          <p class="how-step-desc">
            Construya la lista desde el catálogo o agregue productos manualmente. Indique cantidades, especificaciones y país de entrega.
          </p>
        </div>
      </div>

      <!-- PASO 02 -->
      <div class="how-step reveal" style="transition-delay: 100ms;">
        <div class="how-step-num-wrap">
          <div class="how-step-num-badge">02</div>
          <div class="how-step-meta">
            <div class="how-step-label">Paso 02</div>
            <div class="how-step-time"><span class="how-step-time-accent">En 24 horas</span></div>
          </div>
        </div>
        <div class="how-step-content">
          <svg class="how-step-icon"><use href="#i-clock"/></svg>
          <h3 class="how-step-title">Reciba propuesta formal</h3>
          <p class="how-step-desc">
            Un especialista revisa el requerimiento y envía propuesta en PDF con <strong>marca, modelo, precio unitario, plazo de entrega y vigencia</strong>.
          </p>
        </div>
      </div>

      <!-- PASO 03 -->
      <div class="how-step reveal" style="transition-delay: 200ms;">
        <div class="how-step-num-wrap">
          <div class="how-step-num-badge">03</div>
          <div class="how-step-meta">
            <div class="how-step-label">Paso 03</div>
            <div class="how-step-time">Sin compromiso</div>
          </div>
        </div>
        <div class="how-step-content">
          <svg class="how-step-icon"><use href="#i-check"/></svg>
          <h3 class="how-step-title">Apruebe o ajuste</h3>
          <p class="how-step-desc">
            Compare la propuesta con su presupuesto. Solicite cambios, ajustes de cantidades o marcas alternativas sin compromiso de compra.
          </p>
        </div>
      </div>

      <!-- PASO 04 -->
      <div class="how-step reveal" style="transition-delay: 300ms;">
        <div class="how-step-num-wrap">
          <div class="how-step-num-badge">04</div>
          <div class="how-step-meta">
            <div class="how-step-label">Paso 04</div>
            <div class="how-step-time"><span class="how-step-time-accent">Entrega en plazo</span></div>
          </div>
        </div>
        <div class="how-step-content">
          <svg class="how-step-icon"><use href="#i-truck"/></svg>
          <h3 class="how-step-title">Reciba el pedido</h3>
          <p class="how-step-desc">
            Entrega con seguimiento documentado. Facturación local CFDI en México y según normativa fiscal del país de entrega en Latinoamérica.
          </p>
        </div>
      </div>

    </div>

    <!-- Fila de garantías -->
    <div class="how-footnote reveal" style="transition-delay: 400ms;">

      <div class="how-footnote-item">
        <div class="how-footnote-icon-wrap">
          <svg><use href="#i-check"/></svg>
        </div>
        <div class="how-footnote-content">
          <div class="how-footnote-title">Cumplimiento en licitación</div>
          <div class="how-footnote-desc">RFC, garantías, fianzas y padrones de proveedores requeridos.</div>
        </div>
      </div>

      <div class="how-footnote-item">
        <div class="how-footnote-icon-wrap">
          <svg><use href="#i-sparkle"/></svg>
        </div>
        <div class="how-footnote-content">
          <div class="how-footnote-title">Distribución autorizada</div>
          <div class="how-footnote-desc">Marcas líderes con garantía directa de fabricante.</div>
        </div>
      </div>

      <div class="how-footnote-item">
        <div class="how-footnote-icon-wrap">
          <svg><use href="#i-package"/></svg>
        </div>
        <div class="how-footnote-content">
          <div class="how-footnote-title">Cobertura regional</div>
          <div class="how-footnote-desc">10 países de Latinoamérica sin abrir oficinas locales.</div>
        </div>
      </div>

    </div>

  </div>
</section>

<!-- HTML del bloque 6 -->
<section id="plataforma" class="platform-section">
  <div class="max-w-[1440px] mx-auto px-6 lg:px-12">

    <!-- HERO 2 COLUMNAS -->
    <div class="platform-hero">

      <!-- Columna izquierda: texto -->
      <div class="reveal">
        <div class="platform-eyebrow">
          <span class="dot"></span>
          <span>● / EFICIENCIA OPERATIVA</span>
        </div>

        <h2 class="platform-title">
          Catálogo digital
          <span class="platform-title-highlight">propio</span>
          para su empresa.
        </h2>

        <p class="platform-desc">
          Para clientes con compras recurrentes: <strong>catálogo white-label con precios negociados</strong>, control de presupuesto y trazabilidad de quién pide qué.
        </p>

        <p class="platform-desc-secondary">
          Cada empresa accede a su propio panel multi-usuario con productos y precios fijos según el contrato anual. Las solicitudes llegan por correo a un especialista que las procesa y gestiona entrega con facturación local.
        </p>

        <button type="button" class="platform-cta">
          <span>Conocer la plataforma</span>
          <svg><use href="#i-arrow"/></svg>
        </button>
      </div>

      <!-- Columna derecha: mockup -->
      <div class="platform-mockup-wrap reveal" style="transition-delay: 150ms;">
        <div class="mockup-tag">Ejemplo</div>
        <div class="platform-mockup">

          <!-- Browser bar -->
          <div class="mockup-browser-bar">
            <div class="mockup-browser-dots">
              <div class="mockup-browser-dot"></div>
              <div class="mockup-browser-dot"></div>
              <div class="mockup-browser-dot"></div>
            </div>
            <div class="mockup-browser-url">
              <span class="url-lock">🔒</span><span class="url-domain">catalog.brainstore.com.mx</span>/su-empresa
            </div>
          </div>

          <!-- Header -->
          <div class="mockup-header">
            <div class="mockup-header-brand">
              <div class="mockup-logo-square">S</div>
              <div>
                <div class="mockup-brand-name">Su empresa, S.A.</div>
                <div class="mockup-brand-sub">Contrato 2026 · 47 productos</div>
              </div>
            </div>
            <div class="mockup-user-pill">
              <div class="mockup-user-avatar">M</div>
              <span class="mockup-user-name">María · Compras</span>
            </div>
          </div>

          <!-- Buscador -->
          <div class="mockup-search">
            <svg class="mockup-search-icon"><use href="#i-search"/></svg>
            <div class="mockup-search-text">
              <span id="mockupTypeText">silla erg</span><span class="mockup-cursor"></span>
            </div>
          </div>

          <!-- Categorías -->
          <div class="mockup-section-label">CATEGORÍAS DEL CONTRATO</div>
          <div class="mockup-cats">
            <div class="mockup-cat-chip is-active" id="mockChip0">Mobiliario<span class="mockup-cat-chip-count">12</span></div>
            <div class="mockup-cat-chip" id="mockChip1">Tecnología<span class="mockup-cat-chip-count">24</span></div>
            <div class="mockup-cat-chip" id="mockChip2">Papelería<span class="mockup-cat-chip-count">8</span></div>
            <div class="mockup-cat-chip" id="mockChip3">EPP<span class="mockup-cat-chip-count">3</span></div>
          </div>

          <!-- Productos -->
          <div class="mockup-section-label">PRODUCTOS CON PRECIO NEGOCIADO</div>
          <div class="mockup-products">
            <div class="mockup-product is-highlighted">
              <div class="mockup-product-left">
                <div class="mockup-product-icon"><svg><use href="#i-furniture"/></svg></div>
                <div class="mockup-product-info">
                  <div class="mockup-product-name">Silla ergonómica respaldo malla</div>
                  <div class="mockup-product-price">Precio contrato · <strong>MXN $4,890</strong></div>
                </div>
              </div>
              <button class="mockup-product-add"><svg><use href="#i-plus"/></svg></button>
            </div>
            <div class="mockup-product">
              <div class="mockup-product-left">
                <div class="mockup-product-icon"><svg><use href="#i-furniture"/></svg></div>
                <div class="mockup-product-info">
                  <div class="mockup-product-name">Escritorio recto 1.40m melamina</div>
                  <div class="mockup-product-price">Precio contrato · <strong>MXN $3,250</strong></div>
                </div>
              </div>
              <button class="mockup-product-add"><svg><use href="#i-plus"/></svg></button>
            </div>
            <div class="mockup-product">
              <div class="mockup-product-left">
                <div class="mockup-product-icon"><svg><use href="#i-tech"/></svg></div>
                <div class="mockup-product-info">
                  <div class="mockup-product-name">Monitor LED 27 pulgadas Full HD</div>
                  <div class="mockup-product-price">Precio contrato · <strong>MXN $3,890</strong></div>
                </div>
              </div>
              <button class="mockup-product-add"><svg><use href="#i-plus"/></svg></button>
            </div>
          </div>

          <!-- Footer carrito -->
          <div class="mockup-footer">
            <div class="mockup-cart-info">
              <svg class="mockup-cart-icon"><use href="#i-cart"/></svg>
              <span class="mockup-cart-label">Carrito</span>
              <span class="mockup-cart-count"><span id="mockupCartCount">3</span> productos</span>
            </div>
            <button class="mockup-cart-cta">
              <span>Solicitar</span>
              <svg><use href="#i-arrow"/></svg>
            </button>
          </div>

        </div>
      </div>

    </div>

    <!-- 4 BENEFICIOS -->
    <div class="platform-benefits">

      <div class="platform-benefit reveal" style="transition-delay: 0ms;">
        <div class="platform-benefit-num">01</div>
        <div class="platform-benefit-icon-wrap">
          <svg><use href="#i-check"/></svg>
        </div>
        <h3 class="platform-benefit-title">Precios negociados fijos</h3>
        <p class="platform-benefit-desc">
          Sin cotizar cada vez. Los precios <strong>viven en la plataforma</strong> según el contrato anual firmado.
        </p>
      </div>

      <div class="platform-benefit reveal" style="transition-delay: 100ms;">
        <div class="platform-benefit-num">02</div>
        <div class="platform-benefit-icon-wrap">
          <svg><use href="#i-sparkle"/></svg>
        </div>
        <h3 class="platform-benefit-title">Multi-usuario con permisos</h3>
        <p class="platform-benefit-desc">
          Compras, presupuestos, aprobadores. Cada quien con <strong>su rol y límites</strong> configurados.
        </p>
      </div>

      <div class="platform-benefit reveal" style="transition-delay: 200ms;">
        <div class="platform-benefit-num">03</div>
        <div class="platform-benefit-icon-wrap">
          <svg><use href="#i-storage"/></svg>
        </div>
        <h3 class="platform-benefit-title">Control por centro de costo</h3>
        <p class="platform-benefit-desc">
          Trazabilidad completa de qué pide compras, qué pide marketing, qué pide producción.
        </p>
      </div>

      <div class="platform-benefit reveal" style="transition-delay: 300ms;">
        <div class="platform-benefit-num">04</div>
        <div class="platform-benefit-icon-wrap">
          <svg><use href="#i-cart"/></svg>
        </div>
        <h3 class="platform-benefit-title">Solicitud por correo</h3>
        <p class="platform-benefit-desc">
          No es checkout. Genera requisición que llega al especialista para <strong>facturación a crédito</strong>.
        </p>
      </div>

    </div>

  </div>
</section>

<!-- HTML del bloque 8 -->
<section id="marcas" class="brands-section">
  <div class="max-w-[1440px] mx-auto px-6 lg:px-12">

    <!-- HEADER -->
    <div class="brands-header">
      <div class="brands-header-left reveal">
        <div class="brands-eyebrow">
          <span class="dot"></span>
          <span>● / DISTRIBUCIÓN AUTORIZADA</span>
        </div>
        <h2 class="brands-title">
          Marcas líderes en
          <span class="brands-title-highlight">catálogo abierto.</span>
        </h2>
        <p class="brands-subtitle">
          Acceso directo a fabricantes con garantía completa. Si la marca requerida no aparece en el listado, se incorpora bajo solicitud.
        </p>
      </div>
      <div class="brands-stat reveal" style="transition-delay: 150ms;">
        <div class="brands-stat-num">+250</div>
        <div class="brands-stat-label">marcas en catálogo</div>
      </div>
    </div>

    <!-- MARQUEE -->
    <div class="marquee-wrap reveal" style="transition-delay: 200ms;">

      <!-- Fila 1: izquierda → derecha -->
      <div class="marquee-row">
        <div class="marquee-track" id="marqueeTrack1">
          <!-- Las marcas se inyectan por JS, duplicadas para loop -->
        </div>
      </div>

      <!-- Fila 2: derecha → izquierda (reverse) -->
      <div class="marquee-row reverse">
        <div class="marquee-track" id="marqueeTrack2">
          <!-- Las marcas se inyectan por JS, duplicadas para loop -->
        </div>
      </div>

    </div>

    <!-- FOOTNOTE -->
    <div class="brands-footnote reveal" style="transition-delay: 300ms;">
      <div class="brands-footnote-text">
        Marcas en distribución autorizada con garantía directa de fabricante. <strong>El catálogo es abierto:</strong> si la marca o modelo requerido no aparece, se gestiona con red de proveedores certificados.
      </div>
      <button type="button" class="brands-footnote-cta" onclick="document.getElementById('heroSearchInput')?.focus(); document.getElementById('heroSearchInput')?.scrollIntoView({behavior: 'smooth', block: 'center'});">
        <span>Buscar una marca</span>
        <svg><use href="#i-arrow"/></svg>
      </button>
    </div>

  </div>
</section>

    </main>

<!-- Banda decorativa amarilla -->
<div class="footer-ticker" aria-hidden="true">
  <div class="footer-ticker-track">
    <div class="footer-ticker-item">
      <span>● Proveedor único multi-categoría</span>
      <span class="sep"></span>
      <span>Cobertura en 10 países Latinoamérica</span>
      <span class="sep"></span>
      <span>Propuesta formal en 24 horas</span>
      <span class="sep"></span>
      <span>Distribución autorizada</span>
      <span class="sep"></span>
      <span>Cumplimiento en licitación</span>
      <span class="sep"></span>
      <span>Facturación local CFDI</span>
      <span class="sep"></span>
    </div>
    <div class="footer-ticker-item">
      <span>● Proveedor único multi-categoría</span>
      <span class="sep"></span>
      <span>Cobertura en 10 países Latinoamérica</span>
      <span class="sep"></span>
      <span>Propuesta formal en 24 horas</span>
      <span class="sep"></span>
      <span>Distribución autorizada</span>
      <span class="sep"></span>
      <span>Cumplimiento en licitación</span>
      <span class="sep"></span>
      <span>Facturación local CFDI</span>
      <span class="sep"></span>
    </div>
  </div>
</div>

<!-- Footer principal -->
<footer class="footer" role="contentinfo">
  <div class="max-w-[1440px] mx-auto px-6 lg:px-12">

    <!-- HERO -->
    <div class="footer-hero">

      <!-- Brand + tagline -->
      <div class="footer-brand">
        <div class="footer-logo" style="display:flex;align-items:center;gap:10px;">
          <img src="/brand/14-isotipo-gold.svg" alt="Brainstore" style="width:40px;height:40px;" />
          <span class="footer-logo-text">brain<span style="color:#C9A227">·</span>store</span>
        </div>

        <h2 class="footer-tagline">
          Proveedor único <span class="footer-tagline-highlight">multi-categoría</span> en Latinoamérica.
        </h2>

        <p class="footer-desc">
          Suministros corporativos, servicios ejecutivos y plataformas digitales con IA. Catálogo abierto con más de 250 marcas en distribución autorizada y entrega en 10 países.
        </p>

        <button type="button" class="footer-cta" data-open-drawer>
          <svg><use href="#i-cart"/></svg>
          <span>Iniciar solicitud</span>
          <svg><use href="#i-arrow"/></svg>
        </button>
      </div>

      <!-- Datos de contacto incrustados -->
      <div class="footer-coverage" style="display:flex !important;flex-direction:column !important;gap:18px !important;text-align:left !important;align-items:flex-start !important;background:none !important;background-color:transparent !important;border:none !important;border-left:none !important;padding:0 !important;min-width:260px;">
        <div class="footer-col-title">Contacto</div>
        <div style="display:flex;flex-direction:column;gap:3px;">
          <span style="font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.4);">Atención comercial</span>
          <a href="mailto:team-bsm@brainstore.com.mx" style="font-size:14px;font-weight:500;color:white;text-decoration:none;">team-bsm@brainstore.com.mx</a>
        </div>
        <div style="display:flex;flex-direction:column;gap:3px;">
          <span style="font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.4);">Teléfono / WhatsApp</span>
          <a href="tel:+525565067332" style="font-size:14px;font-weight:500;color:white;text-decoration:none;">+52 55 6506 7332</a>
        </div>
        <div style="display:flex;flex-direction:column;gap:3px;">
          <span style="font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.4);">Oficinas centrales</span>
          <span style="font-size:13px;font-weight:400;color:rgba(255,255,255,0.85);line-height:1.5;">Miguel de Cervantes Saavedra 169,<br/>Granada, CDMX 11520, México</span>
        </div>
        <div style="display:flex;gap:8px;padding-top:6px;">
          <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;background:rgba(255,255,255,0.05);border-radius:4px;color:rgba(255,255,255,0.7);">
            <svg viewBox="0 0 24 24" fill="currentColor" style="width:14px;height:14px;"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://wa.me/525565067332" target="_blank" rel="noopener" aria-label="WhatsApp" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;background:rgba(255,255,255,0.05);border-radius:4px;color:rgba(255,255,255,0.7);">
            <svg viewBox="0 0 24 24" fill="currentColor" style="width:14px;height:14px;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/></svg>
          </a>
        </div>
      </div>

    </div>

    <!-- GRID DE COLUMNAS -->
    <div class="footer-grid">

      <!-- VERTICALES -->
      <div>
        <div class="footer-col-title">Verticales</div>
        <a class="footer-link" href="/suministros-corporativos">
          <span>Suministros corporativos</span>
          <svg><use href="#i-arrow"/></svg>
        </a>
        <a class="footer-link" href="/servicios-ejecutivos">
          <span>Servicios ejecutivos</span>
          <svg><use href="#i-arrow"/></svg>
        </a>
        <a class="footer-link" href="/plataformas-digitales-ai">
          <span>Plataformas digitales AI</span>
          <svg><use href="#i-arrow"/></svg>
        </a>
        <a class="footer-link" href="/latam-direct">
          <span>Latam Direct</span>
          <svg><use href="#i-arrow"/></svg>
        </a>
      </div>

      <!-- EMPRESA -->
      <div>
        <div class="footer-col-title">Empresa</div>
        <a class="footer-link" href="/nosotros">
          <span>Nosotros</span>
          <svg><use href="#i-arrow"/></svg>
        </a>
        <a class="footer-link" href="/airport-business-travel">
          <span>Airport Business Travel</span>
          <svg><use href="#i-arrow"/></svg>
        </a>
        <a class="footer-link" href="/loyalty-rewards-latam">
          <span>Loyalty Rewards Latam</span>
          <svg><use href="#i-arrow"/></svg>
        </a>
        <a class="footer-link" href="/empleos">
          <span>Trabaje con nosotros</span>
          <svg><use href="#i-arrow"/></svg>
        </a>
      </div>

      <!-- PRODUCTOS DIGITALES -->
      <div>
        <div class="footer-col-title">Productos digitales</div>
        <a class="footer-link" href="/products/catalogs">
          <span>Catalogs</span>
          <svg><use href="#i-arrow"/></svg>
        </a>
        <a class="footer-link" href="/products/dashboards">
          <span>Dashboards</span>
          <svg><use href="#i-arrow"/></svg>
        </a>
        <a class="footer-link" href="/products/surveys">
          <span>Surveys</span>
          <svg><use href="#i-arrow"/></svg>
        </a>
        <a class="footer-link" href="/products/connect">
          <span>Connect</span>
          <svg><use href="#i-arrow"/></svg>
        </a>
      </div>


    <!-- BARRA LEGAL -->
    <div class="footer-bottom">
      <div class="footer-legal">
        © <span id="footerYear">2026</span> <strong>BSM Cía. Internacional Multiservicios SA</strong>. Todos los derechos reservados.
      </div>

      <div class="footer-legal-links">
        <a class="footer-legal-link" href="/aviso-privacidad">Aviso de privacidad</a>
        <span class="footer-legal-sep">·</span>
        <a class="footer-legal-link" href="/terminos">Términos</a>
        <span class="footer-legal-sep">·</span>
        <a class="footer-legal-link" href="/cookies">Cookies</a>
      </div>
    </div>

  </div>
</footer>


<div class="search-backdrop" id="searchBackdrop"></div>
<div class="search-dropdown" id="searchDropdown" role="listbox" aria-label="Resultados de búsqueda">
  <!-- contenido inyectado por JS -->
</div>

<!-- Modal de categoría (al final del body para escapar contextos stacking) -->
<div class="cat-modal-backdrop" id="catModalBackdrop"></div>
<div class="cat-modal" id="catModal" role="dialog" aria-modal="true" aria-labelledby="catModalTitle">
  <!-- Contenido inyectado por JS -->
</div>

<!-- Drawer al final del body (escapa contextos stacking) -->
<div class="cart-drawer-backdrop" id="cartDrawerBackdrop"></div>
<div class="cart-drawer" id="cartDrawer" role="dialog" aria-modal="true" aria-labelledby="cartDrawerTitle">
  <!-- Contenido inyectado por JS -->
</div>

<!-- Modal de formulario de envío -->
<div class="submit-modal-backdrop" id="submitModalBackdrop"></div>
<div class="submit-modal" id="submitModal" role="dialog" aria-modal="true" aria-labelledby="submitModalTitle">
  <!-- Contenido inyectado por JS -->
</div>

<!-- Modal de confirmación (éxito) -->
<div class="success-modal-backdrop" id="successModalBackdrop"></div>
<div class="success-modal" id="successModal" role="dialog" aria-modal="true" aria-labelledby="successModalTitle">
  <!-- Contenido inyectado por JS -->
</div>

<script>
// =============================================
// CATÁLOGO BRAINSTORE — Limpio v2
// 9 categorías, ~130 familias, ~750 variantes
// Sin nombres inventados ("empresarial", "ejecutiva"...)
// Descripciones técnicas neutras
// PLACEHOLDER hasta que lleguen feeds reales de proveedores
// =============================================

const CATALOG = [

  // ============================================
  // 1. TECNOLOGÍA Y CÓMPUTO
  // ============================================
  {
    cat: "tecnologia",
    catName: "Tecnología y cómputo",
    family: "Laptops",
    keywords: ["laptop", "portatil", "computadora portatil", "notebook"],
    brands: ["Apple", "HP", "Dell", "Lenovo", "Asus", "Acer"],
    variants: [
      "Laptop 14 pulgadas Intel Core i5 8GB RAM 512GB SSD",
      "Laptop 14 pulgadas Intel Core i7 16GB RAM 1TB SSD",
      "Laptop 15.6 pulgadas Intel Core i7 16GB RAM 512GB SSD",
      "Laptop ultradelgada 13.3 pulgadas 16GB RAM 512GB SSD",
      "Laptop con procesador AMD Ryzen 7 16GB RAM 1TB SSD",
      "Laptop Apple MacBook Air 13 pulgadas chip M3 16GB RAM 512GB",
      "Laptop Apple MacBook Pro 14 pulgadas chip M3 Pro 18GB RAM 512GB",
      "Workstation movil 15.6 pulgadas Intel Core i9 32GB RAM 1TB SSD",
      "Workstation movil 17 pulgadas con tarjeta grafica dedicada"
    ]
  },
  {
    cat: "tecnologia",
    catName: "Tecnología y cómputo",
    family: "Computadoras de escritorio",
    keywords: ["pc", "desktop", "computadora", "torre", "all in one"],
    brands: ["HP", "Dell", "Lenovo", "Apple"],
    variants: [
      "PC de escritorio Intel Core i5 16GB RAM 512GB SSD sin monitor",
      "PC de escritorio Intel Core i7 16GB RAM 1TB SSD sin monitor",
      "Mini PC Intel Core i5 16GB RAM 512GB SSD",
      "All-in-One 23.8 pulgadas Intel Core i5 16GB RAM 512GB SSD",
      "All-in-One 27 pulgadas Intel Core i7 16GB RAM 1TB SSD",
      "iMac 24 pulgadas chip M3 16GB RAM 512GB SSD",
      "Mac mini chip M2 16GB RAM 512GB SSD",
      "Workstation para diseno 32GB RAM 2TB SSD"
    ]
  },
  {
    cat: "tecnologia",
    catName: "Tecnología y cómputo",
    family: "Monitores y pantallas",
    keywords: ["monitor", "pantalla", "display"],
    brands: ["Dell", "HP", "Samsung", "LG", "Asus"],
    variants: [
      "Monitor LED 24 pulgadas Full HD 1920x1080 conexion HDMI",
      "Monitor LED 27 pulgadas Full HD 1920x1080 conexion HDMI DisplayPort",
      "Monitor LED 27 pulgadas 4K UHD con calibracion de color",
      "Monitor curvo 34 pulgadas ultrawide para trabajo dual",
      "Monitor 32 pulgadas 4K para diseno grafico",
      "Monitor portatil 15.6 pulgadas USB-C para uso movil"
    ]
  },
  {
    cat: "tecnologia",
    catName: "Tecnología y cómputo",
    family: "Tablets y iPads",
    keywords: ["tablet", "ipad"],
    brands: ["Apple", "Samsung", "Lenovo"],
    variants: [
      "Tablet Apple iPad 10.9 pulgadas 64GB Wi-Fi",
      "Tablet Apple iPad Air 11 pulgadas 128GB Wi-Fi chip M2",
      "Tablet Apple iPad Pro 12.9 pulgadas 256GB chip M4",
      "Tablet Samsung Galaxy Tab 11 pulgadas 128GB Android",
      "Tablet 10 pulgadas Android con certificacion IP68 para trabajo de campo"
    ]
  },
  {
    cat: "tecnologia",
    catName: "Tecnología y cómputo",
    family: "Smartphones",
    keywords: ["celular", "smartphone", "telefono movil", "iphone"],
    brands: ["Apple", "Samsung", "Motorola", "Xiaomi"],
    variants: [
      "Smartphone Apple iPhone 16 128GB",
      "Smartphone Apple iPhone 16 Pro 256GB",
      "Smartphone Samsung Galaxy S24 256GB",
      "Smartphone Samsung Galaxy A55 128GB",
      "Smartphone para campo robusto certificacion IP68"
    ]
  },
  {
    cat: "tecnologia",
    catName: "Tecnología y cómputo",
    family: "Periféricos de cómputo",
    keywords: ["mouse", "teclado", "audifonos", "webcam", "perifericos"],
    brands: ["Logitech", "Microsoft", "HP", "Dell"],
    variants: [
      "Teclado USB estandar espanol Latinoamerica",
      "Teclado inalambrico Bluetooth recargable",
      "Combo teclado y mouse inalambrico",
      "Mouse optico USB",
      "Mouse inalambrico ergonomico recargable",
      "Audifonos USB con microfono para call center",
      "Diadema inalambrica Bluetooth con cancelacion de ruido",
      "Webcam HD 1080p para videoconferencia",
      "Webcam 4K con microfono integrado",
      "Hub USB-C de 7 puertos para laptop"
    ]
  },
  {
    cat: "tecnologia",
    catName: "Tecnología y cómputo",
    family: "Almacenamiento de datos",
    keywords: ["disco duro", "ssd", "usb", "memoria", "almacenamiento"],
    brands: ["Western Digital", "Seagate", "Kingston", "SanDisk"],
    variants: [
      "Disco duro externo USB 3.0 capacidad 1TB",
      "Disco duro externo USB 3.0 capacidad 2TB",
      "SSD externo USB-C capacidad 500GB alta velocidad",
      "SSD externo USB-C capacidad 1TB alta velocidad",
      "USB memoria flash capacidad 32GB",
      "USB memoria flash capacidad 64GB",
      "USB memoria flash capacidad 128GB",
      "Tarjeta microSD capacidad 128GB clase 10",
      "NAS de 2 bahias para respaldo"
    ]
  },
  {
    cat: "tecnologia",
    catName: "Tecnología y cómputo",
    family: "Redes y conectividad",
    keywords: ["router", "switch", "red", "network", "wifi"],
    brands: ["Cisco", "TP-Link", "Ubiquiti", "Netgear"],
    variants: [
      "Router Wi-Fi 6 doble banda",
      "Router Wi-Fi 6 mesh kit 3 unidades cobertura grande",
      "Switch de red 8 puertos Gigabit",
      "Switch de red 24 puertos Gigabit administrable",
      "Switch de red 48 puertos Gigabit administrable rack",
      "Access Point Wi-Fi 6 para techo",
      "Cable Ethernet Cat6 25 metros",
      "Cable Ethernet Cat6a 100 metros para instalacion"
    ]
  },
  {
    cat: "tecnologia",
    catName: "Tecnología y cómputo",
    family: "Videoconferencia",
    keywords: ["videoconferencia", "videollamada", "sala juntas", "zoom"],
    brands: ["Logitech", "Poly", "Jabra"],
    variants: [
      "Sistema de videoconferencia portatil con altavoz integrado",
      "Camara para sala de juntas 4K con microfono incorporado",
      "Altavoz Bluetooth para conferencias en sala",
      "Kit completo de videoconferencia para sala mediana",
      "Barra de videoconferencia all-in-one para sala pequena"
    ]
  },
  {
    cat: "tecnologia",
    catName: "Tecnología y cómputo",
    family: "Servidores y respaldo",
    keywords: ["servidor", "server", "respaldo", "ups"],
    brands: ["Dell", "HP", "Lenovo", "APC"],
    variants: [
      "Servidor torre Intel Xeon para PyME",
      "Servidor rack 1U Intel Xeon configurable",
      "UPS no-break 1000VA para proteccion de equipos",
      "UPS no-break 2200VA con regulador integrado",
      "UPS no-break rack 3000VA para servidor"
    ]
  },
  {
    cat: "tecnologia",
    catName: "Tecnología y cómputo",
    family: "Licencias de software",
    keywords: ["software", "licencia", "office", "windows", "antivirus"],
    brands: ["Microsoft", "Adobe", "AutoDesk"],
    variants: [
      "Licencia Microsoft 365 Business Standard anual por usuario",
      "Licencia Microsoft 365 Business Premium anual por usuario",
      "Licencia Microsoft 365 Apps for Business anual por usuario",
      "Licencia Windows 11 Pro OEM por equipo",
      "Licencia Adobe Creative Cloud completa anual por usuario",
      "Licencia Adobe Acrobat Pro anual por usuario",
      "Licencia AutoCAD anual por usuario"
    ]
  },
  {
    cat: "tecnologia",
    catName: "Tecnología y cómputo",
    family: "Cámaras de seguridad",
    keywords: ["camara seguridad", "cctv", "videovigilancia"],
    brands: ["Hikvision", "Dahua", "Reolink"],
    variants: [
      "Camara IP interior 4MP con vision nocturna",
      "Camara IP exterior 4MP resistente a intemperie",
      "Kit DVR 8 canales con 4 camaras Full HD",
      "Kit NVR 16 canales con 8 camaras IP 4K",
      "Camara PTZ exterior con zoom optico para perimetro"
    ]
  },

  // ============================================
  // 2. MOBILIARIO
  // ============================================
  {
    cat: "mobiliario",
    catName: "Mobiliario de oficina",
    family: "Escritorios",
    keywords: ["escritorio", "mesa trabajo", "desk"],
    variants: [
      "Escritorio en L 1.60x1.40m con cajonera",
      "Escritorio recto 1.20x0.60m melamina",
      "Escritorio recto 1.40x0.70m melamina",
      "Escritorio recto 1.60x0.70m con cajonera",
      "Escritorio bench para 4 personas 2.40x1.40m",
      "Escritorio ajustable en altura electrico 1.40m",
      "Escritorio ajustable en altura manual con manivela 1.20m"
    ]
  },
  {
    cat: "mobiliario",
    catName: "Mobiliario de oficina",
    family: "Sillas de oficina",
    keywords: ["silla", "silla oficina", "silla ergonomica"],
    variants: [
      "Silla operativa con respaldo en malla y soporte lumbar",
      "Silla tapizada en piel con descansabrazos ajustables",
      "Silla ergonomica con cabecera ajustable y mecanismo sincronizado",
      "Silla de visita sin descansabrazos tapizada",
      "Silla de visita con descansabrazos estructura cromada",
      "Silla para sala de juntas tapizada en piel respaldo medio",
      "Banco alto regulable para mostrador con respaldo",
      "Silla con altura ajustable para linea de produccion"
    ]
  },
  {
    cat: "mobiliario",
    catName: "Mobiliario de oficina",
    family: "Mesas de juntas",
    keywords: ["mesa juntas", "sala juntas", "mesa conferencias"],
    variants: [
      "Mesa de juntas rectangular 2.40x1.20m para 8 personas",
      "Mesa de juntas rectangular 3.00x1.20m para 10 personas",
      "Mesa de juntas barco 4.00x1.40m para 14 personas",
      "Mesa redonda para 4 personas diametro 1.20m",
      "Mesa de juntas con modulo central para cables y conectividad"
    ]
  },
  {
    cat: "mobiliario",
    catName: "Mobiliario de oficina",
    family: "Archiveros y cajoneras",
    keywords: ["archivero", "cajonera", "gaveta", "archivo"],
    variants: [
      "Archivero metalico vertical 4 gavetas tamano carta",
      "Archivero metalico vertical 4 gavetas tamano oficio",
      "Archivero metalico horizontal 2 gavetas tamano carta",
      "Cajonera movil 3 gavetas con cerradura",
      "Cajonera fija pedestal 2 gavetas mas archivo",
      "Archivero rotatorio mecanico para alta densidad"
    ]
  },
  {
    cat: "mobiliario",
    catName: "Mobiliario de oficina",
    family: "Lockers y casilleros",
    keywords: ["locker", "casillero", "guardarropa"],
    variants: [
      "Locker metalico individual con candado",
      "Locker metalico de 4 puertas vertical",
      "Locker metalico de 6 puertas configuracion 3x2",
      "Locker metalico de 12 puertas configuracion 4x3",
      "Locker plastico resistente para areas humedas",
      "Locker con cerradura digital para vestidores"
    ]
  },
  {
    cat: "mobiliario",
    catName: "Mobiliario de oficina",
    family: "Pizarrones y caballetes",
    keywords: ["pizarron", "pizarra", "caballete", "flipchart"],
    variants: [
      "Pizarron blanco magnetico 1.20x0.90m con marco aluminio",
      "Pizarron blanco magnetico 1.80x1.20m con marco aluminio",
      "Pizarron de corcho 1.20x0.90m con marco de madera",
      "Caballete portarrotafolios con base plegable",
      "Pizarron movil con ruedas doble cara 1.50x1.20m"
    ]
  },
  {
    cat: "mobiliario",
    catName: "Mobiliario de oficina",
    family: "Libreros y estanteria",
    keywords: ["librero", "estante", "mueble libros"],
    variants: [
      "Librero abierto 5 entrepanos 1.80m altura melamina",
      "Librero cerrado con puertas batientes 2.00m altura",
      "Estanteria metalica de oficina 4 niveles",
      "Combinado bajo con puertas y entrepanos"
    ]
  },
  {
    cat: "mobiliario",
    catName: "Mobiliario de oficina",
    family: "Mobiliario para recepcion",
    keywords: ["recepcion", "mostrador", "lobby"],
    variants: [
      "Mostrador de recepcion modular 2.40m con frente curvo",
      "Mostrador de recepcion modular 3.00m con modulo accesible",
      "Sala de espera 3 plazas tapizada en tela",
      "Sala de espera modular 2 plazas con descansabrazos",
      "Mesa de centro para lobby 1.20x0.60m"
    ]
  },
  {
    cat: "mobiliario",
    catName: "Mobiliario de oficina",
    family: "Mobiliario para comedor",
    keywords: ["comedor empleados", "cafeteria", "mesa comedor"],
    variants: [
      "Mesa de comedor plegable 1.80x0.75m",
      "Silla plegable de plastico para comedor",
      "Banco corrido de comedor 3 plazas",
      "Mesa redonda para comedor 4 personas",
      "Combo mesa mas 4 sillas para area de descanso"
    ]
  },

  // ============================================
  // 3. PAPELERÍA
  // ============================================
  {
    cat: "papeleria",
    catName: "Papelería",
    family: "Hojas y papel bond",
    keywords: ["hojas", "papel bond", "papel oficina", "papel carta"],
    variants: [
      "Paquete hojas bond carta 75g 500 hojas blancas",
      "Paquete hojas bond oficio 75g 500 hojas blancas",
      "Paquete hojas bond carta 90g 500 hojas alta calidad",
      "Paquete hojas bond carta 75g 500 hojas color amarillo",
      "Paquete hojas bond carta 75g 500 hojas color azul",
      "Caja hojas bond carta 10 paquetes 5000 hojas",
      "Caja hojas bond oficio 10 paquetes 5000 hojas",
      "Paquete papel reciclado carta 75g 500 hojas"
    ]
  },
  {
    cat: "papeleria",
    catName: "Papelería",
    family: "Boligrafos y plumas",
    keywords: ["boligrafo", "pluma", "lapicero"],
    variants: [
      "Boligrafo tinta negra punto mediano caja 12 piezas",
      "Boligrafo tinta azul punto mediano caja 12 piezas",
      "Boligrafo tinta roja punto mediano caja 12 piezas",
      "Boligrafo tipo gel tinta negra caja 12 piezas",
      "Boligrafo retractil punto fino caja 12 piezas",
      "Plumin marcatextos amarillo caja 12 piezas",
      "Plumin marcatextos surtido 6 colores"
    ]
  },
  {
    cat: "papeleria",
    catName: "Papelería",
    family: "Marcadores y plumones",
    keywords: ["marcador", "plumon", "rotulador", "permanente"],
    variants: [
      "Marcador permanente punta gruesa negro caja 12 piezas",
      "Marcador permanente punta gruesa colores surtidos caja 12 piezas",
      "Marcador para pizarron blanco negro caja 12 piezas",
      "Marcador para pizarron blanco colores surtidos caja 12 piezas",
      "Marcador tipo plumon para tela permanente caja 12 piezas"
    ]
  },
  {
    cat: "papeleria",
    catName: "Papelería",
    family: "Carpetas y folders",
    keywords: ["carpeta", "folder", "archivo"],
    variants: [
      "Carpeta blanca 3 argollas 1 pulgada paquete 10 piezas",
      "Carpeta blanca 3 argollas 2 pulgadas paquete 10 piezas",
      "Carpeta blanca 3 argollas 3 pulgadas paquete 10 piezas",
      "Folder manila tamano carta paquete 100 piezas",
      "Folder manila tamano oficio paquete 100 piezas",
      "Folder colgante para gaveta paquete 25 piezas",
      "Carpeta con broche tipo Velcro paquete 10 piezas",
      "Separadores plasticos para carpeta 10 divisiones"
    ]
  },
  {
    cat: "papeleria",
    catName: "Papelería",
    family: "Sobres",
    keywords: ["sobre", "sobre manila", "sobre carta"],
    variants: [
      "Sobre tamano carta blanco paquete 100 piezas",
      "Sobre tamano oficio blanco paquete 100 piezas",
      "Sobre manila tamano carta paquete 50 piezas",
      "Sobre manila tamano oficio paquete 50 piezas",
      "Sobre acolchado para envio caja 25 piezas",
      "Sobre membretado personalizado"
    ]
  },
  {
    cat: "papeleria",
    catName: "Papelería",
    family: "Engrapadoras y grapas",
    keywords: ["engrapadora", "grapas", "perforadora"],
    variants: [
      "Engrapadora metalica estandar capacidad 25 hojas",
      "Engrapadora de alta capacidad 100 hojas",
      "Engrapadora electrica de escritorio",
      "Caja de grapas estandar 5000 piezas",
      "Caja de grapas de alta resistencia 1000 piezas",
      "Perforadora 2 orificios capacidad 25 hojas",
      "Perforadora 3 orificios capacidad 25 hojas",
      "Perforadora electrica de alta capacidad"
    ]
  },
  {
    cat: "papeleria",
    catName: "Papelería",
    family: "Post-it y notas adhesivas",
    keywords: ["post it", "notas adhesivas", "notas pegajosas"],
    variants: [
      "Notas adhesivas amarillas 76x76mm bloque 100 paquete 12",
      "Notas adhesivas colores surtidos 76x76mm paquete 6",
      "Notas adhesivas tamano chico 38x51mm paquete 12",
      "Banderitas marcadoras de pagina colores paquete 5"
    ]
  },
  {
    cat: "papeleria",
    catName: "Papelería",
    family: "Tijeras y cutters",
    keywords: ["tijeras", "cutter", "navaja"],
    variants: [
      "Tijeras de oficina acero inoxidable 17cm paquete 12",
      "Tijeras de uso pesado para tela 20cm",
      "Cutter retractil con cuchilla repuesto paquete 12",
      "Repuesto de cuchillas para cutter paquete 50"
    ]
  },
  {
    cat: "papeleria",
    catName: "Papelería",
    family: "Calculadoras",
    keywords: ["calculadora", "calculator"],
    variants: [
      "Calculadora cientifica",
      "Calculadora financiera 12 digitos con impresora",
      "Calculadora basica de escritorio 12 digitos",
      "Calculadora portatil de bolsillo"
    ]
  },
  {
    cat: "papeleria",
    catName: "Papelería",
    family: "Pegamentos y cintas",
    keywords: ["pegamento", "cinta adhesiva", "diurex", "lapiz adhesivo"],
    variants: [
      "Pegamento liquido blanco 240ml paquete 6",
      "Lapiz adhesivo en barra 40g paquete 12",
      "Cinta adhesiva transparente 18mmx33m paquete 12",
      "Cinta adhesiva transparente con dispensador",
      "Cinta doble cara 18mmx10m paquete 6",
      "Silicon liquido aplicador 100ml"
    ]
  },
  {
    cat: "papeleria",
    catName: "Papelería",
    family: "Organizadores de escritorio",
    keywords: ["organizador escritorio", "porta plumas", "charola"],
    variants: [
      "Organizador de escritorio modular acrilico",
      "Charola portadocumentos 3 niveles metalica",
      "Portaplumas escritorio acrilico transparente",
      "Tarjetero metalico para escritorio",
      "Caja organizadora de cajones modular"
    ]
  },
  {
    cat: "papeleria",
    catName: "Papelería",
    family: "Block, libretas y cuadernos",
    keywords: ["libreta", "cuaderno", "block", "agenda"],
    variants: [
      "Block bond rayado tamano carta 50 hojas paquete 10",
      "Block cuadriculado tamano carta 50 hojas paquete 10",
      "Libreta tamano carta rayada 100 hojas",
      "Cuaderno tapa dura 200 hojas",
      "Agenda anual con planificador mensual"
    ]
  },
  {
    cat: "papeleria",
    catName: "Papelería",
    family: "Sellos y entintadores",
    keywords: ["sello", "sello automatico", "entintador"],
    variants: [
      "Sello automatico personalizable hasta 4 lineas",
      "Sello fechador automatico",
      "Sello tipo banco con numero de cuenta",
      "Cojin entintador almohadilla recargable",
      "Tinta para sellos frasco 30ml color negro"
    ]
  },
  {
    cat: "papeleria",
    catName: "Papelería",
    family: "Reglas y mediciones",
    keywords: ["regla", "escuadra", "transportador"],
    variants: [
      "Regla plastica 30cm paquete 12",
      "Regla metalica 50cm para uso pesado",
      "Juego escuadras geometricas plastico",
      "Flexometro 5 metros uso rudo"
    ]
  },

  // ============================================
  // 4. IMPRESIÓN
  // ============================================
  {
    cat: "impresion",
    catName: "Impresión",
    family: "Impresoras",
    keywords: ["impresora", "multifuncional", "laser"],
    brands: ["HP", "Brother", "Canon", "Epson"],
    variants: [
      "Impresora laser monocromatica 30ppm",
      "Impresora laser monocromatica 40ppm con red",
      "Impresora laser color 25ppm con red Ethernet",
      "Impresora multifuncional laser monocromatica con escaner",
      "Impresora multifuncional laser color con escaner y fax",
      "Impresora de inyeccion de tinta para alto volumen",
      "Impresora de alta produccion hasta 600ppm",
      "Impresora portatil inalambrica para campo"
    ]
  },
  {
    cat: "impresion",
    catName: "Impresión",
    family: "Plotters y gran formato",
    keywords: ["plotter", "gran formato", "impresion arquitectura"],
    brands: ["HP", "Canon", "Epson"],
    variants: [
      "Plotter de inyeccion 24 pulgadas para arquitectura",
      "Plotter de inyeccion 36 pulgadas para ingenieria",
      "Plotter de inyeccion 44 pulgadas para diseno y carteles",
      "Plotter para impresion fotografica"
    ]
  },
  {
    cat: "impresion",
    catName: "Impresión",
    family: "Toners y consumibles",
    keywords: ["toner", "cartucho", "tinta", "consumible"],
    brands: ["HP", "Brother", "Canon", "Epson"],
    variants: [
      "Toner negro original alta capacidad",
      "Toner color cian original",
      "Toner color magenta original",
      "Toner color amarillo original",
      "Cartucho de tinta negra original",
      "Cartucho de tinta tricolor original",
      "Tambor de imagen para impresora laser",
      "Kit de mantenimiento para impresora"
    ]
  },
  {
    cat: "impresion",
    catName: "Impresión",
    family: "Papel especial para impresion",
    keywords: ["papel fotografico", "papel termico", "papel autocopiante"],
    variants: [
      "Papel fotografico brillante carta 100 hojas",
      "Papel fotografico mate carta 50 hojas",
      "Papel autocopiante carta 2 partes 500 juegos",
      "Papel autocopiante carta 3 partes 500 juegos",
      "Papel termico para punto de venta rollo 80x80mm",
      "Papel termico para etiquetas 100x150mm rollo",
      "Papel opalina blanco grueso 250g caja 100 hojas",
      "Papel para plotter mate rollo 24 pulgadas"
    ]
  },
  {
    cat: "impresion",
    catName: "Impresión",
    family: "Encuadernacion",
    keywords: ["engargolado", "anillado", "encuadernacion", "espiral"],
    variants: [
      "Anillos de plastico engargolado 1/4 pulgada caja 100",
      "Anillos de plastico engargolado 1/2 pulgada caja 100",
      "Anillos de plastico engargolado 1 pulgada caja 50",
      "Espirales metalicas para encuadernacion paquete 50",
      "Caratulas transparentes para engargolado paquete 100",
      "Caratulas de carton colores para encuadernacion paquete 50",
      "Engargoladora manual capacidad 350 hojas",
      "Engargoladora electrica de alta produccion"
    ]
  },
  {
    cat: "impresion",
    catName: "Impresión",
    family: "Etiquetas y rotulacion",
    keywords: ["etiqueta", "rotulo", "label"],
    variants: [
      "Etiquetas adhesivas carta 30 etiquetas por hoja caja 100",
      "Etiquetas adhesivas circulares 25mm caja 1000",
      "Etiquetas para envio 4x6 pulgadas rollo 250",
      "Etiquetas de codigo de barras rollo 1000",
      "Etiquetadora termica de escritorio para envios",
      "Cintas para etiquetadora paquete 6"
    ]
  },
  {
    cat: "impresion",
    catName: "Impresión",
    family: "Enmicado",
    keywords: ["mica", "enmicado", "laminado"],
    variants: [
      "Micas para enmicar carta paquete 100",
      "Micas para enmicar credencial paquete 100",
      "Enmicadora termica de escritorio carta",
      "Enmicadora gran formato"
    ]
  },
  {
    cat: "impresion",
    catName: "Impresión",
    family: "Servicios de impresion personalizada",
    keywords: ["tarjetas presentacion", "folleto", "papeleria personalizada"],
    variants: [
      "Tarjetas de presentacion impresion a color millar",
      "Tarjetas de presentacion premium con barniz UV millar",
      "Folletos triptico impresion a color millar",
      "Flyers tamano carta impresion a color millar",
      "Papeleria membretada personalizada",
      "Sobres membretados millar",
      "Manuales encuadernados",
      "Carpetas con bolsa para presentacion"
    ]
  },

  // ============================================
  // 5. ALMACENAMIENTO
  // ============================================
  {
    cat: "almacenamiento",
    catName: "Almacenamiento",
    family: "Racks y estanteria pesada",
    keywords: ["rack", "estante", "anaquel"],
    variants: [
      "Rack selectivo 2 niveles capacidad 1000kg por nivel",
      "Rack selectivo 3 niveles capacidad 1500kg por nivel",
      "Rack selectivo 4 niveles capacidad 2000kg por nivel",
      "Rack cantilever para tubos y barras largas",
      "Rack drive-in para alta densidad de almacenaje",
      "Rack dinamico con rodillos para FIFO",
      "Rack movil tipo archivo compacto",
      "Anaquel metalico 5 entrepanos 1.80m altura uso ligero",
      "Anaquel metalico 5 entrepanos 2.40m altura uso pesado"
    ]
  },
  {
    cat: "almacenamiento",
    catName: "Almacenamiento",
    family: "Estanteria plastica",
    keywords: ["estante plastico", "repisa plastica"],
    variants: [
      "Estante plastico ajustable 4 entrepanos 1.50m altura",
      "Estante plastico para areas humedas resistente a corrosion",
      "Estante modular plastico apilable"
    ]
  },
  {
    cat: "almacenamiento",
    catName: "Almacenamiento",
    family: "Contenedores plasticos",
    keywords: ["contenedor", "caja plastica", "tote"],
    variants: [
      "Contenedor plastico apilable 30 litros con tapa",
      "Contenedor plastico apilable 50 litros con tapa",
      "Contenedor plastico apilable 100 litros con tapa",
      "Caja plastica tipo tote para linea de produccion",
      "Caja plastica con tapa abatible para almacenaje",
      "Bin de almacenamiento tipo gaveta paquete 12",
      "Contenedor IBC 1000 litros"
    ]
  },
  {
    cat: "almacenamiento",
    catName: "Almacenamiento",
    family: "Lockers para almacen",
    keywords: ["locker industrial", "casillero personal"],
    variants: [
      "Locker 1 puerta para vestidor",
      "Locker 6 puertas en configuracion 3x2",
      "Locker 12 puertas en configuracion 4x3",
      "Locker para personal con ventilacion lateral",
      "Locker con cerradura digital codigo personalizado"
    ]
  },
  {
    cat: "almacenamiento",
    catName: "Almacenamiento",
    family: "Cajas archivo",
    keywords: ["caja archivo", "caja documentos", "cartonera"],
    variants: [
      "Caja archivo carton corrugado tamano carta paquete 25",
      "Caja archivo carton corrugado tamano oficio paquete 25",
      "Caja archivo plastica con tapa tamano carta",
      "Caja archivo plastica con tapa tamano oficio",
      "Caja archivo muerto larga duracion paquete 50"
    ]
  },
  {
    cat: "almacenamiento",
    catName: "Almacenamiento",
    family: "Separadores y organizadores",
    keywords: ["separador", "divisor", "organizador almacen"],
    variants: [
      "Separadores ajustables para gaveta paquete 10",
      "Divisores de metal para anaquel paquete 6",
      "Organizador de partes pequenas 30 compartimentos",
      "Organizador modular apilable transparente"
    ]
  },
  {
    cat: "almacenamiento",
    catName: "Almacenamiento",
    family: "Cabinets metalicos",
    keywords: ["cabinet", "gabinete metalico", "guarda herramientas"],
    variants: [
      "Cabinet metalico 2 puertas con entrepanos",
      "Cabinet metalico con cajones para herramientas",
      "Cabinet vertical archivo activo 5 cajones",
      "Cabinet para sustancias quimicas con ventilacion"
    ]
  },
  {
    cat: "almacenamiento",
    catName: "Almacenamiento",
    family: "Carruseles y almacenes verticales",
    keywords: ["carrusel", "almacen vertical", "rotativo"],
    variants: [
      "Carrusel manual rotatorio para partes pequenas",
      "Almacen vertical motorizado para maxima densidad",
      "Tarjetero rotatorio de escritorio"
    ]
  },
  {
    cat: "almacenamiento",
    catName: "Almacenamiento",
    family: "Charolas y bandejas",
    keywords: ["charola", "bandeja", "tray"],
    variants: [
      "Charola plastica apilable para uso pesado",
      "Bandeja metalica para linea de produccion",
      "Charola para partes con divisiones internas"
    ]
  },

  // ============================================
  // 6. EMPAQUES Y EMBALAJE
  // ============================================
  {
    cat: "empaques",
    catName: "Empaques y embalaje",
    family: "Cajas de carton corrugado",
    keywords: ["caja carton", "caja corrugada", "caja envio"],
    variants: [
      "Caja carton corrugado 30x20x15cm paquete 25",
      "Caja carton corrugado 40x30x20cm paquete 25",
      "Caja carton corrugado 50x40x30cm paquete 25",
      "Caja carton corrugado 60x40x40cm paquete 10",
      "Caja carton doble corrugado para uso pesado 60x40x40cm paquete 10",
      "Caja carton triple corrugado para exportacion paquete 10",
      "Caja para mudanza 50x50x50cm reforzada paquete 10",
      "Caja a la medida con dimensiones personalizadas",
      "Caja para pizza 30x30cm paquete 100",
      "Caja para alimentos kraft 18x12x7cm paquete 100"
    ]
  },
  {
    cat: "empaques",
    catName: "Empaques y embalaje",
    family: "Cintas adhesivas para embalar",
    keywords: ["cinta canela", "cinta empacar", "cinta embalar"],
    variants: [
      "Cinta canela 48mmx100m rollo individual",
      "Cinta canela 48mmx100m paquete 6 rollos",
      "Cinta canela transparente 48mmx100m paquete 6",
      "Cinta para empaque silenciosa 48mmx66m paquete 6",
      "Cinta de embalaje reforzada con hilo 50mmx50m",
      "Cinta de papel kraft engomada 70mmx50m",
      "Cinta impresa con logo personalizada"
    ]
  },
  {
    cat: "empaques",
    catName: "Empaques y embalaje",
    family: "Plastico burbuja y acolchados",
    keywords: ["plastico burbuja", "burbuja", "acolchado"],
    variants: [
      "Rollo plastico burbuja 1.5mx100m burbuja chica",
      "Rollo plastico burbuja 1.5mx50m burbuja grande",
      "Bobina plastico burbuja con perforacion cada 30cm",
      "Sobre acolchado tipo burbuja tamano carta paquete 25",
      "Sobre acolchado tamano medio paquete 50",
      "Hoja de espuma de polietileno protectora paquete 25"
    ]
  },
  {
    cat: "empaques",
    catName: "Empaques y embalaje",
    family: "Stretch film y envoltura",
    keywords: ["stretch film", "playo", "emplaye", "envoltura"],
    variants: [
      "Stretch film transparente 50cmx300m calibre 60",
      "Stretch film transparente 50cmx500m calibre 80",
      "Stretch film negro opaco 50cmx300m",
      "Stretch film manual con dispensador",
      "Stretch film automatico para maquina envolvedora",
      "Pelicula retractil para empaque"
    ]
  },
  {
    cat: "empaques",
    catName: "Empaques y embalaje",
    family: "Bolsas de plastico",
    keywords: ["bolsa plastica", "bolsa polietileno", "bolsa transparente"],
    variants: [
      "Bolsa polietileno transparente 30x40cm paquete 100",
      "Bolsa polietileno transparente 40x60cm paquete 100",
      "Bolsa polietileno con cierre hermetico 15x20cm paquete 100",
      "Bolsa polietileno con cierre hermetico 25x30cm paquete 100",
      "Bolsa antiestatica para componentes electronicos paquete 100",
      "Bolsa para basura 90x120cm paquete 25",
      "Bolsa kraft con asa para retail paquete 50"
    ]
  },
  {
    cat: "empaques",
    catName: "Empaques y embalaje",
    family: "Esquineros y protectores",
    keywords: ["esquinero", "protector", "esquina"],
    variants: [
      "Esquinero carton 50x50x500mm paquete 50",
      "Esquinero carton 75x75x1000mm paquete 25",
      "Protector de espuma para esquinas paquete 100",
      "Protector tubular para barras paquete 50"
    ]
  },
  {
    cat: "empaques",
    catName: "Empaques y embalaje",
    family: "Etiquetas para envio",
    keywords: ["etiqueta envio", "etiqueta producto", "etiqueta cartones"],
    variants: [
      "Etiquetas para envio Fragil 10x6cm paquete 500",
      "Etiquetas para envio Este Lado Arriba paquete 500",
      "Etiquetas adhesivas blancas en blanco para imprimir 10x15cm paquete 250",
      "Etiquetas con codigo de barras pre-impresas rollo 1000"
    ]
  },
  {
    cat: "empaques",
    catName: "Empaques y embalaje",
    family: "Papel kraft y relleno",
    keywords: ["papel kraft", "relleno", "papel embalaje"],
    variants: [
      "Rollo papel kraft 60cmx150m para envoltura",
      "Rollo papel kraft 90cmx150m para envoltura",
      "Bobina papel relleno antifriccion para cajas",
      "Picadillo de papel para relleno de empaque saco 5kg",
      "Cacahuates de polietileno expandido para relleno saco 100L"
    ]
  },
  {
    cat: "empaques",
    catName: "Empaques y embalaje",
    family: "Dispensadores y herramientas empaque",
    keywords: ["dispensador cinta", "pistola cinta", "herramienta empaque"],
    variants: [
      "Dispensador de cinta canela para almacen",
      "Dispensador de cinta pistola de mano",
      "Engrapadora para carton",
      "Selladora termica de bolsas 30cm",
      "Selladora termica con pedal 50cm"
    ]
  },
  {
    cat: "empaques",
    catName: "Empaques y embalaje",
    family: "Empaques para servicio de alimentos",
    keywords: ["empaque alimentos", "contenedor comida", "termo"],
    variants: [
      "Contenedor unicel comida con tapa paquete 100",
      "Contenedor para sopa kraft con tapa paquete 50",
      "Vaso unicel 12oz paquete 50",
      "Vaso kraft 16oz paquete 50",
      "Bolsa kraft para llevar comida paquete 100"
    ]
  },

  // ============================================
  // 7. HERRAMIENTAS Y EPP
  // ============================================
  {
    cat: "herramientas",
    catName: "Herramientas y EPP",
    family: "Cubrebocas y mascarillas",
    keywords: ["cubrebocas", "mascarilla", "tapabocas", "kn95", "n95"],
    brands: ["3M", "Honeywell"],
    variants: [
      "Cubrebocas KN95 5 capas certificado caja 50 piezas",
      "Cubrebocas N95 3M caja 20 piezas",
      "Cubrebocas tricapa desechable adulto caja 50 piezas",
      "Cubrebocas tricapa desechable infantil caja 50 piezas",
      "Cubrebocas FFP2 certificacion europea caja 25 piezas",
      "Cubrebocas con valvula de exhalacion caja 25 piezas",
      "Respirador media cara con cartuchos quimicos"
    ]
  },
  {
    cat: "herramientas",
    catName: "Herramientas y EPP",
    family: "Guantes de proteccion",
    keywords: ["guantes", "guantes seguridad"],
    variants: [
      "Guantes de latex desechables caja 100 piezas",
      "Guantes de nitrilo desechables caja 100 piezas",
      "Guantes de carnaza para uso rudo paquete 12 pares",
      "Guantes anticorte nivel 5 paquete 12 pares",
      "Guantes resistentes a quimicos uso pesado",
      "Guantes termicos para manejo de calor",
      "Guantes dielectricos clase 0 certificacion electrica"
    ]
  },
  {
    cat: "herramientas",
    catName: "Herramientas y EPP",
    family: "Lentes de proteccion",
    keywords: ["lentes seguridad", "goggles", "proteccion ocular"],
    variants: [
      "Lentes de seguridad transparentes con armazon policarbonato",
      "Lentes de seguridad oscuros para exteriores",
      "Goggles tipo gafa con sello de espuma anti-polvo",
      "Goggles para soldadura con tono 5",
      "Careta de soldador autoescurecible electronica"
    ]
  },
  {
    cat: "herramientas",
    catName: "Herramientas y EPP",
    family: "Cascos de proteccion",
    keywords: ["casco", "casco seguridad", "casco trabajo"],
    variants: [
      "Casco de seguridad color blanco con suspension 4 puntos",
      "Casco de seguridad color amarillo certificado ANSI",
      "Casco de seguridad color azul para electricista",
      "Casco con barbiquejo y rejilla protectora facial",
      "Casco ventilado para altas temperaturas"
    ]
  },
  {
    cat: "herramientas",
    catName: "Herramientas y EPP",
    family: "Calzado de seguridad",
    keywords: ["botas trabajo", "calzado seguridad", "zapato"],
    variants: [
      "Bota con casquillo de acero piel negra",
      "Bota con casquillo de composite piel negra",
      "Bota dielectrica para electricista certificada",
      "Bota para uso pesado en construccion con suela antiderrapante",
      "Zapato de vestir con casquillo",
      "Bota de hule para areas humedas con suela antiderrapante"
    ]
  },
  {
    cat: "herramientas",
    catName: "Herramientas y EPP",
    family: "Senaletica y seguridad vial",
    keywords: ["traficono", "cono", "senalamiento", "barrera"],
    variants: [
      "Cono de trafico 70cm color naranja con reflejante",
      "Cono de trafico 90cm color naranja con doble reflejante",
      "Trafitambor plastico para senalamiento",
      "Barrera plastica de seguridad con base de hule",
      "Letrero de piso amarillo precaucion piso mojado paquete 6",
      "Cinta delimitadora amarilla negra 7cmx100m"
    ]
  },
  {
    cat: "herramientas",
    catName: "Herramientas y EPP",
    family: "Herramientas manuales",
    keywords: ["herramienta", "destornillador", "llave", "martillo"],
    brands: ["Truper", "Stanley", "DeWalt"],
    variants: [
      "Juego de destornilladores 6 piezas combinacion plano y cruz",
      "Juego de llaves combinadas metricas 10 piezas",
      "Juego de llaves combinadas pulgadas 10 piezas",
      "Martillo de una 16 onzas con mango de fibra",
      "Pinzas universales 8 pulgadas mango aislado",
      "Pinzas de presion ajustables",
      "Cinta metrica flexometro 5 metros uso rudo",
      "Nivel de aluminio 60cm con tres viales",
      "Juego de dados metricos cuadro 1/2 pulgada 24 piezas"
    ]
  },
  {
    cat: "herramientas",
    catName: "Herramientas y EPP",
    family: "Herramientas electricas",
    keywords: ["taladro", "atornillador", "rotomartillo", "esmeril"],
    brands: ["DeWalt", "Makita", "Bosch", "Milwaukee"],
    variants: [
      "Taladro inalambrico 18V con 2 baterias y maletin",
      "Rotomartillo SDS Plus 850W para concreto",
      "Atornillador de impacto inalambrico 18V",
      "Esmeril angular 4.5 pulgadas 720W",
      "Sierra circular 7.25 pulgadas 1400W",
      "Lijadora orbital 5 pulgadas con extraccion de polvo"
    ]
  },
  {
    cat: "herramientas",
    catName: "Herramientas y EPP",
    family: "Soldadura",
    keywords: ["soldadora", "soldadura", "electrodos"],
    variants: [
      "Soldadora inversora 200 amperios con accesorios",
      "Soldadora MIG 180 amperios para uso pesado",
      "Electrodos soldadura 6013 1/8 pulgada paquete 5kg",
      "Cilindro de gas argon 1m3",
      "Guantes para soldador piel de carnaza"
    ]
  },
  {
    cat: "herramientas",
    catName: "Herramientas y EPP",
    family: "Equipo de medicion",
    keywords: ["multimetro", "calibrador", "vernier", "telemetro"],
    variants: [
      "Multimetro digital con true RMS y temperatura",
      "Calibrador vernier digital 150mm acero inoxidable",
      "Telemetro laser distancia hasta 50 metros",
      "Termometro infrarrojo",
      "Bascula digital plataforma 300kg"
    ]
  },
  {
    cat: "herramientas",
    catName: "Herramientas y EPP",
    family: "Limpieza para almacen y planta",
    keywords: ["limpieza", "trapeador", "escoba", "limpiador"],
    variants: [
      "Trapeador con fibra resistente con palo",
      "Cubeta exprimidor con ruedas 30L",
      "Escoba con cerda dura mango largo",
      "Aspiradora tipo trineo 30L seco y humedo",
      "Hidrolavadora 2200psi",
      "Tambo plastico contenedor de basura 200L con tapa"
    ]
  },
  {
    cat: "herramientas",
    catName: "Herramientas y EPP",
    family: "Productos quimicos de limpieza",
    keywords: ["limpiador", "desengrasante", "detergente", "desinfectante"],
    variants: [
      "Desengrasante multiproposito galon",
      "Detergente concentrado para piso galon",
      "Desinfectante hospitalario galon",
      "Jabon antibacterial para manos galon",
      "Limpiador multiusos amonio cuaternario galon",
      "Bote de gel antibacterial 5 litros"
    ]
  },
  {
    cat: "herramientas",
    catName: "Herramientas y EPP",
    family: "Extintores y seguridad contra incendios",
    keywords: ["extintor", "extinguidor", "contra incendios"],
    variants: [
      "Extintor PQS 4.5kg con manometro y soporte",
      "Extintor PQS 6kg con manometro y soporte",
      "Extintor CO2 4.5kg para equipo electrico",
      "Extintor de agua presurizada 10 litros",
      "Servicio de recarga y mantenimiento anual de extintores"
    ]
  },

  // ============================================
  // 8. UNIFORMES Y CALZADO
  // ============================================
  {
    cat: "uniformes",
    catName: "Uniformes y calzado",
    family: "Uniformes para planta y campo",
    keywords: ["uniforme planta", "overol", "camisola", "pantalon trabajo"],
    variants: [
      "Camisola manga larga gabardina paquete 12",
      "Camisola manga corta gabardina paquete 12",
      "Pantalon gabardina tipo cargo paquete 12",
      "Overol gabardina manga larga unisex paquete 12",
      "Overol mezclilla con cinta reflejante paquete 12",
      "Conjunto camisola mas pantalon con bordado paquete 12",
      "Uniforme ignifugo para trabajos de alto riesgo",
      "Mameluco desechable tipo Tyvek caja 25 piezas"
    ]
  },
  {
    cat: "uniformes",
    catName: "Uniformes y calzado",
    family: "Uniformes de oficina",
    keywords: ["uniforme oficina", "uniforme administracion"],
    variants: [
      "Camisa Oxford manga larga dama paquete 12",
      "Camisa Oxford manga larga caballero paquete 12",
      "Blusa poliester manga larga dama paquete 12",
      "Pantalon de vestir dama paquete 12",
      "Pantalon de vestir caballero paquete 12",
      "Saco dama paquete 12",
      "Saco caballero paquete 12",
      "Conjunto completo dama con bordado",
      "Conjunto completo caballero con bordado",
      "Falda paquete 12",
      "Corbata color institucional"
    ]
  },
  {
    cat: "uniformes",
    catName: "Uniformes y calzado",
    family: "Uniformes medicos y de salud",
    keywords: ["uniforme medico", "filipina", "scrub", "bata"],
    variants: [
      "Conjunto quirurgico dama 2 piezas filipina mas pantalon paquete 12",
      "Conjunto quirurgico caballero 2 piezas filipina mas pantalon paquete 12",
      "Bata medica manga larga con boton oculto dama paquete 12",
      "Bata medica manga larga con boton oculto caballero paquete 12",
      "Bata de laboratorio paquete 12",
      "Filipina para enfermeria estampada paquete 12",
      "Pijama quirurgico desechable caja 25"
    ]
  },
  {
    cat: "uniformes",
    catName: "Uniformes y calzado",
    family: "Uniformes para restaurantes y chef",
    keywords: ["uniforme chef", "filipina chef", "mandil"],
    variants: [
      "Filipina para chef manga larga linea Air paquete 12",
      "Filipina para chef manga larga ultraligera paquete 12",
      "Pantalon de chef cintura elastica paquete 12",
      "Mandil para mesero corto paquete 12",
      "Mandil de carnicero largo paquete 12",
      "Gorro de chef tipo torque paquete 12",
      "Conjunto completo chef incluye filipina, pantalon y gorro"
    ]
  },
  {
    cat: "uniformes",
    catName: "Uniformes y calzado",
    family: "Uniformes para hoteleria",
    keywords: ["uniforme hotel", "uniforme camarista", "uniforme botones"],
    variants: [
      "Uniforme camarista dama vestido paquete 12",
      "Uniforme recepcionista de hotel paquete 12",
      "Uniforme botones caballero con bordado paquete 12",
      "Uniforme valet parking completo con bordado paquete 12"
    ]
  },
  {
    cat: "uniformes",
    catName: "Uniformes y calzado",
    family: "Chalecos y prendas reflejantes",
    keywords: ["chaleco reflejante", "chaleco seguridad", "alta visibilidad"],
    variants: [
      "Chaleco reflejante naranja talla M paquete 12",
      "Chaleco reflejante amarillo fluorescente talla L paquete 12",
      "Chaleco tipo malla con cinta reflejante para construccion paquete 12",
      "Chaleco impermeable reflejante para exteriores paquete 12",
      "Chaleco con bolsas multiples para operario paquete 12"
    ]
  },
  {
    cat: "uniformes",
    catName: "Uniformes y calzado",
    family: "Playeras y sudaderas",
    keywords: ["playera", "polo", "camiseta"],
    variants: [
      "Playera tipo polo manga corta con bordado paquete 12",
      "Playera tipo polo manga larga con bordado paquete 12",
      "Playera cuello redondo dry-fit con estampado paquete 12",
      "Sudadera con cierre paquete 12",
      "Chamarra plumifera con bordado paquete 12"
    ]
  },
  {
    cat: "uniformes",
    catName: "Uniformes y calzado",
    family: "Gorras y accesorios",
    keywords: ["gorra", "cofia", "cubre cabello"],
    variants: [
      "Gorra bordada paquete 12",
      "Gorra alta visibilidad con cinta reflejante paquete 12",
      "Cofia para alimentos paquete 100",
      "Red cubre cabello para produccion paquete 100",
      "Cubre barba desechable paquete 100"
    ]
  },
  {
    cat: "uniformes",
    catName: "Uniformes y calzado",
    family: "Bordado y serigrafia",
    keywords: ["bordado", "serigrafia", "estampado", "logo personalizado"],
    variants: [
      "Servicio de bordado de logo en uniformes",
      "Servicio de serigrafia sobre playeras",
      "Servicio de estampado vinil termoadherible",
      "Servicio de personalizacion completa con nombre y puesto"
    ]
  },

  // ============================================
  // 9. MAQUINARIA Y MANEJO DE CARGA
  // ============================================
  {
    cat: "maquinaria",
    catName: "Maquinaria y manejo de carga",
    family: "Diablitos",
    keywords: ["diablito", "diablito carga", "carro carga manual"],
    variants: [
      "Diablito de acero capacidad 250kg con plataforma plegable",
      "Diablito de acero capacidad 300kg para uso pesado",
      "Diablito de aluminio capacidad 150kg uso ligero",
      "Diablito convertible 3-en-1 capacidad 300kg",
      "Diablito tipo escalera capacidad 200kg para escalones",
      "Diablito vertical con doble rueda neumatica",
      "Diablito electrico autopropulsado capacidad 500kg",
      "Diablito todo terreno con cuatro ruedas grandes"
    ]
  },
  {
    cat: "maquinaria",
    catName: "Maquinaria y manejo de carga",
    family: "Carritos de carga",
    keywords: ["carrito carga", "carrito plataforma", "carro plataforma"],
    variants: [
      "Carrito plataforma 4 ruedas capacidad 300kg",
      "Carrito plataforma plegable capacidad 150kg",
      "Carrito multinivel 2 niveles capacidad 200kg",
      "Carrito multinivel 3 niveles capacidad 300kg",
      "Carrito jaula con malla capacidad 500kg",
      "Carrito tipo supermercado",
      "Carrito para reparto con ruedas grandes",
      "Carrito plegable transportador con base extensible"
    ]
  },
  {
    cat: "maquinaria",
    catName: "Maquinaria y manejo de carga",
    family: "Tarimas y pallets",
    keywords: ["tarima", "pallet", "pallets madera", "pallet plastico"],
    variants: [
      "Tarima de madera estandar 1.20x1.00m paquete 10",
      "Tarima de madera para exportacion tratada HT paquete 10",
      "Tarima plastica HDPE 1.20x1.00m alta resistencia",
      "Tarima plastica antiderrapante para areas humedas",
      "Tarima plastica multidireccional para racks",
      "Tarima retornable cerrada para uso intensivo",
      "Tarima de carton corrugado para envios ligeros paquete 25"
    ]
  },
  {
    cat: "maquinaria",
    catName: "Maquinaria y manejo de carga",
    family: "Patines hidraulicos",
    keywords: ["patin hidraulico", "pato carga", "patin elevador"],
    variants: [
      "Patin hidraulico manual capacidad 2500kg horquillas estandar",
      "Patin hidraulico manual capacidad 3000kg horquillas reforzadas",
      "Patin hidraulico manual capacidad 5000kg para uso pesado",
      "Patin hidraulico con bascula integrada",
      "Patin electrico autopropulsado capacidad 1500kg",
      "Patin apilador manual altura hasta 1.6m"
    ]
  },
  {
    cat: "maquinaria",
    catName: "Maquinaria y manejo de carga",
    family: "Montacargas",
    keywords: ["montacargas", "forklift"],
    variants: [
      "Montacargas electrico capacidad 1500kg altura 4m",
      "Montacargas electrico capacidad 2500kg altura 5m",
      "Montacargas de combustion gas LP capacidad 2500kg",
      "Montacargas de combustion gas LP capacidad 5000kg para uso pesado",
      "Montacargas tipo apilador para pasillos angostos",
      "Servicio de renta de montacargas mensual con operador"
    ]
  },
  {
    cat: "maquinaria",
    catName: "Maquinaria y manejo de carga",
    family: "Estibadores",
    keywords: ["estibador", "apilador", "stacker"],
    variants: [
      "Estibador manual capacidad 1000kg altura 1.5m",
      "Estibador semielectrico capacidad 1000kg altura 1.6m",
      "Estibador electrico autopropulsado capacidad 1200kg altura 3m",
      "Estibador con plataforma operador capacidad 2000kg"
    ]
  },
  {
    cat: "maquinaria",
    catName: "Maquinaria y manejo de carga",
    family: "Escaleras",
    keywords: ["escalera", "escalera tijera", "escalera extension"],
    variants: [
      "Escalera tijera aluminio 6 peldanos uso rudo",
      "Escalera tijera aluminio 8 peldanos uso rudo",
      "Escalera tijera aluminio 10 peldanos uso rudo",
      "Escalera de extension aluminio 24 peldanos",
      "Escalera tipo plataforma con barandal 4 peldanos",
      "Escalera de fibra de vidrio dielectrica para electricistas",
      "Andamio modular para construccion 2m altura"
    ]
  },
  {
    cat: "maquinaria",
    catName: "Maquinaria y manejo de carga",
    family: "Gruas y polipastos",
    keywords: ["grua", "polipasto", "winche", "diferencial"],
    variants: [
      "Polipasto manual de cadena capacidad 1 tonelada",
      "Polipasto manual de cadena capacidad 2 toneladas",
      "Polipasto electrico 1 tonelada altura 6m",
      "Grua pluma movil capacidad 1 tonelada con base",
      "Diferencial de palanca capacidad 1.5 toneladas",
      "Servicio de renta de grua mensual con operador"
    ]
  },
  {
    cat: "maquinaria",
    catName: "Maquinaria y manejo de carga",
    family: "Envolvedoras y embaladoras",
    keywords: ["envolvedora", "emplayadora", "embaladora"],
    variants: [
      "Envolvedora manual para stretch film",
      "Envolvedora semi-automatica con plataforma giratoria",
      "Envolvedora robotizada para alta produccion",
      "Embaladora termica para retractil de paquetes"
    ]
  },
  {
    cat: "maquinaria",
    catName: "Maquinaria y manejo de carga",
    family: "Basculas",
    keywords: ["bascula", "pesa"],
    variants: [
      "Bascula plataforma digital 150kg con display",
      "Bascula plataforma digital 300kg con display",
      "Bascula plataforma digital 1000kg con base reforzada",
      "Bascula para tarima capacidad 2000kg",
      "Bascula colgante digital 300kg con gancho",
      "Bascula etiquetadora para retail con impresora"
    ]
  }

];

// Exportar para uso global
if (typeof window !== 'undefined') window.CATALOG = CATALOG;
if (typeof module !== 'undefined') module.exports = CATALOG;

</script>

<div class="toast" id="addToast" role="status" aria-live="polite">
  <svg class="toast-icon w-4 h-4"><use href="#i-check"/></svg>
  <span class="toast-msg">Producto agregado a la solicitud</span>
  <span class="toast-action" data-open-drawer>Ver lista</span>
</div>

<script>
(function() {

  // ============================================
  // ESTADO GLOBAL DEL CARRITO
  // ============================================
  window.BrainstoreCart = window.BrainstoreCart || {
    items: [],
    add(item) {
      // Evitar duplicados por texto + categoría
      const exists = this.items.find(i =>
        i.text === item.text && i.family === item.family
      );
      if (exists) {
        exists.qty = (exists.qty || 1) + 1;
      } else {
        this.items.push({
          id: 'p_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
          text: item.text,
          family: item.family,
          cat: item.cat,
          catName: item.catName,
          qty: item.qty || 1,
          notes: item.notes || '',
          recurrence: 'none',
          custom: item.custom || false
        });
      }
      this.save();
      this.updateBadge();
      return true;
    },
    remove(id) {
      this.items = this.items.filter(i => i.id !== id);
      this.save();
      this.updateBadge();
    },
    setQty(id, qty) {
      const item = this.items.find(i => i.id === id);
      if (item) item.qty = Math.max(1, qty);
      this.save();
      this.updateBadge();
    },
    setRecurrence(id, recurrence) {
      const item = this.items.find(i => i.id === id);
      if (item) item.recurrence = recurrence;
      this.save();
    },
    clear() {
      this.items = [];
      this.save();
      this.updateBadge();
    },
    count() {
      return this.items.length;
    },
    save() {
      try {
        localStorage.setItem('brainstore_cart', JSON.stringify(this.items));
      } catch(e) {}
    },
    load() {
      try {
        const saved = localStorage.getItem('brainstore_cart');
        if (saved) this.items = JSON.parse(saved);
      } catch(e) {}
      this.updateBadge();
    },
    updateBadge() {
      const badge = document.getElementById('cartBadge');
      if (!badge) return;
      const count = this.count();
      badge.textContent = count;
      if (count > 0) {
        badge.style.display = 'inline-flex';
        badge.classList.remove('pulse');
        // re-trigger animation
        void badge.offsetWidth;
        badge.classList.add('pulse');
      } else {
        badge.style.display = 'none';
      }
    }
  };

  // ============================================
  // ICONOS por categoría (slug → símbolo SVG)
  // ============================================
  const CAT_ICONS = {
    tecnologia: 'i-tech',
    mobiliario: 'i-furniture',
    papeleria: 'i-paper',
    impresion: 'i-printer',
    almacenamiento: 'i-storage',
    empaques: 'i-package',
    herramientas: 'i-tools',
    uniformes: 'i-uniform',
    maquinaria: 'i-machine'
  };

  // ============================================
  // NORMALIZAR texto para búsqueda
  // (sin acentos, lowercase, sin caracteres especiales)
  // ============================================
  function normalize(str) {
    return (str || '')
      .toString()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\\u0300-\\u036f]/g, '')
      .replace(/[^a-z0-9\\s]/g, ' ')
      .replace(/\\s+/g, ' ')
      .trim();
  }

  // ============================================
  // ÍNDICE PRECOMPUTADO
  // Se construye UNA vez al cargar y se reutiliza
  // en cada búsqueda. Búsqueda en ~1-2ms.
  // ============================================
  let SEARCH_INDEX = null;

  function buildIndex() {
    if (SEARCH_INDEX || !window.CATALOG) return;
    SEARCH_INDEX = window.CATALOG.map(family => {
      const familyNorm = normalize(family.family);
      const keywordsNorm = (family.keywords || []).map(normalize).join(' ');
      const brandsNorm = (family.brands || []).map(normalize).join(' ');
      const catNorm = normalize(family.catName);
      const haystack = \`\${familyNorm} \${keywordsNorm} \${brandsNorm} \${catNorm}\`;
      // Pre-normalizar cada variante una sola vez
      const variantsNorm = (family.variants || []).map(v => normalize(v));
      return {
        family: family,
        haystack: haystack,
        variantsNorm: variantsNorm
      };
    });
  }

  // ============================================
  // BUSCADOR — Usa el índice precomputado
  // ============================================
  function search(query) {
    const q = normalize(query);
    if (!q) return [];

    const terms = q.split(' ').filter(t => t.length > 1);
    if (!terms.length) return [];

    if (!SEARCH_INDEX) buildIndex();
    if (!SEARCH_INDEX) return [];

    const results = [];

    for (let i = 0; i < SEARCH_INDEX.length; i++) {
      const entry = SEARCH_INDEX[i];
      const family = entry.family;

      // ¿Match en haystack (familia/keywords/brands/cat)?
      let familyMatch = false;
      for (let t = 0; t < terms.length; t++) {
        if (entry.haystack.includes(terms[t])) { familyMatch = true; break; }
      }

      // ¿Match exacto de marca?
      let brandMatch = false;
      if (family.brands) {
        for (let b = 0; b < family.brands.length; b++) {
          const bn = normalize(family.brands[b]);
          for (let t = 0; t < terms.length; t++) {
            if (bn === terms[t] || bn.includes(terms[t])) { brandMatch = true; break; }
          }
          if (brandMatch) break;
        }
      }

      // Filtrar variantes (todos los términos deben matchear en variante O haystack)
      const matchedVariants = [];
      for (let v = 0; v < entry.variantsNorm.length; v++) {
        const vNorm = entry.variantsNorm[v];
        let allMatch = true;
        for (let t = 0; t < terms.length; t++) {
          if (!vNorm.includes(terms[t]) && !entry.haystack.includes(terms[t])) {
            allMatch = false;
            break;
          }
        }
        if (allMatch) matchedVariants.push(family.variants[v]);
      }

      if (familyMatch || matchedVariants.length > 0) {
        const variantsToShow = matchedVariants.length > 0 ? matchedVariants : family.variants;
        results.push({
          ...family,
          matchedVariants: variantsToShow,
          score: matchedVariants.length + (brandMatch ? 3 : 0) + (familyMatch ? 2 : 0)
        });
      }
    }

    results.sort((a, b) => b.score - a.score);
    return results;
  }

  // ============================================
  // HIGHLIGHT — Resalta términos buscados en el texto
  // Implementación simple y rápida, tolerante a acentos
  // ============================================
  function highlight(text, query) {
    const q = normalize(query);
    const terms = q.split(' ').filter(t => t.length > 1);
    if (!terms.length || !text) return text;

    // Para cada término, encontrar su posición en el texto normalizado
    // y mapearla al texto original (mismo length tras normalizar acentos simples)
    const textNorm = normalize(text);
    const ranges = [];

    terms.forEach(term => {
      let idx = 0;
      while ((idx = textNorm.indexOf(term, idx)) !== -1) {
        ranges.push([idx, idx + term.length]);
        idx += term.length;
      }
    });

    if (!ranges.length) return text;

    // Merge overlapping ranges
    ranges.sort((a, b) => a[0] - b[0]);
    const merged = [ranges[0]];
    for (let i = 1; i < ranges.length; i++) {
      const last = merged[merged.length - 1];
      if (ranges[i][0] <= last[1]) {
        last[1] = Math.max(last[1], ranges[i][1]);
      } else {
        merged.push(ranges[i]);
      }
    }

    // Reconstruir el texto con <mark>
    // Como normalize puede colapsar caracteres especiales en espacios,
    // los índices del texto normalizado coinciden 1:1 con el original solo si no hay caracteres raros.
    // Para los productos descriptivos esto funciona bien.
    let result = '';
    let cursor = 0;
    merged.forEach(([start, end]) => {
      if (start >= text.length) return;
      const safeEnd = Math.min(end, text.length);
      result += text.substring(cursor, start);
      result += '<mark>' + text.substring(start, safeEnd) + '</mark>';
      cursor = safeEnd;
    });
    result += text.substring(cursor);

    return result;
  }

  // ============================================
  // RENDER del dropdown
  // Estructura: header fijo + scroll + footer fijo
  // ============================================
  function renderDropdown(query, results) {
    const dropdown = document.getElementById('searchDropdown');
    if (!dropdown) return;

    let headerHtml = '';
    let bodyHtml = '';

    // Caso: query vacío
    if (!query || !query.trim()) {
      headerHtml = \`
        <div class="dropdown-header-count">
          <strong>\${window.CATALOG ? window.CATALOG.length : 0}</strong> familias · <strong>\${getTotalVariants()}</strong> variantes en catálogo
        </div>
        <button type="button" class="dropdown-close-btn" data-close-dropdown aria-label="Cerrar resultados">
          <svg class="w-4 h-4"><use href="#i-close"/></svg>
        </button>
      \`;
      bodyHtml = renderEmptyState();
    }
    // Caso: sin resultados
    else if (!results.length) {
      headerHtml = \`
        <div class="dropdown-header-count">
          Sin coincidencias para "<strong>\${escapeHtml(query)}</strong>"
        </div>
        <button type="button" class="dropdown-close-btn" data-close-dropdown aria-label="Cerrar resultados">
          <svg class="w-4 h-4"><use href="#i-close"/></svg>
        </button>
      \`;
      bodyHtml = renderNoResults(query);
    }
    // Caso: con resultados
    else {
      const totalVariants = results.reduce((sum, r) => sum + r.matchedVariants.length, 0);
      headerHtml = \`
        <div class="dropdown-header-count">
          <strong>\${results.length}</strong> \${results.length === 1 ? 'familia' : 'familias'} · <strong>\${totalVariants}</strong> \${totalVariants === 1 ? 'variante' : 'variantes'}
        </div>
        <button type="button" class="dropdown-close-btn" data-close-dropdown aria-label="Cerrar resultados">
          <svg class="w-4 h-4"><use href="#i-close"/></svg>
        </button>
      \`;

      let resultsHtml = '';
      results.slice(0, 20).forEach(family => {
        const catIcon = CAT_ICONS[family.cat] || 'i-package';
        const brandsHtml = family.brands && family.brands.length
          ? \`<span class="dropdown-group-brands">marcas: <strong>\${family.brands.slice(0, 4).join(', ')}</strong>\${family.brands.length > 4 ? '...' : ''}</span>\`
          : '';

        resultsHtml += \`
          <div class="dropdown-group">
            <div class="dropdown-group-header">
              <div class="dropdown-group-title">
                <svg class="dropdown-group-cat-icon"><use href="#\${catIcon}"/></svg>
                <span>\${escapeHtml(family.family)}</span>
                <span class="dropdown-group-cat">/ \${escapeHtml(family.catName)}</span>
              </div>
              \${brandsHtml}
            </div>
        \`;

        family.matchedVariants.slice(0, 8).forEach(variant => {
          const isAdded = isInCart(variant, family.family);
          resultsHtml += \`
            <div class="dropdown-item" data-variant-text="\${escapeHtml(variant)}" data-family="\${escapeHtml(family.family)}" data-cat="\${family.cat}" data-cat-name="\${escapeHtml(family.catName)}">
              <div class="dropdown-item-text">\${highlight(escapeHtml(variant), query)}</div>
              <button type="button" class="dropdown-add-btn \${isAdded ? 'is-added' : ''}" data-add-variant aria-label="Agregar a solicitud">
                <svg class="w-3.5 h-3.5 icon-plus"><use href="#i-plus"/></svg>
                <svg class="w-3.5 h-3.5 icon-check"><use href="#i-check"/></svg>
              </button>
            </div>
          \`;
        });

        if (family.matchedVariants.length > 8) {
          resultsHtml += \`
            <div class="dropdown-item" style="cursor: default; font-style: italic; color: rgba(10,10,10,0.5); font-size: 12px;">
              + \${family.matchedVariants.length - 8} variantes más en esta familia
            </div>
          \`;
        }

        resultsHtml += \`</div>\`;
      });

      bodyHtml = resultsHtml;
    }

    // Footer FIJO siempre visible — pre-llena con query actual
    const footerHtml = renderFixedFooter(query);

    dropdown.innerHTML = \`
      <div class="dropdown-header">
        \${headerHtml}
      </div>
      <div class="search-dropdown-scroll" id="dropdownScroll">
        \${bodyHtml}
      </div>
      <div class="search-dropdown-footer">
        \${footerHtml}
      </div>
    \`;

    openDropdownEl();

    const scrollEl = document.getElementById('dropdownScroll');
    if (scrollEl) scrollEl.scrollTop = 0;
  }

  function openDropdownEl() {
    const dropdown = document.getElementById('searchDropdown');
    const backdrop = document.getElementById('searchBackdrop');
    if (dropdown) dropdown.classList.add('is-open');
    if (backdrop) backdrop.classList.add('is-active');
  }

  function getTotalVariants() {
    if (!window.CATALOG) return 0;
    return window.CATALOG.reduce((sum, f) => sum + (f.variants?.length || 0), 0);
  }

  // ============================================
  // FOOTER FIJO — Catálogo abierto
  // Siempre visible al fondo del panel
  // Incluye form de producto personalizado con double-check
  // ============================================
  function renderFixedFooter(prefilled) {
    return \`
      <div class="footer-label">
        <svg class="w-3 h-3"><use href="#i-sparkle"/></svg>
        <span>Catálogo abierto</span>
      </div>
      <div class="footer-title">¿No encuentra el producto que necesita?</div>
      <div class="footer-msg">
        Envíe la solicitud manualmente. Un especialista revisará el requerimiento y enviará una propuesta formal en 24 horas con marca, modelo y disponibilidad.
      </div>
      <button type="button" class="footer-btn" data-show-custom-form>
        <svg class="w-3.5 h-3.5"><use href="#i-plus"/></svg>
        <span>Solicitar producto manualmente</span>
      </button>

      <div class="footer-custom-form" id="customForm">
        <label class="footer-form-label">Producto requerido</label>
        <input type="text" class="footer-form-input" id="customProduct" placeholder="Ejemplo: prensa hidráulica 50 toneladas" value="\${escapeHtml(prefilled || '')}" />

        <label class="footer-form-label">Especificaciones (marca, modelo, capacidad)</label>
        <textarea class="footer-form-textarea" id="customSpecs" placeholder="Detalles relevantes para cotización"></textarea>

        <div class="footer-form-row">
          <div>
            <label class="footer-form-label">Cantidad</label>
            <input type="number" class="footer-form-input" id="customQty" value="1" min="1" />
          </div>
          <div>
            <label class="footer-form-label">Unidad</label>
            <input type="text" class="footer-form-input" id="customUnit" value="pieza" />
          </div>
        </div>

        <!-- Double-check alert: aparece cuando se detectan coincidencias -->
        <div class="double-check-alert" id="doubleCheckAlert">
          <div class="double-check-title">
            <svg class="w-4 h-4" style="color: #C9A227;"><use href="#i-sparkle"/></svg>
            <span>El producto ya existe en catálogo</span>
          </div>
          <div class="double-check-msg">
            Se detectaron productos disponibles que coinciden con el requerimiento. Seleccione uno para anexarlo a la solicitud.
          </div>
          <div class="double-check-suggestions" id="doubleCheckSuggestions"></div>
        </div>

        <div class="footer-form-actions">
          <button type="button" class="footer-form-submit" id="customSubmit">
            <span>Enviar solicitud</span>
          </button>
          <button type="button" class="footer-form-cancel" id="customCancel">Cancelar</button>
        </div>
      </div>
    \`;
  }

  // ============================================
  // EMPTY STATE (input vacío)
  // ============================================
  function renderEmptyState() {
    const suggestions = ['cubrebocas', 'carrito de carga', 'cajas carton', 'laptop', 'uniforme', 'hojas bond', 'silla oficina', 'tarima', 'extintor'];
    return \`
      <div class="dropdown-empty">
        <svg class="dropdown-empty-icon"><use href="#i-search"/></svg>
        <div class="dropdown-empty-title">Escriba un producto para comenzar</div>
        <div class="dropdown-empty-msg">
          Más de 150,000 productos en 9 categorías corporativas e industriales.<br>
          Búsqueda por nombre, categoría o sinónimos.
        </div>
        <div class="dropdown-empty-suggestions">
          \${suggestions.map(s => \`<button type="button" class="pop-search-chip" data-quick-search="\${s}">\${s}</button>\`).join('')}
        </div>
      </div>
    \`;
  }

  // ============================================
  // NO RESULTS — solo muestra opción custom
  // ============================================
  function renderNoResults(query) {
    return \`
      <div class="dropdown-empty">
        <svg class="dropdown-empty-icon"><use href="#i-search"/></svg>
        <div class="dropdown-empty-title">No se encontraron coincidencias para "\${escapeHtml(query)}"</div>
        <div class="dropdown-empty-msg">
          Catálogo abierto sin restricción de marca o categoría.<br>
          Use el botón <strong>"Agregar producto personalizado"</strong> abajo para incorporar este producto a la solicitud.
        </div>
      </div>
    \`;
  }

  // ============================================
  // DOUBLE-CHECK: detectar productos similares
  // antes de aceptar producto personalizado
  // ============================================
  function findSimilarProducts(text, maxResults) {
    maxResults = maxResults || 5;
    const normalized = normalize(text);
    if (!normalized) return [];

    // Extraer palabras clave del texto (palabras >= 3 chars)
    const keywords = normalized.split(' ').filter(w => w.length >= 3);
    if (!keywords.length) return [];

    const matches = [];

    if (!SEARCH_INDEX) buildIndex();
    if (!SEARCH_INDEX) return [];

    SEARCH_INDEX.forEach(entry => {
      const family = entry.family;
      // Scoring: cuántas palabras del input aparecen en cada variante
      family.variants.forEach((variant, vIdx) => {
        const vNorm = entry.variantsNorm[vIdx];
        let score = 0;
        keywords.forEach(kw => {
          if (vNorm.includes(kw)) score += 2;
          else if (entry.haystack.includes(kw)) score += 1;
        });
        if (score >= 2) {
          matches.push({
            text: variant,
            family: family.family,
            cat: family.cat,
            catName: family.catName,
            score: score
          });
        }
      });
    });

    matches.sort((a, b) => b.score - a.score);
    return matches.slice(0, maxResults);
  }

  // ============================================
  // AGREGAR PRODUCTO PERSONALIZADO al catálogo runtime
  // Para que aparezca en búsquedas futuras
  // ============================================
  function addCustomToCatalog(product, specs) {
    if (!window.CATALOG) return;

    // Verificar si ya existe la familia "Productos personalizados"
    let customFamily = window.CATALOG.find(f => f.family === 'Productos personalizados');
    if (!customFamily) {
      customFamily = {
        cat: 'custom',
        catName: 'Solicitud personalizada',
        family: 'Productos personalizados',
        keywords: ['personalizado', 'especial', 'nuevo'],
        variants: []
      };
      window.CATALOG.push(customFamily);
    }

    const fullText = \`\${product}\${specs ? ' — ' + specs : ''}\`;
    if (!customFamily.variants.includes(fullText)) {
      customFamily.variants.push(fullText);
    }

    // Invalidar el índice para que se reconstruya con el nuevo producto
    SEARCH_INDEX = null;
    buildIndex();
  }

  // ============================================
  // UTILS
  // ============================================
  function escapeHtml(str) {
    return (str || '').toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function isInCart(variantText, familyName) {
    return window.BrainstoreCart.items.some(i =>
      i.text === variantText && i.family === familyName
    );
  }

  function showToast(msg) {
    const toast = document.getElementById('addToast');
    if (!toast) return;
    toast.querySelector('.toast-msg').textContent = msg || 'Producto agregado a la solicitud';
    toast.classList.add('is-visible');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => toast.classList.remove('is-visible'), 3000);
  }

  // ============================================
  // EVENTOS
  // ============================================
  function initSearch() {
    const input = document.getElementById('heroSearchInput');
    const btn = document.getElementById('heroSearchBtn');
    const dropdown = document.getElementById('searchDropdown');

    if (!input || !dropdown) return;

    // Debounce
    let timer = null;
    function performSearch() {
      const query = input.value.trim();
      const results = search(query);
      renderDropdown(query, results);
    }

    // Focus → mostrar empty state
    // Flag para no reabrir el dropdown al recibir focus tras cierre explícito
    let suppressOpen = false;

    input.addEventListener('focus', () => {
      if (suppressOpen) return;
      if (input.value.trim()) {
        performSearch();
      }
    });

    // Click solo abre dropdown si hay texto (no abre vacío)
    input.addEventListener('click', () => {
      if (suppressOpen) return;
      if (!dropdown.classList.contains('is-open') && input.value.trim()) {
        performSearch();
      }
    });

    // Input change con debounce muy corto (50ms es prácticamente instantáneo)
    input.addEventListener('input', () => {
      // Si el usuario está tecleando activamente, permitir abrir el dropdown
      suppressOpen = false;
      clearTimeout(timer);
      timer = setTimeout(performSearch, 50);
    });

    // Enter en input
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        clearTimeout(timer);
        performSearch();
      } else if (e.key === 'Escape') {
        closeDropdown(true);
      }
    });

    // ESC global: cierra el dropdown desde cualquier lugar
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dropdown.classList.contains('is-open')) {
        e.preventDefault();
        closeDropdown(true);
      }
    });

    // Botón Buscar
    if (btn) {
      btn.addEventListener('click', () => {
        clearTimeout(timer);
        performSearch();
        if (!input.value.trim()) input.focus();
      });
    }

    // Cerrar al hacer clic fuera (sin romper la animación)
    document.addEventListener('click', (e) => {
      const wrap = document.querySelector('.hero-search-wrap');
      const dropdownEl = document.getElementById('searchDropdown');

      // NO cerrar si hay otros modales/drawers abiertos
      // (su prioridad de UI es mayor que el dropdown de búsqueda)
      const submitModalOpen = document.getElementById('submitModal')?.classList.contains('is-open');
      const successModalOpen = document.getElementById('successModal')?.classList.contains('is-open');
      const catModalOpen = document.querySelector('.cat-modal')?.classList.contains('is-open');
      const cartDrawerOpen = document.getElementById('cartDrawer')?.classList.contains('is-open');
      if (submitModalOpen || successModalOpen || catModalOpen || cartDrawerOpen) {
        return;
      }

      // Tampoco cerrar si el click es dentro de algún modal/drawer
      if (e.target.closest('.submit-modal, .success-modal, .cat-modal, .cart-drawer, .submit-modal-backdrop, .success-modal-backdrop, .cat-modal-backdrop, .cart-drawer-backdrop')) {
        return;
      }

      // No cerrar si el click es dentro del dropdown o del wrap del input
      if (wrap && !wrap.contains(e.target) && dropdownEl && !dropdownEl.contains(e.target)) {
        closeDropdown(true);
      }
    });

    // Click en backdrop cierra y devuelve foco al input
    const backdrop = document.getElementById('searchBackdrop');
    if (backdrop) {
      backdrop.addEventListener('click', () => closeDropdown(true));
    }

    function closeDropdown(returnFocus) {
      dropdown.classList.remove('is-open');
      const backdrop = document.getElementById('searchBackdrop');
      if (backdrop) backdrop.classList.remove('is-active');
      // Suprimir reapertura por focus durante 400ms (más que la animación)
      suppressOpen = true;
      setTimeout(() => { suppressOpen = false; }, 400);
      // Devolver el foco al input (true por defecto)
      if (returnFocus !== false && input) {
        setTimeout(() => {
          input.focus();
          const len = input.value.length;
          input.setSelectionRange(len, len);
        }, 50);
      }
    }

    function openDropdown() {
      dropdown.classList.add('is-open');
      const backdrop = document.getElementById('searchBackdrop');
      if (backdrop) backdrop.classList.add('is-active');
    }

    // Delegación de eventos en el dropdown
    dropdown.addEventListener('click', (e) => {
      // Botón cerrar (X) - tiene prioridad absoluta
      if (e.target.closest('[data-close-dropdown]')) {
        e.stopPropagation();
        e.preventDefault();
        closeDropdown(true);
        return;
      }

      // Quick search chip
      const chip = e.target.closest('[data-quick-search]');
      if (chip) {
        const term = chip.dataset.quickSearch;
        input.value = term;
        input.focus();
        performSearch();
        return;
      }

      // Botón agregar variante
      const addBtn = e.target.closest('[data-add-variant]');
      if (addBtn) {
        const item = addBtn.closest('.dropdown-item');
        if (!item) return;

        const variantText = item.dataset.variantText;
        const family = item.dataset.family;
        const cat = item.dataset.cat;
        const catName = item.dataset.catName;

        window.BrainstoreCart.add({
          text: variantText,
          family: family,
          cat: cat,
          catName: catName,
          qty: 1
        });

        addBtn.classList.add('is-added');
        showToast(\`Agregado: \${variantText.substring(0, 50)}\${variantText.length > 50 ? '...' : ''}\`);
        return;
      }

      // Mostrar formulario custom
      if (e.target.closest('[data-show-custom-form]')) {
        const form = document.getElementById('customForm');
        if (form) {
          form.classList.add('is-open');
          const input2 = document.getElementById('customProduct');
          if (input2 && !input2.value) input2.focus();
          // Scroll del dropdown hacia abajo para que el form sea visible
          const scrollEl = document.getElementById('dropdownScroll');
          if (scrollEl) scrollEl.scrollTop = scrollEl.scrollHeight;
        }
        return;
      }

      // Cancelar custom
      if (e.target.id === 'customCancel') {
        const form = document.getElementById('customForm');
        if (form) form.classList.remove('is-open');
        const alertEl = document.getElementById('doubleCheckAlert');
        if (alertEl) alertEl.classList.remove('is-visible');
        // Reset botón
        const submitBtn = document.getElementById('customSubmit');
        if (submitBtn) {
          submitBtn.innerHTML = '<span>Enviar solicitud</span>';
          submitBtn.disabled = false;
          submitBtn.style.opacity = '';
          submitBtn.style.cursor = '';
        }
        return;
      }

      // Clicar una sugerencia del double-check: agrega ese producto y cierra form
      const suggestionEl = e.target.closest('[data-suggestion]');
      if (suggestionEl) {
        const text = suggestionEl.dataset.suggestionText;
        const family = suggestionEl.dataset.suggestionFamily;
        const cat = suggestionEl.dataset.suggestionCat;
        const catName = suggestionEl.dataset.suggestionCatName;
        window.BrainstoreCart.add({
          text: text,
          family: family,
          cat: cat,
          catName: catName,
          qty: 1
        });
        // Cerrar el form custom y limpiar
        document.getElementById('customProduct').value = '';
        document.getElementById('customSpecs').value = '';
        document.getElementById('customForm').classList.remove('is-open');
        document.getElementById('doubleCheckAlert').classList.remove('is-visible');
        // Reset botón
        const submitBtn = document.getElementById('customSubmit');
        if (submitBtn) {
          submitBtn.innerHTML = '<span>Enviar solicitud</span>';
          submitBtn.disabled = false;
          submitBtn.style.opacity = '';
          submitBtn.style.cursor = '';
        }
        showToast(\`Anexado a solicitud: \${text.substring(0, 50)}\${text.length > 50 ? '...' : ''}\`);
        return;
      }

      // Submit custom — con double-check de similares
      if (e.target.id === 'customSubmit' || e.target.closest('#customSubmit')) {
        const product = document.getElementById('customProduct')?.value.trim();
        const specs = document.getElementById('customSpecs')?.value.trim();
        const qty = parseInt(document.getElementById('customQty')?.value) || 1;
        const unit = document.getElementById('customUnit')?.value.trim() || 'pieza';

        if (!product) {
          alert('Indique al menos el nombre del producto');
          return;
        }

        const alertEl = document.getElementById('doubleCheckAlert');
        const submitBtn = document.getElementById('customSubmit');

        // SIEMPRE buscar similares antes de enviar (double-check estricto)
        const similar = findSimilarProducts(product + ' ' + specs, 5);

        if (similar.length > 0) {
          // HAY COINCIDENCIAS — bloquear envío como nuevo, redirigir al catálogo
          const suggHtml = similar.map(s => \`
            <button type="button" class="double-check-suggestion"
              data-suggestion
              data-suggestion-text="\${escapeHtml(s.text)}"
              data-suggestion-family="\${escapeHtml(s.family)}"
              data-suggestion-cat="\${s.cat}"
              data-suggestion-cat-name="\${escapeHtml(s.catName)}">
              <span class="double-check-suggestion-text">\${escapeHtml(s.text)}</span>
              <span class="double-check-suggestion-add">Anexar →</span>
            </button>
          \`).join('');

          document.getElementById('doubleCheckSuggestions').innerHTML = suggHtml;
          alertEl.classList.add('is-visible');

          // Bloquear el botón de envío con mensaje claro
          submitBtn.innerHTML = '<span>Seleccione una opción del catálogo</span>';
          submitBtn.disabled = true;
          submitBtn.style.opacity = '0.4';
          submitBtn.style.cursor = 'not-allowed';

          // Scroll para mostrar el alert
          const scrollEl = document.getElementById('dropdownScroll');
          if (scrollEl) scrollEl.scrollTop = scrollEl.scrollHeight;
          return;
        }

        // NO HAY COINCIDENCIAS — permitir crear nueva solicitud
        const fullText = \`\${product}\${specs ? ' — ' + specs : ''}\`;

        window.BrainstoreCart.add({
          text: fullText,
          family: 'Producto personalizado',
          cat: 'custom',
          catName: 'Solicitud personalizada',
          qty: qty,
          notes: \`Unidad: \${unit}\`,
          custom: true
        });

        // Sumar a la base de datos runtime para futuras búsquedas
        addCustomToCatalog(product, specs);

        // Limpiar form
        document.getElementById('customProduct').value = '';
        document.getElementById('customSpecs').value = '';
        document.getElementById('customQty').value = '1';
        document.getElementById('customUnit').value = 'pieza';
        document.getElementById('customForm').classList.remove('is-open');
        if (alertEl) alertEl.classList.remove('is-visible');

        // Reset botón
        submitBtn.innerHTML = '<span>Enviar solicitud</span>';
        delete submitBtn.dataset.confirmed;

        showToast(\`Solicitud enviada: \${product.substring(0, 40)}\${product.length > 40 ? '...' : ''}\`);
        return;
      }
    });

    // Si el usuario edita el producto personalizado después de un double-check,
    // resetear el estado para volver a chequear
    dropdown.addEventListener('input', (e) => {
      if (e.target.id === 'customProduct' || e.target.id === 'customSpecs') {
        const submitBtn = document.getElementById('customSubmit');
        const alertEl = document.getElementById('doubleCheckAlert');
        if (submitBtn) {
          submitBtn.innerHTML = '<span>Enviar solicitud</span>';
          submitBtn.disabled = false;
          submitBtn.style.opacity = '';
          submitBtn.style.cursor = '';
          delete submitBtn.dataset.confirmed;
        }
        if (alertEl) alertEl.classList.remove('is-visible');
      }
    });

    // Chips de búsquedas frecuentes (fuera del dropdown)
    document.querySelectorAll('[data-quick-search]').forEach(chip => {
      if (!chip.closest('.search-dropdown')) {
        chip.addEventListener('click', () => {
          const term = chip.dataset.quickSearch;
          input.value = term;
          input.focus();
          performSearch();
        });
      }
    });
  }

  // ============================================
  // REVEAL ANIMATION + COUNTER ANIMATION
  // ============================================
  function initReveals() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    // Si no soporta IntersectionObserver, mostrar todo
    if (!('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => io.observe(el));

    // Fallback: si tras 200ms no se han activado (algunos contenedores), forzar
    setTimeout(() => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('is-visible');
        }
      });
    }, 250);
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    if (!('IntersectionObserver' in window)) {
      counters.forEach(c => c.textContent = c.dataset.counter);
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(c => io.observe(c));
  }

  function animateCounter(el) {
    const target = parseInt(el.dataset.counter) || 0;
    const duration = 1400;
    const start = performance.now();
    const startVal = 0;

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startVal + (target - startVal) * eased);
      el.textContent = current;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    }

    requestAnimationFrame(tick);
  }

  // ============================================
  // INIT
  // ============================================
  document.addEventListener('DOMContentLoaded', () => {
    window.BrainstoreCart.load();
    buildIndex(); // Precomputar índice una sola vez
    initSearch();
    initReveals();
    initCounters();
  });

})();
</script>

<script>
(function() {
  // ============================================
  // DATA: 9 categorías con iconos y descripción
  // ============================================
  const CATS = [
    {
      id: 'tecnologia',
      icon: 'i-tech',
      title: 'Tecnología y cómputo',
      shortBrands: 'Apple · HP · Dell · Lenovo · Cisco · Microsoft',
      description: 'Equipos de cómputo, periféricos, redes, videoconferencia, servidores, licencias de software y cámaras de seguridad.'
    },
    {
      id: 'mobiliario',
      icon: 'i-furniture',
      title: 'Mobiliario de oficina',
      shortBrands: 'Mobiliario nacional e importado',
      description: 'Escritorios, sillas, mesas de juntas, archiveros, lockers, libreros, pizarrones, recepción y comedor.'
    },
    {
      id: 'papeleria',
      icon: 'i-paper',
      title: 'Papelería',
      shortBrands: 'Marcas líderes en consumibles',
      description: 'Hojas bond, bolígrafos, marcadores, carpetas, sobres, engrapadoras, post-it, calculadoras, sellos y organizadores.'
    },
    {
      id: 'impresion',
      icon: 'i-printer',
      title: 'Impresión',
      shortBrands: 'HP · Brother · Canon · Epson',
      description: 'Impresoras, plotters, tóners, papel especial, encuadernación, etiquetas, enmicado y servicios de impresión personalizada.'
    },
    {
      id: 'almacenamiento',
      icon: 'i-storage',
      title: 'Almacenamiento',
      shortBrands: 'Soluciones industriales para almacén',
      description: 'Racks, estantería pesada, contenedores plásticos, lockers, cajas archivo, cabinets metálicos y organizadores.'
    },
    {
      id: 'empaques',
      icon: 'i-package',
      title: 'Empaques y embalaje',
      shortBrands: 'Materiales para envío y embalaje',
      description: 'Cajas de cartón, cintas adhesivas, plástico burbuja, stretch film, bolsas, esquineros, papel kraft y dispensadores.'
    },
    {
      id: 'herramientas',
      icon: 'i-tools',
      title: 'Herramientas y EPP',
      shortBrands: 'DeWalt · Makita · Bosch · 3M · Truper · Honeywell',
      description: 'Cubrebocas, guantes, lentes, cascos, calzado de seguridad, herramientas manuales, eléctricas, soldadura y extintores.'
    },
    {
      id: 'uniformes',
      icon: 'i-uniform',
      title: 'Uniformes y calzado',
      shortBrands: 'Confección nacional y especializada',
      description: 'Uniformes para planta, oficina, médicos, restaurantes, hotelería, chalecos reflejantes, playeras, gorras y servicios de bordado.'
    },
    {
      id: 'maquinaria',
      icon: 'i-machine',
      title: 'Maquinaria y manejo de carga',
      shortBrands: 'Equipo industrial para almacén y planta',
      description: 'Diablitos, carritos, tarimas, patines hidráulicos, montacargas, estibadores, escaleras, grúas, envolvedoras y básculas.'
    }
  ];

  // ============================================
  // RENDER de las cards
  // ============================================
  function renderCards() {
    const grid = document.getElementById('catsGrid');
    if (!grid) return;

    let html = '';
    CATS.forEach((cat, idx) => {
      // Obtener counts del catálogo real
      const familiesInCat = window.CATALOG ? window.CATALOG.filter(f => f.cat === cat.id) : [];
      const familyCount = familiesInCat.length;
      const variantCount = familiesInCat.reduce((sum, f) => sum + (f.variants?.length || 0), 0);

      html += \`
        <button type="button" class="cat-card reveal" data-cat-id="\${cat.id}" style="transition-delay: \${idx * 40}ms;">
          <div class="cat-card-num">0\${idx + 1} / 09</div>
          <svg class="cat-card-icon"><use href="#\${cat.icon}"/></svg>
          <h3 class="cat-card-title">\${cat.title}</h3>
          <p class="cat-card-desc">\${cat.description}</p>
          <div class="cat-card-cta">
            <span>Ver familias y marcas</span>
            <svg><use href="#i-arrow"/></svg>
          </div>
        </button>
      \`;
    });
    grid.innerHTML = html;

    // Activar reveal animation en las cards recién creadas
    // (el IntersectionObserver original ya corrió antes de que existieran)
    requestAnimationFrame(() => {
      const newReveals = grid.querySelectorAll('.reveal');
      newReveals.forEach((el, idx) => {
        // Si ya están en viewport al cargar, mostrar inmediatamente con stagger
        const rect = el.getBoundingClientRect();
        const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (inViewport) {
          setTimeout(() => el.classList.add('is-visible'), 50 + idx * 40);
        } else {
          // Si no, observar con IntersectionObserver
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
              }
            });
          }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
          observer.observe(el);
        }
      });
    });

    // Event listener delegado
    grid.addEventListener('click', (e) => {
      const card = e.target.closest('[data-cat-id]');
      if (card) {
        openCatModal(card.dataset.catId);
      }
    });
  }

  // ============================================
  // MODAL: abrir con detalle de categoría
  // ============================================
  function openCatModal(catId) {
    const cat = CATS.find(c => c.id === catId);
    if (!cat) return;

    const modal = document.getElementById('catModal');
    const backdrop = document.getElementById('catModalBackdrop');
    if (!modal || !backdrop) return;

    // Obtener familias del catálogo
    const families = window.CATALOG ? window.CATALOG.filter(f => f.cat === catId) : [];

    // Recolectar todas las marcas únicas de la categoría
    const allBrands = new Set();
    families.forEach(f => {
      if (f.brands && f.brands.length) {
        f.brands.forEach(b => allBrands.add(b));
      }
    });

    const brandsArray = Array.from(allBrands);
    const brandsHtml = brandsArray.length
      ? brandsArray.map(b => \`<span class="cat-modal-brand-chip">\${b}</span>\`).join('')
      : '<span style="font-size: 12px; color: rgba(10,10,10,0.5); font-style: italic;">Marcas según requerimiento del cliente</span>';

    const familiesHtml = families.map(f => \`
      <button type="button" class="cat-modal-family-item" data-family-name="\${escapeAttr(f.family)}">
        <div>
          <div class="cat-modal-family-name">\${escapeHtml(f.family)}</div>
          <div class="cat-modal-family-count">\${f.variants?.length || 0} \${f.variants?.length === 1 ? 'variante' : 'variantes'}</div>
        </div>
        <svg class="cat-modal-family-arrow"><use href="#i-arrow"/></svg>
      </button>
    \`).join('');

    const totalVariants = families.reduce((sum, f) => sum + (f.variants?.length || 0), 0);

    modal.innerHTML = \`
      <div class="cat-modal-header">
        <div class="cat-modal-header-left">
          <div class="cat-modal-icon-wrap">
            <svg><use href="#\${cat.icon}"/></svg>
          </div>
          <div>
            <h3 class="cat-modal-title" id="catModalTitle">\${escapeHtml(cat.title)}</h3>
            <div class="cat-modal-meta">
              <strong>\${families.length}</strong> familias · <strong>\${totalVariants}</strong> variantes en catálogo
            </div>
          </div>
        </div>
        <button type="button" class="cat-modal-close" data-close-cat-modal aria-label="Cerrar">
          <svg><use href="#i-close"/></svg>
        </button>
      </div>

      <div class="cat-modal-body">
        <p style="font-size: 14px; color: rgba(10,10,10,0.7); line-height: 1.5; margin-bottom: 24px;">
          \${escapeHtml(cat.description)}
        </p>

        <div class="cat-modal-brands">
          <button type="button" class="cat-modal-brands-toggle" data-toggle-brands aria-expanded="false">
            <div class="cat-modal-brands-toggle-left">
              <div class="cat-modal-brands-icon-bg">
                <svg><use href="#i-sparkle"/></svg>
              </div>
              <div>
                <span class="cat-modal-brands-toggle-text">Marcas en distribución autorizada</span>
                <span class="cat-modal-brands-toggle-count">\${brandsArray.length || '—'} \${brandsArray.length === 1 ? 'marca' : 'marcas'}</span>
              </div>
            </div>
            <svg class="cat-modal-brands-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="cat-modal-brands-collapse" id="brandsCollapse">
            <div class="cat-modal-brands-grid">
              \${brandsHtml}
            </div>
          </div>
        </div>

        <div>
          <div class="cat-modal-section-label">
            <span>Familias de producto</span>
          </div>
          <div class="cat-modal-families">
            \${familiesHtml}
          </div>
        </div>
      </div>

      <div class="cat-modal-footer">
        <div class="cat-modal-footer-text">
          ¿No encuentra el producto o marca que requiere? El catálogo es abierto, se gestiona cualquier marca o modelo.
        </div>
        <button type="button" class="cat-modal-footer-cta" data-search-in-cat="\${cat.id}" data-search-term="\${escapeAttr(cat.title.toLowerCase())}">
          <svg><use href="#i-search"/></svg>
          <span>Buscar en esta categoría</span>
        </button>
      </div>
    \`;

    // Mostrar
    backdrop.classList.add('is-active');
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeCatModal() {
    const modal = document.getElementById('catModal');
    const backdrop = document.getElementById('catModalBackdrop');
    if (modal) modal.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  // ============================================
  // EVENT LISTENERS
  // ============================================
  function setupModalEvents() {
    const modal = document.getElementById('catModal');
    const backdrop = document.getElementById('catModalBackdrop');

    if (backdrop) {
      backdrop.addEventListener('click', closeCatModal);
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        // Botón cerrar
        if (e.target.closest('[data-close-cat-modal]')) {
          closeCatModal();
          return;
        }

        // Toggle acordeón de marcas
        const toggleBrandsBtn = e.target.closest('[data-toggle-brands]');
        if (toggleBrandsBtn) {
          const collapse = document.getElementById('brandsCollapse');
          const isOpen = toggleBrandsBtn.getAttribute('aria-expanded') === 'true';
          if (isOpen) {
            collapse.classList.remove('is-open');
            toggleBrandsBtn.setAttribute('aria-expanded', 'false');
          } else {
            collapse.classList.add('is-open');
            toggleBrandsBtn.setAttribute('aria-expanded', 'true');
          }
          return;
        }

        // Click en familia → cerrar modal y abrir buscador con esa familia
        const familyItem = e.target.closest('[data-family-name]');
        if (familyItem) {
          const familyName = familyItem.dataset.familyName;
          closeCatModal();
          // Disparar búsqueda en el buscador principal
          setTimeout(() => {
            const searchInput = document.getElementById('heroSearchInput');
            if (searchInput) {
              searchInput.value = familyName;
              searchInput.focus();
              // Disparar evento input para que se actualice el dropdown
              searchInput.dispatchEvent(new Event('input', { bubbles: true }));
              // Scroll hasta el buscador
              const heroSearch = document.querySelector('.hero-search-wrap');
              if (heroSearch) {
                heroSearch.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }
          }, 300);
          return;
        }

        // CTA "Buscar en esta categoría"
        const searchBtn = e.target.closest('[data-search-in-cat]');
        if (searchBtn) {
          const term = searchBtn.dataset.searchTerm;
          closeCatModal();
          setTimeout(() => {
            const searchInput = document.getElementById('heroSearchInput');
            if (searchInput) {
              // Usar la primera palabra de la categoría como término
              const firstWord = term.split(' ')[0];
              searchInput.value = firstWord;
              searchInput.focus();
              searchInput.dispatchEvent(new Event('input', { bubbles: true }));
              const heroSearch = document.querySelector('.hero-search-wrap');
              if (heroSearch) {
                heroSearch.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }
          }, 300);
          return;
        }
      });
    }

    // ESC global
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
        closeCatModal();
      }
    });
  }

  // Helpers
  function escapeHtml(str) {
    return String(str || '').replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[c]);
  }
  function escapeAttr(str) {
    return escapeHtml(str);
  }

  // ============================================
  // INIT
  // ============================================
  function init() {
    renderCards();
    setupModalEvents();

    // Fallback: activar todos los reveals del bloque 4 si IntersectionObserver
    // no los alcanza (porque ya corrió antes o porque están dinámicamente generados)
    requestAnimationFrame(() => {
      const section = document.querySelector('.cats-section');
      if (section) {
        const reveals = section.querySelectorAll('.reveal');
        reveals.forEach((el, idx) => {
          // Re-observar con IntersectionObserver propio del bloque
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('is-visible'), idx * 30);
                observer.unobserve(entry.target);
              }
            });
          }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
          observer.observe(el);

          // Fallback agresivo: si después de 1s aún no es visible, forzar
          setTimeout(() => {
            if (!el.classList.contains('is-visible')) {
              el.classList.add('is-visible');
            }
          }, 1000);
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>

<script>
(function() {
  // Reveal observer propio del bloque 5
  function init() {
    requestAnimationFrame(() => {
      const section = document.querySelector('.how-section');
      if (!section) return;
      const reveals = section.querySelectorAll('.reveal');
      reveals.forEach((el, idx) => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setTimeout(() => entry.target.classList.add('is-visible'), 0);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
        observer.observe(el);

        // Fallback agresivo 1s
        setTimeout(() => {
          if (!el.classList.contains('is-visible')) el.classList.add('is-visible');
        }, 1000);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>

<script>
(function() {
  // ============================================
  // MICRO-ANIMACIONES DEL MOCKUP
  // ============================================

  // 1. Rotación de chip de categoría activo
  function rotateChips() {
    const chips = ['mockChip0', 'mockChip1', 'mockChip2', 'mockChip3'].map(id => document.getElementById(id));
    if (chips.some(c => !c)) return;
    let activeIdx = 0;
    setInterval(() => {
      chips[activeIdx].classList.remove('is-active');
      activeIdx = (activeIdx + 1) % chips.length;
      chips[activeIdx].classList.add('is-active');
    }, 2500);
  }

  // 2. Texto del buscador que se escribe solo
  function typeSearch() {
    const el = document.getElementById('mockupTypeText');
    if (!el) return;

    const phrases = [
      'silla ergonómica',
      'escritorio 1.40',
      'monitor 27 pulgadas',
      'laptop dell',
      'hojas bond'
    ];

    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function tick() {
      const current = phrases[phraseIdx];

      if (!isDeleting) {
        // Escribiendo
        charIdx++;
        el.textContent = current.substring(0, charIdx);
        if (charIdx >= current.length) {
          isDeleting = true;
          setTimeout(tick, 1800); // Pausa al terminar de escribir
          return;
        }
        setTimeout(tick, 70 + Math.random() * 40);
      } else {
        // Borrando
        charIdx--;
        el.textContent = current.substring(0, charIdx);
        if (charIdx === 0) {
          isDeleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          setTimeout(tick, 400);
          return;
        }
        setTimeout(tick, 30);
      }
    }
    setTimeout(tick, 1500);
  }

  // 3. Counter del carrito (sube y resetea)
  function animateCartCounter() {
    const el = document.getElementById('mockupCartCount');
    if (!el) return;
    let count = 3;
    setInterval(() => {
      count = count + 1;
      if (count > 8) count = 3;
      el.textContent = count;
      // Pulse en el footer cuando cambia
      const footer = document.querySelector('.mockup-footer');
      if (footer) {
        footer.animate([
          { transform: 'scale(1)' },
          { transform: 'scale(1.02)' },
          { transform: 'scale(1)' }
        ], { duration: 280, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' });
      }
    }, 3500);
  }

  // Reveal observer
  function init() {
    requestAnimationFrame(() => {
      const section = document.querySelector('.platform-section');
      if (!section) return;
      const reveals = section.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
        observer.observe(el);
        setTimeout(() => {
          if (!el.classList.contains('is-visible')) el.classList.add('is-visible');
        }, 1000);
      });

      // Arrancar micro-animaciones del mockup
      rotateChips();
      typeSearch();
      animateCartCounter();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>

<script>
(function() {
  // ============================================
  // DATA: Marcas finales reales (fabricantes)
  // Sin proveedores intermediarios
  // Organizadas para que se vean balanceadas en 2 filas
  // ============================================

  // Fila 1: tecnología, equipo, electrónica
  const BRANDS_ROW_1 = [
    'Apple', 'HP', 'Dell', 'Lenovo', 'Asus', 'Acer',
    'Samsung', 'LG', 'Motorola', 'Xiaomi', 'Cisco',
    'Microsoft', 'Adobe', 'AutoDesk', 'TP-Link',
    'Ubiquiti', 'Netgear', 'Logitech', 'Western Digital',
    'Seagate', 'Kingston', 'SanDisk', 'APC',
    'Brother', 'Canon', 'Epson', 'Poly', 'Jabra',
    'Hikvision', 'Dahua', 'Reolink'
  ];

  // Fila 2: herramientas, EPP, mobiliario, industria
  const BRANDS_ROW_2 = [
    'DeWalt', 'Makita', 'Bosch', 'Milwaukee', '3M',
    'Honeywell', 'Truper', 'Stanley', 'Steren',
    'Mitsubishi', 'Yale', 'Toyota', 'Caterpillar',
    'Hitachi', 'Hyster', 'Crown', 'Raymond',
    'Bostitch', 'Norton', 'Ansell', 'Salisbury',
    'MSA', 'Uvex', 'JSP', 'Casio', 'Pelco',
    'Schneider', 'Eaton', 'Tripp Lite', 'Belkin'
  ];

  // ============================================
  // RENDER del marquee
  // Duplica el contenido 2 veces para crear loop infinito sin saltos
  // ============================================
  function renderMarqueeTrack(trackId, brands) {
    const track = document.getElementById(trackId);
    if (!track) return;

    const chipHtml = brands.map(name => \`
      <div class="brand-chip">
        <span class="brand-chip-dot"></span>
        <span class="brand-chip-name">\${name}</span>
      </div>
    \`).join('');

    // Duplicar para loop sin cortes (animation va de 0 a -50%)
    track.innerHTML = chipHtml + chipHtml;
  }

  function init() {
    renderMarqueeTrack('marqueeTrack1', BRANDS_ROW_1);
    renderMarqueeTrack('marqueeTrack2', BRANDS_ROW_2);

    // Reveal observer del bloque
    requestAnimationFrame(() => {
      const section = document.querySelector('.brands-section');
      if (!section) return;
      const reveals = section.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
        observer.observe(el);
        setTimeout(() => {
          if (!el.classList.contains('is-visible')) el.classList.add('is-visible');
        }, 1000);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>

<script>
(function() {
  // ============================================
  // CART DRAWER — gestión completa
  // ============================================

  // Iconos por categoría (reutiliza los iconos del catálogo)
  const CAT_ICON_MAP = {
    tecnologia: 'i-tech',
    mobiliario: 'i-furniture',
    papeleria: 'i-paper',
    impresion: 'i-printer',
    almacenamiento: 'i-storage',
    empaques: 'i-package',
    herramientas: 'i-tools',
    uniformes: 'i-uniform',
    maquinaria: 'i-machine',
    custom: 'i-sparkle'
  };

  const CAT_NAME_MAP = {
    tecnologia: 'Tecnología y cómputo',
    mobiliario: 'Mobiliario de oficina',
    papeleria: 'Papelería',
    impresion: 'Impresión',
    almacenamiento: 'Almacenamiento',
    empaques: 'Empaques y embalaje',
    herramientas: 'Herramientas y EPP',
    uniformes: 'Uniformes y calzado',
    maquinaria: 'Maquinaria y manejo de carga',
    custom: 'Solicitud personalizada'
  };

  // Estado interno
  let recurrenceActive = false;
  let recurrenceFreq = 'mensual';

  // Escape helpers
  function escapeHtml(str) {
    return String(str || '').replace(/[&<>"']/g, c => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    })[c]);
  }
  function escapeAttr(str) { return escapeHtml(str); }

  // ============================================
  // ABRIR / CERRAR
  // ============================================
  function openCart() {
    const drawer = document.getElementById('cartDrawer');
    const backdrop = document.getElementById('cartDrawerBackdrop');
    if (!drawer || !backdrop) return;
    renderCart();
    drawer.classList.add('is-open');
    backdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    const drawer = document.getElementById('cartDrawer');
    const backdrop = document.getElementById('cartDrawerBackdrop');
    if (drawer) drawer.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  // ============================================
  // OBTENER ITEMS del carrito (vía BrainstoreCart)
  // ============================================
  function getCartItems() {
    if (window.BrainstoreCart && Array.isArray(window.BrainstoreCart.items)) {
      return window.BrainstoreCart.items;
    }
    try {
      return JSON.parse(localStorage.getItem('brainstore-cart') || '[]');
    } catch (e) {
      return [];
    }
  }

  // ============================================
  // AGRUPAR por categoría
  // ============================================
  function groupByCat(items) {
    const groups = {};
    items.forEach(item => {
      const cat = item.cat || 'custom';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(item);
    });
    return groups;
  }

  // ============================================
  // RENDER del drawer
  // ============================================
  function renderCart() {
    const drawer = document.getElementById('cartDrawer');
    if (!drawer) return;

    const items = getCartItems();
    const totalQty = items.reduce((sum, it) => sum + (it.qty || 1), 0);
    const grouped = groupByCat(items);
    const groupKeys = Object.keys(grouped);

    let bodyHtml = '';

    if (items.length === 0) {
      // Estado vacío
      bodyHtml = \`
        <div class="cart-drawer-empty">
          <div class="cart-drawer-empty-icon">
            <svg><use href="#i-cart"/></svg>
          </div>
          <div class="cart-drawer-empty-title">La solicitud está vacía</div>
          <div class="cart-drawer-empty-msg">
            Agregue productos desde el catálogo o solicite un producto personalizado para comenzar.
          </div>
          <button type="button" class="cart-drawer-empty-cta" data-close-cart-drawer>
            <svg><use href="#i-search"/></svg>
            <span>Buscar productos</span>
          </button>
        </div>
      \`;
    } else {
      // Items agrupados por categoría
      groupKeys.forEach(cat => {
        const catItems = grouped[cat];
        const catName = CAT_NAME_MAP[cat] || cat;
        const catIcon = CAT_ICON_MAP[cat] || 'i-package';
        const catTotalQty = catItems.reduce((sum, it) => sum + (it.qty || 1), 0);

        bodyHtml += \`
          <div class="cart-cat-group">
            <div class="cart-cat-label">
              <div class="cart-cat-label-icon">
                <svg><use href="#\${catIcon}"/></svg>
              </div>
              <div class="cart-cat-label-name">\${escapeHtml(catName)}</div>
              <div class="cart-cat-label-count">\${catItems.length} \${catItems.length === 1 ? 'línea' : 'líneas'} · \${catTotalQty} \${catTotalQty === 1 ? 'unidad' : 'unidades'}</div>
            </div>
        \`;

        catItems.forEach(item => {
          const isCustom = item.custom === true;
          const customTag = isCustom ? '<span class="cart-item-custom-tag">Personalizado</span>' : '';

          bodyHtml += \`
            <div class="cart-item" data-item-id="\${escapeAttr(item.id || '')}">
              <div class="cart-item-info">
                <div class="cart-item-family">\${escapeHtml(item.family || '—')}\${customTag}</div>
                <div class="cart-item-text">\${escapeHtml(item.text)}</div>
                <div class="cart-item-controls">
                  <div class="cart-qty">
                    <button type="button" class="cart-qty-btn" data-qty-decrease aria-label="Disminuir cantidad" \${(item.qty || 1) <= 1 ? 'disabled' : ''}>−</button>
                    <input type="number" class="cart-qty-value cart-qty-input" data-qty-input min="1" max="9999" value="\${item.qty || 1}" aria-label="Cantidad"/>
                    <button type="button" class="cart-qty-btn" data-qty-increase aria-label="Aumentar cantidad">+</button>
                  </div>
                  <button type="button" class="cart-item-remove" data-remove-item>Eliminar</button>
                </div>
              </div>
            </div>
          \`;
        });

        bodyHtml += \`</div>\`;
      });
    }

    // Footer: solo si hay items
    const footerHtml = items.length > 0 ? \`
      <div class="cart-drawer-footer">

        <div class="cart-recurrence">
          <div class="cart-recurrence-toggle" data-toggle-recurrence data-active="\${recurrenceActive}">
            <div class="cart-recurrence-checkbox">
              <svg><use href="#i-check"/></svg>
            </div>
            <div class="cart-recurrence-label">
              <div class="cart-recurrence-title">Solicitud recurrente</div>
              <div class="cart-recurrence-desc">Repetir esta misma solicitud automáticamente con la frecuencia indicada</div>
            </div>
          </div>
          <div class="cart-recurrence-options" id="cartFreqOptions" style="\${recurrenceActive ? 'display:flex;' : 'display:none;'}">
            <button type="button" class="cart-freq-chip \${recurrenceFreq === 'semanal' ? 'is-active' : ''}" data-freq="semanal">Semanal</button>
            <button type="button" class="cart-freq-chip \${recurrenceFreq === 'quincenal' ? 'is-active' : ''}" data-freq="quincenal">Quincenal</button>
            <button type="button" class="cart-freq-chip \${recurrenceFreq === 'mensual' ? 'is-active' : ''}" data-freq="mensual">Mensual</button>
            <button type="button" class="cart-freq-chip \${recurrenceFreq === 'trimestral' ? 'is-active' : ''}" data-freq="trimestral">Trimestral</button>
          </div>
        </div>

        <div class="cart-drawer-actions">
          <button type="button" class="cart-drawer-submit" data-submit-cart>
            <span>Enviar solicitud</span>
            <svg><use href="#i-arrow"/></svg>
          </button>
          <button type="button" class="cart-drawer-clear" data-clear-cart aria-label="Vaciar solicitud">Vaciar</button>
        </div>

        <div class="cart-drawer-note">
          Un especialista enviará propuesta formal en PDF dentro de las próximas 24 horas con marca, modelo, precio y disponibilidad.
        </div>
      </div>
    \` : '';

    drawer.innerHTML = \`
      <div class="cart-drawer-header">
        <div class="cart-drawer-header-left">
          <div class="cart-drawer-eyebrow">
            <span class="dot"></span>
            <span>SU SOLICITUD</span>
          </div>
          <h3 class="cart-drawer-title" id="cartDrawerTitle">\${items.length === 0 ? 'Solicitud vacía' : 'Construya su requerimiento'}</h3>
          <div class="cart-drawer-meta">
            \${items.length === 0
              ? 'Sin productos agregados'
              : \`<strong>\${totalQty}</strong> \${totalQty === 1 ? 'unidad' : 'unidades'} · <strong>\${items.length}</strong> \${items.length === 1 ? 'línea' : 'líneas'} · <strong>\${groupKeys.length}</strong> \${groupKeys.length === 1 ? 'categoría' : 'categorías'}\`
            }
          </div>
        </div>
        <button type="button" class="cart-drawer-close" data-close-cart-drawer aria-label="Cerrar">
          <svg><use href="#i-close"/></svg>
        </button>
      </div>
      <div class="cart-drawer-body">
        \${bodyHtml}
      </div>
      \${footerHtml}
    \`;
  }

  // ============================================
  // HELPERS para actualizar item SIN re-renderizar todo
  // (preservan posición del scroll)
  // ============================================
  function updateItemDOM(itemId, newQty) {
    const itemEl = document.querySelector(\`.cart-item[data-item-id="\${itemId}"]\`);
    if (!itemEl) return;

    // Actualizar valor del input
    const input = itemEl.querySelector('[data-qty-input]');
    if (input) input.value = newQty;

    // Habilitar/deshabilitar botón menos
    const decBtn = itemEl.querySelector('[data-qty-decrease]');
    if (decBtn) decBtn.disabled = newQty <= 1;

    // Actualizar header meta (totales)
    updateHeaderMeta();
    updateCatHeaderMeta();
  }

  function removeItemDOM(itemId) {
    const itemEl = document.querySelector(\`.cart-item[data-item-id="\${itemId}"]\`);
    if (!itemEl) return;

    // Buscar el grupo que contiene este item
    const group = itemEl.closest('.cart-cat-group');

    // Animación suave de salida
    itemEl.style.transition = 'opacity 200ms ease, transform 200ms ease, max-height 250ms ease, margin 250ms ease, padding 250ms ease';
    itemEl.style.maxHeight = itemEl.offsetHeight + 'px';

    requestAnimationFrame(() => {
      itemEl.style.opacity = '0';
      itemEl.style.transform = 'translateX(20px)';
      itemEl.style.maxHeight = '0';
      itemEl.style.marginBottom = '0';
      itemEl.style.paddingTop = '0';
      itemEl.style.paddingBottom = '0';
      itemEl.style.border = '0';
    });

    setTimeout(() => {
      itemEl.remove();

      // Si el grupo quedó vacío, removerlo también
      if (group && group.querySelectorAll('.cart-item').length === 0) {
        group.remove();
      }

      // Actualizar headers de totales
      updateHeaderMeta();
      updateCatHeaderMeta();

      // Si ya no quedan items, re-render para mostrar estado vacío
      const items = getCartItems();
      if (items.length === 0) {
        renderCart();
      }
    }, 250);
  }

  function updateHeaderMeta() {
    const items = getCartItems();
    const totalQty = items.reduce((sum, it) => sum + (it.qty || 1), 0);
    const grouped = groupByCat(items);
    const groupKeys = Object.keys(grouped);

    const metaEl = document.querySelector('.cart-drawer-meta');
    if (metaEl) {
      if (items.length === 0) {
        metaEl.innerHTML = 'Sin productos agregados';
      } else {
        metaEl.innerHTML = \`<strong>\${totalQty}</strong> \${totalQty === 1 ? 'unidad' : 'unidades'} · <strong>\${items.length}</strong> \${items.length === 1 ? 'línea' : 'líneas'} · <strong>\${groupKeys.length}</strong> \${groupKeys.length === 1 ? 'categoría' : 'categorías'}\`;
      }
    }
  }

  function updateCatHeaderMeta() {
    // Actualizar el contador de cada categoría
    const items = getCartItems();
    const grouped = groupByCat(items);

    document.querySelectorAll('.cart-cat-group').forEach(group => {
      const lines = group.querySelectorAll('.cart-item').length;
      // Sumar qty de items visibles
      let totalQty = 0;
      group.querySelectorAll('.cart-item').forEach(itemEl => {
        const input = itemEl.querySelector('[data-qty-input]');
        if (input) totalQty += parseInt(input.value, 10) || 1;
      });
      const countEl = group.querySelector('.cart-cat-label-count');
      if (countEl) {
        countEl.textContent = \`\${lines} \${lines === 1 ? 'línea' : 'líneas'} · \${totalQty} \${totalQty === 1 ? 'unidad' : 'unidades'}\`;
      }
    });
  }

  // ============================================
  // EVENT DELEGATION
  // ============================================
  function setupEvents() {
    const drawer = document.getElementById('cartDrawer');
    const backdrop = document.getElementById('cartDrawerBackdrop');

    // Backdrop cierra
    if (backdrop) backdrop.addEventListener('click', closeCart);

    // CRÍTICO: stopPropagation en todos los clicks del drawer
    // para que NO burbujee al document y dispare otros handlers
    if (drawer) {
      drawer.addEventListener('click', (e) => {
        // Detener propagación: este evento NO debe llegar al document
        // (eso evita que se "active" el buscador del hero o cualquier otro)
        e.stopPropagation();

        // Cerrar
        if (e.target.closest('[data-close-cart-drawer]')) {
          closeCart();
          return;
        }

        // Aumentar cantidad
        if (e.target.closest('[data-qty-increase]')) {
          const itemEl = e.target.closest('[data-item-id]');
          if (itemEl) {
            const id = itemEl.dataset.itemId;
            const item = getCartItems().find(it => it.id === id);
            if (item && window.BrainstoreCart) {
              const newQty = (item.qty || 1) + 1;
              window.BrainstoreCart.setQty(id, newQty);
              updateItemDOM(id, newQty);
            }
          }
          return;
        }

        // Disminuir cantidad
        if (e.target.closest('[data-qty-decrease]')) {
          const itemEl = e.target.closest('[data-item-id]');
          if (itemEl) {
            const id = itemEl.dataset.itemId;
            const item = getCartItems().find(it => it.id === id);
            if (item && (item.qty || 1) > 1 && window.BrainstoreCart) {
              const newQty = (item.qty || 1) - 1;
              window.BrainstoreCart.setQty(id, newQty);
              updateItemDOM(id, newQty);
            }
          }
          return;
        }

        // Eliminar item (con animación, sin re-render)
        if (e.target.closest('[data-remove-item]')) {
          const itemEl = e.target.closest('[data-item-id]');
          if (itemEl && window.BrainstoreCart) {
            const id = itemEl.dataset.itemId;
            window.BrainstoreCart.remove(id);
            removeItemDOM(id);
          }
          return;
        }

        // Vaciar todo (con confirmación)
        if (e.target.closest('[data-clear-cart]')) {
          if (confirm('¿Vaciar toda la solicitud? Esta acción no se puede deshacer.')) {
            if (window.BrainstoreCart) {
              window.BrainstoreCart.clear();
              renderCart();
            }
          }
          return;
        }

        // Toggle recurrencia
        const recToggle = e.target.closest('[data-toggle-recurrence]');
        if (recToggle) {
          recurrenceActive = !recurrenceActive;
          recToggle.dataset.active = String(recurrenceActive);
          const opts = document.getElementById('cartFreqOptions');
          if (opts) opts.style.display = recurrenceActive ? 'flex' : 'none';
          return;
        }

        // Cambiar frecuencia
        const freqBtn = e.target.closest('[data-freq]');
        if (freqBtn) {
          recurrenceFreq = freqBtn.dataset.freq;
          document.querySelectorAll('[data-freq]').forEach(btn => btn.classList.remove('is-active'));
          freqBtn.classList.add('is-active');
          return;
        }

        // Enviar solicitud — manejado por el bloque 11 (modal de envío)
        // El bloque 11 captura este click con capture=true antes que llegue aquí
        if (e.target.closest('[data-submit-cart]')) {
          // No hacer nada aquí — el bloque 11 abre el modal
          return;
        }
      });

      // INPUT NUMÉRICO: cambiar cantidad escribiendo directamente
      drawer.addEventListener('input', (e) => {
        e.stopPropagation();
        const input = e.target.closest('[data-qty-input]');
        if (!input) return;

        const itemEl = input.closest('[data-item-id]');
        if (!itemEl || !window.BrainstoreCart) return;

        const id = itemEl.dataset.itemId;
        let val = parseInt(input.value, 10);
        if (isNaN(val) || val < 1) {
          // No cambiar nada si está vacío o inválido (esperar a que termine de escribir)
          return;
        }
        if (val > 9999) {
          val = 9999;
          input.value = 9999;
        }
        window.BrainstoreCart.setQty(id, val);

        // Habilitar/deshabilitar botón menos
        const decBtn = itemEl.querySelector('[data-qty-decrease]');
        if (decBtn) decBtn.disabled = val <= 1;

        // Actualizar contadores
        updateHeaderMeta();
        updateCatHeaderMeta();
      });

      // Al perder foco: si el input quedó vacío o inválido, restaurar a 1
      drawer.addEventListener('blur', (e) => {
        const input = e.target.closest('[data-qty-input]');
        if (!input) return;

        const itemEl = input.closest('[data-item-id]');
        if (!itemEl) return;

        let val = parseInt(input.value, 10);
        if (isNaN(val) || val < 1) {
          input.value = 1;
          const id = itemEl.dataset.itemId;
          if (window.BrainstoreCart) window.BrainstoreCart.setQty(id, 1);
          updateHeaderMeta();
          updateCatHeaderMeta();
        }
      }, true);

      // Seleccionar todo el contenido al hacer focus en el input
      drawer.addEventListener('focus', (e) => {
        const input = e.target.closest('[data-qty-input]');
        if (input) input.select();
      }, true);
    }

    // ESC global cierra el drawer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer && drawer.classList.contains('is-open')) {
        closeCart();
      }
    });

    // Conectar el botón "Solicitud" del header
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-open-drawer], [data-open-cart], button[data-cart-trigger]');
      if (btn) {
        e.preventDefault();
        openCart();
        return;
      }
    });

    // Exponer API global
    window.openCartDrawer = openCart;
    window.closeCartDrawer = closeCart;
  }

  function init() {
    setupEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>

<script>
(function() {
  // ============================================
  // ESTADO interno del flujo
  // ============================================
  let upsellChoice = null; // 'si' | 'no' | null
  let lastFolio = null;
  let lastSubmittedData = null;

  // ============================================
  // PAÍSES de Latinoamérica donde opera Brainstore
  // ============================================
  const COUNTRIES = [
    { code: 'MX', name: 'México' },
    { code: 'CO', name: 'Colombia' },
    { code: 'GT', name: 'Guatemala' },
    { code: 'EC', name: 'Ecuador' },
    { code: 'CR', name: 'Costa Rica' },
    { code: 'CL', name: 'Chile' },
    { code: 'PA', name: 'Panamá' },
    { code: 'PE', name: 'Perú' },
    { code: 'DO', name: 'República Dominicana' },
    { code: 'AR', name: 'Argentina' }
  ];

  // Plazos disponibles
  const TIMEFRAMES = [
    'Cuanto antes',
    'Esta semana',
    'Este mes',
    'Próximo mes',
    'Fecha específica (indicar en notas)'
  ];

  // ============================================
  // HELPERS
  // ============================================
  function escapeHtml(str) {
    return String(str || '').replace(/[&<>"']/g, c => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    })[c]);
  }

  function getCartItems() {
    if (window.BrainstoreCart && Array.isArray(window.BrainstoreCart.items)) {
      return window.BrainstoreCart.items;
    }
    return [];
  }

  function getCartStats() {
    const items = getCartItems();
    const totalQty = items.reduce((sum, it) => sum + (it.qty || 1), 0);
    const cats = new Set(items.map(it => it.cat || 'custom')).size;
    return {
      lines: items.length,
      units: totalQty,
      cats: cats
    };
  }

  function generateFolio() {
    // Folio simple: 5 dígitos random
    return '#' + Math.floor(10000 + Math.random() * 90000);
  }

  // ============================================
  // MODAL DE FORMULARIO
  // ============================================
  function openSubmitModal() {
    const items = getCartItems();
    if (items.length === 0) {
      alert('La solicitud está vacía. Agregue productos antes de continuar.');
      return;
    }

    const modal = document.getElementById('submitModal');
    const backdrop = document.getElementById('submitModalBackdrop');
    if (!modal || !backdrop) return;

    renderSubmitModal();
    modal.classList.add('is-open');
    backdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    // Focus en el primer campo
    setTimeout(() => {
      const firstInput = modal.querySelector('[name="nombre"]');
      if (firstInput) firstInput.focus();
    }, 320);
  }

  function closeSubmitModal() {
    const modal = document.getElementById('submitModal');
    const backdrop = document.getElementById('submitModalBackdrop');
    if (modal) modal.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-active');

    // No restaurar body.overflow si el drawer sigue abierto
    const drawerOpen = document.getElementById('cartDrawer')?.classList.contains('is-open');
    if (!drawerOpen) {
      document.body.style.overflow = '';
    }
  }

  function renderSubmitModal() {
    const modal = document.getElementById('submitModal');
    if (!modal) return;

    const stats = getCartStats();

    // Recuperar recurrencia del drawer si está activa
    const drawerToggle = document.querySelector('[data-toggle-recurrence]');
    const recurrenceActive = drawerToggle?.dataset.active === 'true';
    const recurrenceFreq = document.querySelector('[data-freq].is-active')?.dataset.freq || 'mensual';

    const countriesHtml = COUNTRIES.map(c =>
      \`<option value="\${c.code}" \${c.code === 'MX' ? 'selected' : ''}>\${c.name}</option>\`
    ).join('');

    const timeframesHtml = TIMEFRAMES.map(t =>
      \`<option value="\${escapeHtml(t)}">\${escapeHtml(t)}</option>\`
    ).join('');

    modal.innerHTML = \`
      <div class="submit-modal-header">
        <div class="submit-modal-header-left">
          <div class="submit-modal-eyebrow">
            <span class="dot"></span>
            <span>SOLICITUD DE COTIZACIÓN</span>
          </div>
          <h3 class="submit-modal-title" id="submitModalTitle">Datos de contacto</h3>
          <p class="submit-modal-subtitle">
            Para enviar la propuesta formal en PDF dentro de las próximas 24 horas con marca, modelo, precio y disponibilidad.
          </p>
        </div>
        <button type="button" class="submit-modal-close" data-close-submit aria-label="Cerrar">
          <svg><use href="#i-close"/></svg>
        </button>
      </div>

      <div class="submit-modal-body">

        <div class="submit-form-grid">
          <div class="submit-field">
            <label class="submit-field-label">Nombre completo <span class="submit-field-required">*</span></label>
            <input type="text" name="nombre" class="submit-field-input" placeholder="María Hernández" autocomplete="name" required/>
            <div class="submit-field-error">Indique su nombre</div>
          </div>
          <div class="submit-field">
            <label class="submit-field-label">Cargo o área <span class="submit-field-required">*</span></label>
            <input type="text" name="cargo" class="submit-field-input" placeholder="Compras corporativas" autocomplete="organization-title" required/>
            <div class="submit-field-error">Indique su cargo</div>
          </div>
        </div>

        <div class="submit-form-grid cols-1">
          <div class="submit-field">
            <label class="submit-field-label">Empresa <span class="submit-field-required">*</span></label>
            <input type="text" name="empresa" class="submit-field-input" placeholder="Razón social o nombre comercial" autocomplete="organization" required/>
            <div class="submit-field-error">Indique la empresa</div>
          </div>
        </div>

        <div class="submit-form-grid">
          <div class="submit-field">
            <label class="submit-field-label">Email corporativo <span class="submit-field-required">*</span></label>
            <input type="email" name="email" class="submit-field-input" placeholder="maria@empresa.com" autocomplete="email" required/>
            <div class="submit-field-error">Indique un correo válido</div>
          </div>
          <div class="submit-field">
            <label class="submit-field-label">Teléfono <span class="submit-field-required">*</span></label>
            <input type="tel" name="telefono" class="submit-field-input" placeholder="+52 55 1234 5678" autocomplete="tel" required/>
            <div class="submit-field-error">Indique un teléfono</div>
          </div>
        </div>

        <div class="submit-form-grid">
          <div class="submit-field">
            <label class="submit-field-label">País de entrega <span class="submit-field-required">*</span></label>
            <select name="pais" class="submit-field-select" data-country-select required>
              \${countriesHtml}
            </select>
          </div>
          <div class="submit-field">
            <label class="submit-field-label">Plazo estimado</label>
            <select name="plazo" class="submit-field-select">
              \${timeframesHtml}
            </select>
          </div>

          <div class="submit-country-notice" id="countryNotice">
            <strong>Aviso para entregas fuera de México:</strong> los productos mantendrán las mismas especificaciones técnicas solicitadas, pero las <strong>marcas pueden variar</strong> a equivalentes locales o internacionales según disponibilidad en el país de destino.
          </div>
        </div>

        <div class="submit-form-grid cols-1">
          <div class="submit-field">
            <label class="submit-field-label">Notas adicionales <span style="color:rgba(10,10,10,0.4);font-weight:500;">(opcional)</span></label>
            <textarea name="notas" class="submit-field-textarea" placeholder="Especificaciones técnicas, urgencia, presupuesto aproximado, sitio de entrega..."></textarea>
          </div>
        </div>

        <!-- Resumen -->
        <div class="submit-summary">
          <div class="submit-summary-label">RESUMEN DE LA SOLICITUD</div>
          <div class="submit-summary-stats">
            <strong>\${stats.lines}</strong> \${stats.lines === 1 ? 'línea' : 'líneas'} ·
            <strong>\${stats.units}</strong> \${stats.units === 1 ? 'unidad' : 'unidades'} ·
            <strong>\${stats.cats}</strong> \${stats.cats === 1 ? 'categoría' : 'categorías'}
          </div>
          \${recurrenceActive ? \`
            <div class="submit-summary-recurrence">
              <svg class="submit-summary-recurrence-icon"><use href="#i-check"/></svg>
              <span>Recurrente · \${recurrenceFreq}</span>
            </div>
          \` : ''}
        </div>

        <!-- Upsell: cotizador inteligente in-house -->
        <div class="submit-upsell">
          <div class="submit-upsell-title">¿Le gustaría crear un cotizador inteligente específico para las compras de su compañía?</div>
          <div class="submit-upsell-desc">
            Catálogo inteligente propio con productos y precios negociados para su equipo de compras.
          </div>
          <div class="submit-upsell-options">
            <button type="button" class="submit-upsell-radio" data-upsell="si">
              <span class="submit-upsell-radio-dot"></span>
              <span>Sí, quiero conocer la plataforma</span>
            </button>
            <button type="button" class="submit-upsell-radio" data-upsell="no" data-selected="true">
              <span class="submit-upsell-radio-dot"></span>
              <span>No por ahora</span>
            </button>
          </div>
        </div>

      </div>

      <div class="submit-modal-footer">
        <div class="submit-modal-disclaimer">
          Al enviar acepta el <a href="#" target="_blank">aviso de privacidad</a>. Recibirá copia de la solicitud en su correo y un especialista enviará la propuesta formal en PDF dentro de las próximas 24 horas.
        </div>
        <div class="submit-modal-actions">
          <button type="button" class="submit-modal-back" data-close-submit>Volver</button>
          <button type="button" class="submit-modal-confirm" data-submit-form>
            <span class="confirm-label">Confirmar y enviar</span>
            <svg><use href="#i-arrow"/></svg>
          </button>
        </div>
      </div>
    \`;

    // Reset upsell state al render
    upsellChoice = 'no';
  }

  // ============================================
  // VALIDACIÓN del formulario
  // ============================================
  function validateForm(modal) {
    const fields = ['nombre', 'cargo', 'empresa', 'email', 'telefono', 'pais'];
    let firstError = null;
    let valid = true;

    fields.forEach(name => {
      const input = modal.querySelector(\`[name="\${name}"]\`);
      const fieldEl = input?.closest('.submit-field');
      if (!input || !fieldEl) return;

      fieldEl.classList.remove('has-error');
      const val = (input.value || '').trim();

      if (!val) {
        fieldEl.classList.add('has-error');
        valid = false;
        if (!firstError) firstError = input;
        return;
      }

      if (name === 'email') {
        const emailOk = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(val);
        if (!emailOk) {
          fieldEl.classList.add('has-error');
          valid = false;
          if (!firstError) firstError = input;
        }
      }

      if (name === 'telefono') {
        // Al menos 7 dígitos para considerar válido
        const digits = val.replace(/\\D/g, '');
        if (digits.length < 7) {
          fieldEl.classList.add('has-error');
          valid = false;
          if (!firstError) firstError = input;
        }
      }
    });

    if (firstError) firstError.focus();
    return valid;
  }

  // ============================================
  // RECOLECTAR datos del formulario
  // ============================================
  function collectFormData(modal) {
    const data = {};
    ['nombre', 'cargo', 'empresa', 'email', 'telefono', 'pais', 'plazo', 'notas'].forEach(name => {
      const input = modal.querySelector(\`[name="\${name}"]\`);
      if (input) data[name] = (input.value || '').trim();
    });

    // País nombre completo
    const country = COUNTRIES.find(c => c.code === data.pais);
    data.paisName = country ? country.name : data.pais;

    // Recurrencia
    const drawerToggle = document.querySelector('[data-toggle-recurrence]');
    data.recurrenceActive = drawerToggle?.dataset.active === 'true';
    data.recurrenceFreq = document.querySelector('[data-freq].is-active')?.dataset.freq || null;

    // Upsell
    data.upsell = upsellChoice;

    // Items del carrito
    data.items = getCartItems();
    data.stats = getCartStats();

    // Timestamp
    data.timestamp = new Date().toISOString();

    return data;
  }

  // ============================================
  // SUBMIT del formulario (placeholder, listo para webhook)
  // ============================================
  function submitForm() {
    const modal = document.getElementById('submitModal');
    if (!modal) return;

    if (!validateForm(modal)) return;

    const data = collectFormData(modal);
    const confirmBtn = modal.querySelector('[data-submit-form]');

    // Estado loading
    if (confirmBtn) {
      confirmBtn.classList.add('is-loading');
      const label = confirmBtn.querySelector('.confirm-label');
      if (label) label.textContent = 'Enviando...';
      const arrowSvg = confirmBtn.querySelector('svg');
      if (arrowSvg) arrowSvg.outerHTML = '<span class="confirm-spinner"></span>';
    }

    // Simular delay de envío (en producción: aquí va el fetch al webhook)
    setTimeout(() => {
      lastFolio = generateFolio();
      lastSubmittedData = data;

      // LOG para que el equipo de backend lo capture cuando se integre
      console.log('[BrainstoreSubmit] Solicitud enviada:', {
        folio: lastFolio,
        ...data
      });

      // TODO BACKEND: En producción aquí debe ocurrir:
      // 1. POST al webhook con { folio, ...data }
      // 2. Backend: generar PDF con los items de la solicitud
      // 3. Backend: enviar PDF al ejecutivo de cuenta asignado
      // 4. Backend: enviar email de confirmación al cliente (data.email)
      //    con folio, resumen y mensaje "estamos trabajando en su cotización"

      // Cerrar modal de form
      closeSubmitModal();

      // Vaciar el carrito (la solicitud ya se envió)
      if (window.BrainstoreCart) {
        window.BrainstoreCart.clear();
      }

      // Cerrar drawer si está abierto
      if (window.closeCartDrawer) {
        window.closeCartDrawer();
      }

      // Abrir modal de confirmación
      setTimeout(() => openSuccessModal(), 200);

    }, 900);
  }

  // ============================================
  // MODAL DE CONFIRMACIÓN
  // ============================================
  function openSuccessModal() {
    const modal = document.getElementById('successModal');
    const backdrop = document.getElementById('successModalBackdrop');
    if (!modal || !backdrop) return;

    renderSuccessModal();
    modal.classList.add('is-open');
    backdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    const backdrop = document.getElementById('successModalBackdrop');
    if (modal) modal.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  function renderSuccessModal() {
    const modal = document.getElementById('successModal');
    if (!modal || !lastSubmittedData) return;

    const data = lastSubmittedData;
    const isMexico = data.pais === 'MX';

    let recurrenceLine = '';
    if (data.recurrenceActive && data.recurrenceFreq) {
      recurrenceLine = \`<div class="success-summary-extra">Recurrente · \${escapeHtml(data.recurrenceFreq)} · entregas programadas</div>\`;
    }

    let countryLine = '';
    if (!isMexico) {
      countryLine = \`<div class="success-summary-extra">Entrega en \${escapeHtml(data.paisName)} · marcas pueden variar a equivalentes locales</div>\`;
    }

    // Bonus step si activó upsell
    const bonusStep = data.upsell === 'si' ? \`
      <div class="success-step is-bonus">
        <div class="success-step-num">★</div>
        <div class="success-step-content">
          <div class="success-step-title">Demo del catálogo digital corporativo</div>
          <div class="success-step-desc">Un especialista de plataformas coordinará una sesión para mostrarle el panel demo en los próximos 3 días hábiles.</div>
        </div>
      </div>
    \` : '';

    modal.innerHTML = \`
      <button type="button" class="success-modal-close" data-close-success aria-label="Cerrar">
        <svg><use href="#i-close"/></svg>
      </button>

      <div class="success-hero">
        <div class="success-icon-wrap">
          <svg><use href="#i-check"/></svg>
        </div>
        <h3 class="success-title" id="successModalTitle">Solicitud recibida</h3>
        <div class="success-folio">
          <span class="success-folio-label">FOLIO</span>
          <span>\${lastFolio}</span>
        </div>
        <p class="success-message">
          Un especialista enviará la propuesta formal en PDF al correo <strong>\${escapeHtml(data.email)}</strong> dentro de las próximas <strong>24 horas</strong>.
        </p>
      </div>

      <div class="success-summary">
        <div class="success-summary-label">RESUMEN ENVIADO</div>
        <div class="success-summary-stats">
          \${data.stats.lines} \${data.stats.lines === 1 ? 'línea' : 'líneas'} ·
          \${data.stats.units} \${data.stats.units === 1 ? 'unidad' : 'unidades'} ·
          \${escapeHtml(data.paisName)}
        </div>
        \${recurrenceLine}
        \${countryLine}
      </div>

      <div class="success-steps">
        <div class="success-steps-title">PRÓXIMOS PASOS</div>

        <div class="success-step">
          <div class="success-step-num">01</div>
          <div class="success-step-content">
            <div class="success-step-title">Revisión por especialista</div>
            <div class="success-step-desc">Dentro de las próximas 4 horas hábiles.</div>
          </div>
        </div>

        <div class="success-step">
          <div class="success-step-num">02</div>
          <div class="success-step-content">
            <div class="success-step-title">Propuesta formal en PDF</div>
            <div class="success-step-desc">Con marca, modelo, precio unitario, plazo de entrega y vigencia.</div>
          </div>
        </div>

        <div class="success-step">
          <div class="success-step-num">03</div>
          <div class="success-step-content">
            <div class="success-step-title">Confirmación o ajustes</div>
            <div class="success-step-desc">Sin compromiso de compra. Puede solicitar cambios o marcas alternativas.</div>
          </div>
        </div>

        <div class="success-step">
          <div class="success-step-num">04</div>
          <div class="success-step-content">
            <div class="success-step-title">Entrega coordinada</div>
            <div class="success-step-desc">Con seguimiento documentado y facturación local.</div>
          </div>
        </div>

        \${bonusStep}
      </div>

      <div class="success-modal-footer">
        <button type="button" class="success-modal-cta" data-close-success>
          <span>Cerrar y volver al catálogo</span>
          <svg><use href="#i-arrow"/></svg>
        </button>
      </div>
    \`;
  }

  // ============================================
  // EVENT DELEGATION
  // ============================================
  function setupEvents() {

    // Backdrops cierran
    document.getElementById('submitModalBackdrop')?.addEventListener('click', closeSubmitModal);
    document.getElementById('successModalBackdrop')?.addEventListener('click', closeSuccessModal);

    // CLICKS GLOBALES
    document.addEventListener('click', (e) => {

      // Abrir modal de envío desde el drawer
      if (e.target.closest('[data-submit-cart]')) {
        // Prevenir el alert default que tenía el drawer
        e.preventDefault();
        e.stopPropagation();
        openSubmitModal();
        return;
      }

      // Cerrar modal de form
      if (e.target.closest('[data-close-submit]')) {
        e.stopPropagation();
        closeSubmitModal();
        return;
      }

      // Submit del form
      if (e.target.closest('[data-submit-form]')) {
        e.stopPropagation();
        submitForm();
        return;
      }

      // Upsell radio
      const upsellBtn = e.target.closest('[data-upsell]');
      if (upsellBtn) {
        e.stopPropagation();
        const choice = upsellBtn.dataset.upsell;
        upsellChoice = choice;
        document.querySelectorAll('[data-upsell]').forEach(b => {
          b.dataset.selected = b.dataset.upsell === choice ? 'true' : 'false';
        });
        return;
      }

      // Cerrar modal de éxito
      if (e.target.closest('[data-close-success]')) {
        e.stopPropagation();
        closeSuccessModal();
        return;
      }

    }, true); // capture = true para interceptar ANTES que otros handlers

    // Cambio de país en el form (aviso multi-país)
    document.addEventListener('change', (e) => {
      const select = e.target.closest('[data-country-select]');
      if (!select) return;
      const notice = document.getElementById('countryNotice');
      if (!notice) return;
      if (select.value !== 'MX') {
        notice.classList.add('is-visible');
      } else {
        notice.classList.remove('is-visible');
      }
    });

    // Limpiar errores al escribir
    document.addEventListener('input', (e) => {
      const input = e.target.closest('.submit-field-input, .submit-field-select');
      if (!input) return;
      const fieldEl = input.closest('.submit-field');
      if (fieldEl) fieldEl.classList.remove('has-error');
    });

    // ESC cierra modales
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const successOpen = document.getElementById('successModal')?.classList.contains('is-open');
        const submitOpen = document.getElementById('submitModal')?.classList.contains('is-open');
        if (successOpen) {
          closeSuccessModal();
        } else if (submitOpen) {
          closeSubmitModal();
        }
      }
    });

    // Exponer API
    window.openSubmitModal = openSubmitModal;
    window.closeSubmitModal = closeSubmitModal;
    window.openSuccessModal = openSuccessModal;
  }

  function init() {
    setupEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>

<script>
(function() {
  function init() {
    // Año actual dinámico
    const yearEl = document.getElementById('footerYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // El botón "Iniciar solicitud" del footer ya usa data-open-drawer
    // que el bloque 10 ya tiene conectado
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>`;
