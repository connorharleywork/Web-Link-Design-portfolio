// Edit this file to change the website content.
// Website options, services, packages, portfolio items, FAQs, process steps, trust badges, and contact details live here so the site is beginner-friendly to update.
import { Bot, CalendarCheck, ChartNoAxesCombined, Gauge, Globe2, HeartHandshake, Laptop, LineChart, MailCheck, PanelsTopLeft, Search, ShieldCheck, Smartphone, Sparkles, Wand2, Wrench } from 'lucide-react';

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
  { name: 'LuxeStay Guesthouse', category: 'Hospitality', description: 'Boutique accommodation concept with room highlights and direct enquiry flow.', features: ['Room showcase','Gallery','Booking CTA'] },
  { name: 'UrbanBite Restaurant', category: 'Restaurant', description: 'Atmospheric restaurant concept with menu storytelling and reservation prompts.', features: ['Menu','Reviews','Map'] },
  { name: 'PrimeBuild Construction', category: 'Construction', description: 'Trust-led construction website concept for projects, services and quote requests.', features: ['Projects','Services','Quote form'] },
  { name: 'GlowHaus Beauty Studio', category: 'Beauty', description: 'Soft luxury beauty studio concept with treatment cards and booking pathways.', features: ['Treatments','Team','Booking'] },
  { name: 'FitForm Coaching', category: 'Fitness', description: 'Personal coaching concept focused on programmes, outcomes and consultation leads.', features: ['Programmes','Results','Lead form'] },
  { name: 'CapeLegal Advisory', category: 'Professional Services', description: 'Refined advisory concept with service clarity, credibility cues and FAQ support.', features: ['Services','Insights','Enquiry'] },
];

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
