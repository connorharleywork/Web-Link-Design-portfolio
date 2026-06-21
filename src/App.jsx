import { Suspense, lazy, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';


const GuesthouseConcept = lazy(() => import('./pages/GuesthouseConcept'));
const UrbanBiteConcept = lazy(() => import('./pages/UrbanBiteConcept'));
const PrimeBuildConcept = lazy(() => import('./pages/PrimeBuildConcept'));
const GlowHausConcept = lazy(() => import('./pages/GlowHausConcept'));
const FitFormConcept = lazy(() => import('./pages/FitFormConcept'));
const CapeLegalConcept = lazy(() => import('./pages/CapeLegalConcept'));

function ConceptLoading() {
  return (
    <div className="mesh grid min-h-screen place-items-center px-5 text-center">
      <div className="glass rounded-[2rem] p-8">
        <p className="text-sm font-semibold uppercase tracking-[.28em] text-[#d8b56d]">Web Link Designs</p>
        <p className="mt-3 text-xl font-semibold text-[#fff6dd]">Loading website concept…</p>
      </div>
    </div>
  );
}

const withConceptLoading = (component) => <Suspense fallback={<ConceptLoading />}>{component}</Suspense>;

export default function App() {
  const [activeConcept, setActiveConcept] = useState(null);

  if (activeConcept === 'guesthouse') {
    return withConceptLoading(<GuesthouseConcept onBack={() => setActiveConcept(null)} />);
  }

  if (activeConcept === 'urbanbite') {
    return withConceptLoading(<UrbanBiteConcept onBack={() => setActiveConcept(null)} />);
  }

  if (activeConcept === 'primebuild') {
    return withConceptLoading(<PrimeBuildConcept onBack={() => setActiveConcept(null)} />);
  }

  if (activeConcept === 'glowhaus') {
    return withConceptLoading(<GlowHausConcept onBack={() => setActiveConcept(null)} />);
  }

  if (activeConcept === 'fitform') {
    return withConceptLoading(<FitFormConcept onBack={() => setActiveConcept(null)} />);
  }

  if (activeConcept === 'capelegal') {
    return withConceptLoading(<CapeLegalConcept onBack={() => setActiveConcept(null)} />);
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portfolio onOpenConcept={setActiveConcept} />
        <Services />
        <About />
        <Packages />
        <Process />
        <WhyChooseUs />
        <Contact />
        <FAQ />
      </main>
      <FloatingActions />
      <Footer />
    </>
  );
}
