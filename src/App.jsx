import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WebsiteOptions from './components/WebsiteOptions';
import Services from './components/Services';
import Packages from './components/Packages';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import GuesthouseConcept from './pages/GuesthouseConcept';

export default function App() {
  const [activeConcept, setActiveConcept] = useState(null);

  if (activeConcept === 'guesthouse') {
    return <GuesthouseConcept onBack={() => setActiveConcept(null)} />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WebsiteOptions />
        <Services />
        <Packages />
        <Process />
        <Portfolio onOpenConcept={setActiveConcept} />
        <WhyChooseUs />
        <Contact />
        <FAQ />
      </main>
      <FloatingActions />
      <Footer />
    </>
  );
}
