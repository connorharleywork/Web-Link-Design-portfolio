// Edit this file to change the website content.
// Website options, services, packages, portfolio items, FAQs, and contact details live here so the site is beginner-friendly to update.
import { Bot, CalendarCheck, ChartNoAxesCombined, Gauge, Globe2, HeartHandshake, Laptop, LineChart, MailCheck, PanelsTopLeft, Search, ShieldCheck, Smartphone, Sparkles, Wand2, Wrench } from 'lucide-react';

export const brand = {
  name: 'Web Link Designs',
  tagline: 'Premium websites for modern South African businesses',
  primaryCta: 'Start Your Website',
  secondaryCta: 'View Website Options',
};

export const navLinks = [
  ['Home', 'home'], ['Website Options', 'options'], ['Services', 'services'], ['Packages', 'packages'], ['Process', 'process'], ['Portfolio', 'portfolio'], ['Contact', 'contact'],
];

export const websiteOptions = [
  { title: 'Restaurant Website', bestFor: 'Restaurants, cafés, takeaways and fine dining brands.', description: 'A polished digital menu and enquiry experience that turns hungry visitors into bookings.', features: ['Menu showcase','Booking CTA','Gallery','Location map'], pages: ['Home','Menu','About','Gallery','Contact'], addons: ['Online ordering','Reservation integration','Instagram feed'], complexity: 'Medium' },
  { title: 'Guesthouse / Airbnb Website', bestFor: 'Guesthouses, boutique stays, lodges and short-term rentals.', description: 'A calm, premium stay experience with rooms, amenities and booking enquiries.', features: ['Room cards','Amenities','Availability CTA','Reviews'], pages: ['Home','Rooms','Experience','Gallery','Contact'], addons: ['Booking engine','WhatsApp enquiries','Seasonal rates'], complexity: 'Medium' },
  { title: 'Construction Company Website', bestFor: 'Builders, contractors, renovation teams and trade companies.', description: 'Credible project-led website that builds trust before the first quote request.', features: ['Project gallery','Services','Trust badges','Quote form'], pages: ['Home','Services','Projects','About','Contact'], addons: ['Downloadable profile','Careers page','Case studies'], complexity: 'Medium' },
  { title: 'Beauty Salon Website', bestFor: 'Salons, spas, skincare studios and beauty professionals.', description: 'Elegant booking-focused website that presents treatments with premium appeal.', features: ['Treatment menu','Booking CTA','Team section','Testimonials'], pages: ['Home','Treatments','Gallery','Reviews','Contact'], addons: ['Booking calendar','Gift voucher page','Price list PDF'], complexity: 'Simple' },
  { title: 'Fitness Coach Website', bestFor: 'Personal trainers, online coaches and wellness brands.', description: 'High-energy conversion site for programmes, transformations and consultations.', features: ['Programme cards','Transformation area','Lead form','CTA sections'], pages: ['Home','Coaching','Results','About','Contact'], addons: ['Payment links','Member resources','Quiz funnel'], complexity: 'Medium' },
  { title: 'E-commerce Website', bestFor: 'Product brands, boutiques and online stores.', description: 'A premium storefront concept with product discovery and future checkout planning.', features: ['Product grid','Category pages','Cart-ready structure','Policy sections'], pages: ['Home','Shop','Product','About','Contact'], addons: ['Payment gateway','Inventory setup','Email automations'], complexity: 'Advanced' },
  { title: 'Professional Services Website', bestFor: 'Consultants, accountants, legal practices and agencies.', description: 'Trust-first service website that explains value clearly and drives enquiries.', features: ['Service pages','Authority copy','FAQ','Enquiry flow'], pages: ['Home','Services','About','Insights','Contact'], addons: ['Blog','Lead magnet','CRM handoff'], complexity: 'Medium' },
  { title: 'Personal Portfolio Website', bestFor: 'Creatives, freelancers, graduates and specialists.', description: 'A refined personal brand website for work, skills, credibility and contact.', features: ['Work showcase','Bio','Skills','Contact CTA'], pages: ['Home','Work','About','Resume','Contact'], addons: ['CMS-ready structure','Case studies','Download CV'], complexity: 'Simple' },
  { title: 'Real Estate Website', bestFor: 'Agents, property teams and boutique developments.', description: 'Modern property presentation with listings, neighbourhood cues and enquiry flows.', features: ['Listing cards','Property details','Area highlights','Lead form'], pages: ['Home','Listings','Property','About','Contact'], addons: ['Search filters','Virtual tours','CRM integration'], complexity: 'Advanced' },
  { title: 'Event / Expo Website', bestFor: 'Conferences, expos, launches and workshops.', description: 'Event landing experience built for registrations, schedules and sponsor visibility.', features: ['Schedule','Speaker cards','Sponsor area','Registration CTA'], pages: ['Home','Agenda','Speakers','Sponsors','Register'], addons: ['Ticketing link','Countdown','Email capture'], complexity: 'Medium' },
];

