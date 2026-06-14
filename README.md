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

The contact form is configured for Netlify Forms:

- A hidden static form is included in `index.html` so Netlify can detect it during deployment.
- The React contact form in `src/components/Contact.jsx` posts to Netlify using the same form name: `website-enquiry`.

After deploying to Netlify:

1. Submit a test enquiry on the live site.
2. Open your Netlify dashboard.
3. Go to **Forms**.
4. Confirm submissions appear under `website-enquiry`.

No backend is required.

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
