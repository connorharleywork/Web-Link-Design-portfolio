import { motion } from 'framer-motion';
import { services } from '../data/siteContent';
import SectionHeader from './SectionHeader';
export default function Services(){return <section id="services" className="bg-white/[.025] px-5 py-24"><div className="mx-auto max-w-7xl"><SectionHeader eyebrow="Services" title="Everything your first premium website needs."/><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{services.map(([name,Icon,copy])=><motion.div whileHover={{y:-6}} className="luxury-card rounded-3xl p-5" key={name}><Icon className="mb-5 text-[#d8b56d]"/><h3 className="font-semibold text-[#fff6dd]">{name}</h3><p className="mt-3 text-sm leading-6 text-[#bfb5a2]">{copy}</p></motion.div>)}</div></div></section>}