export const services = [
  ['Custom Website Design', Wand2, 'Tailored layouts with a premium look built around your business goals.'],
  ['Website Redesign', Sparkles, 'Refresh an outdated website into a polished, credible online presence.'],
  ['Mobile Optimisation', Smartphone, 'Responsive experiences that feel smooth on every screen size.'],
  ['SEO Setup Basics', Search, 'Clean titles, descriptions and structure to help search engines understand your site.'],
  ['Contact Forms & Enquiry Funnels', MailCheck, 'Forms and call-to-action paths designed to generate quality leads.'],
  ['Booking / Appointment Integration', CalendarCheck, 'Connect customers to booking tools or appointment request flows.'],
  ['Website Maintenance', Wrench, 'Ongoing updates, content edits and checks to keep things polished.'],
  ['Hosting & Domain Guidance', Globe2, 'Simple guidance so your domain, hosting and launch feel stress-free.'],
  ['AI Chatbot Add-on', Bot, 'Optional assistant-style chat experiences for common questions and lead capture.'],
  ['Analytics Setup', LineChart, 'Analytics-ready setup so you can understand traffic and enquiries.'],
];

export const packages = [
  { name: 'Starter Website', price: 'From R3,500', audience: 'Best for small businesses starting out', features: ['1–3 pages','Mobile-friendly','Contact form','Basic SEO setup'] },
  { name: 'Business Website', price: 'From R6,500', audience: 'Best for businesses wanting a professional online presence', popular: true, features: ['4–7 pages','Service sections','Gallery/portfolio','Contact/enquiry form','Analytics setup'] },
  { name: 'Premium Website', price: 'From R12,000', audience: 'Best for brands that want a high-end custom website', features: ['8+ pages','Advanced animations','Custom sections','Blog/news-ready structure','Booking or enquiry flow','Premium polish'] },
];

export const processSteps = ['Discovery call','Website plan','Design direction','Build and review','Launch and support'];

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

export const faqs = [
  ['How long does a website take?', 'Most small websites take 1–3 weeks once content is ready. Larger or more advanced websites can take longer.'],
  ['Do I need to have a domain already?', 'No. You can start without one, and I can guide you on buying and connecting the right domain.'],
  ['Can you redesign my current website?', 'Yes. A redesign can keep what works, improve what does not, and make your brand feel more premium.'],
  ['Will the website work on mobile?', 'Yes. Every website is designed mobile-first and tested across common screen sizes.'],
  ['Can you help with hosting?', 'Yes. I can advise on simple hosting options and help you understand what you need before launch.'],
  ['Can I update the website myself?', 'Version 1 can be built so common content is easy to edit. A CMS can also be planned if required.'],
  ['Do you offer monthly maintenance?', 'Yes. Maintenance can include updates, edits, checks and improvements after launch.'],
  ['Can you add booking forms or payment later?', 'Yes. Booking tools, payment links or full commerce features can be added as the website grows.'],
];

export const contact = {
  email: 'hello@weblinkdesigns.co.za',
  whatsapp: '+27 XX XXX XXXX',
  location: 'Cape Town, South Africa',
};
