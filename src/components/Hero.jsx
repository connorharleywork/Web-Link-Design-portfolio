import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

const badges = ['Mobile-first', 'Fast-loading', 'Built for enquiries', 'Custom design'];
const panels = ['Strategy', 'Design', 'Launch'];

export default function Hero() {
  return (
    <section id="home" className="mesh relative overflow-hidden px-4 pb-20 pt-32 sm:px-5 md:pt-40 lg:min-h-screen lg:pb-28">
      <div className="noise-overlay" /><div className="pointer-events-none absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-[#d8b56d]/10 blur-3xl md:h-96 md:w-96" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_.98fr] lg:gap-14">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }}>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[.28em] text-[#d8b56d] sm:text-sm sm:tracking-[.32em]">Web Link Designs</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-.04em] text-[#fff6dd] sm:text-5xl md:text-7xl lg:text-[5.25rem]">Premium websites that make businesses look <span className="gold-text">credible, expensive and ready to trust.</span></h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#c9c0ad] sm:text-lg sm:leading-8">Premium, conversion-focused websites for businesses that need to look established, explain their value clearly, and turn visitors into quality enquiries.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href="#options" className="premium-button min-h-[52px] rounded-full bg-[#d8b56d] px-7 py-4 text-center font-semibold text-[#161109] shadow-[0_0_42px_rgba(216,181,109,.28)] transition hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgba(216,181,109,.36)]">Explore Website Options</a>
            <a href="#contact" className="min-h-[52px] rounded-full border border-white/15 px-7 py-4 text-center font-semibold text-[#fff6dd] transition hover:border-[#d8b56d]/60 hover:bg-white/5">Start a Project</a>
          </div>
          <div className="mt-7 flex flex-wrap gap-2.5 sm:gap-3">{badges.map((badge) => <span key={badge} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-[#e8ddc5] sm:text-sm"><CheckCircle2 size={16} className="shrink-0 text-[#d8b56d]" />{badge}</span>)}</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-[620px]">
          <div className="absolute -inset-6 rounded-full bg-[#d8b56d]/10 blur-3xl" />
          <div className="glass premium-float relative overflow-hidden rounded-[1.75rem] p-3 sm:rounded-[2.25rem] sm:p-4">
            <div className="rounded-[1.35rem] border border-white/10 bg-[#11100d] p-3 sm:rounded-[1.75rem] sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className="flex gap-2"><i className="h-3 w-3 rounded-full bg-[#d8b56d]" /><i className="h-3 w-3 rounded-full bg-[#8f6a2f]" /><i className="h-3 w-3 rounded-full bg-white/25" /></div>
                <span className="rounded-full bg-[#d8b56d]/10 px-3 py-1 text-xs font-semibold text-[#f7e8bd]">Premium Preview</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-[1.05fr_.95fr] sm:gap-4">
                <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#fff6dd] via-[#d8b56d] to-[#8f6a2f] p-5 text-[#161109]">
                  <p className="text-xs font-bold uppercase tracking-widest">Launch suite</p>
                  <h3 className="mt-16 text-3xl font-semibold sm:mt-24 sm:text-4xl">Business Website</h3>
                  <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-bold"><span className="rounded-2xl bg-black/10 p-2">SEO</span><span className="rounded-2xl bg-black/10 p-2">Forms</span><span className="rounded-2xl bg-black/10 p-2">Mobile</span></div>
                </div>
                <div className="space-y-3 sm:space-y-4">{panels.map((panel, index) => <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6.5, ease: "easeInOut", delay: index * .55, repeat: Infinity }} key={panel} className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5"><ArrowRight className="mb-3 text-[#d8b56d]" /><p className="font-semibold text-[#fff6dd]">{panel}</p><p className="text-sm leading-6 text-[#b9af9b]">Luxury detail and clean conversion paths.</p></motion.div>)}</div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 left-5 right-5 hidden rounded-3xl border border-white/10 bg-[#0d0b08]/90 p-4 shadow-2xl backdrop-blur md:flex md:items-center md:gap-3"><Star className="text-[#d8b56d]" /><p className="text-sm text-[#e8ddc5]">Designed to feel credible before a customer even speaks to you.</p></div>
        </motion.div>
      </div>
    </section>
  );
}
