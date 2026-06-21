import { Check } from 'lucide-react';
import { packages } from '../data/siteContent';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const choose = (name) => {
  window.dispatchEvent(new CustomEvent('select-website-type', { detail: name }));
  window.dispatchEvent(new CustomEvent('prefill-project-message', { detail: `I would like to enquire about the ${name} package.` }));
  setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 30);
};

export default function Packages() {
  return (
    <section id="packages" className="px-4 py-20 sm:px-5 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Packages" title="Simple website packages for small businesses." text="Choose a starting point, then we can shape the pages, features and launch plan around your business." />
        <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {packages.map((p, i) => (
            <Reveal as="article" delay={i * 0.04} className={`luxury-card-hover relative flex flex-col rounded-[2rem] p-6 sm:p-7 ${p.popular ? 'bg-gradient-to-br from-[#f4d98d] via-[#d8b56d] to-[#a77b36] text-[#17130b] shadow-[0_0_70px_rgba(216,181,109,.28)]' : 'luxury-card text-[#fff6dd]'}`} key={p.name}>
              {p.popular && <span className="mb-5 w-max rounded-full bg-[#17130b] px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d8b56d] lg:absolute lg:right-6 lg:top-6">Most Popular</span>}
              <h3 className="text-2xl font-semibold">{p.name}</h3>
              <p className="mt-3 text-3xl font-bold sm:text-4xl">{p.price}</p>
              <p className={`mt-4 leading-7 ${p.popular ? 'text-[#3b2d12]' : 'text-[#c9c0ad]'}`}>{p.audience}</p>
              <ul className="mt-6 flex-1 space-y-3">{p.features.map((f) => <li className="flex gap-3 leading-6" key={f}><Check className="mt-0.5 shrink-0" size={20} /><span>{f}</span></li>)}</ul>
              <button onClick={() => choose(p.name)} className={`premium-button mt-7 inline-flex min-h-[50px] items-center justify-center rounded-full px-6 py-3 font-semibold transition hover:-translate-y-0.5 ${p.popular ? 'bg-[#17130b] text-[#fff6dd]' : 'bg-[#d8b56d] text-[#17130b]'}`}>Enquire About This Package</button>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center leading-7 text-[#c9c0ad]">Final pricing depends on pages, features, content, integrations, and timeline.</p>
      </div>
    </section>
  );
}
