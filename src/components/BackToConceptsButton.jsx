import { ArrowLeft } from 'lucide-react';

export default function BackToConceptsButton({ onBack }) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="fixed bottom-5 left-4 z-50 inline-flex min-h-[46px] items-center gap-2 rounded-full border border-[#d8b56d]/35 bg-[#11100d]/88 px-4 py-3 text-sm font-semibold text-[#fff6dd] shadow-[0_18px_50px_rgba(0,0,0,.34)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#d8b56d]/70 hover:text-[#f7e8bd] focus:outline-none focus:ring-2 focus:ring-[#d8b56d]/45 sm:bottom-6 sm:left-6 sm:px-5"
      aria-label="Back to Concepts"
    >
      <ArrowLeft size={17} />
      <span>Back to Concepts</span>
    </button>
  );
}
