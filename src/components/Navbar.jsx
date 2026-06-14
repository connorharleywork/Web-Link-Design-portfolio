import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { brand, navLinks } from '../data/siteContent';

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-1 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <nav className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 transition-all duration-300 sm:px-5 lg:px-6 ${scrolled || open ? 'glass w-[calc(100%-1.5rem)]' : 'w-full bg-transparent'}`}>
        <button onClick={() => go('home')} className="min-h-[44px] rounded-full text-left transition hover:opacity-90" aria-label="Go to home section">
          <span className="block text-base font-semibold tracking-tight text-[#fff6dd] sm:text-lg">{brand.name}</span>
          <span className="hidden text-xs text-[#d8b56d] sm:block">Premium web design studio</span>
        </button>
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map(([label, id]) => (
            <button className="rounded-full px-4 py-2.5 text-sm text-[#d8d0bf] transition hover:bg-white/5 hover:text-[#fff6dd]" key={id} onClick={() => go(id)}>{label}</button>
          ))}
          <button onClick={() => go('contact')} className="ml-2 rounded-full bg-[#d8b56d] px-5 py-3 text-sm font-semibold text-[#17130b] shadow-[0_0_30px_rgba(216,181,109,.25)] transition hover:-translate-y-0.5 hover:shadow-[0_0_45px_rgba(216,181,109,.34)]">Start a Project</button>
        </div>
        <button aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)} className="grid min-h-[46px] min-w-[46px] place-items-center rounded-full border border-white/10 bg-white/5 text-[#fff6dd] transition hover:border-[#d8b56d]/50 lg:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: .98 }} transition={{ duration: .22 }} className="glass mx-3 mt-3 rounded-[1.75rem] p-3 lg:hidden">
            {navLinks.map(([label, id]) => (
              <button className="block min-h-[48px] w-full rounded-2xl px-4 py-3 text-left text-[#eee3ca] transition hover:bg-white/7" key={id} onClick={() => { go(id); setOpen(false); }}>{label}</button>
            ))}
            <button onClick={() => { go('contact'); setOpen(false); }} className="mt-2 min-h-[50px] w-full rounded-full bg-[#d8b56d] px-5 py-3 font-bold text-[#17130b]">Start a Project</button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
