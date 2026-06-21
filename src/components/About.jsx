import { CheckCircle2, MapPin, MessageCircle, PenTool } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const trustPoints = [
  'Clear communication from start to launch',
  'Mobile-first design',
  'Guidance with domain and hosting',
  'Built around enquiries, not just looks',
];

const founderPoints = [
  'Founder-led studio',
  'Direct communication',
  'Practical design guidance',
  'Cape Town, South Africa',
];

export default function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-5 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
        <div>
          <SectionHeader
            align="left"
            eyebrow="About Web Link Designs"
            title="Founder-led website design with a focus on trust, clarity and enquiries."
            text="Web Link Designs is a Cape Town-based web design studio helping small businesses look professional online. The focus is simple: create websites that feel refined, work beautifully on mobile, explain the business clearly and make it easy for visitors to enquire."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {trustPoints.map((point, index) => (
              <Reveal delay={index * 0.04} className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/[.04] p-4" key={point}>
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#d8b56d]" size={19} />
                <span className="text-sm leading-6 text-[#e8ddc5]">{point}</span>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="glass relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
          <div className="absolute right-0 top-0 h-44 w-44 translate-x-10 -translate-y-10 rounded-full bg-[#d8b56d]/20 blur-3xl" />
          <div className="relative rounded-[1.6rem] border border-[#d8b56d]/20 bg-[#11100d]/80 p-5 sm:p-6">
            <div className="grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br from-[#fff6dd] via-[#d8b56d] to-[#8f6a2f] text-[#17130b] shadow-[0_18px_60px_rgba(216,181,109,.22)]">
              <PenTool size={34} />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[.25em] text-[#d8b56d]">Founder-style support</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#fff6dd]">A practical studio approach for small businesses.</h3>
            <div className="mt-6 grid gap-3">
              {founderPoints.map((point) => (
                <div className="flex items-center gap-3 rounded-2xl bg-white/[.045] px-4 py-3 text-[#e8ddc5]" key={point}>
                  {point.includes('Cape Town') ? <MapPin size={18} className="text-[#d8b56d]" /> : <MessageCircle size={18} className="text-[#d8b56d]" />}
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
