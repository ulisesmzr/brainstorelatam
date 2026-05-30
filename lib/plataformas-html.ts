// Plataformas Digitales AI · HTML embebido (SIN header/footer)
// Header/footer provistos por HomeHeader/HomeFooter compartidos (consistencia con Home + Suministros + Servicios)
// Brand fixes aplicados: copy cliente-céntrico, sin "usted/su/le", sin emojis Unicode, datos contacto reales
// Size: 138 KB

export const PLATAFORMAS_HTML = `<!-- CRITICAL ASSETS -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
<script src="https://cdn.tailwindcss.com"></script>
<style>
    * { -webkit-font-smoothing: antialiased; }
    html { color-scheme: light only; scroll-behavior: smooth; overflow-x: hidden; }
    body {
      font-family: 'Inter', sans-serif;
      background: #FFFFFF;
      color: #0A0A0A;
      overflow-x: hidden;
      width: 100%;
    }
    ::selection { background: #FFD400; color: #0A0A0A; }
    :focus-visible { outline: 3px solid #FFD400; outline-offset: 2px; }

    .font-mega {
      font-family: 'Manrope', sans-serif;
      font-weight: 800;
      letter-spacing: -0.035em;
      line-height: 0.95;
    }
    .font-display-bold {
      font-family: 'Manrope', sans-serif;
      font-weight: 700;
    }

    ::-webkit-scrollbar { width: 12px; height: 12px; }
    ::-webkit-scrollbar-track { background: #FAFAFA; }
    ::-webkit-scrollbar-thumb {
      background: #0A0A0A;
      border: 3px solid #FAFAFA;
      border-radius: 6px;
    }

    @keyframes letterIn {
      from { opacity: 0; transform: translateY(60px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .letter {
      display: inline-block;
      animation: letterIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) backwards;
    }

    @keyframes slideRight {
      from { transform: translateX(-100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    .slide-right { animation: slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards; }

    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 0 0 rgba(255, 212, 0, 0.7); }
      50% { box-shadow: 0 0 0 16px rgba(255, 212, 0, 0); }
    }
    .pulse-glow { animation: pulseGlow 2s infinite; }

    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
    .blink { animation: blink 1s infinite; }

    @keyframes rotate {
      to { transform: rotate(360deg); }
    }
    .rotate-anim { animation: rotate 24s linear infinite; }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
    .float-anim { animation: float 6s ease-in-out infinite; }

    .tilt-card {
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
    }
    .tilt-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.18);
    }

    .reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal.visible { opacity: 1; transform: translateY(0); }

    .yellow-highlight {
      background-image: linear-gradient(180deg, transparent 60%, #FFD400 60%);
      background-repeat: no-repeat;
      padding: 0 4px;
    }

    .magnetic-btn {
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .live-dot::before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      background: #FFD400;
      border-radius: 50%;
      margin-right: 8px;
      box-shadow: 0 0 0 0 rgba(255, 212, 0, 0.7);
      animation: pulseGlow 2s infinite;
    }

    .link-underline {
      position: relative;
      display: inline-block;
    }
    .link-underline::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 100%;
      height: 2px;
      background: #FFD400;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .link-underline:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }

    .icon-box {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    /* Solution card grid */
    .solution-card {
      background: #FFFFFF;
      border: 1.5px solid #E5E5E5;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .solution-card:hover {
      border-color: #0A0A0A;
      background: #0A0A0A;
      color: #FFFFFF;
      transform: translateY(-4px);
    }
    .solution-card .card-num {
      transition: color 0.4s ease;
    }
    .solution-card:hover .card-num { color: #FFD400; }
    .solution-card .card-icon {
      transition: color 0.4s ease;
    }
    .solution-card:hover .card-icon { color: #FFD400; }

    /* Form fields */
    .form-field {
      background: #FFFFFF;
      border: 2px solid #E5E5E5;
      transition: border-color 0.2s ease;
      width: 100%;
      padding: 14px 16px;
      font-family: 'Inter', sans-serif;
      font-size: 15px;
      color: #0A0A0A;
    }
    .form-field:focus {
      outline: none;
      border-color: #FFD400;
    }
    .form-field::placeholder {
      color: #999;
    }
    .form-checkbox {
      width: 20px;
      height: 20px;
      border: 2px solid #E5E5E5;
      cursor: pointer;
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }
    .form-checkbox input { display: none; }
    .form-checkbox.checked {
      background: #FFD400;
      border-color: #FFD400;
    }
    .form-checkbox.checked::after {
      content: '';
      width: 12px;
      height: 6px;
      border-left: 2px solid #0A0A0A;
      border-bottom: 2px solid #0A0A0A;
      transform: rotate(-45deg) translate(1px, -1px);
    }

    /* Performance: decoraciones grandes en capa GPU separada para no trabar scroll */
    .pointer-events-none.rounded-full {
      will-change: auto;
      transform: translateZ(0);
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
      }
    }

    @media (max-width: 640px) {
      .font-mega {
        font-size: clamp(2.25rem, 13vw, 4.5rem);
        line-height: 0.92;
      }
    }

    /* ============================================
       MODAL DE COTIZACIÓN — Exquisito, sofisticado
       FIX: visibility hidden cuando cerrado para no afectar scroll
       ============================================ */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 100;
      background: rgba(10, 10, 10, 0);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: background 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                  backdrop-filter 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                  opacity 0.4s ease,
                  visibility 0s linear 0.5s;
    }
    .modal-backdrop.active {
      background: rgba(10, 10, 10, 0.75);
      backdrop-filter: blur(20px) saturate(140%);
      -webkit-backdrop-filter: blur(20px) saturate(140%);
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      transition: background 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                  backdrop-filter 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                  opacity 0.4s ease,
                  visibility 0s linear 0s;
    }

    .modal-container {
      position: fixed;
      inset: 0;
      z-index: 101;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 2rem 1rem;
      overflow-y: auto;
      pointer-events: none;
      visibility: hidden;
      transition: visibility 0s linear 0.5s;
    }
    .modal-container.active {
      visibility: visible;
      transition: visibility 0s linear 0s;
    }
    @media (min-width: 768px) {
      .modal-container {
        padding: 4rem 2rem;
        align-items: center;
      }
    }

    .modal-panel {
      position: relative;
      width: 100%;
      max-width: 920px;
      background: #FFFFFF;
      opacity: 0;
      transform: translateY(40px) scale(0.96);
      transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.05s,
                  transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.05s;
      pointer-events: auto;
      box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.5),
                  0 0 0 1px rgba(255, 212, 0, 0.1);
    }
    .modal-backdrop.active ~ .modal-container .modal-panel,
    .modal-container.active .modal-panel {
      opacity: 1;
      transform: translateY(0) scale(1);
    }

    /* Header del modal con gradiente sutil amarillo */
    .modal-header {
      position: relative;
      background: linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%);
      color: white;
      padding: 2rem 2.5rem 2rem 2.5rem;
      overflow: hidden;
    }
    @media (max-width: 640px) {
      .modal-header { padding: 1.5rem 1.25rem; }
    }
    .modal-header::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -10%;
      width: 50%;
      height: 200%;
      background: radial-gradient(ellipse at center, rgba(255, 212, 0, 0.15) 0%, transparent 70%);
      pointer-events: none;
    }
    .modal-header::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, #FFD400 0%, transparent 100%);
    }

    .modal-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 40px;
      height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #FFFFFF;
      transition: all 0.2s ease;
      cursor: pointer;
      z-index: 2;
    }
    .modal-close:hover {
      background: #FFD400;
      color: #0A0A0A;
      border-color: #FFD400;
      transform: rotate(90deg);
    }

    /* Body del modal con scroll si excede */
    .modal-body {
      padding: 2rem 2.5rem 2.5rem 2.5rem;
      max-height: calc(90vh - 220px);
      overflow-y: auto;
    }
    @media (max-width: 640px) {
      .modal-body { padding: 1.5rem 1.25rem; }
    }

    /* Field group con número de paso */
    .modal-field-group {
      position: relative;
    }
    .modal-field-label {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: rgba(10, 10, 10, 0.6);
      margin-bottom: 8px;
      font-weight: 600;
    }
    .modal-field-label-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      background: #FFD400;
      color: #0A0A0A;
      font-size: 10px;
      font-weight: 800;
      font-family: 'JetBrains Mono', monospace;
    }

    .modal-field {
      width: 100%;
      background: #FFFFFF;
      border: 0;
      border-bottom: 2px solid #E5E5E5;
      padding: 12px 4px;
      font-family: 'Inter', sans-serif;
      font-size: 15px;
      color: #0A0A0A;
      transition: border-color 0.3s ease;
    }
    .modal-field:focus {
      outline: none;
      border-bottom-color: #FFD400;
    }
    .modal-field::placeholder { color: #999; }

    textarea.modal-field {
      resize: none;
      min-height: 80px;
    }

    /* Custom select para el modal */
    select.modal-field {
      cursor: pointer;
      appearance: none;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230A0A0A' stroke-width='2'><path d='M6 9l6 6 6-6'/></svg>");
      background-repeat: no-repeat;
      background-position: right 4px center;
      background-size: 18px;
      padding-right: 28px;
    }

    /* Soluciones checkboxes en el modal — estilo chip elegante */
    .modal-chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 14px;
      border: 1.5px solid #E5E5E5;
      background: #FFFFFF;
      font-size: 13px;
      font-weight: 500;
      color: #0A0A0A;
      cursor: pointer;
      transition: all 0.2s ease;
      user-select: none;
    }
    .modal-chip:hover {
      border-color: #0A0A0A;
    }
    .modal-chip.checked {
      background: #FFD400;
      border-color: #FFD400;
      color: #0A0A0A;
      font-weight: 600;
    }
    .modal-chip input {
      display: none;
    }
    .modal-chip-dot {
      width: 8px;
      height: 8px;
      background: #E5E5E5;
      flex-shrink: 0;
      transition: background 0.2s ease;
    }
    .modal-chip.checked .modal-chip-dot {
      background: #0A0A0A;
    }

    /* Submit del modal */
    .modal-submit {
      width: 100%;
      height: 56px;
      background: #0A0A0A;
      color: #FFD400;
      font-family: 'Manrope', sans-serif;
      font-weight: 700;
      font-size: 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      cursor: pointer;
      border: 0;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    .modal-submit:hover {
      background: #1A1A1A;
      letter-spacing: 0.01em;
    }
    .modal-submit:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    /* Lock body scroll cuando modal está abierto */
    body.modal-open {
      overflow: hidden;
    }

    /* ============================================
       MODAL DE SOLUCIÓN — Demo visual de cada card
       ============================================ */
    .solution-modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 90;
      background: rgba(10, 10, 10, 0);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: background 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                  backdrop-filter 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                  opacity 0.3s ease,
                  visibility 0s linear 0.4s;
    }
    .solution-modal-backdrop.active {
      background: rgba(10, 10, 10, 0.85);
      backdrop-filter: blur(16px) saturate(140%);
      -webkit-backdrop-filter: blur(16px) saturate(140%);
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      transition: background 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                  backdrop-filter 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                  opacity 0.3s ease,
                  visibility 0s linear 0s;
    }

    .solution-modal-container {
      position: fixed;
      inset: 0;
      z-index: 91;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 1.5rem 1rem;
      overflow-y: auto;
      pointer-events: none;
      visibility: hidden;
      transition: visibility 0s linear 0.4s;
    }
    @media (min-width: 768px) {
      .solution-modal-container {
        padding: 3rem 2rem;
        align-items: flex-start;
      }
    }
    .solution-modal-container.active {
      visibility: visible;
      transition: visibility 0s linear 0s;
    }

    .solution-modal-panel {
      position: relative;
      width: 100%;
      max-width: 1100px;
      background: #FFFFFF;
      opacity: 0;
      transform: translateY(40px) scale(0.96);
      transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.05s,
                  transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.05s;
      pointer-events: auto;
      box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.6),
                  0 0 0 1px rgba(255, 212, 0, 0.15);
    }
    .solution-modal-container.active .solution-modal-panel {
      opacity: 1;
      transform: translateY(0) scale(1);
    }

    /* Header del modal de solución */
    .solution-modal-header {
      position: relative;
      background: #0A0A0A;
      color: white;
      padding: 1.5rem 2rem 1.5rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      overflow: hidden;
    }
    @media (max-width: 640px) {
      .solution-modal-header { padding: 1.25rem; }
    }
    .solution-modal-header::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, #FFD400 0%, transparent 60%);
    }

    .solution-modal-close {
      width: 36px;
      height: 36px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #FFFFFF;
      cursor: pointer;
      transition: all 0.2s ease;
      flex-shrink: 0;
    }
    .solution-modal-close:hover {
      background: #FFD400;
      color: #0A0A0A;
      border-color: #FFD400;
      transform: rotate(90deg);
    }

    /* Body con grid: frame visual + beneficios */
    .solution-modal-body {
      padding: 2rem;
      max-height: calc(90vh - 100px);
      overflow-y: auto;
    }
    @media (max-width: 640px) {
      .solution-modal-body { padding: 1.25rem; }
    }

    /* Frame contenedor — el "device" donde se muestra el demo */
    .demo-frame {
      position: relative;
      background: #FAFAFA;
      border: 1px solid #E5E5E5;
      overflow: hidden;
    }
    .demo-frame-bar {
      background: #0A0A0A;
      padding: 8px 14px;
      display: flex;
      align-items: center;
      gap: 8px;
      border-bottom: 1px solid #1A1A1A;
    }
    .demo-frame-dots {
      display: inline-flex;
      gap: 5px;
    }
    .demo-frame-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(255, 212, 0, 0.6);
    }
    .demo-frame-dot:nth-child(2) { background: rgba(255, 212, 0, 0.4); }
    .demo-frame-dot:nth-child(3) { background: rgba(255, 212, 0, 0.25); }
    .demo-frame-url {
      flex: 1;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: rgba(255, 255, 255, 0.5);
      letter-spacing: 0.05em;
      padding-left: 8px;
    }
    .demo-frame-body {
      padding: 1.5rem;
      min-height: 280px;
    }

    /* Mobile frame variante */
    .demo-frame-mobile {
      max-width: 280px;
      margin: 0 auto;
      border-radius: 24px;
      overflow: hidden;
      background: #0A0A0A;
      padding: 8px;
      box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.3);
    }
    .demo-frame-mobile-screen {
      background: #FFFFFF;
      border-radius: 16px;
      overflow: hidden;
      min-height: 480px;
    }

    /* Beneficios integrados — chips numerados */
    .demo-benefit-chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      background: rgba(255, 212, 0, 0.12);
      border: 1px solid rgba(255, 212, 0, 0.3);
      color: #0A0A0A;
      font-size: 12px;
      font-weight: 600;
    }
    .demo-benefit-chip-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      background: #FFD400;
      color: #0A0A0A;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 800;
      flex-shrink: 0;
    }

    /* Animaciones de carga del demo */
    @keyframes growBar {
      from { width: 0%; }
      to { width: var(--bar-width, 70%); }
    }
    @keyframes typewriter {
      from { width: 0; }
      to { width: 100%; }
    }
    @keyframes blink-cursor {
      50% { opacity: 0; }
    }
    .solution-modal-panel.active .demo-anim-bar {
      animation: growBar 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
    }

    /* === MOVIMIENTO ADICIONAL: Hacen los demos sentirse VIVOS === */

    /* Fade-in escalonado de elementos al abrir modal */
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .solution-modal-container.active .demo-anim-in {
      animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    .solution-modal-container.active .demo-anim-in.delay-1 { animation-delay: 0.2s; }
    .solution-modal-container.active .demo-anim-in.delay-2 { animation-delay: 0.35s; }
    .solution-modal-container.active .demo-anim-in.delay-3 { animation-delay: 0.5s; }
    .solution-modal-container.active .demo-anim-in.delay-4 { animation-delay: 0.65s; }
    .solution-modal-container.active .demo-anim-in.delay-5 { animation-delay: 0.8s; }
    .solution-modal-container.active .demo-anim-in.delay-6 { animation-delay: 0.95s; }

    /* Pulso amarillo que llama atención */
    @keyframes attentionPulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(255, 212, 0, 0.5); }
      50% { box-shadow: 0 0 0 8px rgba(255, 212, 0, 0); }
    }
    .demo-pulse {
      animation: attentionPulse 2s ease-in-out infinite;
    }

    /* Live indicator que parpadea constantemente */
    @keyframes livePulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }
    .demo-live-indicator {
      animation: livePulse 1.6s ease-in-out infinite;
    }

    /* Brillo barrido que pasa por encima de un elemento */
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    .demo-shimmer {
      background: linear-gradient(90deg, transparent, rgba(255, 212, 0, 0.15), transparent);
      background-size: 200% 100%;
      animation: shimmer 3s ease-in-out infinite;
    }

    /* Counter que sube (usa data-target) */
    @keyframes countUp {
      from { opacity: 0.4; transform: translateY(4px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .demo-counter-anim {
      display: inline-block;
      animation: countUp 0.5s ease-out;
    }

    /* Notificación nueva entrando por arriba */
    @keyframes notifIn {
      from { opacity: 0; transform: translateY(-12px) scale(0.95); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    .demo-notif {
      animation: notifIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.2s both;
    }

    /* Item completándose: check que aparece */
    @keyframes checkPop {
      0% { transform: scale(0); opacity: 0; }
      60% { transform: scale(1.2); opacity: 1; }
      100% { transform: scale(1); opacity: 1; }
    }
    .solution-modal-container.active .demo-check-pop {
      animation: checkPop 0.5s cubic-bezier(0.16, 1, 0.3, 1) 1s both;
    }

    /* Dots de procesamiento (3 puntos que se animan en serie) */
    @keyframes dotBounce {
      0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
      40% { transform: scale(1); opacity: 1; }
    }
    .demo-dot {
      display: inline-block;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #FFD400;
      margin: 0 1px;
      animation: dotBounce 1.4s ease-in-out infinite;
    }
    .demo-dot:nth-child(2) { animation-delay: 0.2s; }
    .demo-dot:nth-child(3) { animation-delay: 0.4s; }

    /* Donut chart: segmentos se dibujan al abrir */
    @keyframes donutDraw {
      from { stroke-dasharray: 0 87.9; opacity: 0; }
      to { opacity: 1; }
    }
    .solution-modal-container.active .demo-donut-seg {
      animation: donutDraw 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
    }

    /* Solution cards — cursor pointer */
    .solution-card {
      cursor: pointer;
    }
  </style>
<script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            yellow: {
              DEFAULT: '#FFD400',
              hot: '#FFE600',
              dark: '#E6BE00',
              light: '#FFF5B8',
            },
            gold: '#C9A227',
            ink: '#0A0A0A',
            charcoal: '#1A1A1A',
          },
          fontFamily: {
            display: ['Manrope', 'sans-serif'],
            sans: ['Inter', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
          },
          fontSize: {
            'mega': ['clamp(2.5rem, 11vw, 11rem)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
            'huge': ['clamp(2rem, 6.5vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.025em' }],
            'big': ['clamp(1.75rem, 4.5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
            // Tamaños interiores elegantes para páginas internas (no del home)
            'section': ['clamp(1.75rem, 3.6vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
            'hero-int': ['clamp(2.25rem, 4.8vw, 4.25rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
          },
        },
      },
    };
  </script>

<!-- BODY (sin header ni footer - los provee HomeHeader/HomeFooter React) -->
<!-- ============================================
       SVG ICONS LIBRARY
       ============================================ -->
  <svg width="0" height="0" style="position: absolute;" aria-hidden="true">
    <defs>
      <symbol id="i-arrow" viewBox="0 0 24 24">
        <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </symbol>
      <symbol id="i-arrow-ur" viewBox="0 0 24 24">
        <path d="M7 17L17 7M7 7h10v10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </symbol>
      <symbol id="i-chevron-right" viewBox="0 0 24 24">
        <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </symbol>
      <symbol id="i-menu" viewBox="0 0 24 24">
        <path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      </symbol>
      <symbol id="i-sparkle" viewBox="0 0 24 24">
        <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" fill="currentColor"/>
      </symbol>
      <!-- Soluciones -->
      <symbol id="i-globe" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" fill="none" stroke="currentColor" stroke-width="2"/>
      </symbol>
      <symbol id="i-dashboard" viewBox="0 0 24 24">
        <rect x="3" y="3" width="8" height="8" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        <rect x="13" y="3" width="8" height="5" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        <rect x="13" y="10" width="8" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        <rect x="3" y="13" width="8" height="8" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      </symbol>
      <symbol id="i-survey" viewBox="0 0 24 24">
        <rect x="4" y="3" width="16" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        <path d="M8 8h8M8 12h8M8 16h5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </symbol>
      <symbol id="i-doc" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        <path d="M14 2v6h6M8 13h8M8 17h5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </symbol>
      <symbol id="i-mobile" viewBox="0 0 24 24">
        <rect x="6" y="2" width="12" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M11 18h2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </symbol>
      <symbol id="i-inventory" viewBox="0 0 24 24">
        <path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4M21 7v10l-9 4M12 11v10" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      </symbol>
      <symbol id="i-link" viewBox="0 0 24 24">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </symbol>
      <symbol id="i-loop" viewBox="0 0 24 24">
        <path d="M17 1l4 4-4 4M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 01-4 4H3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </symbol>
      <symbol id="i-chart" viewBox="0 0 24 24">
        <path d="M3 21h18M5 21V11l4 2 4-8 4 6 4-3v13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </symbol>
      <!-- Propuesta de valor -->
      <symbol id="i-team" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </symbol>
      <symbol id="i-bolt" viewBox="0 0 24 24">
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="currentColor"/>
      </symbol>
      <symbol id="i-brain" viewBox="0 0 24 24">
        <path d="M9.5 2a4.5 4.5 0 014.5 4.5v.5h1.5a3 3 0 013 3 3 3 0 01-1.5 2.6V14a4 4 0 01-4 4h-.5v.5a3.5 3.5 0 11-7 0V18H5a4 4 0 01-4-4v-.4A3 3 0 01-.5 11a3 3 0 013-3H4v-.5A4.5 4.5 0 019.5 2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      </symbol>
      <symbol id="i-plug" viewBox="0 0 24 24">
        <path d="M9 2v6M15 2v6M5 8h14v3a7 7 0 01-14 0V8zM12 18v4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </symbol>
      <!-- Cotizador -->
      <symbol id="i-check" viewBox="0 0 24 24">
        <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </symbol>
      <symbol id="i-clock" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M12 7v5l3.5 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </symbol>
    </defs>
  </svg>

  <!-- ============================================
       HEADER FIJO (mismo que home)
       ============================================ -->
  

  <main>

    <!-- ============================================
         BREADCRUMB
         ============================================ -->
    <section class="pt-20 pb-4 bg-white">
      <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <nav class="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink/50" aria-label="Breadcrumb">
          <a href="index.html" class="hover:text-yellow transition-colors">Inicio</a>
          <svg class="w-3 h-3"><use href="#i-chevron-right"/></svg>
          <span class="text-ink/40">Verticales</span>
          <svg class="w-3 h-3"><use href="#i-chevron-right"/></svg>
          <span class="text-ink">Plataformas digitales AI</span>
        </nav>
      </div>
    </section>

    <!-- ============================================
         HERO DE LA VERTICAL — Elegante, profesional
         ============================================ -->
    <section class="relative bg-white overflow-hidden pt-4 pb-20 lg:pb-32">

      <!-- Decoración sutil: estrella amarilla pequeña, rotación lenta -->
      <div class="absolute top-12 right-8 lg:right-16 w-12 h-12 lg:w-16 lg:h-16 rotate-anim pointer-events-none opacity-80" aria-hidden="true">
        <svg viewBox="0 0 100 100" class="w-full h-full">
          <use href="#i-sparkle" fill="#FFD400"/>
        </svg>
      </div>

      <!-- Decoración: círculo grande sutil al fondo izquierdo -->
      <div class="absolute -bottom-32 -left-32 w-80 h-80 lg:w-[480px] lg:h-[480px] border border-ink/[0.06] rounded-full pointer-events-none" aria-hidden="true"></div>
      <div class="absolute -bottom-20 -left-20 w-60 h-60 lg:w-[340px] lg:h-[340px] border border-ink/[0.08] rounded-full pointer-events-none" aria-hidden="true"></div>

      <div class="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 lg:pt-16">

        <div class="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">

          <!-- Columna izquierda: copy del hero -->
          <div>
            <!-- Eyebrow -->
            <div class="reveal mb-6 lg:mb-8">
              <div class="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-ink text-white">
                <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow rounded-full animate-pulse"></span>
                <span class="font-mono text-[10px] sm:text-xs uppercase tracking-widest">03 / Plataformas digitales AI</span>
              </div>
            </div>

            <!-- Headline — controlado, elegante, sin letter-by-letter -->
            <h1 class="reveal font-display-bold text-ink mb-6 lg:mb-8 leading-[1.02] tracking-tight" style="font-size: clamp(2.25rem, 4.8vw, 4.5rem);">
              Transformación digital con
              <span class="relative inline-block">
                <span class="relative z-10">IA</span>
                <span class="absolute inset-x-0 bottom-[10%] h-[28%] bg-yellow -z-0"></span>
              </span><span class="text-yellow">,</span><br>
              <span class="text-ink/40 font-display-bold">personalizada.</span>
            </h1>

            <!-- Subtítulo -->
            <p class="reveal text-base sm:text-lg lg:text-xl text-ink/70 leading-relaxed max-w-2xl mb-8 lg:mb-10">
              Optimización de procesos de negocio a través de plataformas creadas a la medida. <strong class="text-ink">Automatice tareas</strong>, extraiga información útil y obtenga las herramientas que el equipo necesita para decidir con datos reales.
            </p>

            <!-- CTAs -->
            <div class="reveal flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <button type="button" data-open-modal="quote" class="group relative inline-flex items-center justify-center sm:justify-start gap-3 h-12 sm:h-14 px-6 sm:px-7 bg-yellow text-ink text-sm sm:text-base font-bold magnetic-btn transition-all duration-300 hover:bg-yellow-hot hover:shadow-[0_8px_24px_-6px_rgba(255,212,0,0.6)] hover:-translate-y-0.5">
                <span>Cotizar ahora</span>
                <svg class="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1.5"><use href="#i-arrow"/></svg>
              </button>
              <a href="#soluciones" class="group inline-flex items-center justify-center sm:justify-start gap-3 h-12 sm:h-14 px-6 sm:px-7 border-2 border-ink text-ink text-sm sm:text-base font-bold hover:bg-ink hover:text-yellow transition-all">
                Ver soluciones
                <svg class="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><use href="#i-arrow-ur"/></svg>
              </a>
            </div>
          </div>

          <!-- Columna derecha: visual tecnológica -->
          <div class="reveal hidden lg:block">
            <div class="relative bg-ink p-8 overflow-hidden">

              <!-- Líneas decorativas técnicas -->
              <div class="absolute inset-0 opacity-[0.07]" style="background-image: linear-gradient(0deg, transparent 95%, #FFD400 95%), linear-gradient(90deg, transparent 95%, #FFD400 95%); background-size: 24px 24px;"></div>

              <!-- Header del bloque tipo terminal -->
              <div class="relative flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <div class="flex gap-1.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-yellow/60"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-yellow/40"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-yellow/20"></span>
                </div>
                <span class="font-mono text-[10px] uppercase tracking-widest text-white/40 ml-auto">platform.live</span>
              </div>

              <!-- "Pantallas" simuladas de las soluciones -->
              <div class="relative space-y-3">
                <!-- Item 1: dashboard -->
                <div class="bg-white/[0.04] border border-white/10 p-3 hover:border-yellow/40 transition-colors">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-yellow/10 text-yellow flex items-center justify-center flex-shrink-0">
                      <svg class="w-4 h-4"><use href="#i-dashboard"/></svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="text-white text-xs font-display-bold mb-1">Dashboards en tiempo real</div>
                      <div class="font-mono text-[10px] text-white/40">data.stream/operations</div>
                    </div>
                    <span class="w-1.5 h-1.5 rounded-full bg-yellow animate-pulse flex-shrink-0"></span>
                  </div>
                </div>

                <!-- Item 2: automatización -->
                <div class="bg-white/[0.04] border border-white/10 p-3 hover:border-yellow/40 transition-colors">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-yellow/10 text-yellow flex items-center justify-center flex-shrink-0">
                      <svg class="w-4 h-4"><use href="#i-loop"/></svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="text-white text-xs font-display-bold mb-1">Automatización de procesos</div>
                      <div class="font-mono text-[10px] text-white/40">workflows.engine</div>
                    </div>
                    <span class="w-1.5 h-1.5 rounded-full bg-yellow animate-pulse flex-shrink-0"></span>
                  </div>
                </div>

                <!-- Item 3: integraciones -->
                <div class="bg-white/[0.04] border border-white/10 p-3 hover:border-yellow/40 transition-colors">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-yellow/10 text-yellow flex items-center justify-center flex-shrink-0">
                      <svg class="w-4 h-4"><use href="#i-link"/></svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="text-white text-xs font-display-bold mb-1">Integraciones técnicas</div>
                      <div class="font-mono text-[10px] text-white/40">api.connect</div>
                    </div>
                    <span class="w-1.5 h-1.5 rounded-full bg-yellow animate-pulse flex-shrink-0"></span>
                  </div>
                </div>

                <!-- Item 4: IA -->
                <div class="bg-yellow text-ink border border-yellow p-3 hover:bg-yellow-hot transition-colors">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-ink text-yellow flex items-center justify-center flex-shrink-0">
                      <svg class="w-4 h-4"><use href="#i-brain"/></svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="text-ink text-xs font-display-bold mb-1">Inteligencia artificial aplicada</div>
                      <div class="font-mono text-[10px] text-ink/60">ai.embedded</div>
                    </div>
                    <span class="w-1.5 h-1.5 rounded-full bg-ink animate-pulse flex-shrink-0"></span>
                  </div>
                </div>
              </div>

              <!-- Footer tipo status -->
              <div class="relative mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span class="font-mono text-[10px] uppercase tracking-widest text-white/40">9 soluciones</span>
                <span class="font-mono text-[10px] uppercase tracking-widest text-yellow">8 días · entrega</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- ============================================
         ¿QUÉ INCLUYE? — 9 SOLUCIONES
         ============================================ -->
    <section id="soluciones" class="relative bg-white py-16 lg:py-28 border-t border-ink/10 overflow-hidden">
      <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">

        <div class="reveal mb-12 lg:mb-16 flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-8">
          <div class="flex-1">
            <div class="font-mono text-xs uppercase tracking-widest text-ink/60 mb-3 sm:mb-4">/ Soluciones integrales</div>
            <h2 class="font-mega text-section text-ink">
              Nueve soluciones,<br>
              <span class="yellow-highlight">una sola plataforma.</span>
            </h2>
          </div>
          <p class="text-base lg:text-lg text-ink/70 max-w-md">
            Herramientas digitales que el negocio necesita en el mundo digitalizado de hoy.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">

          <!-- 01 Micrositios -->
          <article class="solution-card p-6 lg:p-8 reveal" data-solution="micrositios" role="button" tabindex="0">
            <div class="flex items-start justify-between mb-6">
              <div class="card-icon text-ink/40">
                <svg class="w-8 h-8"><use href="#i-globe"/></svg>
              </div>
              <span class="card-num font-mono text-xs uppercase tracking-widest text-ink/40">01</span>
            </div>
            <h3 class="font-display-bold text-xl lg:text-2xl mb-3">Micrositios y catálogos digitales</h3>
            <p class="text-sm leading-relaxed opacity-80">
              Páginas dedicadas para campañas, productos, programas internos o clientes específicos. Catálogos en línea con filtros, búsqueda y carrito de solicitud, conectados al inventario real.
            </p>
          </article>

          <!-- 02 Dashboards -->
          <article class="solution-card p-6 lg:p-8 reveal" data-solution="dashboards" role="button" tabindex="0">
            <div class="flex items-start justify-between mb-6">
              <div class="card-icon text-ink/40">
                <svg class="w-8 h-8"><use href="#i-dashboard"/></svg>
              </div>
              <span class="card-num font-mono text-xs uppercase tracking-widest text-ink/40">02</span>
            </div>
            <h3 class="font-display-bold text-xl lg:text-2xl mb-3">Dashboards y reportería</h3>
            <p class="text-sm leading-relaxed opacity-80">
              Tableros que muestran el estado de la operación en tiempo real. Visualizaciones diseñadas para que un director entienda en cinco segundos qué está pasando, con qué cliente, en qué país.
            </p>
          </article>

          <!-- 03 Encuestas -->
          <article class="solution-card p-6 lg:p-8 reveal" data-solution="encuestas" role="button" tabindex="0">
            <div class="flex items-start justify-between mb-6">
              <div class="card-icon text-ink/40">
                <svg class="w-8 h-8"><use href="#i-survey"/></svg>
              </div>
              <span class="card-num font-mono text-xs uppercase tracking-widest text-ink/40">03</span>
            </div>
            <h3 class="font-display-bold text-xl lg:text-2xl mb-3">Plataformas de encuestas</h3>
            <p class="text-sm leading-relaxed opacity-80">
              Encuestas de satisfacción, clima laboral, salida, evaluaciones a proveedores. Resultados procesados automáticamente.
            </p>
          </article>

          <!-- 04 Digitalización -->
          <article class="solution-card p-6 lg:p-8 reveal" data-solution="digitalizacion" role="button" tabindex="0">
            <div class="flex items-start justify-between mb-6">
              <div class="card-icon text-ink/40">
                <svg class="w-8 h-8"><use href="#i-doc"/></svg>
              </div>
              <span class="card-num font-mono text-xs uppercase tracking-widest text-ink/40">04</span>
            </div>
            <h3 class="font-display-bold text-xl lg:text-2xl mb-3">Digitalización de documentos</h3>
            <p class="text-sm leading-relaxed opacity-80">
              Conversión de archivos físicos a información estructurada y consultable. Facturas, contratos, expedientes, órdenes de compra.
            </p>
          </article>

          <!-- 05 Aplicaciones de campo -->
          <article class="solution-card p-6 lg:p-8 reveal" data-solution="campo" role="button" tabindex="0">
            <div class="flex items-start justify-between mb-6">
              <div class="card-icon text-ink/40">
                <svg class="w-8 h-8"><use href="#i-mobile"/></svg>
              </div>
              <span class="card-num font-mono text-xs uppercase tracking-widest text-ink/40">05</span>
            </div>
            <h3 class="font-display-bold text-xl lg:text-2xl mb-3">Aplicaciones de campo</h3>
            <p class="text-sm leading-relaxed opacity-80">
              Herramientas pensadas para que el equipo capture información desde el celular, en piso, en planta o en ruta. La información llega al sistema central en el momento.
            </p>
          </article>

          <!-- 06 Inventarios -->
          <article class="solution-card p-6 lg:p-8 reveal" data-solution="inventarios" role="button" tabindex="0">
            <div class="flex items-start justify-between mb-6">
              <div class="card-icon text-ink/40">
                <svg class="w-8 h-8"><use href="#i-inventory"/></svg>
              </div>
              <span class="card-num font-mono text-xs uppercase tracking-widest text-ink/40">06</span>
            </div>
            <h3 class="font-display-bold text-xl lg:text-2xl mb-3">Inventarios</h3>
            <p class="text-sm leading-relaxed opacity-80">
              Sistemas que registran qué hay, dónde está, cuánto queda y cuándo se agota. Alertas automáticas antes de que falte.
            </p>
          </article>

          <!-- 07 Integraciones -->
          <article class="solution-card p-6 lg:p-8 reveal" data-solution="integraciones" role="button" tabindex="0">
            <div class="flex items-start justify-between mb-6">
              <div class="card-icon text-ink/40">
                <svg class="w-8 h-8"><use href="#i-link"/></svg>
              </div>
              <span class="card-num font-mono text-xs uppercase tracking-widest text-ink/40">07</span>
            </div>
            <h3 class="font-display-bold text-xl lg:text-2xl mb-3">Integraciones técnicas</h3>
            <p class="text-sm leading-relaxed opacity-80">
              Conecte sus herramientas existentes para que dejen de ser islas. Áreas comercial, contable y operativa trabajando con la misma información.
            </p>
          </article>

          <!-- 08 Automatización -->
          <article class="solution-card p-6 lg:p-8 reveal" data-solution="automatizacion" role="button" tabindex="0">
            <div class="flex items-start justify-between mb-6">
              <div class="card-icon text-ink/40">
                <svg class="w-8 h-8"><use href="#i-loop"/></svg>
              </div>
              <span class="card-num font-mono text-xs uppercase tracking-widest text-ink/40">08</span>
            </div>
            <h3 class="font-display-bold text-xl lg:text-2xl mb-3">Automatización de procesos</h3>
            <p class="text-sm leading-relaxed opacity-80">
              Identifique las tareas que el equipo hace una y otra vez y obtenga el flujo que las ejecute solo. Solicitudes recurrentes, reportes semanales, validación de datos.
            </p>
          </article>

          <!-- 09 Procesamiento de datos -->
          <article class="solution-card p-6 lg:p-8 reveal" data-solution="datos" role="button" tabindex="0">
            <div class="flex items-start justify-between mb-6">
              <div class="card-icon text-ink/40">
                <svg class="w-8 h-8"><use href="#i-chart"/></svg>
              </div>
              <span class="card-num font-mono text-xs uppercase tracking-widest text-ink/40">09</span>
            </div>
            <h3 class="font-display-bold text-xl lg:text-2xl mb-3">Procesamiento de datos</h3>
            <p class="text-sm leading-relaxed opacity-80">
              Limpieza, normalización y análisis de bases de datos que el negocio acumula desde hace años y nunca pudo aprovechar.
            </p>
          </article>

        </div>
      </div>
    </section>

    <!-- ============================================
         PROPUESTA DE VALOR — 4 cards
         ============================================ -->
    <section class="relative bg-white py-20 lg:py-32 overflow-hidden">

      <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">

        <div class="reveal mb-12 lg:mb-16 max-w-4xl">
          <div class="font-mono text-xs uppercase tracking-widest text-ink/60 mb-3 lg:mb-4">/ Propuesta de valor</div>
          <h2 class="font-mega text-section text-ink">
            Cuatro razones para<br>
            <span class="yellow-highlight">avanzar ya.</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink">

          <div class="reveal group bg-white p-6 sm:p-8 lg:p-10 hover:bg-yellow transition-colors duration-300 cursor-pointer relative overflow-hidden">
            <div class="font-mono text-xs uppercase tracking-widest text-ink/40 mb-5 lg:mb-6">01</div>
            <div class="icon-box w-12 h-12 mb-6 text-ink/30 group-hover:text-ink transition-colors">
              <svg class="w-10 h-10"><use href="#i-team"/></svg>
            </div>
            <h3 class="font-mega text-2xl lg:text-3xl text-ink mb-3">Equipo propio<br>de desarrollo.</h3>
            <p class="text-sm text-ink/60 group-hover:text-ink/80">Sin terceros en el código. El mismo equipo que diseña la plataforma es el que la mantiene y la mejora.</p>
          </div>

          <div class="reveal group bg-white p-6 sm:p-8 lg:p-10 hover:bg-yellow transition-colors duration-300 cursor-pointer relative overflow-hidden">
            <div class="font-mono text-xs uppercase tracking-widest text-ink/40 mb-5 lg:mb-6">02</div>
            <div class="icon-box w-12 h-12 mb-6 text-ink/30 group-hover:text-ink transition-colors">
              <svg class="w-10 h-10"><use href="#i-bolt"/></svg>
            </div>
            <h3 class="font-mega text-2xl lg:text-3xl text-ink mb-3">Entrega en<br>8 días hábiles.</h3>
            <p class="text-sm text-ink/60 group-hover:text-ink/80">Primer prototipo funcional listo para revisar en menos de dos semanas. Sin procesos largos.</p>
          </div>

          <div class="reveal group bg-white p-6 sm:p-8 lg:p-10 hover:bg-yellow transition-colors duration-300 cursor-pointer relative overflow-hidden">
            <div class="font-mono text-xs uppercase tracking-widest text-ink/40 mb-5 lg:mb-6">03</div>
            <div class="icon-box w-12 h-12 mb-6 text-ink/30 group-hover:text-ink transition-colors">
              <svg class="w-10 h-10"><use href="#i-brain"/></svg>
            </div>
            <h3 class="font-mega text-2xl lg:text-3xl text-ink mb-3">IA donde<br>aporta valor.</h3>
            <p class="text-sm text-ink/60 group-hover:text-ink/80">Se aplica cuando reduce trabajo manual, mejora decisiones o ahorra costos. No se mete en todo solo porque está de moda.</p>
          </div>

          <div class="reveal group bg-white p-6 sm:p-8 lg:p-10 hover:bg-yellow transition-colors duration-300 cursor-pointer relative overflow-hidden">
            <div class="font-mono text-xs uppercase tracking-widest text-ink/40 mb-5 lg:mb-6">04</div>
            <div class="icon-box w-12 h-12 mb-6 text-ink/30 group-hover:text-ink transition-colors">
              <svg class="w-10 h-10"><use href="#i-plug"/></svg>
            </div>
            <h3 class="font-mega text-2xl lg:text-3xl text-ink mb-3">Integración<br>con lo que ya tiene.</h3>
            <p class="text-sm text-ink/60 group-hover:text-ink/80">No se reemplazan sus herramientas actuales. Se hacen trabajar juntas.</p>
          </div>

        </div>
      </div>
    </section>


    <!-- ============================================
         CTA FINAL
         ============================================ -->
    <section class="relative bg-white text-ink py-20 lg:py-32 overflow-hidden border-t border-ink/10">

      <div class="absolute -top-40 -left-40 w-[500px] h-[500px] border-2 border-ink/[0.06] rounded-full pointer-events-none"></div>
      <div class="absolute -bottom-40 -right-40 w-[500px] h-[500px] border-2 border-yellow/30 rounded-full pointer-events-none"></div>

      <div class="absolute top-20 right-4 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 float-anim pointer-events-none opacity-60">
        <svg viewBox="0 0 100 100" class="w-full h-full text-yellow">
          <use href="#i-sparkle"/>
        </svg>
      </div>

      <div class="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">

        <div class="reveal max-w-5xl">

          <div class="font-mono text-xs uppercase tracking-widest text-ink/60 mb-4 lg:mb-6">/ Empecemos</div>

          <h2 class="font-mega text-hero-int text-ink leading-[1.05] mb-8 lg:mb-12">
            La plataforma que su<br>
            empresa necesita,<br>
            en <span class="bg-yellow text-ink px-2 sm:px-3">ocho días.</span>
          </h2>

          <div class="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-12 lg:mb-16">
            <button type="button" data-open-modal="quote" class="group relative inline-flex items-center justify-center gap-3 h-16 sm:h-20 px-8 sm:px-12 bg-ink text-yellow text-lg sm:text-2xl font-bold overflow-hidden">
              <span class="relative z-10">Cotizar ahora</span>
              <svg class="w-5 h-5 sm:w-6 sm:h-6 relative z-10 transition-transform group-hover:translate-x-2"><use href="#i-arrow"/></svg>
            </button>
            <a href="index.html" class="group inline-flex items-center justify-center gap-3 h-16 sm:h-20 px-8 sm:px-12 border-2 border-ink text-ink text-lg sm:text-2xl font-bold hover:bg-ink hover:text-yellow transition-all">
              Volver al inicio
              <svg class="w-6 h-6 group-hover:translate-x-2 transition-transform"><use href="#i-arrow"/></svg>
            </a>
          </div>

          <div class="grid sm:grid-cols-3 gap-6 lg:gap-12 border-t-2 border-ink/10 pt-8 lg:pt-12">
            <div>
              <div class="font-mono text-xs uppercase tracking-widest text-ink/60 mb-2">Email</div>
              <a href="mailto:team-bsm@brainstore.com.mx" class="font-display-bold text-base lg:text-lg text-ink link-underline break-all">team-bsm@brainstore.com.mx</a>
            </div>
            <div>
              <div class="font-mono text-xs uppercase tracking-widest text-ink/60 mb-2">Oficina</div>
              <div class="text-ink font-medium text-sm lg:text-base">Miguel de Cervantes Saavedra 169<br>Granada, CDMX</div>
            </div>
            <div>
              <div class="font-mono text-xs uppercase tracking-widest text-ink/60 mb-2">Cobertura</div>
              <div class="text-ink font-medium text-sm lg:text-base">10 países Latinoamérica<br>5 entidades propias</div>
            </div>
          </div>

        </div>
      </div>
    </section>

  </main>

  <!-- ============================================
       FOOTER (mismo del home)
       ============================================ -->
  

  <!-- ============================================
       SCRIPTS
       ============================================ -->
  <script>
    // Reveal on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Magnetic buttons
    document.querySelectorAll('.magnetic-btn').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 1024) return;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = \`translate(\${x * 0.15}px, \${y * 0.15}px)\`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });

    // Mobile menu
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileToggle?.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

    // Parallax estrella — Optimizado con rAF para no trabar scroll
    const star = document.querySelector('.rotate-anim');
    if (star) star.style.willChange = 'transform';
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          if (star && scrolled < window.innerHeight) {
            star.style.transform = \`translate3d(0, \${scrolled * 0.3}px, 0) rotate(\${scrolled * 0.5}deg)\`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  </script>


  <!-- ============================================
       MODAL DE SOLUCIÓN — Demo visual por card
       ============================================ -->
  <div class="solution-modal-backdrop" id="sol-modal-backdrop" data-close-sol-modal></div>
  <div class="solution-modal-container" id="sol-modal-container" aria-hidden="true" role="dialog">
    <div class="solution-modal-panel">

      <!-- Header del modal -->
      <div class="solution-modal-header">
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-10 h-10 bg-yellow text-ink flex items-center justify-center flex-shrink-0" id="sol-modal-icon">
            <!-- Icono dinámico -->
          </div>
          <div class="min-w-0">
            <div class="font-mono text-[10px] uppercase tracking-widest text-yellow mb-0.5" id="sol-modal-num">Solución 01</div>
            <h3 class="font-display-bold text-lg sm:text-xl text-white truncate" id="sol-modal-title">Título</h3>
          </div>
        </div>
        <button type="button" class="solution-modal-close" data-close-sol-modal aria-label="Cerrar">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <path d="M6 6l12 12M18 6L6 18"/>
          </svg>
        </button>
      </div>

      <!-- Body con frame visual -->
      <div class="solution-modal-body">
        <div id="sol-modal-content">
          <!-- Contenido dinámico inyectado por JS -->
        </div>

        <!-- CTA del modal de solución -->
        <div class="mt-8 pt-6 border-t border-ink/10 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <p class="text-sm text-ink/60 max-w-md">
            ¿Le interesa esta solución? Solicite una propuesta formal en menos de 24 horas hábiles.
          </p>
          <button type="button" data-open-modal="quote" data-close-sol-modal class="group relative inline-flex items-center gap-2 h-11 px-5 bg-ink text-yellow text-sm font-bold transition-all duration-300 hover:bg-charcoal whitespace-nowrap">
            <span>Cotizar esta solución</span>
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1"><use href="#i-arrow"/></svg>
          </button>
        </div>
      </div>

    </div>
  </div>

  <!-- ============================================
       PLANTILLAS DE FRAMES DEMO (ocultas, las usa JS)
       ============================================ -->
  <div id="sol-frames" style="display:none;">

    <!-- FRAME 1: MICROSITIOS Y CATÁLOGOS -->
    <template data-frame="micrositios">
      <div class="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8">
        <!-- Browser frame con catálogo -->
        <div class="demo-frame">
          <div class="demo-frame-bar">
            <div class="demo-frame-dots"><span class="demo-frame-dot"></span><span class="demo-frame-dot"></span><span class="demo-frame-dot"></span></div>
            <span class="demo-frame-url">catalogo.suempresa.com/productos</span>
          </div>
          <div class="demo-frame-body bg-white">
            <!-- Header del micrositio simulado -->
            <div class="flex items-center justify-between mb-4 pb-3 border-b border-ink/10">
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 bg-ink"></div>
                <span class="font-display-bold text-sm">Su Catálogo</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="font-mono text-[10px] uppercase tracking-widest text-ink/50">156 productos</span>
                <div class="w-7 h-7 bg-yellow flex items-center justify-center">
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 3h2l2 12h13l3-9H6"/><circle cx="9" cy="20" r="1.5" fill="currentColor"/><circle cx="18" cy="20" r="1.5" fill="currentColor"/></svg>
                </div>
              </div>
            </div>
            <!-- Filtros -->
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span class="px-2.5 py-1 bg-ink text-yellow text-[10px] font-mono uppercase tracking-wide">Todos</span>
              <span class="px-2.5 py-1 border border-ink/15 text-[10px] font-mono uppercase tracking-wide text-ink/70">Tecnología</span>
              <span class="px-2.5 py-1 border border-ink/15 text-[10px] font-mono uppercase tracking-wide text-ink/70">Mobiliario</span>
              <span class="px-2.5 py-1 border border-ink/15 text-[10px] font-mono uppercase tracking-wide text-ink/70">Industrial</span>
            </div>
            <!-- Grid de productos -->
            <div class="grid grid-cols-3 gap-2">
              <div class="bg-ink/[0.03] aspect-square p-2 flex flex-col justify-between hover:bg-yellow/20 transition-colors cursor-pointer demo-anim-in delay-1">
                <div class="w-full h-8 bg-ink/10"></div>
                <div>
                  <div class="text-[10px] font-display-bold text-ink leading-tight">Laptop Pro 14</div>
                  <div class="text-[9px] text-ink/50 font-mono">$1,625 USD</div>
                </div>
              </div>
              <div class="bg-yellow aspect-square p-2 flex flex-col justify-between cursor-pointer demo-anim-in delay-2 demo-pulse">
                <div class="w-full h-8 bg-ink/20"></div>
                <div>
                  <div class="text-[10px] font-display-bold text-ink leading-tight">Silla Ergo Plus</div>
                  <div class="text-[9px] text-ink/70 font-mono">$445 USD</div>
                </div>
              </div>
              <div class="bg-ink/[0.03] aspect-square p-2 flex flex-col justify-between hover:bg-yellow/20 transition-colors cursor-pointer demo-anim-in delay-3">
                <div class="w-full h-8 bg-ink/10"></div>
                <div>
                  <div class="text-[10px] font-display-bold text-ink leading-tight">Monitor 27"</div>
                  <div class="text-[9px] text-ink/50 font-mono">$610 USD</div>
                </div>
              </div>
              <div class="bg-ink/[0.03] aspect-square p-2 flex flex-col justify-between hover:bg-yellow/20 transition-colors cursor-pointer demo-anim-in delay-4">
                <div class="w-full h-8 bg-ink/10"></div>
                <div>
                  <div class="text-[10px] font-display-bold text-ink leading-tight">Escritorio L</div>
                  <div class="text-[9px] text-ink/50 font-mono">$770 USD</div>
                </div>
              </div>
              <div class="bg-ink/[0.03] aspect-square p-2 flex flex-col justify-between hover:bg-yellow/20 transition-colors cursor-pointer demo-anim-in delay-5">
                <div class="w-full h-8 bg-ink/10"></div>
                <div>
                  <div class="text-[10px] font-display-bold text-ink leading-tight">Auriculares Pro</div>
                  <div class="text-[9px] text-ink/50 font-mono">$240 USD</div>
                </div>
              </div>
              <div class="bg-ink/[0.03] aspect-square p-2 flex flex-col justify-between hover:bg-yellow/20 transition-colors cursor-pointer demo-anim-in delay-6">
                <div class="w-full h-8 bg-ink/10"></div>
                <div>
                  <div class="text-[10px] font-display-bold text-ink leading-tight">Webcam HD</div>
                  <div class="text-[9px] text-ink/50 font-mono">$130 USD</div>
                </div>
              </div>
            </div>
            <!-- Carrito flotante con notificación animada -->
            <div class="mt-4 bg-ink text-white p-3 flex items-center justify-between demo-notif">
              <div>
                <div class="font-mono text-[9px] uppercase tracking-widest text-yellow">Solicitar propuesta</div>
                <div class="text-sm font-display-bold"><span class="demo-counter-anim">3</span> productos seleccionados</div>
              </div>
              <div class="px-3 py-1.5 bg-yellow text-ink text-xs font-bold demo-pulse">Cotizar →</div>
            </div>
          </div>
        </div>
        <!-- Beneficios al lado -->
        <div class="flex flex-col justify-center">
          <p class="text-sm text-ink/60 mb-5 leading-relaxed">
            Páginas dedicadas a la marca con catálogo navegable, filtros por categoría y carrito de solicitud conectado al inventario real.
          </p>
          <div class="space-y-3">
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">1</span>Catálogo navegable con filtros</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">2</span>Carrito de solicitud integrado</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">3</span>Conectado a el inventario real</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">4</span>Personalizado con la identidad de marca</div>
          </div>
        </div>
      </div>
    </template>

    <!-- FRAME 2: DASHBOARDS Y REPORTERÍA -->
    <template data-frame="dashboards">
      <div class="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8">
        <div class="demo-frame">
          <div class="demo-frame-bar">
            <div class="demo-frame-dots"><span class="demo-frame-dot"></span><span class="demo-frame-dot"></span><span class="demo-frame-dot"></span></div>
            <span class="demo-frame-url">dashboard.suempresa.com/operaciones</span>
          </div>
          <div class="demo-frame-body bg-ink text-white">
            <!-- Header dashboard -->
            <div class="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <div>
                <div class="font-mono text-[10px] uppercase tracking-widest text-yellow mb-0.5">Operaciones · live</div>
                <div class="font-display-bold text-sm">Resumen ejecutivo</div>
              </div>
              <div class="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest">
                <span class="w-1.5 h-1.5 bg-yellow rounded-full animate-pulse"></span>
                <span class="text-white/60">Actualizado hace 12s</span>
              </div>
            </div>
            <!-- KPIs -->
            <div class="grid grid-cols-3 gap-2 mb-4">
              <div class="bg-white/[0.04] border-l-2 border-yellow p-2.5 demo-anim-in delay-1">
                <div class="font-mono text-[9px] uppercase tracking-widest text-white/50">Ventas mes</div>
                <div class="font-display-bold text-lg text-white mt-1">$120K</div>
                <div class="text-[9px] text-yellow">↑ 18% vs ant.</div>
              </div>
              <div class="bg-white/[0.04] border-l-2 border-yellow/60 p-2.5 demo-anim-in delay-2">
                <div class="font-mono text-[9px] uppercase tracking-widest text-white/50">Órdenes</div>
                <div class="font-display-bold text-lg text-white mt-1">847</div>
                <div class="text-[9px] text-yellow">↑ 12%</div>
              </div>
              <div class="bg-white/[0.04] border-l-2 border-yellow/40 p-2.5 demo-anim-in delay-3">
                <div class="font-mono text-[9px] uppercase tracking-widest text-white/50">Cumplimiento</div>
                <div class="font-display-bold text-lg text-white mt-1">96%</div>
                <div class="text-[9px] text-yellow">→ estable</div>
              </div>
            </div>
            <!-- Gráfica de barras -->
            <div class="bg-white/[0.04] p-3 mb-3">
              <div class="font-mono text-[9px] uppercase tracking-widest text-white/50 mb-2.5">Ventas por país (USD)</div>
              <div class="space-y-1.5">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] text-white/70 w-12 font-mono">MX</span>
                  <div class="flex-1 h-3 bg-white/5 relative overflow-hidden">
                    <div class="absolute inset-y-0 left-0 bg-yellow demo-anim-bar" style="--bar-width: 88%; width: 88%;"></div>
                  </div>
                  <span class="text-[10px] text-yellow font-mono w-10 text-right">44K</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-[10px] text-white/70 w-12 font-mono">CO</span>
                  <div class="flex-1 h-3 bg-white/5 relative overflow-hidden">
                    <div class="absolute inset-y-0 left-0 bg-yellow demo-anim-bar" style="--bar-width: 65%; width: 65%;"></div>
                  </div>
                  <span class="text-[10px] text-yellow font-mono w-10 text-right">32K</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-[10px] text-white/70 w-12 font-mono">CL</span>
                  <div class="flex-1 h-3 bg-white/5 relative overflow-hidden">
                    <div class="absolute inset-y-0 left-0 bg-yellow demo-anim-bar" style="--bar-width: 52%; width: 52%;"></div>
                  </div>
                  <span class="text-[10px] text-yellow font-mono w-10 text-right">26K</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-[10px] text-white/70 w-12 font-mono">PE</span>
                  <div class="flex-1 h-3 bg-white/5 relative overflow-hidden">
                    <div class="absolute inset-y-0 left-0 bg-yellow demo-anim-bar" style="--bar-width: 38%; width: 38%;"></div>
                  </div>
                  <span class="text-[10px] text-yellow font-mono w-10 text-right">19K</span>
                </div>
              </div>
            </div>
            <!-- Tabla mini -->
            <div class="bg-white/[0.04] p-3">
              <div class="font-mono text-[9px] uppercase tracking-widest text-white/50 mb-2">Alertas activas</div>
              <div class="space-y-1.5">
                <div class="flex items-center justify-between text-[11px]">
                  <span class="text-white/80">Stock bajo · 12 productos</span>
                  <span class="text-yellow font-mono">Revisar →</span>
                </div>
                <div class="flex items-center justify-between text-[11px]">
                  <span class="text-white/80">3 órdenes pendientes &gt; 48h</span>
                  <span class="text-yellow font-mono">Atender →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center">
          <p class="text-sm text-ink/60 mb-5 leading-relaxed">
            Tableros que muestran el estado real de la operación. Cada dato actualizado en tiempo real, cada decisión informada con cifras vivas.
          </p>
          <div class="space-y-3">
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">1</span>Datos en tiempo real</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">2</span>KPIs configurables por área</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">3</span>Alertas automáticas inteligentes</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">4</span>Exportable a PDF y Excel</div>
          </div>
        </div>
      </div>
    </template>

    <!-- FRAME 3: PLATAFORMAS DE ENCUESTAS -->
    <template data-frame="encuestas">
      <div class="grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-8 items-center">
        <!-- Mobile frame con encuesta -->
        <div class="demo-frame-mobile">
          <div class="demo-frame-mobile-screen p-5">
            <!-- Status bar mobile simulada -->
            <div class="flex justify-between items-center mb-5">
              <div class="font-mono text-[9px] text-ink/50">9:41</div>
              <div class="flex gap-1">
                <div class="w-4 h-1.5 bg-ink/20"></div>
                <div class="w-4 h-1.5 bg-ink/20"></div>
                <div class="w-4 h-1.5 bg-yellow"></div>
              </div>
            </div>
            <!-- Logo cliente -->
            <div class="w-8 h-8 bg-ink mb-6"></div>
            <!-- Pregunta -->
            <div class="mb-6">
              <div class="font-mono text-[9px] uppercase tracking-widest text-ink/50 mb-2">Pregunta 3 de 8</div>
              <h4 class="font-display-bold text-base text-ink leading-tight mb-4">¿Qué tan probable es que recomiende nuestro servicio a un colega?</h4>
            </div>
            <!-- Escala NPS -->
            <div class="grid grid-cols-5 gap-1.5 mb-6">
              <div class="aspect-square border border-ink/15 flex items-center justify-center text-xs font-display-bold text-ink/40">0</div>
              <div class="aspect-square border border-ink/15 flex items-center justify-center text-xs font-display-bold text-ink/40">1</div>
              <div class="aspect-square border border-ink/15 flex items-center justify-center text-xs font-display-bold text-ink/40">2</div>
              <div class="aspect-square border border-ink/15 flex items-center justify-center text-xs font-display-bold text-ink/40">3</div>
              <div class="aspect-square border border-ink/15 flex items-center justify-center text-xs font-display-bold text-ink/40">4</div>
              <div class="aspect-square border border-ink/15 flex items-center justify-center text-xs font-display-bold text-ink/40">5</div>
              <div class="aspect-square border border-ink/15 flex items-center justify-center text-xs font-display-bold text-ink/40">6</div>
              <div class="aspect-square border border-ink/15 flex items-center justify-center text-xs font-display-bold text-ink/40">7</div>
              <div class="aspect-square border border-ink/15 flex items-center justify-center text-xs font-display-bold text-ink/40">8</div>
              <div class="aspect-square bg-yellow flex items-center justify-center text-xs font-display-bold text-ink ring-2 ring-yellow ring-offset-2 demo-pulse">9</div>
            </div>
            <div class="flex justify-between text-[9px] text-ink/40 font-mono uppercase tracking-widest mb-6">
              <span>Nada probable</span>
              <span>Muy probable</span>
            </div>
            <!-- Progress -->
            <div class="h-1 bg-ink/10 mb-4 relative overflow-hidden">
              <div class="absolute inset-y-0 left-0 bg-yellow demo-anim-bar" style="--bar-width: 38%; width: 38%;"></div>
            </div>
            <button class="w-full bg-ink text-yellow py-3 text-sm font-display-bold">Continuar →</button>
          </div>
        </div>
        <!-- Lado derecho: resultados live + beneficios -->
        <div>
          <div class="bg-ink text-white p-4 mb-5">
            <div class="font-mono text-[10px] uppercase tracking-widest text-yellow mb-2 flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-yellow rounded-full demo-live-indicator"></span>
              Resultados · live
            </div>
            <div class="grid grid-cols-3 gap-3 mb-3">
              <div class="demo-anim-in delay-1">
                <div class="font-display-bold text-2xl text-yellow">847</div>
                <div class="text-[10px] text-white/50 font-mono">respuestas</div>
              </div>
              <div class="demo-anim-in delay-2">
                <div class="font-display-bold text-2xl text-white">72%</div>
                <div class="text-[10px] text-white/50 font-mono">tasa respuesta</div>
              </div>
              <div class="demo-anim-in delay-3">
                <div class="font-display-bold text-2xl text-yellow">+58</div>
                <div class="text-[10px] text-white/50 font-mono">NPS score</div>
              </div>
            </div>
            <div class="h-2 bg-white/10 relative overflow-hidden">
              <div class="absolute inset-y-0 left-0 bg-yellow demo-anim-bar" style="--bar-width: 72%; width: 72%;"></div>
            </div>
          </div>
          <p class="text-sm text-ink/60 mb-5 leading-relaxed">
            Encuestas que sus colaboradores y clientes responden desde el celular. Resultados procesados en tiempo real, segmentados y exportables.
          </p>
          <div class="space-y-3">
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">1</span>NPS, clima laboral, satisfacción</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">2</span>Procesamiento automático</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">3</span>Segmentación por área o región</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">4</span>Multi-canal: web, correo, SMS</div>
          </div>
        </div>
      </div>
    </template>

    <!-- FRAME 4: DIGITALIZACIÓN DE DOCUMENTOS -->
    <template data-frame="digitalizacion">
      <div class="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8">
        <div class="demo-frame">
          <div class="demo-frame-bar">
            <div class="demo-frame-dots"><span class="demo-frame-dot"></span><span class="demo-frame-dot"></span><span class="demo-frame-dot"></span></div>
            <span class="demo-frame-url">archivo.suempresa.com/control-calidad</span>
          </div>
          <div class="demo-frame-body bg-white">
            <div class="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-4 flex items-center gap-2">
              Antes vs Después
              <span class="w-1.5 h-1.5 bg-yellow rounded-full demo-live-indicator"></span>
              <span class="text-yellow">procesando</span>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <!-- Antes: hoja de control impresa -->
              <div class="demo-anim-in delay-1">
                <div class="text-[10px] font-mono uppercase tracking-widest text-ink/40 mb-2">ANTES · Hoja impresa</div>
                <div class="bg-ink/[0.04] p-3 min-h-[210px] relative overflow-hidden">
                  <!-- Shimmer barrido sobre la hoja -->
                  <div class="absolute inset-0 demo-shimmer pointer-events-none"></div>

                  <!-- Header de hoja de control -->
                  <div class="relative">
                    <div class="text-[8px] font-mono text-ink/60 uppercase tracking-wider text-center mb-2 pb-1 border-b border-ink/20">
                      Control de calidad · Línea 3
                    </div>
                    <!-- Renglones simulando llenado a mano -->
                    <div class="space-y-1.5">
                      <div class="flex items-center gap-2">
                        <span class="text-[7px] font-mono text-ink/40">Lote:</span>
                        <div class="h-2 bg-ink/15 flex-1"></div>
                      </div>
                      <div class="flex items-center gap-2">
                        <span class="text-[7px] font-mono text-ink/40">Hora:</span>
                        <div class="h-2 bg-ink/15 flex-1"></div>
                      </div>
                      <div class="flex items-center gap-2">
                        <span class="text-[7px] font-mono text-ink/40">Operador:</span>
                        <div class="h-2 bg-ink/15 flex-1"></div>
                      </div>
                    </div>
                    <!-- Checkboxes simulados -->
                    <div class="mt-3 space-y-1">
                      <div class="flex items-center gap-1.5">
                        <div class="w-2 h-2 border border-ink/40"></div>
                        <div class="h-1.5 bg-ink/10 flex-1"></div>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <div class="w-2 h-2 border border-ink/40 bg-ink/30"></div>
                        <div class="h-1.5 bg-ink/10 flex-1"></div>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <div class="w-2 h-2 border border-ink/40 bg-ink/30"></div>
                        <div class="h-1.5 bg-ink/10 flex-1"></div>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <div class="w-2 h-2 border border-ink/40"></div>
                        <div class="h-1.5 bg-ink/10 flex-1"></div>
                      </div>
                    </div>
                    <!-- Firma simulada -->
                    <div class="mt-3 pt-2 border-t border-ink/15">
                      <div class="text-[7px] font-mono text-ink/40 mb-1">Firma supervisor:</div>
                      <div class="h-3 bg-ink/10 w-3/5"></div>
                    </div>
                  </div>
                  <div class="absolute bottom-1 right-2 text-[9px] font-mono text-ink/40 uppercase tracking-wide">F-QC-001</div>
                </div>
                <div class="text-[10px] text-ink/50 mt-2 font-mono">2,400 hojas / mes</div>
              </div>

              <!-- Después: registro digital -->
              <div class="demo-anim-in delay-2">
                <div class="text-[10px] font-mono uppercase tracking-widest text-yellow mb-2">DESPUÉS · Datos estructurados</div>
                <div class="bg-ink text-white p-3 min-h-[210px]">
                  <div class="font-mono text-[9px] uppercase tracking-widest text-yellow mb-2">Registro · QC-2026-0847</div>
                  <div class="space-y-1.5 text-[10px] font-mono">
                    <div class="flex justify-between demo-anim-in delay-3"><span class="text-white/50">lote:</span><span class="text-white">L-2026-0314</span></div>
                    <div class="flex justify-between demo-anim-in delay-3"><span class="text-white/50">línea:</span><span class="text-white">Línea 3</span></div>
                    <div class="flex justify-between demo-anim-in delay-4"><span class="text-white/50">turno:</span><span class="text-white">14:30 - 22:30</span></div>
                    <div class="flex justify-between demo-anim-in delay-4"><span class="text-white/50">operador:</span><span class="text-white">M. González</span></div>
                    <div class="flex justify-between demo-anim-in delay-5"><span class="text-white/50">supervisor:</span><span class="text-white">A. Ramírez</span></div>
                    <div class="flex justify-between demo-anim-in delay-5"><span class="text-white/50">checks ok:</span><span class="text-yellow">12 / 14</span></div>
                    <div class="flex justify-between demo-anim-in delay-6"><span class="text-white/50">no conformes:</span><span class="text-yellow">2 hallazgos</span></div>
                    <div class="flex justify-between demo-anim-in delay-6"><span class="text-white/50">estado:</span><span class="text-yellow">Aprobado c/ obs.</span></div>
                  </div>
                </div>
                <div class="text-[10px] text-yellow mt-2 font-mono">Trazable y consultable</div>
              </div>
            </div>

            <!-- Progreso de procesamiento -->
            <div class="mt-5 pt-4 border-t border-ink/10">
              <div class="flex items-center justify-between mb-2">
                <span class="font-mono text-[10px] uppercase tracking-widest text-ink/60 flex items-center gap-2">
                  Digitalizando hojas
                  <span class="inline-flex"><span class="demo-dot"></span><span class="demo-dot"></span><span class="demo-dot"></span></span>
                </span>
                <span class="font-display-bold text-sm text-ink demo-counter-anim">1,752 / 2,400</span>
              </div>
              <div class="h-1.5 bg-ink/10 relative overflow-hidden">
                <div class="absolute inset-y-0 left-0 bg-yellow demo-anim-bar" style="--bar-width: 73%; width: 73%;"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center">
          <p class="text-sm text-ink/60 mb-5 leading-relaxed">
            Sus archivos físicos se convierten en información consultable. Facturas, contratos, expedientes y órdenes pasan de papel apilado a datos que se buscan en segundos.
          </p>
          <div class="space-y-3">
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">1</span>Extracción inteligente con IA</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">2</span>Base de datos buscable</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">3</span>Lectura de CFDI y documentos clave</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">4</span>Procesamiento masivo por lote</div>
          </div>
        </div>
      </div>
    </template>

    <!-- FRAME 5: APLICACIONES DE CAMPO -->
    <template data-frame="campo">
      <div class="grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-8 items-center">
        <!-- Mobile frame -->
        <div class="demo-frame-mobile">
          <div class="demo-frame-mobile-screen p-5">
            <div class="flex justify-between items-center mb-5">
              <div class="font-mono text-[9px] text-ink/50">14:32</div>
              <div class="flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 bg-yellow rounded-full animate-pulse"></span>
                <span class="font-mono text-[8px] uppercase text-ink/60">Captura activa</span>
              </div>
            </div>
            <div class="font-mono text-[9px] uppercase tracking-widest text-ink/50 mb-1">Planta solar · Hermosillo</div>
            <h4 class="font-display-bold text-base text-ink leading-tight mb-1">Inversor INV-04 · String B</h4>
            <p class="font-mono text-[10px] text-ink/50 mb-4">Lectura programada · 14:30h</p>

            <!-- Foto del inversor -->
            <div class="bg-gradient-to-br from-yellow/30 to-ink/10 aspect-video mb-4 flex items-center justify-center relative">
              <svg class="w-10 h-10 text-ink/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="4" width="18" height="14" rx="1"/>
                <path d="M7 8h10M7 12h10M7 16h6"/>
                <circle cx="18" cy="16" r="1" fill="currentColor"/>
              </svg>
              <div class="absolute top-2 right-2 px-2 py-0.5 bg-yellow text-ink text-[9px] font-mono uppercase tracking-wide">+ Foto</div>
              <div class="absolute bottom-2 left-2 font-mono text-[8px] text-ink/60 uppercase tracking-widest">IMG_inv04_b.jpg</div>
            </div>

            <!-- Lecturas técnicas -->
            <div class="space-y-2 mb-4">
              <div class="flex items-center justify-between p-2 bg-yellow/15 border border-yellow/40 demo-anim-in delay-1">
                <div>
                  <div class="font-mono text-[9px] uppercase tracking-widest text-ink/60">Voltaje DC</div>
                  <div class="font-display-bold text-sm text-ink demo-counter-anim">612.4 V</div>
                </div>
                <div class="font-mono text-[10px] text-yellow uppercase">↑ óptimo</div>
              </div>
              <div class="flex items-center justify-between p-2 bg-yellow/15 border border-yellow/40 demo-anim-in delay-2">
                <div>
                  <div class="font-mono text-[9px] uppercase tracking-widest text-ink/60">Corriente</div>
                  <div class="font-display-bold text-sm text-ink demo-counter-anim">18.7 A</div>
                </div>
                <div class="font-mono text-[10px] text-yellow uppercase">→ estable</div>
              </div>
              <div class="flex items-center justify-between p-2 border border-ink/15 demo-anim-in delay-3">
                <div>
                  <div class="font-mono text-[9px] uppercase tracking-widest text-ink/60">Temperatura</div>
                  <div class="font-display-bold text-sm text-ink/40 flex items-center gap-1.5">
                    — °C
                    <span class="inline-flex"><span class="demo-dot"></span><span class="demo-dot"></span><span class="demo-dot"></span></span>
                  </div>
                </div>
                <div class="font-mono text-[10px] text-ink/40 uppercase">capturando</div>
              </div>
            </div>

            <!-- GPS + envío -->
            <div class="bg-ink text-white p-2.5 flex items-center justify-between text-[10px] font-mono">
              <div class="flex items-center gap-1.5">
                <svg class="w-3 h-3 text-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span class="uppercase tracking-widest">29.07, -110.97</span>
              </div>
              <span class="text-yellow uppercase tracking-widest">2/3</span>
            </div>
          </div>
        </div>
        <div>
          <p class="text-sm text-ink/60 mb-5 leading-relaxed">
            Sus colaboradores en piso, planta o ruta capturan información técnica desde el celular. Cada lectura, foto y dato llega al sistema central en el momento. Se acaban los formatos en papel que después alguien debe vaciar a Excel.
          </p>
          <div class="space-y-3">
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">1</span>Captura con foto y geolocalización</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">2</span>Adiós a la doble captura en Excel</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">3</span>Formularios configurables por proceso</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">4</span>Información al sistema central al instante</div>
          </div>
        </div>
      </div>
    </template>

    <!-- FRAME 6: INVENTARIOS -->
    <template data-frame="inventarios">
      <div class="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8">
        <div class="demo-frame">
          <div class="demo-frame-bar">
            <div class="demo-frame-dots"><span class="demo-frame-dot"></span><span class="demo-frame-dot"></span><span class="demo-frame-dot"></span></div>
            <span class="demo-frame-url">inventario.suempresa.com/almacenes</span>
          </div>
          <div class="demo-frame-body bg-white">
            <!-- Header de inventarios -->
            <div class="flex items-center justify-between mb-4 pb-3 border-b border-ink/10">
              <div>
                <div class="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-0.5">Almacén central · CDMX</div>
                <div class="font-display-bold text-sm text-ink">Stock en tiempo real</div>
              </div>
              <div class="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest">
                <span class="w-1.5 h-1.5 bg-yellow rounded-full demo-live-indicator"></span>
                <span class="text-ink/60">Sincronizado</span>
              </div>
            </div>

            <!-- Métricas top -->
            <div class="grid grid-cols-3 gap-2 mb-4">
              <div class="bg-ink/[0.03] p-2.5 demo-anim-in delay-1">
                <div class="font-mono text-[9px] uppercase tracking-widest text-ink/50">Total SKUs</div>
                <div class="font-display-bold text-lg text-ink mt-0.5">2,847</div>
              </div>
              <div class="bg-ink/[0.03] p-2.5 demo-anim-in delay-2">
                <div class="font-mono text-[9px] uppercase tracking-widest text-ink/50">Stock total</div>
                <div class="font-display-bold text-lg text-ink mt-0.5">$284K</div>
              </div>
              <div class="bg-yellow p-2.5 demo-anim-in delay-3 demo-pulse">
                <div class="font-mono text-[9px] uppercase tracking-widest text-ink/70">Alertas</div>
                <div class="font-display-bold text-lg text-ink mt-0.5">12</div>
              </div>
            </div>

            <!-- Tabla de productos -->
            <div class="border border-ink/10 overflow-hidden">
              <div class="bg-ink text-white px-3 py-2 grid grid-cols-[1.5fr_0.7fr_0.7fr_0.6fr] gap-2 text-[9px] font-mono uppercase tracking-widest">
                <span>Producto</span>
                <span class="text-right">Stock</span>
                <span class="text-right">Mínimo</span>
                <span class="text-right">Estado</span>
              </div>
              <div class="divide-y divide-ink/10">
                <div class="px-3 py-2 grid grid-cols-[1.5fr_0.7fr_0.7fr_0.6fr] gap-2 text-[11px] items-center demo-anim-in delay-1">
                  <span class="font-display-bold text-ink truncate">Laptop Pro 14"</span>
                  <span class="text-right text-ink font-mono">147</span>
                  <span class="text-right text-ink/50 font-mono">50</span>
                  <span class="text-right"><span class="inline-flex items-center gap-1 text-[9px] font-mono uppercase tracking-wide text-ink/60">● OK</span></span>
                </div>
                <div class="px-3 py-2 grid grid-cols-[1.5fr_0.7fr_0.7fr_0.6fr] gap-2 text-[11px] items-center bg-yellow/15 demo-anim-in delay-2 demo-pulse">
                  <span class="font-display-bold text-ink truncate">Silla Ergo Plus</span>
                  <span class="text-right text-ink font-mono font-bold">8</span>
                  <span class="text-right text-ink/50 font-mono">25</span>
                  <span class="text-right"><span class="inline-flex items-center gap-1 text-[9px] font-mono uppercase tracking-wide text-ink font-bold">BAJO</span></span>
                </div>
                <div class="px-3 py-2 grid grid-cols-[1.5fr_0.7fr_0.7fr_0.6fr] gap-2 text-[11px] items-center demo-anim-in delay-3">
                  <span class="font-display-bold text-ink truncate">Monitor 27"</span>
                  <span class="text-right text-ink font-mono">86</span>
                  <span class="text-right text-ink/50 font-mono">30</span>
                  <span class="text-right"><span class="inline-flex items-center gap-1 text-[9px] font-mono uppercase tracking-wide text-ink/60">● OK</span></span>
                </div>
                <div class="px-3 py-2 grid grid-cols-[1.5fr_0.7fr_0.7fr_0.6fr] gap-2 text-[11px] items-center bg-yellow/15 demo-anim-in delay-4">
                  <span class="font-display-bold text-ink truncate">Auriculares Pro</span>
                  <span class="text-right text-ink font-mono font-bold">3</span>
                  <span class="text-right text-ink/50 font-mono">15</span>
                  <span class="text-right"><span class="inline-flex items-center gap-1 text-[9px] font-mono uppercase tracking-wide text-ink font-bold">CRÍTICO</span></span>
                </div>
                <div class="px-3 py-2 grid grid-cols-[1.5fr_0.7fr_0.7fr_0.6fr] gap-2 text-[11px] items-center demo-anim-in delay-5">
                  <span class="font-display-bold text-ink truncate">Webcam HD</span>
                  <span class="text-right text-ink font-mono">42</span>
                  <span class="text-right text-ink/50 font-mono">20</span>
                  <span class="text-right"><span class="inline-flex items-center gap-1 text-[9px] font-mono uppercase tracking-wide text-ink/60">● OK</span></span>
                </div>
              </div>
            </div>

            <!-- Alerta automática -->
            <div class="mt-3 bg-ink text-white p-2.5 flex items-center justify-between demo-notif">
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-yellow rounded-full demo-live-indicator"></span>
                <span class="font-mono text-[10px] uppercase tracking-widest text-yellow">Orden de reposición sugerida</span>
              </div>
              <span class="text-[11px] font-display-bold">Revisar →</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center">
          <p class="text-sm text-ink/60 mb-5 leading-relaxed">
            Su inventario consultable en cualquier momento. Cuando algún producto se acerca al mínimo, el sistema avisa solo y sugiere reposición.
          </p>
          <div class="space-y-3">
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">1</span>Stock en tiempo real por almacén</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">2</span>Alertas automáticas de stock bajo</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">3</span>Sugerencias de reposición</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">4</span>Historial de movimientos completo</div>
          </div>
        </div>
      </div>
    </template>

    <!-- FRAME 7: INTEGRACIONES TÉCNICAS -->
    <template data-frame="integraciones">
      <div class="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8">
        <div class="demo-frame">
          <div class="demo-frame-bar">
            <div class="demo-frame-dots"><span class="demo-frame-dot"></span><span class="demo-frame-dot"></span><span class="demo-frame-dot"></span></div>
            <span class="demo-frame-url">integraciones.suempresa.com/flujos</span>
          </div>
          <div class="demo-frame-body bg-white" style="min-height: 360px;">
            <!-- Header -->
            <div class="flex items-center justify-between mb-5 pb-3 border-b border-ink/10">
              <div>
                <div class="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-0.5">Sistemas conectados</div>
                <div class="font-display-bold text-sm text-ink">Flujo activo · 4 sistemas conectados</div>
              </div>
              <div class="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest">
                <span class="w-1.5 h-1.5 bg-yellow rounded-full demo-live-indicator"></span>
                <span class="text-ink/60">Sincronizando</span>
              </div>
            </div>

            <!-- Diagrama: hub central + 4 endpoints alrededor -->
            <div class="relative py-4">
              <!-- Grid 4 endpoints + hub central -->
              <div class="grid grid-cols-5 gap-2 items-center">

                <!-- Endpoint 1: CRM -->
                <div class="bg-ink text-white p-3 text-center demo-anim-in delay-1 relative z-10">
                  <div class="w-9 h-9 bg-yellow text-ink mx-auto mb-1.5 flex items-center justify-center">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                  </div>
                  <div class="font-display-bold text-[10px] leading-tight">Su CRM</div>
                  <div class="font-mono text-[8px] text-white/50 mt-0.5">Hubspot · Zoho</div>
                </div>

                <!-- Conector horizontal con flecha -->
                <div class="flex items-center justify-center">
                  <div class="w-full h-0.5 bg-gradient-to-r from-yellow/40 via-yellow to-yellow/40 relative">
                    <span class="absolute -top-1.5 right-0 text-yellow font-mono text-[10px]">↔</span>
                  </div>
                </div>

                <!-- HUB CENTRAL -->
                <div class="bg-yellow text-ink p-3 text-center demo-anim-in delay-2 demo-pulse relative z-10">
                  <div class="w-9 h-9 bg-ink text-yellow mx-auto mb-1.5 flex items-center justify-center">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
                  </div>
                  <div class="font-display-bold text-[10px] leading-tight">Plataforma</div>
                  <div class="font-mono text-[8px] text-ink/60 mt-0.5">Hub central</div>
                </div>

                <!-- Conector horizontal -->
                <div class="flex items-center justify-center">
                  <div class="w-full h-0.5 bg-gradient-to-l from-yellow/40 via-yellow to-yellow/40 relative">
                    <span class="absolute -top-1.5 left-0 text-yellow font-mono text-[10px]">↔</span>
                  </div>
                </div>

                <!-- Endpoint 2: Tienda online -->
                <div class="bg-ink text-white p-3 text-center demo-anim-in delay-3 relative z-10">
                  <div class="w-9 h-9 bg-yellow text-ink mx-auto mb-1.5 flex items-center justify-center">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h2l2 12h13l3-9H6"/><circle cx="9" cy="20" r="1.5" fill="currentColor"/><circle cx="18" cy="20" r="1.5" fill="currentColor"/></svg>
                  </div>
                  <div class="font-display-bold text-[10px] leading-tight">Tienda online</div>
                  <div class="font-mono text-[8px] text-white/50 mt-0.5">Shopify · Wix</div>
                </div>
              </div>

              <!-- Segunda fila: Excel y Base de datos -->
              <div class="grid grid-cols-5 gap-2 items-center mt-4">

                <!-- Endpoint 3: Excel / Google Sheets -->
                <div class="bg-ink text-white p-3 text-center demo-anim-in delay-4 relative z-10">
                  <div class="w-9 h-9 bg-yellow text-ink mx-auto mb-1.5 flex items-center justify-center">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>
                  </div>
                  <div class="font-display-bold text-[10px] leading-tight">Excel / Sheets</div>
                  <div class="font-mono text-[8px] text-white/50 mt-0.5">.xlsx · .csv</div>
                </div>

                <!-- Conector diagonal hacia el hub -->
                <div class="flex items-center justify-center">
                  <div class="w-full h-0.5 bg-gradient-to-r from-yellow/30 to-yellow/60"></div>
                </div>

                <!-- Hueco bajo el hub central (vacío para que respire) -->
                <div></div>

                <!-- Conector diagonal hacia el hub -->
                <div class="flex items-center justify-center">
                  <div class="w-full h-0.5 bg-gradient-to-l from-yellow/30 to-yellow/60"></div>
                </div>

                <!-- Endpoint 4: Base de datos -->
                <div class="bg-ink text-white p-3 text-center demo-anim-in delay-5 relative z-10">
                  <div class="w-9 h-9 bg-yellow text-ink mx-auto mb-1.5 flex items-center justify-center">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/></svg>
                  </div>
                  <div class="font-display-bold text-[10px] leading-tight">Base de datos</div>
                  <div class="font-mono text-[8px] text-white/50 mt-0.5">SQL · NoSQL</div>
                </div>
              </div>
            </div>

            <!-- Log de actividad -->
            <div class="mt-4 bg-ink/[0.03] p-3 space-y-1.5 font-mono text-[10px]">
              <div class="flex items-center gap-2 demo-anim-in delay-4">
                <span class="text-yellow">→</span>
                <span class="text-ink/50">14:32:08</span>
                <span class="text-ink">Excel actualizado · 247 filas leídas del CRM</span>
              </div>
              <div class="flex items-center gap-2 demo-anim-in delay-5">
                <span class="text-yellow">→</span>
                <span class="text-ink/50">14:32:11</span>
                <span class="text-ink">Orden de tienda online ingresada a la base de datos</span>
              </div>
              <div class="flex items-center gap-2 demo-anim-in delay-6">
                <span class="text-yellow">→</span>
                <span class="text-ink/50">14:32:14</span>
                <span class="text-ink">Reporte semanal generado en hoja de cálculo</span>
              </div>
              <div class="flex items-center gap-2 demo-notif">
                <span class="demo-dot"></span><span class="demo-dot"></span><span class="demo-dot"></span>
                <span class="text-ink/50 ml-2">Esperando próximo evento</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center">
          <p class="text-sm text-ink/60 mb-5 leading-relaxed">
            Sus sistemas existentes (CRM, ERP, contabilidad, e-commerce) hablando entre sí. Cada cambio en uno se refleja en los otros, sin doble captura ni planillas intermedias.
          </p>
          <div class="space-y-3">
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">1</span>Conexión vía APIs estándar</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">2</span>Sincronización bidireccional</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">3</span>Log completo de cada evento</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">4</span>Reintentos automáticos si algo falla</div>
          </div>
        </div>
      </div>
    </template>

    <!-- FRAME 8: AUTOMATIZACIÓN DE PROCESOS -->
    <template data-frame="automatizacion">
      <div class="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8">
        <div class="demo-frame">
          <div class="demo-frame-bar">
            <div class="demo-frame-dots"><span class="demo-frame-dot"></span><span class="demo-frame-dot"></span><span class="demo-frame-dot"></span></div>
            <span class="demo-frame-url">automatizacion.suempresa.com/flujo-leads-facebook</span>
          </div>
          <div class="demo-frame-body bg-white" style="min-height: 360px;">
            <!-- Header -->
            <div class="flex items-center justify-between mb-4 pb-3 border-b border-ink/10">
              <div>
                <div class="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-0.5">Flujo · Leads de Facebook al CRM</div>
                <div class="font-display-bold text-sm text-ink">Ejecutado 1,247 veces este mes</div>
              </div>
              <div class="px-2 py-0.5 bg-yellow text-ink text-[9px] font-mono uppercase tracking-wide demo-pulse">Activo</div>
            </div>

            <!-- Workflow vertical estilo Zapier -->
            <div class="space-y-1">
              <!-- Trigger -->
              <div class="flex items-stretch gap-3 demo-anim-in delay-1">
                <div class="flex flex-col items-center">
                  <div class="w-9 h-9 bg-yellow text-ink flex items-center justify-center">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                  </div>
                  <div class="w-0.5 flex-1 bg-yellow/40 mt-1"></div>
                </div>
                <div class="flex-1 pb-3">
                  <div class="font-mono text-[9px] uppercase tracking-widest text-ink/50 mb-0.5">Disparador</div>
                  <div class="font-display-bold text-sm text-ink">Lead llena formulario en Facebook Ads</div>
                  <div class="text-[11px] text-ink/60 mt-0.5">Campaña activa · Meta Ads</div>
                </div>
              </div>

              <!-- Acción 1 -->
              <div class="flex items-stretch gap-3 demo-anim-in delay-2">
                <div class="flex flex-col items-center">
                  <div class="w-9 h-9 bg-ink text-yellow flex items-center justify-center">
                    <span class="font-mono text-xs font-bold">1</span>
                  </div>
                  <div class="w-0.5 flex-1 bg-ink/20 mt-1"></div>
                </div>
                <div class="flex-1 pb-3">
                  <div class="font-mono text-[9px] uppercase tracking-widest text-ink/50 mb-0.5">Acción</div>
                  <div class="font-display-bold text-sm text-ink">Crear contacto en el CRM</div>
                  <div class="text-[11px] text-ink/60 mt-0.5">Datos copiados automáticamente</div>
                </div>
                <span class="text-[10px] font-mono text-yellow self-center">2.1s</span>
              </div>

              <!-- Acción 2 -->
              <div class="flex items-stretch gap-3 demo-anim-in delay-3">
                <div class="flex flex-col items-center">
                  <div class="w-9 h-9 bg-ink text-yellow flex items-center justify-center">
                    <span class="font-mono text-xs font-bold">2</span>
                  </div>
                  <div class="w-0.5 flex-1 bg-ink/20 mt-1"></div>
                </div>
                <div class="flex-1 pb-3">
                  <div class="font-mono text-[9px] uppercase tracking-widest text-ink/50 mb-0.5">Acción</div>
                  <div class="font-display-bold text-sm text-ink">Enviar mensaje de bienvenida</div>
                  <div class="text-[11px] text-ink/60 mt-0.5">WhatsApp o correo · primer contacto</div>
                </div>
                <span class="text-[10px] font-mono text-yellow self-center">0.8s</span>
              </div>

              <!-- Acción 3 -->
              <div class="flex items-stretch gap-3 demo-anim-in delay-4">
                <div class="flex flex-col items-center">
                  <div class="w-9 h-9 bg-ink text-yellow flex items-center justify-center">
                    <span class="font-mono text-xs font-bold">3</span>
                  </div>
                  <div class="w-0.5 flex-1 bg-ink/20 mt-1"></div>
                </div>
                <div class="flex-1 pb-3">
                  <div class="font-mono text-[9px] uppercase tracking-widest text-ink/50 mb-0.5">Acción</div>
                  <div class="font-display-bold text-sm text-ink">Asignar al agente disponible</div>
                  <div class="text-[11px] text-ink/60 mt-0.5">Round-robin por zona y disponibilidad</div>
                </div>
                <span class="text-[10px] font-mono text-yellow self-center">0.3s</span>
              </div>

              <!-- Resultado -->
              <div class="flex items-stretch gap-3 demo-anim-in delay-5">
                <div class="flex flex-col items-center">
                  <div class="w-9 h-9 bg-yellow text-ink flex items-center justify-center demo-check-pop">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                </div>
                <div class="flex-1">
                  <div class="font-mono text-[9px] uppercase tracking-widest text-yellow mb-0.5">Resultado</div>
                  <div class="font-display-bold text-sm text-ink">Lead atendido por un agente</div>
                  <div class="text-[11px] text-ink/60 mt-0.5">Antes: hasta 6 horas · Ahora: 3.2 segundos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center">
          <p class="text-sm text-ink/60 mb-5 leading-relaxed">
            Sus procesos repetitivos se ejecutan solos. Cada disparador (un cliente firma, una orden llega, un ticket se crea) ejecuta automáticamente la cadena de acciones que antes hacía el equipo a mano.
          </p>
          <div class="space-y-3">
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">1</span>Disparadores configurables</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">2</span>Cadenas de acciones ilimitadas</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">3</span>Reportes de ejecución y errores</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">4</span>Ahorro promedio: 70% del tiempo</div>
          </div>
        </div>
      </div>
    </template>

    <!-- FRAME 9: PROCESAMIENTO DE DATOS -->
    <template data-frame="datos">
      <div class="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8">
        <div class="demo-frame">
          <div class="demo-frame-bar">
            <div class="demo-frame-dots"><span class="demo-frame-dot"></span><span class="demo-frame-dot"></span><span class="demo-frame-dot"></span></div>
            <span class="demo-frame-url">datos.suempresa.com/gps-unidades-marzo</span>
          </div>
          <div class="demo-frame-body bg-white">
            <div class="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-4">Datos crudos → Información lista</div>

            <div class="grid grid-cols-2 gap-4">
              <!-- Antes: log crudo del GPS -->
              <div class="demo-anim-in delay-1">
                <div class="text-[10px] font-mono uppercase tracking-widest text-ink/40 mb-2">ANTES · Log del GPS</div>
                <div class="bg-ink/[0.04] p-3 min-h-[210px] relative overflow-hidden">
                  <!-- Tabla GPS desordenada -->
                  <table class="w-full text-[8px] font-mono border-collapse">
                    <tr class="border-b border-ink/15">
                      <td class="p-1 text-ink/60">Unidad</td>
                      <td class="p-1 text-ink/60">Coord</td>
                      <td class="p-1 text-ink/60">Vel</td>
                    </tr>
                    <tr class="border-b border-ink/10">
                      <td class="p-1 text-ink/50 truncate">UN-042</td>
                      <td class="p-1 text-ink/50 truncate">19.43,-99.13</td>
                      <td class="p-1 text-ink/50">62</td>
                    </tr>
                    <tr class="border-b border-ink/10 bg-yellow/20">
                      <td class="p-1 text-ink/70 truncate">un042</td>
                      <td class="p-1 text-ink/70 truncate">19.4301,-99.13</td>
                      <td class="p-1 text-ink/70">62 km/h</td>
                    </tr>
                    <tr class="border-b border-ink/10">
                      <td class="p-1 text-ink/50 truncate">UN-018</td>
                      <td class="p-1 text-ink/50 truncate">25.67,-100.31</td>
                      <td class="p-1 text-ink/50">--</td>
                    </tr>
                    <tr class="border-b border-ink/10 bg-yellow/20">
                      <td class="p-1 text-ink/70 truncate">UN018</td>
                      <td class="p-1 text-ink/70 truncate">25.6701,-100.31</td>
                      <td class="p-1 text-ink/70">0</td>
                    </tr>
                    <tr class="border-b border-ink/10">
                      <td class="p-1 text-ink/50 truncate">UN-076</td>
                      <td class="p-1 text-ink/50 truncate">null</td>
                      <td class="p-1 text-ink/50">48</td>
                    </tr>
                    <tr>
                      <td class="p-1 text-ink/50 truncate">UN-091</td>
                      <td class="p-1 text-ink/50 truncate">20.67,-103.34</td>
                      <td class="p-1 text-ink/50">71kmh</td>
                    </tr>
                  </table>
                  <div class="absolute bottom-1 right-2 text-[9px] font-mono text-ink/40">~84,000 pings</div>
                </div>
                <div class="text-[10px] text-ink/50 mt-2 font-mono">Coordenadas duplicadas · sin formato</div>
              </div>

              <!-- Después: datos limpios con gráfica circular -->
              <div class="demo-anim-in delay-2">
                <div class="text-[10px] font-mono uppercase tracking-widest text-yellow mb-2">DESPUÉS · Flota organizada</div>
                <div class="bg-ink text-white p-3 min-h-[210px]">
                  <!-- Donut chart + leyenda -->
                  <div class="flex items-center gap-3 mb-3">
                    <!-- Donut chart SVG: distribución por zona -->
                    <div class="relative w-20 h-20 flex-shrink-0">
                      <svg class="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <!-- Track de fondo -->
                        <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="4"/>
                        <!-- Segmento 1: Centro 38% -->
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#FFD400" stroke-width="4"
                          stroke-dasharray="33.4 87.9" stroke-dashoffset="0" class="demo-donut-seg"/>
                        <!-- Segmento 2: Norte 32% -->
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#E6BE00" stroke-width="4"
                          stroke-dasharray="28.1 87.9" stroke-dashoffset="-33.4" class="demo-donut-seg"/>
                        <!-- Segmento 3: Occidente 21% -->
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#FFE680" stroke-width="4"
                          stroke-dasharray="18.5 87.9" stroke-dashoffset="-61.5" class="demo-donut-seg"/>
                        <!-- Segmento 4: Sureste 9% -->
                        <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="4"
                          stroke-dasharray="7.9 87.9" stroke-dashoffset="-80" class="demo-donut-seg"/>
                      </svg>
                      <!-- Total en el centro -->
                      <div class="absolute inset-0 flex flex-col items-center justify-center">
                        <div class="font-display-bold text-sm text-white leading-none">142</div>
                        <div class="font-mono text-[7px] text-yellow uppercase tracking-wider mt-0.5">unidades</div>
                      </div>
                    </div>
                    <!-- Leyenda -->
                    <div class="flex-1 space-y-1">
                      <div class="flex items-center gap-1.5 text-[9px] font-mono demo-anim-in delay-3">
                        <span class="w-2 h-2 bg-yellow flex-shrink-0"></span>
                        <span class="text-white/70 flex-1">Centro</span>
                        <span class="text-white font-bold">38%</span>
                      </div>
                      <div class="flex items-center gap-1.5 text-[9px] font-mono demo-anim-in delay-4">
                        <span class="w-2 h-2 flex-shrink-0" style="background:#E6BE00"></span>
                        <span class="text-white/70 flex-1">Norte</span>
                        <span class="text-white font-bold">32%</span>
                      </div>
                      <div class="flex items-center gap-1.5 text-[9px] font-mono demo-anim-in delay-5">
                        <span class="w-2 h-2 flex-shrink-0" style="background:#FFE680"></span>
                        <span class="text-white/70 flex-1">Occidente</span>
                        <span class="text-white font-bold">21%</span>
                      </div>
                      <div class="flex items-center gap-1.5 text-[9px] font-mono demo-anim-in delay-6">
                        <span class="w-2 h-2 bg-white/40 flex-shrink-0"></span>
                        <span class="text-white/70 flex-1">Sureste</span>
                        <span class="text-white font-bold">9%</span>
                      </div>
                    </div>
                  </div>

                  <!-- Métricas adicionales -->
                  <div class="space-y-1 pt-2 border-t border-white/10">
                    <div class="flex justify-between items-end demo-anim-in delay-4">
                      <span class="text-[9px] text-white/50 font-mono">En movimiento</span>
                      <span class="font-display-bold text-xs text-white">118</span>
                    </div>
                    <div class="flex justify-between items-end demo-anim-in delay-5">
                      <span class="text-[9px] text-white/50 font-mono">Detenidas &gt; 30 min</span>
                      <span class="font-display-bold text-xs text-yellow">24</span>
                    </div>
                    <div class="flex justify-between items-end demo-anim-in delay-6">
                      <span class="text-[9px] text-white/50 font-mono">Vel. promedio</span>
                      <span class="font-display-bold text-xs text-white">54 km/h</span>
                    </div>
                  </div>
                </div>
                <div class="text-[10px] text-yellow mt-2 font-mono">Listo para tablero</div>
              </div>
            </div>

            <!-- Status de procesamiento -->
            <div class="mt-4 pt-3 border-t border-ink/10 flex items-center justify-between">
              <span class="font-mono text-[10px] uppercase tracking-widest text-ink/60 flex items-center gap-2">
                Procesamiento completo
                <span class="demo-check-pop inline-flex items-center justify-center w-4 h-4 bg-yellow">
                  <svg class="w-2.5 h-2.5 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </span>
              </span>
              <span class="font-display-bold text-sm text-ink">84,000 pings → 142 unidades · 4.2s</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center">
          <p class="text-sm text-ink/60 mb-5 leading-relaxed">
            Sus archivos de Excel con datos mezclados, duplicados y formatos inconsistentes se transforman en información lista para analizar y reportar.
          </p>
          <div class="space-y-3">
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">1</span>Detección y unión de duplicados</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">2</span>Normalización de formatos</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">3</span>Métricas calculadas al instante</div>
            <div class="demo-benefit-chip"><span class="demo-benefit-chip-num">4</span>Exportación a Excel, PDF o sistema</div>
          </div>
        </div>
      </div>
    </template>


  </div>

  <!-- ============================================
       MODAL DE COTIZACIÓN — Exquisito y sofisticado
       ============================================ -->
  <div class="modal-backdrop" id="modal-backdrop" data-close-modal></div>
  <div class="modal-container" id="modal-container" aria-hidden="true" role="dialog" aria-labelledby="modal-title">
    <div class="modal-panel">

      <!-- Botón cerrar -->
      <button type="button" class="modal-close" data-close-modal aria-label="Cerrar">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <path d="M6 6l12 12M18 6L6 18"/>
        </svg>
      </button>

      <!-- Header del modal con efecto -->
      <div class="modal-header">
        <div class="relative z-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-yellow text-ink mb-4">
            <span class="w-1.5 h-1.5 bg-ink rounded-full animate-pulse"></span>
            <span class="font-mono text-[10px] uppercase tracking-widest font-semibold">Propuesta en 24h hábiles</span>
          </div>
          <h2 id="modal-title" class="font-display-bold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-2">
            Cuéntenos qué <span class="relative inline-block"><span class="relative z-10">necesita</span><span class="absolute inset-x-0 bottom-[8%] h-[28%] bg-yellow -z-0"></span></span>.
          </h2>
          <p class="text-white/70 text-sm sm:text-base max-w-xl">
            Un especialista revisa la solicitud y contactará con una propuesta inicial en menos de 24 horas hábiles.
          </p>
        </div>
      </div>

      <!-- Body del modal con formulario -->
      <div class="modal-body">
        <form id="modalQuoteForm" class="space-y-6">

          <!-- Sección 1: Datos personales -->
          <div class="grid sm:grid-cols-2 gap-6">
            <div class="modal-field-group">
              <label for="m-name" class="modal-field-label">
                <span class="modal-field-label-num">1</span>
                Nombre completo *
              </label>
              <input type="text" id="m-name" name="name" required class="modal-field" placeholder="Su nombre" />
            </div>
            <div class="modal-field-group">
              <label for="m-role" class="modal-field-label">
                <span class="modal-field-label-num">2</span>
                Cargo
              </label>
              <input type="text" id="m-role" name="role" class="modal-field" placeholder="Dirección de TI, compras..." />
            </div>
          </div>

          <!-- Sección 2: Empresa + URL -->
          <div class="grid sm:grid-cols-2 gap-6">
            <div class="modal-field-group">
              <label for="m-company" class="modal-field-label">
                <span class="modal-field-label-num">3</span>
                Empresa *
              </label>
              <input type="text" id="m-company" name="company" required class="modal-field" placeholder="Razón social" />
            </div>
            <div class="modal-field-group">
              <label for="m-url" class="modal-field-label">
                <span class="modal-field-label-num">4</span>
                URL de la empresa
              </label>
              <input type="url" id="m-url" name="url" class="modal-field" placeholder="https://suempresa.com" />
            </div>
          </div>

          <!-- Sección 3: Contacto -->
          <div class="grid sm:grid-cols-2 gap-6">
            <div class="modal-field-group">
              <label for="m-email" class="modal-field-label">
                <span class="modal-field-label-num">5</span>
                Email corporativo *
              </label>
              <input type="email" id="m-email" name="email" required class="modal-field" placeholder="correo@empresa.com" />
            </div>
            <div class="modal-field-group">
              <label for="m-phone" class="modal-field-label">
                <span class="modal-field-label-num">6</span>
                Teléfono *
              </label>
              <input type="tel" id="m-phone" name="phone" required class="modal-field" placeholder="+52 55 6506 7332" />
            </div>
          </div>

          <!-- Sección 4: Soluciones de interés -->
          <div class="modal-field-group">
            <label class="modal-field-label">
              <span class="modal-field-label-num">7</span>
              ¿Qué solución es de interés? <span class="text-ink/40 normal-case tracking-normal font-normal text-[11px] ml-2">Puede marcar varias</span>
            </label>
            <div class="flex flex-wrap gap-2 mt-3">
              <label class="modal-chip" data-chip>
                <span class="modal-chip-dot"></span>
                <input type="checkbox" name="solutions" value="micrositios"/>
                Micrositios y catálogos
              </label>
              <label class="modal-chip" data-chip>
                <span class="modal-chip-dot"></span>
                <input type="checkbox" name="solutions" value="dashboards"/>
                Dashboards y reportería
              </label>
              <label class="modal-chip" data-chip>
                <span class="modal-chip-dot"></span>
                <input type="checkbox" name="solutions" value="encuestas"/>
                Plataformas de encuestas
              </label>
              <label class="modal-chip" data-chip>
                <span class="modal-chip-dot"></span>
                <input type="checkbox" name="solutions" value="digitalizacion"/>
                Digitalización de documentos
              </label>
              <label class="modal-chip" data-chip>
                <span class="modal-chip-dot"></span>
                <input type="checkbox" name="solutions" value="campo"/>
                Aplicaciones de campo
              </label>
              <label class="modal-chip" data-chip>
                <span class="modal-chip-dot"></span>
                <input type="checkbox" name="solutions" value="inventarios"/>
                Inventarios
              </label>
              <label class="modal-chip" data-chip>
                <span class="modal-chip-dot"></span>
                <input type="checkbox" name="solutions" value="integraciones"/>
                Integraciones técnicas
              </label>
              <label class="modal-chip" data-chip>
                <span class="modal-chip-dot"></span>
                <input type="checkbox" name="solutions" value="automatizacion"/>
                Automatización de procesos
              </label>
              <label class="modal-chip" data-chip>
                <span class="modal-chip-dot"></span>
                <input type="checkbox" name="solutions" value="datos"/>
                Procesamiento de datos
              </label>
            </div>
          </div>

          <!-- Sección 5: Descripción -->
          <div class="modal-field-group">
            <label for="m-desc" class="modal-field-label">
              <span class="modal-field-label-num">8</span>
              Cuéntenos más sobre el proyecto *
            </label>
            <textarea id="m-desc" name="description" rows="3" required class="modal-field" placeholder="Por ejemplo: Necesitamos digitalizar el archivo físico de RRHH (unos 5,000 expedientes) y construir un dashboard para que dirección consulte indicadores en tiempo real."></textarea>
          </div>

          <!-- Submit -->
          <div class="pt-2">
            <button type="submit" class="modal-submit">
              <span>Enviar solicitud</span>
              <svg class="w-5 h-5"><use href="#i-arrow"/></svg>
            </button>
            <p class="text-xs text-ink/50 text-center mt-4">
              Al enviar acepta que un especialista contacte por los datos proporcionados.
            </p>
          </div>

        </form>
      </div>

    </div>
  </div>

  <!-- ============================================
       SCRIPT DEL MODAL
       ============================================ -->
  <script>
    (function() {
      const backdrop = document.getElementById('modal-backdrop');
      const container = document.getElementById('modal-container');
      const panel = container.querySelector('.modal-panel');
      const openTriggers = document.querySelectorAll('[data-open-modal="quote"]');
      const closeTriggers = document.querySelectorAll('[data-close-modal]');
      let lastFocusedElement = null;

      function openModal() {
        lastFocusedElement = document.activeElement;
        backdrop.classList.add('active');
        container.classList.add('active');
        container.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        // Focus el primer input después de la animación
        setTimeout(() => {
          const firstInput = container.querySelector('input, textarea, select');
          if (firstInput) firstInput.focus();
        }, 400);
      }

      function closeModal() {
        backdrop.classList.remove('active');
        container.classList.remove('active');
        container.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        if (lastFocusedElement) lastFocusedElement.focus();
      }

      openTriggers.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      }));

      closeTriggers.forEach(btn => btn.addEventListener('click', closeModal));

      // ESC para cerrar
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && container.classList.contains('active')) {
          closeModal();
        }
      });

      // No cerrar al hacer click dentro del panel
      panel.addEventListener('click', (e) => e.stopPropagation());

      // Chips checkboxes
      container.querySelectorAll('[data-chip]').forEach(chip => {
        const input = chip.querySelector('input');
        chip.addEventListener('click', (e) => {
          if (e.target.tagName.toLowerCase() === 'input') return;
          e.preventDefault();
          input.checked = !input.checked;
          chip.classList.toggle('checked', input.checked);
        });
      });

      // Submit del formulario modal
      document.getElementById('modalQuoteForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        data.solutions = formData.getAll('solutions');

        const btn = e.target.querySelector('.modal-submit');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<span>Enviando solicitud...</span>';
        btn.disabled = true;

        setTimeout(() => {
          btn.innerHTML = '<span>¡Solicitud recibida!</span><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';
          btn.style.background = '#FFD400';
          btn.style.color = '#0A0A0A';
          console.log('Datos del modal:', data);

          setTimeout(() => {
            closeModal();
            setTimeout(() => {
              e.target.reset();
              container.querySelectorAll('[data-chip]').forEach(c => c.classList.remove('checked'));
              btn.innerHTML = originalHTML;
              btn.style.background = '';
              btn.style.color = '';
              btn.disabled = false;
            }, 500);
          }, 1500);
        }, 1200);
      });
    })();

    // ============================================
    // MODAL DE SOLUCIÓN — Click en card abre demo
    // ============================================
    (function() {
      const backdrop = document.getElementById('sol-modal-backdrop');
      const container = document.getElementById('sol-modal-container');
      const panel = container.querySelector('.solution-modal-panel');
      const titleEl = document.getElementById('sol-modal-title');
      const numEl = document.getElementById('sol-modal-num');
      const iconEl = document.getElementById('sol-modal-icon');
      const contentEl = document.getElementById('sol-modal-content');
      const framesContainer = document.getElementById('sol-frames');

      // Mapa: slug → { title, num, icon (id de symbol) }
      const SOLUTIONS = {
        micrositios:    { title: 'Micrositios y catálogos digitales', num: '01 / Solución integral', icon: 'i-globe' },
        dashboards:     { title: 'Dashboards y reportería',          num: '02 / Solución integral', icon: 'i-dashboard' },
        encuestas:      { title: 'Plataformas de encuestas',         num: '03 / Solución integral', icon: 'i-survey' },
        digitalizacion: { title: 'Digitalización de documentos',     num: '04 / Solución integral', icon: 'i-doc' },
        campo:          { title: 'Aplicaciones de campo',            num: '05 / Solución integral', icon: 'i-mobile' },
        inventarios:    { title: 'Inventarios',                      num: '06 / Solución integral', icon: 'i-inventory' },
        integraciones:  { title: 'Integraciones técnicas',           num: '07 / Solución integral', icon: 'i-link' },
        automatizacion: { title: 'Automatización de procesos',       num: '08 / Solución integral', icon: 'i-loop' },
        datos:          { title: 'Procesamiento de datos',           num: '09 / Solución integral', icon: 'i-chart' },
      };

      let lastFocused = null;

      function openSolutionModal(slug) {
        const data = SOLUTIONS[slug];
        if (!data) return;

        lastFocused = document.activeElement;
        titleEl.textContent = data.title;
        numEl.textContent = data.num;
        iconEl.innerHTML = \`<svg class="w-5 h-5"><use href="#\${data.icon}"/></svg>\`;

        // Cargar frame
        const tpl = framesContainer.querySelector(\`template[data-frame="\${slug}"]\`);
        if (tpl) {
          contentEl.innerHTML = '';
          contentEl.appendChild(tpl.content.cloneNode(true));
        } else {
          // Fallback si todavía no hay frame para esta solución
          contentEl.innerHTML = \`
            <div class="text-center py-12 px-4">
              <div class="w-16 h-16 bg-yellow/15 text-ink mx-auto flex items-center justify-center mb-4">
                <svg class="w-8 h-8"><use href="#\${data.icon}"/></svg>
              </div>
              <p class="text-ink/60 max-w-md mx-auto">
                Vista previa de esta solución próximamente. Mientras tanto, puede solicitar una propuesta formal y un especialista mostrará un ejemplo a la medida del negocio.
              </p>
            </div>
          \`;
        }

        // Mostrar modal
        backdrop.classList.add('active');
        container.classList.add('active');
        container.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');

        // Scroll al top del modal
        setTimeout(() => {
          const body = panel.querySelector('.solution-modal-body');
          if (body) body.scrollTop = 0;
        }, 100);
      }

      function closeSolutionModal() {
        backdrop.classList.remove('active');
        container.classList.remove('active');
        container.setAttribute('aria-hidden', 'true');
        // No quitar modal-open si el otro modal está activo
        if (!document.querySelector('.modal-backdrop.active')) {
          document.body.classList.remove('modal-open');
        }
        if (lastFocused) lastFocused.focus();
      }

      // Disparadores: click en cards
      document.querySelectorAll('.solution-card[data-solution]').forEach(card => {
        card.addEventListener('click', () => {
          const slug = card.dataset.solution;
          openSolutionModal(slug);
        });
        // Accesibilidad: Enter / Space
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const slug = card.dataset.solution;
            openSolutionModal(slug);
          }
        });
      });

      // Cierre: backdrop, botón, ESC
      document.querySelectorAll('[data-close-sol-modal]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          // Si también tiene data-open-modal, deja que el otro handler maneje la apertura
          if (!btn.hasAttribute('data-open-modal')) {
            e.stopPropagation();
          }
          closeSolutionModal();
        });
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && container.classList.contains('active')) {
          closeSolutionModal();
        }
      });

      // No cerrar al click en panel
      panel.addEventListener('click', (e) => e.stopPropagation());
    })();
  </script>`;
