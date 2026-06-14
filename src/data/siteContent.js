// Edit this file to change the website content.
// Website options, services, packages, portfolio items, FAQs, process steps, trust badges, and contact details live here so the site is beginner-friendly to update.
import { Bot, CalendarCheck, Gauge, Globe2, HeartHandshake, LineChart, MailCheck, PanelsTopLeft, Search, ShieldCheck, Smartphone, Sparkles, Wand2, Wrench } from 'lucide-react';

export const brand = {
  name: 'Web Link Designs',
  tagline: 'Premium websites that make businesses look trusted and ready to buy from',
  primaryCta: 'Start a Project',
  secondaryCta: 'View Website Options',
};

export const navLinks = [
  ['Home', 'home'], ['Website Options', 'options'], ['Services', 'services'], ['Packages', 'packages'], ['Process', 'process'], ['Portfolio', 'portfolio'], ['Contact', 'contact'],
];

export const websiteOptions = [
  { title: 'Restaurant Website', bestFor: 'Restaurants, cafés, takeaways and fine dining brands.', description: 'A refined menu, atmosphere and booking experience designed to turn hungry visitors into enquiries, calls and reservations.', features: ['Menu showcase','Booking CTA','Gallery','Location map'], pages: ['Home','Menu','About','Gallery','Contact'], addons: ['Online ordering','Reservation integration','Instagram feed'], complexity: 'Medium' },
  { title: 'Guesthouse / Airbnb Website', bestFor: 'Guesthouses, boutique stays, lodges and short-term rentals.', description: 'A calm, premium accommodation website that builds confidence with rooms, amenities, reviews and direct booking prompts.', features: ['Room cards','Amenities','Availability CTA','Reviews'], pages: ['Home','Rooms','Experience','Gallery','Contact'], addons: ['Booking engine','WhatsApp enquiries','Seasonal rates'], complexity: 'Medium' },
  { title: 'Construction Company Website', bestFor: 'Builders, contractors, renovation teams and trade companies.', description: 'A credible project-led website that makes your work look established before a customer asks for a quote.', features: ['Project gallery','Services','Trust badges','Quote form'], pages: ['Home','Services','Projects','About','Contact'], addons: ['Downloadable profile','Careers page','Case studies'], complexity: 'Medium' },
  { title: 'Beauty Salon Website', bestFor: 'Salons, spas, skincare studios and beauty professionals.', description: 'An elegant booking-focused website that presents treatments, results and pricing with a luxury studio feel.', features: ['Treatment menu','Booking CTA','Team section','Testimonials'], pages: ['Home','Treatments','Gallery','Reviews','Contact'], addons: ['Booking calendar','Gift voucher page','Price list PDF'], complexity: 'Simple' },
  { title: 'Fitness Coach Website', bestFor: 'Personal trainers, online coaches and wellness brands.', description: 'A high-energy conversion site for programmes, transformations and consultation enquiries.', features: ['Programme cards','Transformation area','Lead form','CTA sections'], pages: ['Home','Coaching','Results','About','Contact'], addons: ['Payment links','Member resources','Quiz funnel'], complexity: 'Medium' },
  { title: 'E-commerce Website', bestFor: 'Product brands, boutiques and online stores.', description: 'A premium storefront direction with clear product discovery, brand trust and a checkout-ready structure.', features: ['Product grid','Category pages','Cart-ready structure','Policy sections'], pages: ['Home','Shop','Product','About','Contact'], addons: ['Payment gateway','Inventory setup','Email automations'], complexity: 'Advanced' },
  { title: 'Professional Services Website', bestFor: 'Consultants, accountants, legal practices and agencies.', description: 'A trust-first service website that explains your value clearly and moves serious visitors toward an enquiry.', features: ['Service pages','Authority copy','FAQ','Enquiry flow'], pages: ['Home','Services','About','Insights','Contact'], addons: ['Blog','Lead magnet','CRM handoff'], complexity: 'Medium' },
  { title: 'Personal Portfolio Website', bestFor: 'Creatives, freelancers, graduates and specialists.', description: 'A polished personal brand website that presents work, experience and contact details with credibility.', features: ['Work showcase','Bio','Skills','Contact CTA'], pages: ['Home','Work','About','Resume','Contact'], addons: ['CMS-ready structure','Case studies','Download CV'], complexity: 'Simple' },
  { title: 'Real Estate Website', bestFor: 'Agents, property teams and boutique developments.', description: 'Modern property presentation with listings, neighbourhood detail and lead capture for buyers or tenants.', features: ['Listing cards','Property details','Area highlights','Lead form'], pages: ['Home','Listings','Property','About','Contact'], addons: ['Search filters','Virtual tours','CRM integration'], complexity: 'Advanced' },
  { title: 'Event / Expo Website', bestFor: 'Conferences, expos, launches and workshops.', description: 'A focused event experience built to sell the value of attending and guide visitors to register.', features: ['Schedule','Speaker cards','Sponsor area','Registration CTA'], pages: ['Home','Agenda','Speakers','Sponsors','Register'], addons: ['Ticketing link','Countdown','Email capture'], complexity: 'Medium' },
];

