# Web Link Designs Portfolio

A premium React + Vite + Tailwind CSS agency portfolio for **Web Link Designs**. The site is built to help sell websites to businesses by combining luxury visual polish, responsive UX, conversion-focused content, Netlify Forms support, and editable content data.

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

## Deploy to Netlify

This project includes `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

On Netlify:

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
- Portfolio/demo projects
- Benefits and trust badges
- FAQs
- Contact details
- Navigation labels
- Azure Tide Guesthouse demo content in the `guesthouseConcept` object

### Edit the Azure Tide Guesthouse concept

The first full demo concept lives in:

```text
src/pages/GuesthouseConcept.jsx
```

Most guesthouse text, room details, amenities, FAQs, policies, reviews and image URLs are editable in the `guesthouseConcept` export inside:

```text
src/data/siteContent.js
```

To change the concept later, update the data object first. Use `GuesthouseConcept.jsx` only when changing layout, interactions, lightbox behaviour, room modal behaviour or the enquiry handoff. The concept uses free Unsplash image URLs and should stay demo-safe unless replaced with client-owned or commercial-use imagery.

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

## Netlify Forms

The contact form is configured for Netlify Forms without a backend, Firebase, Supabase, or any database:

- A hidden static form is included in `index.html` so Netlify can detect it during deployment.
- The React contact form in `src/components/Contact.jsx` posts URL-encoded data to Netlify using the same form name: `project-enquiry`.
- The form fields are `name`, `business`, `email`, `phone`, `websiteType`, `budget`, and `message`.
- A `bot-field` honeypot is included to reduce spam submissions.

After deploying to Netlify:

1. Submit a test enquiry on the live site.
2. Open your Netlify dashboard.
3. Go to **Forms**.
4. Confirm submissions appear under `project-enquiry`.

### Set up Netlify email notifications

1. Open the site in your Netlify dashboard.
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

## Analytics placeholder

An analytics placeholder comment is included in `index.html` inside the `<head>` tag:

```html
<!-- Analytics placeholder: paste your Google Analytics, Plausible, or other tracking script here. -->
```

Paste your analytics snippet there when ready. Do not commit private tracking IDs if the repository is public.

## Suggested next improvements

- Replace placeholder portfolio mockups with optimized screenshots or live case studies.
- Add real client testimonials and measurable results as soon as they are available.
- Add a discovery-call booking link for visitors who prefer scheduling immediately.
- Add optimized Open Graph imagery before public launch.
- Consider a CMS later if frequent content editing becomes important.


### Edit the PrimeBuild Construction concept

The construction company demo concept lives in:

```txt
src/pages/PrimeBuildConcept.jsx
```

Most editable PrimeBuild content lives in `src/data/siteContent.js` inside the `primeBuildConcept` object, including services, project case studies, before/after cards, safety and compliance copy, service areas, testimonials, FAQs and Unsplash image URLs. Update the data object first when changing company copy, service details, project examples or stock photography. Use `PrimeBuildConcept.jsx` when changing layout, modal behaviour, quote-section fields, accordion interactions or the client enquiry handoff. The construction quote section reuses the existing Netlify `project-enquiry` form and keeps file uploads as message instructions for reliability.

### Edit the UrbanBite Restaurant concept

The restaurant demo concept lives in:

```txt
src/pages/UrbanBiteConcept.jsx
```

Most editable UrbanBite content lives in `src/data/siteContent.js` inside the `urbanBiteConcept` object, including images, featured dishes, menu categories, opening hours, gallery photos, specials, reviews and FAQs. Update the data object first when changing copy, prices, menu items or stock image URLs. Use `UrbanBiteConcept.jsx` when changing layout, interactions, the gallery lightbox, menu tabs, reservation section or the client enquiry handoff.

### Edit the GlowHaus Beauty Studio concept

The beauty studio demo concept lives in:

```txt
src/pages/GlowHausConcept.jsx
```

Most editable GlowHaus content lives in `src/data/siteContent.js` inside the `glowHausConcept` object, including treatment categories, signature services, gallery images, team profiles, opening hours, reviews and FAQs. Update the data object first when changing copy, prices, service names or Unsplash image URLs. Use `GlowHausConcept.jsx` when changing layout, booking-form fields, the before/after slider, service tabs, lightbox behaviour or the client enquiry handoff. The appointment section reuses the existing Netlify `project-enquiry` form with `websiteType` set to `Beauty Studio Website Concept`.
