function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function smoothScrollToId(hashOrId, offset = 88, duration = 520) {
  if (!hashOrId) return false;

  const id = hashOrId.startsWith("#") ? hashOrId.slice(1) : hashOrId;
  const target = document.getElementById(id);
  if (!target) return false;

  const startY = window.scrollY;
  const targetY = Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset);
  const distance = targetY - startY;
  const startTime = performance.now();

  if (Math.abs(distance) < 2) return true;

  const animate = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, startY + distance * eased);
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);

  if (window.location.hash !== `#${id}`) {
    window.history.replaceState(null, "", `#${id}`);
  }

  return true;
}
