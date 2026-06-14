import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { faqs } from '../data/siteContent';
import SectionHeader from './SectionHeader';
export default function FAQ(){const [open,setOpen]=useState(0);return <section className="bg-white/[.025] px-5 py-24"><div className="mx-auto max-w-4xl"><SectionHeader eyebrow="FAQ" title="Questions before you start?"/><div className="space-y-4">{faqs.map(([q,a],i)=><div className="glass rounded-3xl" key={q}><button onClick={()=>setOpen(open===i?null:i)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-[#fff6dd]">{q}<ChevronDown className={`transition ${open===i?'rotate-180':''}`}/></button><AnimatePresence>{open===i&&<motion.p initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden px-5 pb-5 text-[#c9c0ad]">{a}</motion.p>}</AnimatePresence></div>)}</div></div></section>}
