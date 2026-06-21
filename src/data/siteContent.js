// Edit this file to change the website content.
// Website options, services, packages, portfolio items, FAQs, process steps, trust badges, and contact details live here so the site is beginner-friendly to update.
import { Bot, CalendarCheck, Gauge, Globe2, HeartHandshake, LineChart, MailCheck, PanelsTopLeft, Search, ShieldCheck, Smartphone, Sparkles, Wand2, Wrench } from 'lucide-react';

export const brand = {
  name: 'Web Link Designs',
  tagline: 'Premium web design studio',
  primaryCta: 'Start a Project',
  secondaryCta: 'Explore Website Concepts',
};

export const navLinks = [
  ['Home', 'home'], ['Concepts', 'portfolio'], ['Services', 'services'], ['About', 'about'], ['Packages', 'packages'], ['Process', 'process'], ['Contact', 'contact'],
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
  ['Custom Website Design', Wand2, 'A website designed around your business, services and ideal customers — not a generic template.'],
  ['Website Redesign', Sparkles, 'Refresh an outdated website so it feels current, credible and easier for customers to understand.'],
  ['Mobile Optimisation', Smartphone, 'Layouts, spacing and tap targets planned first for phones, then refined for larger screens.'],
  ['SEO Setup Basics', Search, 'Page titles, descriptions, headings and clean structure to help search engines read your site.'],
  ['Contact Forms and Enquiry Flows', MailCheck, 'Simple forms, WhatsApp links and clear calls-to-action that make it easy to get in touch.'],
  ['Hosting and Domain Guidance', Globe2, 'Practical help choosing, connecting and understanding your domain and hosting options.'],
  ['Website Maintenance', Wrench, 'Ongoing content edits, checks and small improvements after launch when you need them.'],
  ['Analytics Setup', LineChart, 'Basic tracking setup so you can see visits, popular pages and how people enquire.'],
];

export const packages = [
  { name: 'Starter Website', price: 'From R3,500', audience: 'Best for small businesses starting out.', features: ['1–3 pages','Mobile-friendly layout','Contact form','Basic SEO setup','Launch guidance'] },
  { name: 'Business Website', price: 'From R6,500', audience: 'Best for businesses that need a stronger online presence.', popular: true, features: ['4–7 pages','Services section','Gallery or portfolio','Enquiry form','Analytics setup','Mobile-first design'] },
  { name: 'Premium Website', price: 'From R12,000', audience: 'Best for brands that want a more custom, high-end website.', features: ['8+ pages','Advanced sections','Premium animations','Blog/news-ready structure','Booking or enquiry flow','Extra polish and launch support'] },
];

export const processSteps = [
  { title: 'Tell us what you need', text: 'Share your business, goals, rough budget and any website examples you like.' },
  { title: 'Plan the website structure', text: 'We map the pages, sections and enquiry path so the website has a clear job.' },
  { title: 'Design the look and feel', text: 'You get a visual direction that suits your brand and feels right for your customers.' },
  { title: 'Build and review', text: 'The website is built, checked on mobile and refined with your feedback.' },
  { title: 'Launch and support', text: 'We guide the launch steps and discuss updates or maintenance if you need them.' },
];

export const portfolioItems = [
  { name: 'Azure Tide Guesthouse', filter: 'Hospitality', websiteType: 'Guesthouse / Airbnb Website', category: 'Guesthouse / Accommodation Website', description: 'A premium beach-inspired guesthouse concept for rooms, amenities, galleries, location trust, reviews and direct booking enquiries.', features: ['Room showcase','Booking enquiry','Gallery','Amenities','Location','Reviews'], cta: 'View Concept', concept: 'guesthouse', details: { bestFor: ['Guesthouses, boutique stays, lodges, Airbnb hosts, short-term rentals'], includes: ['Room showcase','Availability enquiry','Amenities','Gallery','Location','Reviews','FAQs'], pages: ['Home','Rooms','Gallery','Location','About','Contact/Booking'], addons: ['Booking engine integration','WhatsApp enquiry','Google Maps','Reviews','Seasonal specials'], complexity: 'Medium', startingPrice: 'From R6,500' } },
  { name: 'UrbanBite Restaurant', filter: 'Food', websiteType: 'Restaurant Website', category: 'Restaurant / Food Website', description: 'A premium restaurant concept for the dining experience, interactive menu, reservations, food gallery, specials and reviews.', features: ['Interactive menu','Reservations','Food gallery','Specials','Hours','Reviews'], cta: 'View Concept', concept: 'urbanbite', details: { bestFor: ['Restaurants, cafés, takeaways, bistros, food brands'], includes: ['Interactive menu','Reservations','Food gallery','Specials','Opening hours','Reviews'], pages: ['Home','Menu','Reservations','Gallery','About','Contact'], addons: ['Online ordering','Booking system','WhatsApp orders','Google Maps','Specials manager'], complexity: 'Medium', startingPrice: 'From R6,500' } },
  { name: 'PrimeBuild Construction', filter: 'Construction', websiteType: 'Construction Company Website', category: 'Construction / Contractor Website', description: 'A professional contractor concept for services, completed projects, compliance signals, testimonials and quote requests.', features: ['Services','Projects','Quote request','Compliance','Testimonials','Areas'], cta: 'View Concept', concept: 'primebuild', details: { bestFor: ['Builders, contractors, renovation teams, civil contractors, trade companies'], includes: ['Service breakdown','Project gallery','Quote request','Safety/compliance','Testimonials'], pages: ['Home','Services','Projects','About','Quote Request','Contact'], addons: ['Before/after project gallery','Project case studies','Downloadable company profile','Quote form'], complexity: 'Medium to Advanced', startingPrice: 'From R7,500' } },
  { name: 'GlowHaus Beauty Studio', filter: 'Beauty', websiteType: 'Beauty Salon Website', category: 'Beauty / Salon Website', description: 'A luxury beauty studio concept for treatments, pricing, transformations, specialist profiles, reviews and appointment enquiries.', features: ['Treatments','Pricing','Gallery','Appointments','Profiles','Reviews'], cta: 'View Concept', concept: 'glowhaus', details: { bestFor: ['Beauty salons, lash artists, brow studios, nail technicians, skincare clinics, makeup artists'], includes: ['Treatment menu','Pricing','Gallery','Appointment enquiry','Reviews','Specialist profiles'], pages: ['Home','Treatments','Pricing','Gallery','About','Book/Contact'], addons: ['Online booking','Instagram feed','Gift vouchers','Treatment packages','WhatsApp booking'], complexity: 'Medium', startingPrice: 'From R5,500' } },
  { name: 'FitForm Coaching', filter: 'Fitness', websiteType: 'Fitness Coach Website', category: 'Fitness / Coaching Website', description: 'A high-energy coaching concept for programmes, transformations, coach credibility, pricing and qualified lead enquiries.', features: ['Programme selector','Packages','Transformations','Coach profile','Enquiry','Reviews'], cta: 'View Concept', concept: 'fitform', details: { bestFor: ['Personal trainers, online coaches, gyms, wellness coaches, sports performance coaches'], includes: ['Programme selector','Coaching packages','Transformations','Trainer profile','Enquiry form'], pages: ['Home','Programmes','Results','About Coach','Pricing','Contact'], addons: ['Client dashboard','Payment integration','Habit tracker','Lead magnet','Booking calendar'], complexity: 'Medium to Advanced', startingPrice: 'From R6,500' } },
  { name: 'CapeLegal Advisory', filter: 'Professional', websiteType: 'Professional Services Website', category: 'Professional Services / Legal Advisory Website', description: 'A premium advisory concept for practice areas, advisor expertise, consultation flow, resources, trust and confidential enquiries.', features: ['Practice areas','Consultations','Advisor profiles','Trust','Resources','FAQs'], cta: 'View Concept', concept: 'capelegal', details: { bestFor: ['Law firms, consultants, accountants, financial advisors, compliance firms, HR consultants'], includes: ['Practice areas','Advisor profiles','Consultation flow','Trust section','Resources','FAQs'], pages: ['Home','Services','Team','Resources','Consultation','Contact'], addons: ['Document upload','Appointment booking','Resources/blog','Secure enquiry flow','Newsletter'], complexity: 'Medium to Advanced', startingPrice: 'From R7,500' } },
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
  locationPoints: ['Blouberg beachfront', 'Table Mountain views', 'Restaurants and cafés nearby', 'Kite surfing and beach walks', 'V&A Waterfront drive', 'Cape Town CBD drive', 'Cape Town International Airport drive'],
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
    { question: 'Cancellation policy', answer: 'Example cancellation terms are shown for example layout and can be customised for the real guesthouse.' },
  ],
  faqs: [
    { question: 'Is breakfast included?', answer: 'Yes, a fresh breakfast is included in this concept package.' },
    { question: 'Is there secure parking?', answer: 'Yes, secure on-site parking is listed as part of the guesthouse amenities.' },
    { question: 'How close is the beach?', answer: 'The concept positions the guesthouse approximately five minutes from the beach.' },
    { question: 'Do you offer airport transfers?', answer: 'Airport transfers are shown as an example service and can be customised for the real guesthouse.' },
    { question: 'Is there Wi-Fi?', answer: 'Yes, all rooms include free high-speed Wi-Fi.' },
    { question: 'Can I check in late?', answer: 'Late check-in can be arranged by contacting the guesthouse in advance.' },
    { question: 'Are children allowed?', answer: 'Children are welcome by arrangement, depending on room setup and availability.' },
    { question: 'Do rooms have private bathrooms?', answer: 'Yes, each room includes an en-suite bathroom or shower.' },
    { question: 'Can I book directly?', answer: 'Yes, the enquiry CTA is designed to support direct booking enquiries.' },
    { question: 'What is the cancellation policy?', answer: 'Example cancellation wording is shown for example layout and can be customised for the real business.' },
  ],
};


