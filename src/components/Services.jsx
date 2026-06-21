import { services } from '../data/siteContent';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Services() {
  return (
    <section id="services" className="bg-white/[.025] px-4 py-20 sm:px-5 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Everything your business website needs to feel professional."
          text="From the first design direction to launch, we help you create a website that is clear, mobile-friendly, and easy for customers to enquire from."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([name, Icon, copy], i) => (
            <Reveal delay={i * 0.025} className="luxury-card luxury-card-hover rounded-3xl p-5" key={name}>
              <Icon className="mb-5 text-[#d8b56d]" />
              <h3 className="font-semibold text-[#fff6dd]">{name}</h3>
              <p className="mt-3 text-sm leading-6 text-[#bfb5a2]">{copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
