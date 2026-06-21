# Web Link Designs Portfolio

## Pre-marketing polish

This site has been pre-marketing polished for **Web Link Designs** so it is ready to share with business owners through WhatsApp groups, Facebook groups, and direct messages.

Business contact details:

- Email: weblinkdesign3r@gmail.com
- Phone / WhatsApp: +27 81 828 6752
- Phone link: tel:+27818286752
- WhatsApp link: https://wa.me/27818286752?text=Hi%20Web%20Link%20Designs%2C%20I%27d%20like%20to%20enquire%20about%20a%20website.

Important deployment reminder: the `project-enquiry` form submission flow must be tested after every deploy by submitting a real test enquiry on the live Netlify URL and confirming it appears in the deployment dashboard and email notifications.


A premium React + Vite + Tailwind CSS agency portfolio for **Web Link Designs**. The site is built to help sell websites to businesses by combining luxury visual polish, responsive UX, enquiry-focused content, static form handling support, and editable content data.


## Homepage conversion polish update

This pass completed the homepage conversion polish for **Web Link Designs**:

- Homepage hero copy now clearly positions the studio around professional, mobile-friendly business websites.
- Website concepts are positioned as the main browsing and enquiry section, with concept cards and a follow-up CTA strip.
- An About / founder-led section was added to build credibility without overclaiming or inventing credentials.
- Services, packages, process and FAQ copy were refined for small business owners using clear South African wording.
- The six concept pages are now lazy-loaded with `React.lazy` and `Suspense` so the homepage bundle stays lighter while keeping concept navigation smooth.

Final follow-up notes:

- After deployment, submit a live test enquiry and confirm the `project-enquiry` form appears in Netlify.
- Review real client imagery and testimonials when available so the homepage can become more specific without inventing proof.

## Install dependencies

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Build for production

```bash
npm run build
```

The production files are generated in `dist/`.

## Deploy

