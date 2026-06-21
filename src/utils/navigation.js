export const MAIN_NAV_IDS = ['home', 'concepts', 'about', 'services', 'packages', 'process', 'contact'];

export function getNavOffset() {
  const header = document.querySelector('[data-site-navbar]');
  const headerHeight = header?.getBoundingClientRect().height ?? 88;
  const breathingRoom = window.matchMedia('(max-width: 767px)').matches ? 20 : 28;
  return Math.ceil(headerHeight + breathingRoom);
}

export function scrollToSection(id, { behavior = 'smooth' } = {}) {
  const target = document.getElementById(id);
  if (!target) return;

  const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - getNavOffset());
  window.scrollTo({ top, behavior });
}

export function scrollToTop({ behavior = 'auto' } = {}) {
  window.scrollTo({ top: 0, left: 0, behavior });
}