export const services = [
  ['Custom Website Design', Wand2, 'Tailored layouts with a premium visual system built around your offer, audience and goals.'],
  ['Website Redesign', Sparkles, 'Turn an outdated site into a polished, credible presence that feels current and trustworthy.'],
  ['Mobile Optimisation', Smartphone, 'Responsive pages, large tap targets and smooth layouts across phone, tablet, laptop and desktop.'],
  ['SEO Setup Basics', Search, 'Clean titles, descriptions, headings and page structure so search engines can understand your site.'],
  ['Contact Forms & Enquiry Funnels', MailCheck, 'Clear calls-to-action, short forms and enquiry paths designed to generate qualified leads.'],
  ['Booking / Appointment Integration', CalendarCheck, 'Connect visitors to booking tools, WhatsApp, calendars or appointment request flows.'],
  ['Website Maintenance', Wrench, 'Ongoing content edits, checks and improvements so your site stays sharp after launch.'],
  ['Hosting & Domain Guidance', Globe2, 'Straightforward guidance so domain, hosting and launch decisions feel simple.'],
  ['AI Chatbot Add-on', Bot, 'Optional assistant-style chat experiences for common questions and lead capture.'],
  ['Analytics Setup', LineChart, 'Analytics-ready setup so you can understand traffic, page behaviour and enquiries.'],
];

export const packages = [
  { name: 'Starter Website', price: 'From R3,500', audience: 'For lean businesses that need a credible online presence quickly.', outcome: 'A polished 1–3 page website with the essentials: clear positioning, mobile design and a simple enquiry flow.', features: ['1–3 conversion-focused pages','Mobile-friendly responsive layout','Contact form and CTA sections','Basic SEO setup','Launch guidance'] },
  { name: 'Business Website', price: 'From R6,500', audience: 'For growing businesses that want stronger trust, clearer services and more enquiries.', outcome: 'A complete company website with service sections, proof points and a stronger route from browsing to enquiry.', popular: true, features: ['4–7 polished pages','Service and industry sections','Gallery or portfolio area','Contact/enquiry form','Analytics-ready setup','Trust and credibility cues'] },
  { name: 'Premium Website', price: 'From R12,000', audience: 'For brands that want a high-end custom website and a more memorable digital experience.', outcome: 'A premium web presence with deeper strategy, richer interactions and a refined structure for future growth.', features: ['8+ custom pages','Advanced premium animations','Custom conversion sections','Blog/news-ready structure','Booking or enquiry flow','Premium polish and review rounds'] },
];

export const processSteps = [
  { title: 'First message', text: 'Send a short enquiry with your business type, goals and what you need the website to achieve.' },
  { title: 'Scope & direction', text: 'We clarify pages, features, content, timeline and the website option that best fits your business.' },
  { title: 'Design concept', text: 'You receive a premium visual direction focused on credibility, clarity and conversion.' },
  { title: 'Build & refine', text: 'The website is built responsively, reviewed together and polished across key screen sizes.' },
  { title: 'Launch & support', text: 'We guide domain/hosting steps, launch cleanly and plan any maintenance or future improvements.' },
];

