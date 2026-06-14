import { benefits } from '../data/siteContent';
import SectionHeader from './SectionHeader';
export default function WhyChooseUs(){return <section className="bg-white/[.025] px-5 py-24"><div className="mx-auto max-w-7xl"><SectionHeader eyebrow="Why choose us" title="Premium design with practical business thinking."/><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{benefits.map(([b,Icon])=><div className="glass rounded-3xl p-6" key={b}><Icon className="mb-4 text-[#d8b56d]"/><h3 className="text-xl font-semibold text-[#fff6dd]">{b}</h3></div>)}</div></div></section>}