This project includes `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

On your hosting dashboard:

1. Import this GitHub repository.
2. Confirm the build command is `npm run build`.
3. Confirm the publish directory is `dist`.
4. Deploy.

## Edit the website content

Most editable content is stored in:

```text
src/data/siteContent.js
```

Update this file to change:

- Brand text and CTA labels
- Website options and add-ons
- Services
- Packages and package descriptions
- Process steps
- Concept projects
- Benefits and trust badges
- FAQs
- Contact details
- Navigation labels
- Azure Tide Guesthouse concept content in the `guesthouseConcept` object

### Edit the Azure Tide Guesthouse concept

The first full concept website lives in:

```text
src/pages/GuesthouseConcept.jsx
```

Most guesthouse text, room details, amenities, FAQs, policies, reviews and image URLs are editable in the `guesthouseConcept` export inside:

```text
src/data/siteContent.js
```

To change the concept later, update the data object first. Use `GuesthouseConcept.jsx` only when changing layout, interactions, lightbox behaviour, room modal behaviour or the enquiry handoff. The concept uses free Unsplash image URLs and should stay safe for concept marketing unless replaced with client-owned or commercial-use imagery.

## Premium UI and conversion features

The polish pass includes:

- More premium hero copy and a smoother animated preview card.
- Slightly more transparent glass morphism with glow, grid and subtle noise details.
- Scroll reveal animations using a reusable `Reveal` component.
- Improved cards, buttons, package blocks, portfolio-style mockups and hover states.
- Mobile-friendly navigation, tap targets and a mobile floating **Start a Project** CTA.
- Scroll progress indicator and back-to-top button.
- CTA buttons after major sections.
- Website option and package buttons that pass the selected option into the contact form.
- Trust badges and reassurance copy near the form.
- Responsive layouts intended for 375px, 768px, 1024px, 1440px and 1920px widths.

## Form handling

The contact form is configured for Form handling and keeps the form name stable for deployment detection:

- A hidden static form is included in `index.html` so the hosting form handler can detect it during deployment.
- The React contact form in `src/components/Contact.jsx` posts URL-encoded data using the same form name: `project-enquiry`.
- The form fields are `name`, `business`, `email`, `phone`, `websiteType`, `budget`, and `message`.
- A `bot-field` honeypot is included to reduce spam submissions.

After deploying to Netlify:

1. Submit a test enquiry on the live site.
2. Open your deployment dashboard.
3. Go to **Forms**.
4. Confirm submissions appear under `project-enquiry`.

### Set up form email notifications

1. Open the site in your deployment dashboard.
2. Select **Forms** in the left navigation.
3. Select the `project-enquiry` form.
4. Select **Form notifications**.
5. Choose **Add notification**.
6. Choose **Email notification**.
7. Enter the email address that should receive new enquiry alerts.
8. Keep the event set to new form submissions for `project-enquiry`.
9. Save the notification.
10. Submit another test enquiry on the live site and confirm the notification email arrives.

Tip: if notifications do not arrive, check the recipient spam folder first, then confirm the notification is attached to `project-enquiry` and not another form.

## Analytics setup note

Add your Google Analytics, Plausible, or other tracking script in `index.html` inside the `<head>` tag when you are ready to measure traffic.

Paste your analytics snippet there when ready. Do not commit private tracking IDs if the repository is public.

## Suggested next improvements

- Replace concept preview mockups with optimized screenshots or live case studies when available.
- Add real client testimonials and measurable results as soon as they are available.
- Add a discovery-call booking link for visitors who prefer scheduling immediately.
- Add optimized Open Graph imagery before public launch.
- Consider a CMS later if frequent content editing becomes important.


### Edit the PrimeBuild Construction concept

The construction company concept website lives in:

```txt
src/pages/PrimeBuildConcept.jsx
```

Most editable PrimeBuild content lives in `src/data/siteContent.js` inside the `primeBuildConcept` object, including services, project case studies, before/after cards, safety and compliance copy, service areas, testimonials, FAQs and Unsplash image URLs. Update the data object first when changing company copy, service details, project examples or stock photography. Use `PrimeBuildConcept.jsx` when changing layout, modal behaviour, quote-section fields, accordion interactions or the client enquiry handoff. The construction quote section reuses the existing Netlify `project-enquiry` form and keeps file uploads as message instructions for reliability.

### Edit the UrbanBite Restaurant concept

The restaurant concept website lives in:

```txt
src/pages/UrbanBiteConcept.jsx
```

Most editable UrbanBite content lives in `src/data/siteContent.js` inside the `urbanBiteConcept` object, including images, featured dishes, menu categories, opening hours, gallery photos, specials, reviews and FAQs. Update the data object first when changing copy, prices, menu items or stock image URLs. Use `UrbanBiteConcept.jsx` when changing layout, interactions, the gallery lightbox, menu tabs, reservation section or the client enquiry handoff.

### Edit the GlowHaus Beauty Studio concept

The beauty studio concept website lives in:

```txt
src/pages/GlowHausConcept.jsx
```

Most editable GlowHaus content lives in `src/data/siteContent.js` inside the `glowHausConcept` object, including treatment categories, signature services, gallery images, team profiles, opening hours, reviews and FAQs. Update the data object first when changing copy, prices, service names or Unsplash image URLs. Use `GlowHausConcept.jsx` when changing layout, booking-form fields, the before/after slider, service tabs, lightbox behaviour or the client enquiry handoff. The appointment section reuses the existing Netlify `project-enquiry` form with `websiteType` set to `Beauty Salon Website`.

### Edit the FitForm Coaching concept

The fitness coach / online coaching concept website lives in:

```txt
src/pages/FitFormConcept.jsx
```

Most editable FitForm content lives in `src/data/siteContent.js` inside the `fitFormConcept` object, including the goal selector copy, programme cards, FAQs, brand location and Unsplash image URLs. Use `FitFormConcept.jsx` when changing the dashboard visuals, programme-card reveal interaction, transformation toggle, 12-week timeline, pricing cards, coaching enquiry fields or the portfolio-to-contact handoff. The coaching enquiry section reuses the existing Netlify `project-enquiry` form with `websiteType` set to `Fitness Coach Website`.

### Edit the CapeLegal Advisory concept

The professional services / legal advisory concept website lives in:

```txt
src/pages/CapeLegalConcept.jsx
```

Most editable CapeLegal content lives in `src/data/siteContent.js` inside the `capeLegalConcept` object, including advisory areas, process steps, illustrative advisor profiles, trust cards, resources, office hours, testimonials, FAQs and Unsplash image URLs. Update the data object first when changing service copy, illustrative credentials, disclaimers, professional-services wording or stock photography. Use `CapeLegalConcept.jsx` when changing the case-file selector, animated document stack, consultation intake form, timeline, accordion behaviour or the portfolio-to-contact handoff. The consultation enquiry section reuses the existing Netlify `project-enquiry` form with `websiteType` set to `Professional Services Website`.

## Concepts and website options

The old standalone **Website Concepts** homepage section has been merged into the **Website Concepts / Portfolio** section so visitors browse website options, concept previews, details, and enquiries from one focused area.

Concept card content is editable from the main site content data file at `src/data/siteContent.js`, especially the `portfolioItems` array. Each concept card now supports three actions: **View Concept**, **View Details**, and **Enquire**. The enquiry action preselects the matching website type in the existing Netlify `project-enquiry` form.

## Manual launch QA checklist

Before sharing the site in WhatsApp groups, Facebook groups, or direct messages:

- Test the homepage on a mobile-sized screen.
- Test all six concept pages: Azure Tide Guesthouse, UrbanBite Restaurant, PrimeBuild Construction, GlowHaus Beauty Studio, FitForm Coaching, and CapeLegal Advisory.
- Test each **View Concept** button.
- Test each **View Details** button.
- Test each **Enquire** button and confirm the website type is preselected in the main Web Link Designs contact form.
- Test the WhatsApp link: `https://wa.me/27818286752`.
- Test the email link: `mailto:weblinkdesign3r@gmail.com`.
- Test the contact form after live deploy by submitting a real enquiry and confirming it appears in the form submissions dashboard and email notifications.
- Test the social preview after live deploy in WhatsApp and Facebook. A branded SVG preview exists at `public/social-preview.svg`; create a dedicated PNG later for the most reliable WhatsApp/Facebook previews.
- Run `npm run build` before deploying.
