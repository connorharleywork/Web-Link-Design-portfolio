import { motion } from 'framer-motion';
export default function SectionHeader({ eyebrow, title, text }) {
  return <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true, margin:'-80px'}} transition={{duration:.6}} className="mx-auto mb-10 max-w-3xl text-center">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[.28em] text-[#d8b56d]">{eyebrow}</p>
    <h2 className="text-3xl font-semibold tracking-tight text-[#fff6dd] md:text-5xl">{title}</h2>
    {text && <p className="mt-5 text-base leading-8 text-[#c9c0ad] md:text-lg">{text}</p>}
  </motion.div>;
}