export const urbanBiteConcept = {
  brandName: 'UrbanBite Restaurant',
  location: '24 Bree Street, Cape Town, South Africa',
  phone: 'Illustrative contact area shown for concept layout only.',
  email: 'Illustrative email area shown for concept layout only.',
  quickInfo: ['Open Tue–Sun', 'Dinner & drinks', 'Cape Town', 'Reservations welcome'],
  images: {
    hero: { src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=2200&q=82', alt: 'Warm modern restaurant interior with tables and pendant lighting' },
    about: { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1400&q=82', alt: 'Chef plating a premium restaurant dish in a professional kitchen' },
  },
  highlights: ['Seasonal menu', 'Craft cocktails', 'Private dining available', 'Vegetarian options', 'Locally inspired dishes', 'Walk-ins welcome'],
  featuredDishes: [
    { name: 'Charred Sirloin Steak', description: 'Flame-grilled sirloin with café de Paris butter, crispy potatoes, and seasonal greens.', price: 'R245', tag: 'Chef’s Pick', image: { src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=82', alt: 'Charred steak with garnish on a dark restaurant plate' } },
    { name: 'UrbanBite Signature Burger', description: 'Smashed beef patty, aged cheddar, caramelised onion, house pickles, and truffle fries.', price: 'R165', tag: 'Popular', image: { src: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=82', alt: 'Gourmet cheeseburger with fries on a restaurant table' } },
    { name: 'Wild Mushroom Linguine', description: 'Fresh linguine, wild mushrooms, parmesan, cream, black pepper, and herb oil.', price: 'R155', tag: 'Vegetarian', image: { src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=82', alt: 'Creamy mushroom pasta topped with herbs and parmesan' } },
    { name: 'Crispy Calamari Small Plate', description: 'Lightly fried calamari with lemon aioli, chilli salt, and fresh herbs.', price: 'R125', tag: 'Small Plate', image: { src: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1000&q=82', alt: 'Crispy fried seafood small plate with lemon and sauce' } },
    { name: 'Citrus Cheesecake', description: 'Baked cheesecake with citrus curd, toasted crumb, and vanilla cream.', price: 'R95', tag: 'Dessert', image: { src: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1000&q=82', alt: 'Elegant cheesecake dessert with citrus garnish' } },
    { name: 'Smoked Espresso Martini', description: 'Vodka, espresso, coffee liqueur, and smoked orange.', price: 'R110', tag: 'Cocktail', image: { src: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1000&q=82', alt: 'Dark espresso martini cocktail in a coupe glass' } },
  ],
  menu: {
    Starters: [['Whipped Feta & Flatbread','Olive oil, dukkah, herbs and warm flatbread.','R85','Vegetarian'],['Crispy Calamari','Lemon aioli, chilli salt and fresh herbs.','R125','Popular'],['Charred Broccolini','Tahini yoghurt, toasted seeds and lemon.','R95','Vegetarian'],['Beef Carpaccio','Rocket, parmesan, capers and truffle dressing.','R135','']],
    Mains: [['Charred Sirloin Steak','Café de Paris butter, crispy potatoes and seasonal greens.','R245','Chef’s Pick'],['UrbanBite Signature Burger','Aged cheddar, caramelised onion, pickles and truffle fries.','R165','Popular'],['Wild Mushroom Linguine','Parmesan cream, black pepper and herb oil.','R155','Vegetarian'],['Harissa Roast Chicken','Smoky yoghurt, charred lemon and green salad.','R185','Spicy']],
    Desserts: [['Citrus Cheesecake','Citrus curd, toasted crumb and vanilla cream.','R95','Popular'],['Dark Chocolate Fondant','Berry compote and espresso ice cream.','R110',''],['Olive Oil Panna Cotta','Honey, pistachio and orange zest.','R90',''],['Affogato','Vanilla gelato with a hot espresso pour.','R75','Vegetarian']],
    Drinks: [['Smoked Espresso Martini','Vodka, espresso, coffee liqueur and smoked orange.','R110','Popular'],['Cape Spritz','Bitter orange, bubbles and rosemary.','R95',''],['House Lemonade','Lemon, mint, soda and burnt sugar syrup.','R55','Non-alcoholic'],['Single Origin Coffee','Espresso, flat white, cappuccino or iced coffee.','R38','']],
    Wine: [['Chenin Blanc','Crisp local white wine by the glass.','R78',''],['Pinotage','Cape red with berry and spice notes.','R88',''],['MCC Brut','South African sparkling wine.','R95','Popular'],['Rosé','Dry coastal-style rosé served chilled.','R72','']],
    Kids: [['Mini Burger & Fries','Small beef burger with house fries.','R75',''],['Tomato Pasta','Simple linguine with tomato sauce and parmesan.','R65','Vegetarian'],['Chicken Strips','Crispy chicken with chips and dip.','R70',''],['Ice Cream Cup','Vanilla ice cream with chocolate sauce.','R45','']]
  },
  hours: [['Monday','Closed'],['Tuesday','16:00–22:00'],['Wednesday','16:00–22:00'],['Thursday','16:00–22:00'],['Friday','12:00–23:00'],['Saturday','12:00–23:00'],['Sunday','12:00–20:00']],
  gallery: [
    ['https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1100&q=80','Close-up of a colourful plated restaurant dish'],['https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1100&q=80','Premium grilled main dish served with sides'],['https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1100&q=80','Craft cocktail on a bar counter'],['https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1100&q=80','Elegant dessert with cream and berries'],['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=80','Modern restaurant interior with warm lighting'],['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1100&q=80','Restaurant table setting ready for dinner'],['https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1100&q=80','Friends dining together at a restaurant table'],['https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1100&q=80','Chef preparing food in a warm kitchen'],['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1100&q=80','Coffee being poured in a café setting'],['https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1100&q=80','Evening restaurant atmosphere with moody lighting']
  ].map(([src, alt]) => ({ src, alt })),
  specials: [
    { title: 'Tuesday Tasting Menu', text: 'A rotating chef’s selection of seasonal plates, perfect for discovering new favourites.', time: 'Available Tuesdays from 18:00' },
    { title: 'Friday After-Work Drinks', text: 'Craft cocktails, small plates and city energy for teams, friends and date nights.', time: 'Fridays 16:00–19:00' },
    { title: 'Sunday Long Lunch', text: 'Slow-roasted comfort dishes, relaxed service and an easy end to the week.', time: 'Sundays 12:00–16:00' },
  ],
  reviews: [
    { name: 'Guest A.', type: 'Date night', text: 'Beautiful food, warm service, and the kind of atmosphere that makes you want to stay for one more drink.' },
    { name: 'Guest B.', type: 'Family lunch', text: 'The menu had something for everyone, the space felt stylish but relaxed, and the desserts were a highlight.' },
    { name: 'Guest C.', type: 'Business dinner', text: 'Polished, professional and easy to book. It felt premium without being stiff or uncomfortable.' },
  ],
  faqs: [
    ['Do I need to book?','Reservations are recommended for dinner and weekends, but this concept also welcomes booking enquiries.'],['Do you accept walk-ins?','Yes, walk-ins are welcome when tables are available.'],['Do you offer vegetarian options?','Yes, vegetarian dishes are clearly marked throughout the menu.'],['Do you have vegan options?','Vegan-friendly dishes can be requested and would be confirmed by the kitchen.'],['Is there secure parking nearby?','The concept assumes nearby secure parking in the Bree Street area.'],['Can I book for a private event?','Yes, private dining, birthdays and small corporate dinners can be requested.'],['Do you offer takeaway?','Selected dishes may be available for takeaway in this concept.'],['Are children welcome?','Yes, children are welcome and a small kids menu is included.'],['Do you cater for allergies?','Guests should mention allergies when booking so the kitchen can advise.'],['Where are you located?','UrbanBite is presented at 24 Bree Street, Cape Town, South Africa.']
  ].map(([question, answer]) => ({ question, answer })),
};

export const benefits = [
  ['Designed to make your business look credible', ShieldCheck], ['Built for enquiries, not just decoration', HeartHandshake], ['Mobile-first experience', Smartphone], ['Clean structure and fast performance', Gauge], ['Easy to update later', PanelsTopLeft], ['Guidance with domain and hosting', Globe2],
];

export const trustBadges = ['Mobile-first build', 'Enquiry form ready', 'Basic SEO setup', 'Launch guidance included'];

export const faqs = [
  ['How long does a website take?', 'Most small business websites take 1–3 weeks once content is ready. Larger websites can take longer.'],
  ['What do I need to provide?', 'A short business overview, services, contact details, logo if you have one, images if available, and any examples you like.'],
  ['Do I need a domain already?', 'No. You can enquire first, and we can guide you on choosing and connecting a domain.'],
  ['Can you help with hosting?', 'Yes. We can explain simple hosting options and help you understand what is needed before launch.'],
  ['Will the website work on mobile?', 'Yes. Mobile optimisation is planned from the start so the site is easy to use on phones.'],
  ['Can you redesign my current website?', 'Yes. We can keep what works, improve the structure and give the website a cleaner, more professional feel.'],
  ['Can you add WhatsApp or booking buttons?', 'Yes. WhatsApp, booking links and enquiry buttons can be added where they make sense.'],
  ['Do you offer monthly maintenance?', 'Yes. Maintenance can cover content updates, small improvements, checks and ongoing customisation.'],
  ['How do I start?', 'Send an enquiry with your business type and what you need. We will respond with the best next step.'],
  ['What happens after I enquire?', 'We review your message, clarify the scope, and suggest a suitable direction, package and timeline.'],
];

export const contact = {
  email: 'weblinkdesign3r@gmail.com',
  emailLink: 'mailto:weblinkdesign3r@gmail.com',
  whatsapp: '+27 81 828 6752',
  phoneLink: 'tel:+27818286752',
  whatsappLink: 'https://wa.me/27818286752?text=Hi%20Web%20Link%20Designs%2C%20I%27d%20like%20to%20enquire%20about%20a%20website.',
  location: 'Cape Town, South Africa',
};

export const primeBuildConcept = {
  images: {
    hero: { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=82', alt: 'Large construction site with cranes and concrete structure during golden hour' },
    about: { src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=82', alt: 'Construction professionals reviewing plans together on a building site' },
  },
  trustBadges: ['Residential & commercial', 'Project management', 'Quality workmanship', 'Cape Town based'],
  about: 'PrimeBuild Construction brings together skilled trades, clear project management, and a commitment to quality workmanship. From home renovations to commercial fit-outs and new builds, every project is planned carefully, communicated clearly, and delivered with pride.',
  stats: ['12+ years experience', '180+ projects completed', 'Residential & commercial work', 'Safety-first approach', 'Transparent project updates'],
  services: [
    { icon: 'Home', title: 'New Home Builds', description: 'End-to-end construction for new residential properties, from site preparation to final finishes.', bestFor: 'Homeowners and developers' },
    { icon: 'Hammer', title: 'Residential Renovations', description: 'Carefully managed upgrades that improve function, value, finishes, and everyday living.', bestFor: 'Homeowners and landlords' },
    { icon: 'Building2', title: 'Commercial Fit-Outs', description: 'Practical, professional construction and interior fit-out solutions for offices, shops, and business spaces.', bestFor: 'Business owners and landlords' },
    { icon: 'Layers3', title: 'Extensions & Additions', description: 'Extra rooms, larger living areas, second-storey additions, and structural improvements planned around the existing property.', bestFor: 'Growing households' },
    { icon: 'ClipboardCheck', title: 'Project Management', description: 'Planning, supplier coordination, milestone tracking, site updates, and handover control for smoother delivery.', bestFor: 'Busy owners and developers' },
    { icon: 'HardHat', title: 'Roofing & Structural Work', description: 'Roof repairs, structural upgrades, waterproofing coordination, and trade-managed building improvements.', bestFor: 'Property owners' },
    { icon: 'Wrench', title: 'Bathroom & Kitchen Renovations', description: 'High-use room upgrades with tiling, plumbing coordination, cabinetry, finishes, and clean site management.', bestFor: 'Home renovations' },
    { icon: 'ShieldCheck', title: 'Maintenance & Repairs', description: 'Reliable repair, maintenance, waterproofing, and improvement work for homes and commercial properties.', bestFor: 'Body corporates and owners' },
    { icon: 'Shovel', title: 'Boundary Walls & Paving', description: 'External upgrades including boundary walls, driveways, paving, drainage planning, and outdoor improvements.', bestFor: 'Security and curb appeal' },
    { icon: 'Ruler', title: 'Site Preparation', description: 'Early-stage site clearing, preparation, coordination, access planning, and groundwork support.', bestFor: 'New projects' },
  ],
  projects: [
    { name: 'Modern Family Home Build', category: 'Residential Construction', location: 'Durbanville, Cape Town', timeline: '7 months', image: { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=82', alt: 'Finished modern family home exterior with clean architectural lines' }, description: 'A clean family home build coordinated from foundations through interior finishing.', overview: 'A ground-up residential build for a family needing a modern layout, strong project coordination, and a premium finish.', goal: 'Create a practical modern home with bright living spaces and dependable delivery milestones.', challenges: 'Coordinating multiple trades while keeping the client informed through each structural and finishing stage.', scope: ['Foundations and structure', 'Brickwork and plastering', 'Roofing', 'Electrical and plumbing coordination', 'Interior finishing'], result: 'A clean, modern family home completed with strong project coordination and high-quality finishing.' },
    { name: 'Coastal Apartment Renovation', category: 'Residential Renovation', location: 'Bloubergstrand, Cape Town', timeline: '10 weeks', image: { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=82', alt: 'Modern renovated apartment living room with warm neutral finishes' }, description: 'A dated coastal apartment refreshed with new finishes, improved flow, and durable materials.', overview: 'A full apartment refresh focused on better light, cleaner finishes, and practical coastal living.', goal: 'Upgrade a tired apartment into a refined lock-up-and-go property.', challenges: 'Working within body corporate rules, access limitations, and a tight renovation programme.', scope: ['Demolition and preparation', 'Flooring and painting', 'Bathroom upgrade', 'Kitchen coordination', 'Final snag list'], result: 'A brighter coastal apartment that feels modern, durable, and ready for rental or owner occupation.' },
    { name: 'Retail Store Fit-Out', category: 'Commercial Fit-Out', location: 'Cape Town CBD', timeline: '8 weeks', image: { src: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=82', alt: 'Contemporary retail storefront interior with polished commercial finishes' }, description: 'A polished retail fit-out designed for customer flow, storage, lighting, and brand presence.', overview: 'A commercial interior build to help a retail brand open with a professional customer experience.', goal: 'Deliver a store interior that looks premium while supporting daily retail operations.', challenges: 'Managing programme pressure before opening while coordinating trades after hours.', scope: ['Partitioning and ceilings', 'Display wall preparation', 'Lighting coordination', 'Flooring', 'Handover clean'], result: 'A practical retail store with sharper presentation and a cleaner customer journey.' },
    { name: 'Office Interior Upgrade', category: 'Commercial Renovation', location: 'Bellville, Cape Town', timeline: '6 weeks', image: { src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=82', alt: 'Professional modern office interior with desks and glass partitions' }, description: 'A business office upgrade with refreshed finishes, meeting spaces, and improved workplace flow.', overview: 'A phased office upgrade for a team that needed minimal disruption and clearer work zones.', goal: 'Modernise the office while keeping business operations moving.', challenges: 'Scheduling noisy work around office hours and maintaining safe access routes.', scope: ['Partition changes', 'Paint and flooring', 'Meeting room upgrades', 'Electrical coordination', 'Final handover'], result: 'A sharper, more usable workspace delivered through phased construction planning.' },
    { name: 'Kitchen & Living Extension', category: 'Home Extension', location: 'Southern Suburbs, Cape Town', timeline: '14 weeks', image: { src: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1200&q=82', alt: 'Modern open-plan kitchen and living extension with premium finishes' }, description: 'An open-plan living extension with structural coordination and detail-driven finishing.', overview: 'A home extension that joined kitchen, dining, and living areas for better family use.', goal: 'Create a larger, lighter living space connected to the existing home.', challenges: 'Matching new work to existing structure while controlling dust and access during occupancy.', scope: ['Structural opening coordination', 'Brickwork and plastering', 'Roof tie-in', 'Kitchen coordination', 'Finishing and painting'], result: 'A warm open-plan family area that feels integrated with the original home.' },
    { name: 'Boundary Wall & Outdoor Upgrade', category: 'External Works', location: 'Somerset West', timeline: '5 weeks', image: { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=82', alt: 'Modern outdoor area with paving walls and landscaped entertainment space' }, description: 'An exterior upgrade with boundary improvements, paving, and an outdoor entertainment feel.', overview: 'A practical outdoor project improving privacy, access, drainage, and curb appeal.', goal: 'Upgrade the property boundary and make the outdoor space cleaner and easier to use.', challenges: 'Managing drainage fall, neighbour-facing work, and durable exterior finishes.', scope: ['Boundary wall construction', 'Paving preparation', 'Outdoor surface finishing', 'Drainage coordination', 'Site clean-up'], result: 'A stronger, cleaner exterior with better privacy and a more finished outdoor area.' },
  ],
  beforeAfter: [
    { title: 'Kitchen renovation', before: { src: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80', alt: 'Older kitchen space before a renovation concept' }, after: { src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80', alt: 'Modern finished kitchen after renovation with clean cabinetry' }, text: 'A dated kitchen is reworked into a brighter, more functional everyday space.' },
    { title: 'Bathroom upgrade', before: { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80', alt: 'Bathroom before upgrade with simple fittings' }, after: { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80', alt: 'Finished modern bathroom with premium tile and vanity details' }, text: 'Wet-room upgrades can be presented with trust-building detail and durable finishes.' },
    { title: 'Outdoor entertainment area', before: { src: 'https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?auto=format&fit=crop&w=900&q=80', alt: 'Outdoor patio area before construction upgrade' }, after: { src: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80', alt: 'Finished outdoor entertainment patio with modern residential styling' }, text: 'External works improve the way a property looks, flows, and supports gatherings.' },
  ],
  safety: [
    { title: 'Site safety planning', text: 'Work areas, access routes, hazards, and daily site practices are planned before construction starts.' },
    { title: 'Quality control checks', text: 'Key milestones are reviewed to keep structural work, finishes, and handover standards aligned.' },
    { title: 'Skilled trades coordination', text: 'The right trades are scheduled in the right order to reduce delays and rework.' },
    { title: 'Clear project timelines', text: 'Clients understand expected phases, dependencies, and realistic completion windows.' },
    { title: 'Transparent communication', text: 'Regular updates help owners know what has happened, what is next, and what decisions are needed.' },
    { title: 'Clean handover process', text: 'Final snagging, cleaning, and handover notes make the project feel professional to the end.' },
  ],
  complianceBadges: ['Registered contractor example', 'Public liability insurance example', 'Health & safety compliance example', 'Workmanship guarantee example'],
  process: [
    { title: 'Initial enquiry', text: 'Tell us what you want to build, renovate, repair, or improve and share any important deadlines.' },
    { title: 'Site visit / consultation', text: 'We review the property, access, constraints, practical details, and project goals.' },
    { title: 'Scope and quotation', text: 'You receive a clear scope direction with pricing assumptions and next-step recommendations.' },
    { title: 'Project planning', text: 'Trades, materials, timing, safety planning, and client communication points are coordinated.' },
    { title: 'Construction and updates', text: 'Work progresses through planned phases with updates, site checks, and issue resolution.' },
    { title: 'Final handover', text: 'The completed work is reviewed, cleaned, snagged, and handed over with pride.' },
  ],
  serviceAreas: ['Cape Town CBD', 'Bloubergstrand', 'Durbanville', 'Bellville', 'Somerset West', 'Paarl', 'Stellenbosch', 'Southern Suburbs', 'Atlantic Seaboard', 'Northern Suburbs'],
  testimonials: [
    { name: 'Client A.', type: 'Home renovation client', text: 'PrimeBuild kept us informed from start to finish. The team was professional, tidy, and the final result felt exactly like the plan we approved.' },
    { name: 'Client B.', type: 'Commercial fit-out client', text: 'The programme was tight, but communication stayed clear and the site was handed over ready for our opening week.' },
    { name: 'Client C.', type: 'New build client', text: 'We always knew what stage the project was in. The finishing quality and coordination made a complex build feel manageable.' },
  ],
  faqs: [
    ['Do you offer free quotes?', 'Yes, this concept positions quotes as enquiry-led, with a site visit or consultation recommended before final pricing.'],
    ['Do you handle residential and commercial projects?', 'Yes, PrimeBuild is presented for home builds, renovations, fit-outs, maintenance, and project-based construction work.'],
    ['Can you help with renovations?', 'Yes, renovations are a core service including kitchens, bathrooms, extensions, apartments, and full home upgrades.'],
    ['Do you manage subcontractors?', 'Yes, the concept includes skilled trades coordination and project management for smoother delivery.'],
    ['Do you provide project timelines?', 'Yes, timelines are explained during scope and planning, with realistic phases and dependencies.'],
    ['Do you work from architectural plans?', 'Yes, the project flow supports architectural plans, scopes, site notes, and owner ideas.'],
    ['Can you help if I only have an idea?', 'Yes, the first consultation can clarify the idea, budget range, feasibility, and next steps.'],
    ['Do you offer maintenance work?', 'Yes, repairs, maintenance, waterproofing coordination, and property improvements are included.'],
    ['How soon can a project start?', 'Start dates depend on scope, materials, site access, and team availability.'],
    ['What areas do you service?', 'The concept lists Cape Town CBD, Bloubergstrand, Durbanville, Bellville, Somerset West, Paarl, Stellenbosch, Southern Suburbs, Atlantic Seaboard, and Northern Suburbs.'],
    ['Do you provide workmanship guarantees?', 'A workmanship guarantee is shown as an example trust signal for example layout.'],
    ['How do payments usually work?', 'Construction payments are usually milestone based, with details confirmed in the accepted quotation and project agreement.'],
  ].map(([question, answer]) => ({ question, answer })),
};

export const glowHausConcept = {
  images: {
    hero: { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=2200&q=82', alt: 'Premium beauty studio styling with soft salon atmosphere' },
    story: { src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1400&q=82', alt: 'Woman receiving a calm skincare treatment in a beauty studio' },
  },
  trustBadges: ['Personalised treatments', 'Premium products', 'By appointment', 'Cape Town studio'],
  highlights: ['Lash & brow specialists', 'Skin-focused treatments', 'Nail care', 'Makeup appointments', 'Personalised consultations', 'Calm private studio'],
  categories: {
    Lashes: [
      ['Classic Lash Set', 'Natural length and softly defined everyday lashes.', '90 min', 'R650', 'Subtle definition'],
      ['Hybrid Lash Set', 'A fuller blend of classic and volume lashes.', '120 min', 'R780', 'Soft glam eyes'],
      ['Lash Lift & Tint', 'Lifted natural lashes with a polished dark tint.', '60 min', 'R420', 'Low-maintenance glow'],
      ['Lash Fill', 'Refresh existing extensions and restore fullness.', '60 min', 'R380', 'Maintenance appointments'],
    ],
    Brows: [
      ['Brow Shape & Tint', 'Clean shaping and a balanced custom tint.', '30 min', 'R220', 'Everyday polish'],
      ['Brow Lamination', 'Fluffy, lifted brows with a smooth set finish.', '45 min', 'R480', 'Fuller-looking brows'],
      ['Signature Brow Sculpt', 'Mapping, shaping, tint and finishing detail.', '45 min', 'R360', 'Refined brow symmetry'],
      ['Henna Brows', 'Longer-lasting stain for softly filled brows.', '45 min', 'R420', 'Sparse brows'],
    ],
    Nails: [
      ['Gel Manicure', 'Prep, shaping, cuticle care and glossy gel colour.', '60 min', 'R380', 'Polished hands'],
      ['Builder Gel Overlay', 'Strengthening overlay with a refined finish.', '75 min', 'R520', 'Stronger natural nails'],
      ['Gel Pedicure', 'Foot care, shaping and long-wear gel colour.', '60 min', 'R420', 'Holiday-ready feet'],
      ['Nail Art Add-on', 'Minimal line work, chrome, French or soft details.', 'Add-on', 'from R80', 'Personalised details'],
    ],
    'Skin & Facials': [
      ['Glow Facial', 'Hydrating cleanse, massage and radiance-focused mask.', '60 min', 'R690', 'Dull or tired skin'],
      ['Deep Cleanse Facial', 'A deeper reset for congestion and texture.', '75 min', 'R780', 'Congested skin'],
      ['Hydration Treatment', 'Comforting moisture support for a dewy finish.', '45 min', 'R580', 'Dry skin'],
      ['Skin Consultation', 'A calm review of skin goals and treatment options.', '30 min', 'R250', 'New clients'],
    ],
    Makeup: [
      ['Soft Glam Makeup', 'Polished makeup that photographs beautifully.', '75 min', 'R750', 'Events and shoots'],
      ['Event Makeup', 'Long-wear glam tailored to your occasion.', '90 min', 'R950', 'Special occasions'],
      ['Bridal Trial', 'A collaborative bridal look test before the day.', '90 min', 'R850', 'Brides-to-be'],
      ['Bridal Makeup', 'Wedding-day makeup with a premium calm experience.', 'By quote', 'from R1,400', 'Bridal beauty'],
    ],
    Packages: [
      ['The Glow Reset', 'Facial, brow refresh and simple finishing touches.', 'Bundle', 'R1,250', 'Self-care days'],
      ['Lash & Brow Refresh', 'Lash lift with brow shape and tint.', 'Bundle', 'R780', 'Eye definition'],
      ['Event Ready Package', 'Soft glam makeup with brows or lashes.', 'Bundle', 'R1,650', 'Occasion prep'],
      ['Bridal Glow Package', 'Trial, skincare guidance and wedding makeup.', 'Bundle', 'from R2,800', 'Wedding prep'],
    ],
  },
  signatures: [
    { title: 'Signature Brow Sculpt', image: { src: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=82', alt: 'Luxury makeup and brow products on a soft beauty table' }, for: 'Clients who want balanced, natural-looking brows.', includes: 'Consultation, mapping, shaping, tint and finishing.', duration: '45 min', price: 'from R360' },
    { title: 'Glow Facial', image: { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=82', alt: 'Relaxing facial skincare treatment with soft studio lighting' }, for: 'Dull, tired or dehydrated skin needing radiance.', includes: 'Cleanse, exfoliation, massage, mask and aftercare.', duration: '60 min', price: 'from R690' },
    { title: 'Event Ready Makeup', image: { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=82', alt: 'Makeup artist applying refined beauty makeup' }, for: 'Events, shoots, dinners and modern bridal moments.', includes: 'Skin prep, long-wear makeup and finishing touches.', duration: '75–90 min', price: 'from R750' },
  ],
  transformations: [
    ['Brow Lamination', 'Fuller, lifted brows with a soft brushed finish.'],
    ['Lash Lift', 'Natural lashes lifted for brighter-looking eyes.'],
    ['Skin Glow Facial', 'Hydrated, refreshed skin with a dewy finish.'],
  ],
  gallery: [
    ['https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1100&q=80','Client receiving a relaxing facial skincare treatment'],
    ['https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1100&q=80','Beauty therapist applying skincare in a calm studio'],
    ['https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1100&q=80','Elegant manicure with polished nail detail'],
    ['https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1100&q=80','Stylish beauty salon interior lifestyle image'],
    ['https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1100&q=80','Cosmetic products and makeup brushes flat lay'],
    ['https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1100&q=80','Makeup artist applying event makeup'],
    ['https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=1100&q=80','Woman with glowing skin in soft natural light'],
    ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1100&q=80','Peaceful spa treatment room with towels and candles'],
    ['https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=1100&q=80','Luxury skincare bottles and beauty products'],
    ['https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1100&q=80','Bridal inspired makeup and beauty styling detail'],
  ].map(([src, alt]) => ({ src, alt })),
  team: [
    ['Mia Laurent','Founder & Lead Beauty Specialist','Brows, skin consultations, event beauty','Mia’s approach is soft, detailed, and client-led, focusing on treatments that enhance rather than overpower.','https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80'],
    ['Ava Naidoo','Lash & Brow Artist','Lash lifts, hybrid sets, brow lamination','Ava creates clean, wearable eye treatments with careful mapping and gentle application.','https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80'],
    ['Lara Smith','Nail Technician','Gel manicures, overlays, minimal nail art','Lara loves refined nail finishes, healthy prep and elegant details that last.','https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80'],
    ['Noor Jacobs','Makeup Artist','Soft glam, bridal, event makeup','Noor builds luminous makeup looks that feel comfortable, photogenic and polished.','https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80'],
  ],
  philosophy: ['Premium products', 'Hygiene-first tools', 'Personalised consultations', 'Aftercare guidance', 'Patch testing where relevant', 'Natural-looking results', 'Comfort-focused studio'],
  hours: [['Monday','Closed'],['Tuesday','09:00–17:00'],['Wednesday','09:00–17:00'],['Thursday','09:00–19:00'],['Friday','09:00–18:00'],['Saturday','09:00–15:00'],['Sunday','Closed']],
  reviews: [
    ['Leah M.','Brow client','My brows have never looked this natural and polished. The studio felt calm, clean, and so professional.'],
    ['Taryn K.','Glow Facial','My skin looked fresh without feeling over-treated. I loved the aftercare guidance and quiet studio atmosphere.'],
    ['Amira P.','Bridal makeup','My makeup lasted beautifully and still felt like me. The whole appointment felt relaxed and premium.'],
  ],
  faqs: [
    ['Do I need to book in advance?','Yes, advance booking is recommended because the studio works by appointment.'],['Do you accept walk-ins?','This concept is by appointment only, with occasional same-day availability.'],['How do I prepare for my appointment?','Arrive with clean skin where possible and share allergies, sensitivities or previous treatment concerns.'],['Do you offer bridal makeup?','Yes, bridal trials and wedding-day makeup packages are included in the concept.'],['How long do lash extensions last?','Most clients book fills every two to three weeks depending on aftercare and natural lash cycle.'],['Do you do patch tests?','Patch tests are recommended where tint, adhesives or active products are used.'],['What should I avoid after a facial?','Avoid steam, heavy exercise and strong actives immediately after facials; use SPF as guided.'],['Can I book multiple treatments together?','Yes, packages can combine lashes, brows, nails, facials and makeup.'],['What is your cancellation policy?','This concept assumes 24-hour notice for changes or cancellations.'],['Are deposits required?','Deposits may be required for bridal, packages or longer appointments.'],['Do you offer gift vouchers?','Gift voucher functionality can be added to a real beauty studio website.'],['Where is the studio located?','GlowHaus is presented as a Cape Town, South Africa concept studio.']
  ].map(([question, answer]) => ({ question, answer })),
};

export const fitFormConcept = {
  brandName: 'FitForm Coaching',
  location: 'Cape Town, South Africa',
  images: {
    hero: { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=82', alt: 'Premium gym floor with strength equipment and atmospheric lighting' },
    coach: { src: 'https://images.unsplash.com/photo-1571019613914-85f342c6a11e?auto=format&fit=crop&w=1200&q=82', alt: 'Personal trainer coaching a client during a strength session' },
    nutrition: { src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=82', alt: 'Healthy meal prep bowls with vegetables and protein' },
  },
  trustBadges: ['Strength training', 'Fat-loss coaching', 'Online support', '12-week plans'],
  goals: [
    { title: 'Build Muscle', for: 'Beginners to intermediate lifters wanting size, shape, and progressive structure.', focus: 'Hypertrophy training, progressive overload, recovery, nutrition habits.', structure: '4 training days, 2 active recovery days, 1 full rest day.' },
    { title: 'Lose Fat', for: 'Clients wanting sustainable fat loss without extreme dieting.', focus: 'Nutrition targets, strength training, steps, habits, weekly check-ins.', structure: '3 strength days, 2 conditioning days, daily step goal.' },
    { title: 'Get Stronger', for: 'Clients wanting measurable strength progress in squat, bench, deadlift, or key movements.', focus: 'Structured strength blocks, technique, progressive loading, recovery.', structure: '3 to 4 focused strength sessions.' },
    { title: 'Improve Fitness', for: 'Clients who want better conditioning, energy, and everyday athleticism.', focus: 'Strength circuits, aerobic base, mobility, recovery habits.', structure: '3 training days, 2 conditioning days, 2 recovery touchpoints.' },
    { title: 'Return to Training', for: 'Clients rebuilding confidence after time away from consistent exercise.', focus: 'Foundational movement, gradual loading, routine design, confidence wins.', structure: '2 to 3 guided sessions with optional home mobility.' },
    { title: 'Online Coaching', for: 'Busy clients who need structure, accountability, and remote feedback.', focus: 'App-style plans, weekly check-ins, progress tracking, flexible support.', structure: 'Custom weekly plan with remote check-in and habit targets.' },
  ],
  programmes: [
    { title: '1:1 Personal Training', best: 'Hands-on coaching', for: 'Clients who want hands-on coaching', includes: ['Technique coaching', 'Structured sessions', 'Weekly progression'], duration: 'Monthly', price: 'From R1,800/month', image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80' },
    { title: 'Online Coaching', best: 'Remote accountability', popular: true, for: 'Clients who want coaching remotely', includes: ['Training plan', 'Nutrition guidance', 'Check-ins', 'Progress tracking'], duration: 'Monthly', price: 'From R950/month', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80' },
    { title: '12-Week Transformation', best: 'Focused goal block', for: 'Clients wanting a focused goal block', includes: ['Training plan', 'Habit coaching', 'Progress reviews', 'Accountability'], duration: '12 weeks', price: 'From R2,800 once-off', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80' },
    { title: 'Strength & Performance Plan', best: 'Measurable performance', for: 'Lifters and athletes wanting measurable performance', includes: ['Strength programming', 'Testing', 'Mobility', 'Recovery tracking'], duration: '8 to 12 weeks', price: 'From R1,400', image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=900&q=80' },
  ],
  faqs: ['Do I need gym experience?','Can I do online coaching only?','Do you create meal plans?','How often do we check in?','What if I miss a workout?','Can I train at home?','How long before I see results?','Do you work with beginners?','Do you offer strength-focused plans?','Is nutrition included?','Can I pause coaching?','How do I start?'].map(q => ({ question: q, answer: 'Yes — this sample FAQ would be customised to the coach’s real process. FitForm is positioned around flexible, beginner-friendly, structured coaching with realistic habit support and clear check-ins.' })),
};


export const capeLegalConcept = {
  images: {
    hero: { src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=82', alt: 'Premium modern boardroom and office interior suited to a professional advisory website' },
    intro: { src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=82', alt: 'Contract documents and a pen on a professional desk' },
  },
  trustBadges: ['Confidential enquiries','Contract review','Business advisory','Cape Town based'],
  stats: [
    { value: '15+', label: 'years combined advisory experience' },
    { value: '240+', label: 'matters guided' },
    { value: '6', label: 'advisory focus areas' },
    { value: 'Private', label: 'confidential consultations' },
  ],
  highlights: ['Clear written advice','Practical next steps','Confidential consultation','Contract-focused support','Business and property guidance','Professional client care'],
  practiceAreas: [
    { title: 'Contract Review', description: 'Review and explanation of agreements before signing, helping clients understand obligations, risks, and practical next steps.', helps: 'Individuals, business owners, landlords, tenants, service providers', matters: 'Service agreements, lease agreements, supplier contracts, employment agreements', documents: 'Contracts, amendments, correspondence, terms and conditions' },
    { title: 'Business Advisory', description: 'Practical guidance for small businesses needing structure, risk awareness, client terms, supplier agreements, and decision support.', helps: 'SMEs, startups, consultants, directors', matters: 'Business setup, service terms, supplier risk, client disputes, operational policies', documents: 'Company documents, policies, agreements, correspondence' },
    { title: 'Property Matters', description: 'Advisory support around leases, sales, rental disputes, property documentation, and practical risk review.', helps: 'Landlords, tenants, buyers, sellers, property managers', matters: 'Lease review, purchase agreements, rental issues, body corporate queries', documents: 'Lease agreements, sale agreements, notices, correspondence' },
    { title: 'Company Compliance', description: 'Support with company governance, basic compliance planning, internal policies, and document organisation.', helps: 'Business owners, directors, administrators', matters: 'Company records, internal rules, director decisions, compliance checklists', documents: 'Company registers, resolutions, policies, compliance notes' },
    { title: 'Employment Guidance', description: 'Clear guidance around workplace documents, policies, contracts, and preparation for employment-related conversations.', helps: 'Employers, managers, employees, HR consultants', matters: 'Employment contracts, disciplinary preparation, workplace policies, role changes', documents: 'Contracts, warnings, policies, correspondence' },
    { title: 'Estate & Planning Support', description: 'Structured support for planning documents and conversations around estate, family, and future decision-making.', helps: 'Individuals, families, professionals', matters: 'Planning discussions, document organisation, instruction preparation', documents: 'Wills, instructions, asset lists, planning notes' },
    { title: 'Dispute Preparation', description: 'Organised preparation before difficult conversations, claims, or advisory sessions so facts and documents are easier to review.', helps: 'Individuals, businesses, property clients, managers', matters: 'Chronologies, correspondence review, issue lists, practical preparation', documents: 'Emails, notices, contracts, timelines, supporting evidence' },
    { title: 'Policy & Document Drafting', description: 'Drafting support for clear business documents, internal policies, client terms, and practical operating templates.', helps: 'SMEs, consultants, HR teams, administrators', matters: 'Terms, procedures, templates, internal policy updates', documents: 'Policies, terms, checklists, letters, client-facing templates' },
  ],
  process: [
    { title: 'Send confidential enquiry', text: 'Share the matter type, urgency, contact preference, and a short summary.' },
    { title: 'Initial matter review', text: 'The advisory team reviews the information and identifies relevant documents.' },
    { title: 'Scope and next-step guidance', text: 'You receive a clear scope direction before any advisory work begins.' },
    { title: 'Advisory session or document review', text: 'The matter is discussed or documents are reviewed in a structured way.' },
    { title: 'Written summary and follow-up', text: 'A plain-language summary records practical next steps and follow-up items.' },
  ],
  advisors: [
    { name: 'Sarah van der Merwe', role: 'Principal Legal Advisor', focus: 'Contracts, property, business advisory', bio: 'Sarah is positioned as the calm lead advisor for complex decisions and document-heavy matters.', credentials: 'Example credentials · illustrative profile', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=82', alt: 'Professional woman in a business portrait for principal advisor' },
    { name: 'Daniel Petersen', role: 'Compliance Consultant', focus: 'Company compliance, policies, governance', bio: 'Daniel supports governance structure, policies, compliance checklists, and organised company records.', credentials: 'Example credentials · illustrative profile', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=82', alt: 'Professional man in a business portrait for compliance consultant' },
    { name: 'Aisha Khan', role: 'Client Advisory Coordinator', focus: 'Intake, document preparation, client communication', bio: 'Aisha coordinates intake, documents, communication, and preparation so clients feel informed.', credentials: 'Example credentials · illustrative profile', image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=900&q=82', alt: 'Professional woman in office portrait for client advisory coordinator' },
  ],
  trustCards: ['Confidential enquiry handling','Clear written summaries','Plain-language guidance','Structured document review','Professional communication','Practical next steps','Secure document process example','Transparent scope before work begins'],
  trustSeals: ['Confidential consultations','Secure enquiry process','Professional advisory approach','Clear scope confirmation'],
  resources: [
    { category: 'Contracts', title: 'What to check before signing a service agreement', excerpt: 'Key clauses, obligations, renewal terms, and practical risks to understand before signing.', time: '4 min read' },
    { category: 'Property', title: 'Questions to ask before entering a lease', excerpt: 'A practical lease review checklist for tenants, landlords, and property managers.', time: '5 min read' },
    { category: 'Business', title: 'How small businesses can organise key documents', excerpt: 'Simple ways to keep company, policy, and client documents easier to find and review.', time: '3 min read' },
    { category: 'Disputes', title: 'Why clear written terms reduce disputes', excerpt: 'How plain terms, records, and expectations reduce uncertainty in commercial relationships.', time: '4 min read' },
  ],
  hours: [['Monday','09:00–17:00'],['Tuesday','09:00–17:00'],['Wednesday','09:00–17:00'],['Thursday','09:00–17:00'],['Friday','09:00–15:30'],['Saturday','By appointment'],['Sunday','Closed']],
  testimonials: [
    { name: 'Client A.', type: 'Small business owner', text: 'The advice felt practical and organised. I understood the risks, the documents to update, and the next conversations to have.' },
    { name: 'Client B.', type: 'Property client', text: 'The process was calm and clear. I knew what to question in the lease before making a decision.' },
    { name: 'Client C.', type: 'Contract review client', text: 'I understood what the contract meant, what to question, and what steps to take before signing.' },
  ],
  faqs: [
    ['Do I need to book a consultation?', 'Yes. A consultation helps clarify the matter, documents, timing, and next step.'],
    ['Can I send documents for review?', 'Yes. This concept intake flow allows clients to indicate whether documents are available.'],
    ['Is my enquiry confidential?', 'The concept is designed around confidential handling, with a concept disclaimer.'],
    ['Do you assist businesses and individuals?', 'Yes, the concept positions support for business owners, professionals, families, and individuals.'],
    ['Can you help with contracts?', 'Contract review is one of the main advisory areas presented in this concept.'],
    ['Can you help with property matters?', 'Yes, property leases, sales documentation, notices, and correspondence are included as examples.'],
    ['Do you offer once-off consultations?', 'The concept supports once-off advisory sessions or scoped document reviews.'],
    ['How are fees usually discussed?', 'Fees are discussed after an initial scope review so expectations are clear before work begins.'],
    ['Do you provide written summaries?', 'The process includes a written summary and follow-up step as a trust-building feature.'],
    ['Does submitting the form create a legal relationship?', 'No. Submitting the concept form does not create a legal advisor/client relationship.'],
    ['What should I prepare before a consultation?', 'Prepare the key documents, a short timeline, questions, deadlines, and preferred contact method.'],
    ['Can you assist remotely?', 'Yes. The concept supports remote enquiries and consultations as an option.'],
  ].map(([question, answer]) => ({ question, answer })),
};
