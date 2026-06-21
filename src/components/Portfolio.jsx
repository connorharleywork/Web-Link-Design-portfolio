import { useMemo, useState } from 'react';
import { ArrowUpRight, MessageCircle, PanelsTopLeft } from 'lucide-react';
import { portfolioItems } from '../data/siteContent';
import SectionHeader from './SectionHeader';
import WebsiteDetailsModal from './WebsiteDetailsModal';

const filters = ['All', 'Hospitality', 'Food', 'Construction', 'Beauty', 'Fitness', 'Professional'];

const enquire = (item) => {
  window.dispatchEvent(new CustomEvent('select-website-type', { detail: item.websiteType }));
  window.dispatchEvent(new CustomEvent('prefill-project-message', { detail: `I am interested in a website similar to ${item.name}.` }));
  setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 30);
};

export default function Portfolio({ onOpenConcept }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const visibleItems = useMemo(() => activeFilter === 'All' ? portfolioItems : portfolioItems.filter((item) => item.filter === activeFilter), [activeFilter]);

  const openConcept = (concept) => {
    setSelected(null);
    onOpenConcept?.(concept);
  };

  const startEnquiry = (item) => {
    setSelected(null);
    enquire(item);
  };

  return (
    <section id="portfolio" className="px-4 py-20 sm:px-5 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Website Concepts"
          title="Choose a website style for your business."
          text="Explore polished concept websites designed for different industries. View the live-style concept, open the details, or enquire about a similar website for your business."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2.5">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`min-h-[42px] rounded-full border px-4 py-2 text-sm font-semibold transition ${activeFilter === filter ? 'border-[#d8b56d] bg-[#d8b56d] text-[#17130b]' : 'border-white/10 bg-white/5 text-[#e8ddc5] hover:border-[#d8b56d]/60 hover:text-[#fff6dd]'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item, index) => (
            <article className="group luxury-card luxury-card-hover flex h-full flex-col overflow-hidden rounded-[1.75rem]" key={item.name}>
              <div className="h-52 bg-gradient-to-br from-[#d8b56d]/25 via-white/10 to-transparent p-3 sm:h-56 sm:p-4">
                <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0b0a08]/70 p-4 transition duration-500 group-hover:scale-[1.025]">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#d8b56d]"/><span className="h-2.5 w-2.5 rounded-full bg-white/25"/><span className="h-2.5 w-2.5 rounded-full bg-white/15"/></div>
                    <span className="rounded-full bg-[#d8b56d]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#f7e8bd]">{item.filter}</span>
                  </div>
                  <div className="grid h-[calc(100%-2rem)] grid-cols-5 gap-3">
                    <div className="col-span-3 overflow-hidden rounded-2xl bg-gradient-to-br from-[#fff6dd]/25 via-[#d8b56d]/20 to-[#8f6a2f]/20 p-3">
                      <div className="h-16 rounded-2xl bg-black/20" />
                      <div className="mt-3 h-3 w-3/4 rounded-full bg-white/25" />
                      <div className="mt-2 h-3 w-1/2 rounded-full bg-white/15" />
                    </div>
                    <div className="col-span-2 space-y-2 self-center">
                      <div className="h-20 rounded-2xl bg-white/10" />
                      <div className="h-3 rounded-full bg-white/30" />
                      <div className="h-3 rounded-full bg-white/15" />
                      <div className="h-8 rounded-2xl bg-[#d8b56d]/35" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-sm text-[#d8b56d]">{String(index + 1).padStart(2, '0')} · {item.category}</p>
                <h3 className="mt-2 text-2xl font-semibold text-[#fff6dd]">{item.name}</h3>
                <p className="mt-3 leading-7 text-[#c9c0ad]">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">{item.features.map((feature) => <span className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-[#ddd2bc]" key={feature}>{feature}</span>)}</div>
                <div className="mt-auto grid gap-2 pt-6 sm:grid-cols-3">
                  <button onClick={() => openConcept(item.concept)} className="premium-button inline-flex min-h-[46px] items-center justify-center gap-1.5 rounded-full bg-[#d8b56d] px-3 py-2 text-sm font-bold text-[#17130b] transition hover:-translate-y-0.5">View Concept <ArrowUpRight size={15}/></button>
                  <button onClick={() => setSelected(item)} className="inline-flex min-h-[46px] items-center justify-center gap-1.5 rounded-full border border-white/15 px-3 py-2 text-sm font-semibold text-[#fff6dd] transition hover:border-[#d8b56d]/60 hover:bg-white/5"><PanelsTopLeft size={15}/> Details</button>
                  <button onClick={() => startEnquiry(item)} className="inline-flex min-h-[46px] items-center justify-center gap-1.5 rounded-full bg-[#fff6dd] px-3 py-2 text-sm font-bold text-[#17130b] transition hover:-translate-y-0.5"><MessageCircle size={15}/> Enquire</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <WebsiteDetailsModal item={selected} onClose={() => setSelected(null)} onOpenConcept={openConcept} onEnquire={startEnquiry} />
    </section>
  );
}
