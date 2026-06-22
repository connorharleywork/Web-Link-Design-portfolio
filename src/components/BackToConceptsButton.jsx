import { ArrowLeft } from 'lucide-react';

export default function BackToConceptsButton({ onBack }) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="fixed left-3 top-[calc(env(safe-area-inset-top)+4.25rem)] z-50 inline-flex min-h-[42px] items-center gap-1.5 rounded-full border border-[#d8b56d]/35 bg-[#11100d]/88 px-3 py-2 text-xs font-semibold text-[#fff6dd] shadow-[0_18px_50px_rgba(0,0,0,.34)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#d8b56d]/70 hover:text-[#f7e8bd] focus:outline-none focus:ring-2 focus:ring-[#d8b56d]/45 sm:bottom-6 sm:left-6 sm:top-auto sm:min-h-[46px] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
      aria-label="Back to Concepts"
    >
      <ArrowLeft size={17} />
      <span className="sm:hidden">Concepts</span><span className="hidden sm:inline">Back to Concepts</span>
    </button>
  );
}
