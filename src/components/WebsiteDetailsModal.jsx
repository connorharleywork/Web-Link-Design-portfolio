import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check, X } from 'lucide-react';

export default function WebsiteDetailsModal({ item, onClose, onOpenConcept, onEnquire }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-black/75 p-3 backdrop-blur-md sm:p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(event) => event.stopPropagation()}
            initial={{ scale: 0.94, y: 24 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 20 }}
            transition={{ duration: 0.24 }}
            className="glass max-h-[90vh] w-full max-w-4xl overflow-auto rounded-[1.6rem] p-5 sm:rounded-[2rem] sm:p-8"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.25em] text-[#d8b56d] sm:text-sm">{item.category}</p>
                <h3 className="mt-2 text-2xl font-semibold text-[#fff6dd] sm:text-4xl">{item.name}</h3>
                <p className="mt-4 max-w-2xl leading-8 text-[#c9c0ad]">{item.description}</p>
              </div>
              <button aria-label="Close website details" onClick={onClose} className="grid min-h-[44px] min-w-[44px] place-items-center rounded-full border border-white/10 bg-white/5 text-[#fff6dd] transition hover:border-[#d8b56d]/60">
                <X />
              </button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-[#d8b56d]/25 bg-[#d8b56d]/10 p-4 text-[#f7e8bd]">
                <span className="block text-xs uppercase tracking-[.2em] text-[#d8b56d]">Estimated complexity</span>
                <b className="mt-1 block text-lg">{item.details.complexity}</b>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[.055] p-4 text-[#f7e8bd]">
                <span className="block text-xs uppercase tracking-[.2em] text-[#d8b56d]">Suggested starting price</span>
                <b className="mt-1 block text-lg">{item.details.startingPrice}</b>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Info title="Best for" items={item.details.bestFor} />
              <Info title="What it includes" items={item.details.includes} />
              <Info title="Recommended pages" items={item.details.pages} />
              <Info title="Useful add-ons" items={item.details.addons} />
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => onOpenConcept?.(item.concept)} className="premium-button inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#d8b56d] px-6 py-3 font-semibold text-[#161109] transition hover:-translate-y-0.5">
                View Full Concept <ArrowUpRight size={16} />
              </button>
              <button onClick={() => onEnquire?.(item)} className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-[#fff6dd] transition hover:border-[#d8b56d]/60 hover:bg-white/10">
                Enquire About This Website
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Info({ title, items }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[.055] p-5">
      <h4 className="mb-3 font-semibold text-[#fff6dd]">{title}</h4>
      <ul className="space-y-2.5 text-sm leading-6 text-[#c9c0ad]">
        {items.map((item) => (
          <li className="flex gap-2" key={item}>
            <Check className="mt-0.5 shrink-0 text-[#d8b56d]" size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
