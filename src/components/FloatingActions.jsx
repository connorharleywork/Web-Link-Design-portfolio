import { ArrowUp, Send } from 'lucide-react';
import { useEffect, useState } from 'react';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function FloatingActions() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setVisible(window.scrollY > 520);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[70] h-1 bg-black/20">
        <div className="h-full bg-gradient-to-r from-[#8f6a2f] via-[#d8b56d] to-[#fff6dd] shadow-[0_0_18px_rgba(216,181,109,.55)] transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
      </div>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => scrollTo('home')}
        className={`fixed bottom-6 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-[#14110d]/85 text-[#fff6dd] shadow-2xl backdrop-blur transition duration-300 hover:border-[#d8b56d]/60 hover:text-[#d8b56d] ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
      >
        <ArrowUp size={20} />
      </button>

      <button
        type="button"
        onClick={() => scrollTo('contact')}
        className="fixed bottom-4 left-1/2 z-40 inline-flex min-h-[52px] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 items-center justify-center gap-2 rounded-full bg-[#d8b56d] px-6 py-4 text-sm font-bold text-[#17130b] shadow-[0_18px_50px_rgba(216,181,109,.34)] ring-1 ring-[#fff6dd]/30 transition active:scale-[.98] md:hidden"
      >
        <Send size={18} /> Start a Project
      </button>
    </>
  );
}
