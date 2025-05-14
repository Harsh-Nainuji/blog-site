// src/utils/animations.js

// 1. Cursor Trail — Smooth glowing trail with hover scaling, disabled on mobile
export function initCursorTrail() {
  // Skip on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const pointer = document.createElement('div');
  pointer.className = 'pointer';
  document.body.appendChild(pointer);

  const updatePointer = (e) => {
    const size = 40; // Base diameter
    const hoverSize = 60; // Larger on hover
    const isHover = e.target.closest('.btn, .card, a');
    const currentSize = isHover ? hoverSize : size;

    pointer.style.width = `${currentSize}px`;
    pointer.style.height = `${currentSize}px`;
    pointer.style.left = `${e.clientX - currentSize / 2}px`;
    pointer.style.top = `${e.clientY - currentSize / 2}px`;
    pointer.style.opacity = isHover ? '0.8' : '0.5';
  };

  document.addEventListener('mousemove', updatePointer);

  // Cleanup
  return () => document.removeEventListener('mousemove', updatePointer);
}

// 2. Button Ripple Effect — Enhanced with hover scale, restricted to .btn
export function initButtonRipples() {
  const buttons = document.querySelectorAll('.btn:not([disabled])');
  buttons.forEach((btn) => {
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';

    const handleClick = (e) => {
      const ripple = document.createElement('span');
      const diameter = Math.max(btn.clientWidth, btn.clientHeight);
      const radius = diameter / 2;

      ripple.style.width = ripple.style.height = `${diameter}px`;
      ripple.style.left = `${e.offsetX - radius}px`;
      ripple.style.top = `${e.offsetY - radius}px`;
      ripple.className = 'ripple';

      const oldRipple = btn.querySelector('.ripple');
      if (oldRipple) oldRipple.remove();

      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };

    btn.addEventListener('click', handleClick);

    // Cleanup
    return () => btn.removeEventListener('click', handleClick);
  });
}

// 3. Page Fade-in — Smooth fade-in on load, delayed for effect
export function initPageFade() {
  document.body.classList.add('page-enter');
  setTimeout(() => {
    document.body.classList.remove('page-enter');
  }, 500); // Match CSS animation duration
}

// 4. Init all animations with cleanup
export function initAnimations() {
  const cleanups = [
    initCursorTrail(),
    initButtonRipples(),
    initPageFade(),
  ].filter(Boolean); // Remove undefined cleanups

  // Return cleanup function for React use
  return () => cleanups.forEach((cleanup) => cleanup && cleanup());
}

// Auto-run on DOM ready
if (typeof window !== 'undefined') {
  let cleanup;
  window.addEventListener('DOMContentLoaded', () => {
    cleanup = initAnimations();
  });

  // Optional: Cleanup on unload (for SPA or testing)
  window.addEventListener('unload', () => cleanup && cleanup());
}