export const portfolioItems = [
  { name: 'Azure Tide Guesthouse', category: 'Guesthouse / Accommodation Website', description: 'A premium beach-inspired guesthouse website concept designed to showcase rooms, amenities, gallery, location, reviews, and direct booking enquiries.', features: ['Room showcase','Booking enquiry flow','Image gallery','Amenities section','Location and nearby attractions','Reviews and FAQs'], cta: 'View Guesthouse Concept', concept: 'guesthouse' },
  { name: 'LuxeStay Guesthouse', category: 'Hospitality', description: 'Boutique accommodation concept with room highlights and direct enquiry flow.', features: ['Room showcase','Gallery','Booking CTA'] },
  { name: 'UrbanBite Restaurant', category: 'Restaurant', description: 'Atmospheric restaurant concept with menu storytelling and reservation prompts.', features: ['Menu','Reviews','Map'] },
  { name: 'PrimeBuild Construction', category: 'Construction', description: 'Trust-led construction website concept for projects, services and quote requests.', features: ['Projects','Services','Quote form'] },
  { name: 'GlowHaus Beauty Studio', category: 'Beauty', description: 'Soft luxury beauty studio concept with treatment cards and booking pathways.', features: ['Treatments','Team','Booking'] },
  { name: 'FitForm Coaching', category: 'Fitness', description: 'Personal coaching concept focused on programmes, outcomes and consultation leads.', features: ['Programmes','Results','Lead form'] },
  { name: 'CapeLegal Advisory', category: 'Professional Services', description: 'Refined advisory concept with service clarity, credibility cues and FAQ support.', features: ['Services','Insights','Enquiry'] },
];


