# Web Link Designs Portfolio

A luxury, high-end React + Vite + Tailwind CSS portfolio website for **Web Link Designs**. The site is designed for Netlify deployment and includes polished responsive layouts, animated premium UI details, editable content data, Netlify Forms support, form validation, and placeholder analytics guidance.

## 1. Install dependencies

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## 3. Build for production

```bash
npm run build
```

The production files will be created in `dist/`.

## 4. Deploy to Netlify

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

## 5. Edit website options and portfolio items

Most editable website content is stored in:

```text
src/data/siteContent.js
```

Edit this file to update:

- Website options
- Services
- Packages
- Portfolio/demo projects
- FAQs
- Contact details
- Navigation labels

For example, to add a portfolio project, add another object to the `portfolioItems` array.

## 6. Premium UI features

The latest polish pass adds:

- Mobile-only floating **Start a Project** CTA.
- Scroll progress bar at the top of the page.
- Back-to-top button after the visitor scrolls.
- Subtle animated background glow with reduced-motion support.
- More detailed placeholder project and website-option mockups.
- Larger mobile tap targets and cleaner stacked card layouts.
- Contact form validation messages and a thank-you success state.

## 7. Set up Netlify Forms

The contact form is configured for Netlify Forms:

- A hidden static form is included in `index.html` so Netlify can detect it during deployment.
- The React contact form in `src/components/Contact.jsx` posts to Netlify using the same form name: `website-enquiry`.

After deploying to Netlify:

1. Submit a test enquiry on the live site.
2. Open your Netlify dashboard.
3. Go to **Forms**.
4. Confirm submissions appear under `website-enquiry`.

No backend is required.

## 8. Add analytics later

An analytics placeholder comment is included in `index.html` inside the `<head>` tag:

```html
<!-- Analytics placeholder: paste your Google Analytics, Plausible, or other tracking script here. -->
```

Paste your Google Analytics, Plausible, or other analytics snippet there when you are ready. Do not commit real tracking IDs if the repository is public and you want to keep them private.

## Suggested improvements

- Replace placeholder portfolio mockups with optimized screenshots of real client concepts.
- Add real brand assets once the Web Link Designs visual identity is final.
- Connect a booking tool for discovery calls.
- Add a CMS later if frequent non-technical content editing becomes important.
- Add image compression and real `og:image` metadata before public launch.
- Consider adding lightweight end-to-end checks for mobile overflow and contact form validation.
