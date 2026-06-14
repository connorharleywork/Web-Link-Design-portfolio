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

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WebsiteOptions />
        <Services />
        <Packages />
        <Process />
        <Portfolio />
        <WhyChooseUs />
        <Contact />
        <FAQ />
      </main>
      <a href="#contact" className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 rounded-full bg-[#d8b56d] px-6 py-3 text-sm font-semibold text-[#17130b] shadow-2xl md:hidden">Start Your Website</a>
      <Footer />
    </>
  );
}
