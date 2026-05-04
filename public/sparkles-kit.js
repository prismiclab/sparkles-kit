/* ============================================================
   sparkles-kit.js — optional behavior layer
   ------------------------------------------------------------
   The kit is mostly CSS-only. This file wires up the three
   primitives that benefit from JavaScript:

     - spotlight tile  (cursor-tracked radial highlight)
     - tilt tile       (3D perspective tilt toward cursor)
     - command palette (cmd-K modal with filter + keyboard nav)

   Drop in once per page via a regular script tag pointing at
   sparkles-kit.js with the defer attribute (see README for the
   exact markup — written out here would terminate this comment
   when the file is inlined into HTML).

   Auto-runs on DOMContentLoaded, exposes
   window.sparklesKit.{initSpotlightTiles, initTiltTiles, initCmdk}
   for re-init after dynamic DOM updates.
   ============================================================ */
(function () {
  if (typeof document === 'undefined') return;

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------------
     Spotlight tile — set --sk-mx / --sk-my from pointer position
     ---------------------------------------------------------- */
  function initSpotlightTiles(root) {
    const scope = root || document;
    scope.querySelectorAll('[data-sk-spotlight]').forEach((el) => {
      if (el.dataset.skInitSpot === '1') return;
      el.dataset.skInitSpot = '1';
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        el.style.setProperty('--sk-mx', x.toFixed(1) + '%');
        el.style.setProperty('--sk-my', y.toFixed(1) + '%');
      });
    });
  }

  /* ----------------------------------------------------------
     Tilt tile — 3D rotateX/rotateY toward cursor
     ---------------------------------------------------------- */
  function initTiltTiles(root) {
    if (reduced) return;
    const scope = root || document;
    scope.querySelectorAll('[data-sk-tilt]').forEach((el) => {
      if (el.dataset.skInitTilt === '1') return;
      el.dataset.skInitTilt = '1';

      const max = parseFloat(el.dataset.skTiltMax || '8'); // max degrees

      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        // Normalize to [-1, 1] from center, then scale to ±max degrees.
        const nx = (e.clientX - cx) / (r.width / 2);
        const ny = (e.clientY - cy) / (r.height / 2);
        const ry = nx * max;       // rotateY follows horizontal pointer
        const rx = -ny * max;      // rotateX inverted (cursor up = tilt back)
        el.style.setProperty('--sk-tilt-x', rx.toFixed(2) + 'deg');
        el.style.setProperty('--sk-tilt-y', ry.toFixed(2) + 'deg');
      });

      el.addEventListener('pointerleave', () => {
        el.style.setProperty('--sk-tilt-x', '0deg');
        el.style.setProperty('--sk-tilt-y', '0deg');
      });
    });
  }

  /* ----------------------------------------------------------
     Command palette — ⌘K to open, Esc to close, ↑↓↵ to nav
     ---------------------------------------------------------- */
  function initCmdk(root) {
    const scope = root || document;
    scope.querySelectorAll('[data-sk-cmdk-root]').forEach((overlay) => {
      if (overlay.dataset.skInitCmdk === '1') return;
      overlay.dataset.skInitCmdk = '1';

      const input = overlay.querySelector('[data-sk-cmdk-input]');
      const list = overlay.querySelector('[data-sk-cmdk-list]');
      if (!input || !list) return;

      const items = Array.from(list.querySelectorAll('.sk-cmdk-item'));
      let active = 0;

      const setActive = (i) => {
        items.forEach((it) => it.classList.remove('is-active'));
        items.filter((it) => !it.hidden)[i]?.classList.add('is-active');
      };

      const open = () => {
        overlay.hidden = false;
        input.value = '';
        items.forEach((it) => (it.hidden = false));
        active = 0;
        setActive(0);
        // Focus input after the browser settles the unhidden modal.
        requestAnimationFrame(() => input.focus());
      };

      const close = () => {
        overlay.hidden = true;
      };

      // Toggle hotkey ⌘K / Ctrl+K — only bind once globally per overlay.
      document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          if (overlay.hidden) open(); else close();
        } else if (e.key === 'Escape' && !overlay.hidden) {
          close();
        }
      });

      // Click backdrop closes; clicks on .sk-cmdk inside don't bubble out
      // because we stopPropagation on the panel.
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close();
      });
      const panel = overlay.querySelector('.sk-cmdk');
      panel?.addEventListener('click', (e) => e.stopPropagation());

      // Filter on input
      input.addEventListener('input', () => {
        const q = input.value.trim().toLowerCase();
        items.forEach((it) => {
          const text = it.textContent.toLowerCase();
          it.hidden = q ? !text.includes(q) : false;
        });
        active = 0;
        setActive(0);
      });

      // Arrow nav + enter to confirm
      input.addEventListener('keydown', (e) => {
        const visible = items.filter((it) => !it.hidden);
        if (!visible.length) return;
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          active = (active + 1) % visible.length;
          setActive(active);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          active = (active - 1 + visible.length) % visible.length;
          setActive(active);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          visible[active]?.click();
        }
      });

      // Mouse hover updates active for visual consistency
      list.addEventListener('mousemove', (e) => {
        const it = e.target.closest('.sk-cmdk-item');
        if (!it || it.hidden) return;
        const visible = items.filter((x) => !x.hidden);
        active = visible.indexOf(it);
        setActive(active);
      });
    });
  }

  /* ---------------------------------------------------------- */

  function initAll(root) {
    initSpotlightTiles(root);
    initTiltTiles(root);
    initCmdk(root);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initAll());
  } else {
    initAll();
  }

  window.sparklesKit = window.sparklesKit || {};
  window.sparklesKit.initSpotlightTiles = initSpotlightTiles;
  window.sparklesKit.initTiltTiles = initTiltTiles;
  window.sparklesKit.initCmdk = initCmdk;
  window.sparklesKit.initAll = initAll;
})();