export const guesthouseConcept = {
  brandName: 'Azure Tide Guesthouse',
  location: 'Bloubergstrand, Cape Town',
  trustDetails: ['Ocean views', 'Free Wi-Fi', 'Breakfast included', '5 minutes from the beach'],
  highlights: ['8 boutique rooms', 'Beach nearby', 'Breakfast deck', 'Secure parking', 'Airport transfers available'],
  images: {
    hero: { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=82', alt: 'Rolling Atlantic waves at a sandy beach during golden light' },
    about: { src: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1400&q=82', alt: 'Elegant coastal guesthouse patio with ocean-facing seating' },
  },
  rooms: [
    { name: 'Ocean View Suite', sleeps: '2', bed: 'King bed', price: 'R1,850 per night', description: 'A spacious ocean-facing suite with a private balcony, soft linen and a relaxed coastal palette.', longDescription: 'The Ocean View Suite is designed as the signature room for guests who want morning coffee, sea air and a calm private balcony. The layout balances premium comfort with practical details for a short Cape Town escape.', image: { src: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=82', alt: 'Luxury bedroom with warm neutral linen and coastal styling' }, amenities: ['Ocean-facing balcony', 'En-suite bathroom', 'Mini fridge', 'Coffee station', 'Soft premium linen'], included: ['Breakfast included', 'High-speed Wi-Fi', 'Daily housekeeping', 'Secure parking'] },
    { name: 'Garden Courtyard Room', sleeps: '2', bed: 'Queen bed', price: 'R1,350 per night', description: 'A peaceful queen room opening onto a private courtyard with greenery and morning light.', longDescription: 'The Garden Courtyard Room is suited to relaxed couples, remote workers and guests who prefer a quieter tucked-away stay with private outdoor space after a day along the coast.', image: { src: 'https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&w=1200&q=82', alt: 'Boutique queen bedroom with natural textures and warm interior lighting' }, amenities: ['Private courtyard', 'En-suite shower', 'Work desk', 'Tea and coffee station', 'Wardrobe storage'], included: ['Breakfast included', 'High-speed Wi-Fi', 'Daily housekeeping', 'Secure parking'] },
    { name: 'Deluxe Queen Room', sleeps: '2', bed: 'Queen bed', price: 'R1,150 per night', description: 'A refined queen room with calm coastal interiors, smart TV and a restful en-suite bathroom.', longDescription: 'The Deluxe Queen Room gives guests a polished, comfortable base for beach days, business trips or quick Cape Town stopovers, with all essentials presented in a premium guesthouse style.', image: { src: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=82', alt: 'Modern deluxe guest room with queen bed and elegant neutral decor' }, amenities: ['Calm coastal interiors', 'En-suite bathroom', 'Smart TV', 'Coffee station', 'Workspace nook'], included: ['Breakfast included', 'High-speed Wi-Fi', 'Daily housekeeping', 'Secure parking'] },
  ],
  amenities: [
    { label: 'Free high-speed Wi-Fi', icon: 'Wifi' }, { label: 'Breakfast included', icon: 'Coffee' }, { label: 'Secure parking', icon: 'Car' }, { label: 'Ocean-view lounge', icon: 'Waves' },
    { label: 'Walking distance to beach', icon: 'MapPin' }, { label: 'Airport transfer on request', icon: 'Plane' }, { label: 'Daily housekeeping', icon: 'Sparkles' }, { label: 'Coffee and tea station', icon: 'Coffee' },
    { label: 'Smart TV', icon: 'Tv' }, { label: 'En-suite bathrooms', icon: 'Bath' }, { label: 'Workspace-friendly rooms', icon: 'BriefcaseBusiness' }, { label: 'Nearby restaurants', icon: 'Utensils' },
  ],
  gallery: [
    { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', alt: 'Wide sandy beach with blue ocean waves' },
    { src: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80', alt: 'Coastal accommodation terrace with comfortable outdoor seating' },
    { src: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80', alt: 'Luxury bedroom with soft linen and warm neutral tones' },
    { src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80', alt: 'Modern bathroom with stone finishes and natural light' },
    { src: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=80', alt: 'Fresh breakfast setting with coffee and pastries' },
    { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80', alt: 'Elegant lounge interior with coastal neutral furniture' },
    { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', alt: 'Premium patio deck with modern coastal home styling' },
    { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80', alt: 'Golden sunset over water near the coastline' },
    { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', alt: 'Scenic coastal landscape with mountains and water' },
  ],
  locationPoints: ['Blouberg beachfront', 'Table Mountain views', 'Restaurants and cafés nearby', 'Kite surfing and beach walks', 'V&A Waterfront drive placeholder', 'Cape Town CBD drive placeholder', 'Cape Town International Airport drive placeholder'],
  experiences: [
    { title: 'Beach walks', icon: 'Waves', text: 'Start the day with Atlantic air, open sand and a slow walk along the Blouberg beachfront.' },
    { title: 'Kitesurfing', icon: 'Wind', text: 'Watch colourful kites from the shore or book a beginner-friendly coastal session nearby.' },
    { title: 'Sunset views', icon: 'Sun', text: 'Golden-hour views across Table Bay make every evening feel like a postcard.' },
    { title: 'Local restaurants', icon: 'Utensils', text: 'Casual cafés, seafood dinners and relaxed wine bars are only a short ride away.' },
    { title: 'Wine farms day trip', icon: 'Mountain', text: 'Plan a scenic day out to Durbanville or Stellenbosch wine routes.' },
    { title: 'Cape Town city exploring', icon: 'MapPin', text: 'Use the guesthouse as a quiet coastal base for city, harbour and mountain experiences.' },
  ],
  reviews: [
    { name: 'Mia & Daniel', type: 'Couple getaway', text: 'Beautifully styled, peaceful, and close enough to the beach that we could hear the ocean in the mornings.' },
    { name: 'Thabo M.', type: 'Business traveller', text: 'Fast Wi-Fi, secure parking and a calm room made this feel much more personal than a standard hotel stay.' },
    { name: 'Elena R.', type: 'International tourist', text: 'The location was perfect for Table Mountain views, beach walks and easy Cape Town exploring.' },
  ],
  policies: [
    { question: 'Check-in', answer: 'Check-in is from 14:00. Earlier arrivals can be requested and are subject to room readiness.' },
    { question: 'Check-out', answer: 'Check-out is by 10:00 so the rooms can be prepared for the next guests.' },
    { question: 'House rules', answer: 'No smoking indoors, quiet hours after 22:00, and ID is required at check-in.' },
    { question: 'Children and pets', answer: 'Children are welcome by arrangement. Pets may be accepted by prior approval only.' },
    { question: 'Cancellation policy', answer: 'Cancellation terms are a placeholder for this concept and would be replaced with the guesthouse’s real policy.' },
  ],
  faqs: [
    { question: 'Is breakfast included?', answer: 'Yes, a fresh breakfast is included in this concept package.' },
    { question: 'Is there secure parking?', answer: 'Yes, secure on-site parking is listed as part of the guesthouse amenities.' },
    { question: 'How close is the beach?', answer: 'The concept positions the guesthouse approximately five minutes from the beach.' },
    { question: 'Do you offer airport transfers?', answer: 'Airport transfers are available on request as a placeholder service.' },
    { question: 'Is there Wi-Fi?', answer: 'Yes, all rooms include free high-speed Wi-Fi.' },
    { question: 'Can I check in late?', answer: 'Late check-in can be arranged by contacting the guesthouse in advance.' },
    { question: 'Are children allowed?', answer: 'Children are welcome by arrangement, depending on room setup and availability.' },
    { question: 'Do rooms have private bathrooms?', answer: 'Yes, each room includes an en-suite bathroom or shower.' },
    { question: 'Can I book directly?', answer: 'Yes, the demo enquiry CTA is designed to support direct booking enquiries.' },
    { question: 'What is the cancellation policy?', answer: 'The cancellation policy is placeholder content and should be replaced with the real business terms.' },
  ],
};

export const benefits = [
  ['Designed to make your business look credible', ShieldCheck], ['Built for enquiries, not just decoration', HeartHandshake], ['Mobile-first experience', Smartphone], ['Clean structure and fast performance', Gauge], ['Easy to update later', PanelsTopLeft], ['Guidance with domain and hosting', Globe2],
];

export const trustBadges = ['Mobile-first build', 'Netlify Forms ready', 'Basic SEO setup', 'Launch guidance included'];

export const faqs = [
  ['How long does a website take?', 'Most small websites take 1–3 weeks once content is ready. Larger builds, e-commerce features or custom integrations may need a longer timeline.'],
  ['Do I need to know exactly what I want?', 'No. Send what you know, even if it is rough. We can guide the structure, pages and best website option from there.'],
  ['Will the website help generate enquiries?', 'Yes. The layout, copy sections and calls-to-action are planned to make your business look credible and guide visitors toward contacting you.'],
  ['Do I need to have a domain already?', 'No. You can start without one, and we can guide you on buying and connecting the right domain.'],
  ['Can you redesign my current website?', 'Yes. A redesign can keep what works, improve what does not, and make your brand feel more premium and current.'],
  ['Will the website work on mobile?', 'Yes. Every website is designed mobile-first and tested across common screen sizes.'],
  ['Can you help with hosting?', 'Yes. We can advise on simple hosting options and help you understand what you need before launch.'],
  ['Can I update the website myself?', 'Version 1 can be built so common content is easy to edit. A CMS can also be planned if you need frequent updates.'],
  ['Do you offer monthly maintenance?', 'Yes. Maintenance can include updates, edits, checks, small improvements and ongoing polish after launch.'],
  ['Can you add booking forms or payment later?', 'Yes. Booking tools, payment links or full commerce features can be added as your website grows.'],
];

export const contact = {
  email: 'hello@weblinkdesigns.co.za',
  whatsapp: '+27 XX XXX XXXX',
  location: 'Cape Town, South Africa',
};
