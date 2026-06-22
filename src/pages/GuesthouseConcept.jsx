
import { useEffect, useMemo, useState } from 'react';
import { Bath, BedDouble, BriefcaseBusiness, Car, ChevronDown, Coffee, ExternalLink, Home, MapPin, Mountain, Plane, Search, ShieldCheck, Sparkles, Star, Sun, Tv, Utensils, Waves, Wifi, Wind, X } from 'lucide-react';
import { guesthouseConcept } from '../data/siteContent';
import Reveal from '../components/Reveal';
import BackToConceptsButton from '../components/BackToConceptsButton';

const amenityIcons = { Wifi, Coffee, Car, Waves, MapPin, Plane, Sparkles, Tv, Bath, BriefcaseBusiness, Utensils, Home };
const experienceIcons = { Waves, Wind, Sun, Utensils, Mountain, MapPin };

export default function GuesthouseConcept({ onBack }) {
  const [activeRoom, setActiveRoom] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [openPolicy, setOpenPolicy] = useState(0);
  const [conceptMessage, setConceptMessage] = useState(null);
  const bookingFields = useMemo(() => ['Check-in date', 'Check-out date', 'Guests'], []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const showConceptInteraction = (message = 'This is a concept booking search. On a live guesthouse website, this could check room availability, filter dates and guide guests to book or send an enquiry.') => setConceptMessage(message);

  const goToEnquiry = (message = 'Guesthouse / Airbnb Website') => {
    window.sessionStorage.setItem('prefillWebsiteType', 'Guesthouse / Airbnb Website');
    window.sessionStorage.setItem('prefillProjectMessage', message);
    window.dispatchEvent(new CustomEvent('select-website-type', { detail: 'Guesthouse / Airbnb Website' }));
    window.dispatchEvent(new CustomEvent('prefill-project-message', { detail: message }));
    onBack?.();
    window.setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 80);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#071521] text-[#f8f1e4]">
      <BackToConceptsButton onBack={onBack} />
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#071521]/90 px-4 py-3 backdrop-blur-xl sm:px-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <button onClick={onBack} className="rounded-full border border-white/15 px-4 py-2 text-sm text-[#f4dfb1] transition hover:border-[#d8b56d]/60 hover:bg-white/5">← Back to Concepts</button>
          <a href="#guesthouse-enquiry" className="hidden rounded-full bg-[#d8b56d] px-5 py-2.5 text-sm font-bold text-[#071521] transition hover:-translate-y-0.5 sm:inline-flex">Enquire Now</a>
        </div>
      </header>

      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden px-4 py-16 sm:px-5">
        <img src={guesthouseConcept.images.hero.src} alt={guesthouseConcept.images.hero.alt} className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#06101d]/95 via-[#071521]/70 to-[#071521]/45" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#071521] to-transparent" />
        <div className="mx-auto grid w-full max-w-7xl items-end gap-8 lg:grid-cols-[1.05fr_.7fr]">
          <Reveal>
            <p className="mb-5 inline-flex rounded-full border border-[#d8b56d]/35 bg-[#d8b56d]/10 px-4 py-2 text-sm uppercase tracking-[0.28em] text-[#f4dfb1]">Azure Tide Guesthouse · Bloubergstrand</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">Wake up to the Atlantic.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#eadfcf] sm:text-xl">A boutique coastal guesthouse in Bloubergstrand, designed for slow mornings, ocean air and effortless Cape Town stays.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => showConceptInteraction()} className="premium-button rounded-full bg-[#d8b56d] px-7 py-4 font-bold text-[#071521]">Check Availability</button>
              <button onClick={() => document.getElementById('guesthouse-rooms')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-full border border-white/20 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/15">Explore Rooms</button>
            </div>
            <div className="mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
              {guesthouseConcept.trustDetails.map((detail) => <span key={detail} className="rounded-2xl border border-white/10 bg-white/10 p-3 text-sm text-[#f8ead1] backdrop-blur">{detail}</span>)}
            </div>
          </Reveal>
          <Reveal delay={0.08} className="mobile-form-card w-full max-w-full min-w-0 overflow-hidden rounded-[2rem] border border-white/15 bg-[#fbf4e7]/95 p-5 text-[#071521] shadow-2xl shadow-black/30">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8f6a2f]">Find your stay</p>
            <div className="mobile-form-stack mt-5 grid w-full max-w-full min-w-0 grid-cols-1 gap-3">
              {bookingFields.map((field) => <label key={field} className="mobile-form-field block w-full max-w-full min-w-0 text-sm font-semibold text-[#243142]">{field}<input type={field.includes('date') ? 'date' : 'number'} min={field === 'Guests' ? '1' : undefined} placeholder="2" className="mt-2 block min-h-[52px] w-full max-w-full min-w-0 rounded-2xl border border-[#d8c8aa] bg-white px-4 text-[#071521] outline-none box-border focus:border-[#8f6a2f]" /></label>)}
            </div>
            <button onClick={() => showConceptInteraction()} className="mt-5 inline-flex min-h-[52px] w-full max-w-full min-w-0 items-center justify-center gap-2 rounded-full bg-[#071521] px-5 font-bold text-white"><Search size={18} /> Search Stay</button>
            <p className="mt-4 text-xs leading-5 text-[#6e6255]">Example booking panel — connects to a direct enquiry flow for portfolio showcase.</p>
          </Reveal>
        </div>
      </section>

      <main>
        <section className="px-4 py-20 sm:px-5"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><Reveal><SectionIntro eyebrow="Welcome" title="A calm coastal base with boutique warmth." text="Azure Tide Guesthouse is imagined as a peaceful beach-side retreat: soft coastal rooms, warm hospitality, a breakfast deck for unhurried mornings and easy access to Cape Town’s coastline, restaurants and city experiences."/><div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">{guesthouseConcept.highlights.map((item)=><span key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm text-[#f3e5cb]">{item}</span>)}</div></Reveal><Reveal delay={0.08}><img src={guesthouseConcept.images.about.src} alt={guesthouseConcept.images.about.alt} loading="lazy" decoding="async" className="h-[34rem] w-full rounded-[2.5rem] object-cover shadow-2xl shadow-black/30" /></Reveal></div></section>

        <section id="guesthouse-rooms" className="bg-[#fbf4e7] px-4 py-20 text-[#071521] sm:px-5"><div className="mx-auto max-w-7xl"><SectionIntro eyebrow="Rooms & suites" title="Three restful ways to stay by the sea." text="Each room card is built for conversion: imagery, clear inclusions, prices, amenities and a fast enquiry path." dark /> <div className="grid gap-6 lg:grid-cols-3">{guesthouseConcept.rooms.map((room)=><article key={room.name} className="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-[#071521]/10"><img src={room.image.src} alt={room.image.alt} className="h-64 w-full object-cover transition duration-500 hover:scale-105" loading="lazy"/><div className="p-6"><p className="text-sm font-bold text-[#8f6a2f]">From {room.price}</p><h3 className="mt-2 text-2xl font-semibold">{room.name}</h3><p className="mt-3 leading-7 text-[#5d6570]">{room.description}</p><div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-[#364252]"><span className="rounded-full bg-[#edf3ef] px-3 py-1.5">Sleeps {room.sleeps}</span><span className="rounded-full bg-[#f3ead8] px-3 py-1.5">{room.bed}</span></div><ul className="mt-4 space-y-2 text-sm text-[#5d6570]">{room.amenities.slice(0,3).map((a)=><li key={a} className="flex gap-2"><ShieldCheck size={16} className="mt-0.5 text-[#8f6a2f]" />{a}</li>)}</ul><button onClick={() => setActiveRoom(room)} className="mt-5 min-h-[46px] rounded-full bg-[#071521] px-5 font-bold text-white">View Room</button></div></article>)}</div></div></section>

        <section className="px-4 py-20 sm:px-5"><div className="mx-auto max-w-7xl"><SectionIntro eyebrow="Amenities" title="Comfort details that make direct bookings easier." text="A premium hospitality site needs to answer practical questions before the guest asks." /><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{guesthouseConcept.amenities.map((amenity)=>{const Icon=amenityIcons[amenity.icon]||Sparkles;return <div key={amenity.label} className="rounded-3xl border border-white/10 bg-white/[0.055] p-5"><Icon className="text-[#d8b56d]"/><p className="mt-4 font-semibold text-white">{amenity.label}</p></div>})}</div></div></section>

        <section className="bg-[#0b1f2e] px-4 py-20 sm:px-5"><div className="mx-auto max-w-7xl"><SectionIntro eyebrow="Gallery" title="A visual story of slow coastal living." text="Click any image to view the larger lightbox view." /> <div className="columns-1 gap-4 sm:columns-2 lg:columns-3"><p className="sr-only">Gallery images are illustrative.</p>{guesthouseConcept.gallery.map((image, index)=><button key={image.src} onClick={()=>setActiveImage(image)} className="group mb-4 block w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 text-left"><img src={image.src} alt={image.alt} loading="lazy" decoding="async" className={`${index % 3 === 1 ? 'h-80' : 'h-64'} w-full object-cover transition duration-700 group-hover:scale-105`} /><span className="block px-4 py-3 text-xs text-[#bfc9c7]">Illustrative image</span></button>)}</div></div></section>

        <section className="px-4 py-20 sm:px-5"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr]"><div><SectionIntro eyebrow="Location" title="Perfectly placed for Cape Town’s coast." text="Bloubergstrand gives guests iconic Table Mountain views, long beach walks and relaxed restaurants with simple routes into Cape Town." /> <div className="grid gap-3 sm:grid-cols-2">{guesthouseConcept.locationPoints.map(p=><div key={p} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-[#eadfcf]">{p}</div>)}</div></div><div className="rounded-[2rem] border border-[#d8b56d]/25 bg-[radial-gradient(circle_at_30%_20%,rgba(216,181,109,.2),transparent_16rem),linear-gradient(135deg,#123047,#071521)] p-6 shadow-2xl"><div className="grid h-96 place-items-center rounded-[1.5rem] border border-white/10 bg-white/5 text-center"><div><MapPin className="mx-auto mb-4 text-[#d8b56d]" size={44}/><h3 className="text-2xl font-semibold text-white">Bloubergstrand, Cape Town</h3><p className="mt-3 text-[#cbd8d7]">Map-style location panel for quick visitor orientation.</p><a href="https://www.google.com/maps/search/Bloubergstrand+Cape+Town" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#d8b56d] px-5 py-3 font-bold text-[#071521]">Open in Google Maps <ExternalLink size={16}/></a></div></div></div></div></section>

        <section className="bg-[#fbf4e7] px-4 py-20 text-[#071521] sm:px-5"><div className="mx-auto max-w-7xl"><SectionIntro eyebrow="Experience" title="Designed around what guests want to do next." text="Helpful local content increases trust and makes an accommodation website feel complete." dark /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{guesthouseConcept.experiences.map((item)=>{const Icon=experienceIcons[item.icon]||Sun;return <article key={item.title} className="rounded-[2rem] bg-white p-6 shadow-xl shadow-[#071521]/10"><Icon className="text-[#8f6a2f]"/><h3 className="mt-5 text-xl font-semibold">{item.title}</h3><p className="mt-3 leading-7 text-[#5d6570]">{item.text}</p></article>})}</div></div></section>

        <section className="px-4 py-20 sm:px-5"><div className="mx-auto max-w-7xl"><SectionIntro eyebrow="Reviews" title="Trust signals for real booking confidence." text="Realistic review cards show how hospitality websites can build reassurance fast."/><div className="grid gap-5 lg:grid-cols-3">{guesthouseConcept.reviews.map((review)=><article key={review.name} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6"><div className="flex gap-1 text-[#d8b56d]">{Array.from({length:5}).map((_,i)=><Star key={i} size={18} fill="currentColor"/>)}</div><p className="mt-5 leading-8 text-[#eadfcf]">“{review.text}”</p><p className="mt-5 font-semibold text-white">{review.name}</p><p className="text-sm text-[#d8b56d]">{review.type}</p></article>)}</div></div></section>

        <section className="px-4 pb-20 sm:px-5"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2"><AccordionList title="Guesthouse policies" items={guesthouseConcept.policies} open={openPolicy} setOpen={setOpenPolicy}/><AccordionList title="Frequently asked questions" items={guesthouseConcept.faqs} open={openFaq} setOpen={setOpenFaq}/></div></section>

        <section id="guesthouse-enquiry" className="px-4 pb-24 sm:px-5"><div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-[#d8b56d]/30 bg-[linear-gradient(135deg,rgba(216,181,109,.22),rgba(255,255,255,.06)),#071521] p-8 text-center shadow-2xl shadow-black/30 sm:p-12"><p className="text-sm uppercase tracking-[0.25em] text-[#f4dfb1]">Direct booking CTA</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">Ready for a coastal escape?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#eadfcf]">Send an enquiry and we’ll confirm availability, room options and the best direct rate.</p><div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"><button onClick={()=>showConceptInteraction('This is a concept direct-booking enquiry. On a live guesthouse website, this could send stay dates, guest details and questions to the owner.')} className="premium-button rounded-full bg-[#d8b56d] px-8 py-4 font-bold text-[#071521]">Enquire Now</button><button onClick={()=>goToEnquiry('Guesthouse / Airbnb Website — interested in a premium hospitality website like Azure Tide Guesthouse.')} className="rounded-full border border-[#d8b56d]/40 px-8 py-4 font-bold text-[#f4dfb1]">Use this style for my business</button></div><p className="mx-auto mt-6 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-[#cbd8d7]">This concept website shows how a business in this industry could be presented online. Images, prices, services, reviews and business details are illustrative.</p></div></section>
      </main>
      {activeRoom && <RoomModal room={activeRoom} onClose={()=>setActiveRoom(null)} onEnquire={()=>showConceptInteraction('On a live guesthouse website, this could send the selected room and guest details to the owner.')} />}
      {conceptMessage && <ConceptModal message={conceptMessage} onClose={()=>setConceptMessage(null)} />}
      {activeImage && <Lightbox image={activeImage} onClose={()=>setActiveImage(null)} />}
    </div>
  );
}

function SectionIntro({ eyebrow, title, text, dark = false }) {
  return <div className="mb-10 max-w-3xl"><p className={`text-sm uppercase tracking-[0.25em] ${dark ? 'text-[#8f6a2f]' : 'text-[#d8b56d]'}`}>{eyebrow}</p><h2 className={`mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl ${dark ? 'text-[#071521]' : 'text-white'}`}>{title}</h2><p className={`mt-4 text-lg leading-8 ${dark ? 'text-[#5d6570]' : 'text-[#d8d0c0]'}`}>{text}</p></div>;
}
function AccordionList({ title, items, open, setOpen }) {
  return <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 sm:p-6"><h2 className="mb-5 text-2xl font-semibold text-white">{title}</h2>{items.map((item,index)=><div key={item.question} className="border-t border-white/10 py-2"><button onClick={()=>setOpen(open===index ? -1 : index)} className="flex w-full items-center justify-between gap-4 py-4 text-left font-semibold text-[#fff6dd]"><span>{item.question}</span><ChevronDown className={`shrink-0 transition ${open===index ? 'rotate-180' : ''}`} /></button>{open===index && <p className="pb-4 leading-7 text-[#c9d2cf]">{item.answer}</p>}</div>)}</div>;
}
function RoomModal({ room, onClose, onEnquire }) {
  return <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true"><div className="max-h-[92vh] w-full max-w-4xl overflow-auto rounded-[2rem] bg-[#fbf4e7] text-[#071521] shadow-2xl"><div className="relative"><img src={room.image.src} alt={room.image.alt} className="h-80 w-full object-cover"/><button onClick={onClose} className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-[#071521]/80 text-white"><X /></button></div><div className="p-6 sm:p-8"><p className="font-bold text-[#8f6a2f]">From {room.price}</p><h2 className="mt-2 text-3xl font-semibold">{room.name}</h2><p className="mt-4 leading-8 text-[#5d6570]">{room.longDescription}</p><div className="mt-6 grid gap-5 md:grid-cols-2"><div><h3 className="font-semibold">Amenities</h3><ul className="mt-3 space-y-2 text-[#5d6570]">{room.amenities.map(a=><li key={a} className="flex gap-2"><BedDouble size={17} className="mt-1 text-[#8f6a2f]"/>{a}</li>)}</ul></div><div><h3 className="font-semibold">Included</h3><ul className="mt-3 space-y-2 text-[#5d6570]">{room.included.map(a=><li key={a} className="flex gap-2"><ShieldCheck size={17} className="mt-1 text-[#8f6a2f]"/>{a}</li>)}</ul></div></div><button onClick={onEnquire} className="mt-7 rounded-full bg-[#071521] px-6 py-4 font-bold text-white">Enquire About This Room</button></div></div></div>;
}
function ConceptModal({ message, onClose }) {
  return <div className="fixed inset-0 z-50 grid place-items-center bg-black/65 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="guesthouse-concept-title"><div className="w-full max-w-lg rounded-[2rem] border border-[#d8b56d]/35 bg-[#fbf4e7] p-6 text-[#071521] shadow-2xl sm:p-8"><div className="flex items-start justify-between gap-4"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-[#8f6a2f]">Azure Tide demo interaction</p><h2 id="guesthouse-concept-title" className="mt-3 text-3xl font-semibold">Concept feature preview</h2></div><button onClick={onClose} className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#071521] text-white" aria-label="Close concept message"><X /></button></div><p className="mt-5 text-lg leading-8 text-[#5d6570]">{message}</p><button onClick={onClose} className="mt-6 w-full rounded-full bg-[#d8b56d] px-6 py-4 font-bold text-[#071521]">Got it</button></div></div>;
}
function Lightbox({ image, onClose }) {
  return <div className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true"><button onClick={onClose} className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white"><X /></button><figure className="max-w-5xl"><img src={image.src} alt={image.alt} className="max-h-[82vh] rounded-[2rem] object-contain shadow-2xl"/><figcaption className="mt-3 text-center text-sm text-[#d8d0c0]">{image.alt} · Illustrative image</figcaption></figure></div>;
}
