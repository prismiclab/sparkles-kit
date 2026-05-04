/* ============================================================
   sparkles-kit.js — optional behavior layer
   ------------------------------------------------------------
   Most primitives in sparkles-kit are CSS-only and need no JS.
   This file ships interactive primitives — currently the glow
   stick. Drop it into your page once:

     <script src="/sparkles-kit.js" defer></script>

   It auto-initializes on DOMContentLoaded and exposes
   `window.sparklesKit.initGlowSticks()` so you can re-init
   after dynamic DOM updates.
   ============================================================ */
(function () {
  if (typeof document === 'undefined') return;

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initGlowSticks(root) {
    const scope = root || document;
    scope.querySelectorAll('[data-sk-glow-stick]').forEach((el) => {
      if (el.dataset.skInit === '1') return;
      el.dataset.skInit = '1';
      setupStick(el);
    });
  }

  function setupStick(stick) {
    let grabbed = false;
    let pointerId = null;
    let lastAngle = 0;
    let lastTime = 0;
    let velocity = 0; // deg/sec

    function pivot() {
      const r = stick.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.bottom };
    }

    function angleFromEvent(e) {
      const p = pivot();
      const dx = e.clientX - p.x;
      const dy = e.clientY - p.y;
      // 0deg = pointer straight up from pivot, +CW
      return (Math.atan2(dx, -dy) * 180) / Math.PI;
    }

    function onDown(e) {
      grabbed = true;
      pointerId = e.pointerId;
      try {
        stick.setPointerCapture(e.pointerId);
      } catch (_) { /* some pointer types don't support capture */ }
      stick.classList.add('grabbed');
      const a = angleFromEvent(e);
      lastAngle = a;
      lastTime = performance.now();
      velocity = 0;
      stick.style.setProperty('--sk-stick-angle', a.toFixed(1) + 'deg');
      e.preventDefault();
    }

    function onMove(e) {
      if (!grabbed || e.pointerId !== pointerId) return;
      const now = performance.now();
      const dt = Math.max(1, now - lastTime) / 1000; // seconds
      const a = angleFromEvent(e);
      let delta = a - lastAngle;
      // unwrap so fast crossings of ±180 don't read as huge angular jumps
      if (delta > 180) delta -= 360;
      if (delta < -180) delta += 360;
      velocity = delta / dt;
      lastAngle = a;
      lastTime = now;
      stick.style.setProperty('--sk-stick-angle', a.toFixed(1) + 'deg');

      const speed = Math.abs(velocity);
      if (!reduced && speed > 360) stick.classList.add('shaking');
      else if (speed < 120) stick.classList.remove('shaking');
    }

    function release() {
      grabbed = false;
      pointerId = null;
      stick.classList.remove('grabbed');
      stick.classList.remove('shaking');
      stick.style.setProperty('--sk-stick-angle', '0deg');
    }

    function onUp(e) {
      if (e.pointerId !== pointerId) return;
      release();
    }

    stick.addEventListener('pointerdown', onDown);
    stick.addEventListener('pointermove', onMove);
    stick.addEventListener('pointerup', onUp);
    stick.addEventListener('pointercancel', onUp);
    stick.addEventListener('lostpointercapture', release);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initGlowSticks());
  } else {
    initGlowSticks();
  }

  window.sparklesKit = window.sparklesKit || {};
  window.sparklesKit.initGlowSticks = initGlowSticks;
})();
