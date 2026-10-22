# Central Mississippi Oral & Maxillofacial Surgery — Blueprint WebStudio Concept

Independent, non-official redesign concept for https://www.kylehuntdmd.com/ (Dr. Kyle T. Hunt, DMD, Jackson, MS).
Preview: https://cmos.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom one-page build. Content and layout are in `src/App.jsx`, styles in `src/styles.css`, and the Blueprint WebStudio concept widget in `src/concept.jsx`.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `central-mississippi-oral-surgery` (framework: Vite, team mrwerner-s-projects). Pushes to `main` deploy automatically.
Domain `cmos.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (all optional): `VITE_CONCEPT_END_DATE` (countdown end, defaults to 2026-11-30). The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site. `api/google-reviews.js` and `api/contact.js` are included from the shared scaffold but not used by the page.

## Design

- Logo: their Mississippi-state logo, used as-is (made transparent) in the header. The state outline was traced from the logo mark and is the site's motif; the favicon is that state with the Jackson star.
- Palette: the logo's black, deepened to a blue-black ink and navy, plus the light cyan from the current site's buttons, deepened to a river blue for readable text. Added a mist neutral and a warm magnolia cream for the doctor section.
- Fonts: Newsreader (serif headings with italic accents) and Figtree (body). Calm, clinical-premium feel: lots of white space, hairlines, no stock-icon clutter.
- Motif: the hero photo is their own Mississippi River image clipped into the state shape, with a pulsing star on Jackson and a "You are here" card for the St. Dominic West Tower office. Star bullets, contour rings, and a drawn state map in the contact block.
- Section order: status bar (live open/closed in Central time, phone) → header with "Register online" → hero (registration + phone CTAs, key facts) → New patients band (register online, print the policy PDF, what to bring) → Procedures (7 tabs with photo and key points) → Meet Dr. Hunt (timeline, credentials, collapsible dental school honors, referring-dentist note) → Your visit (consultation / before IV sedation / after surgery tabs) → Insurance & payment → Patient words → Visit & contact → footer.

## What changed from the current site

- The hero is only the words "ONLINE PATIENT REGISTRATION" over a dark river photo, with no practice name, doctor or phone; the concept opens with who they are, what they do and two clear buttons.
- The header email and phone wrap mid-word at 1280px ("cmoms123@gm / ail.com", "601-981- / 3111"); fixed.
- The homepage source contains four leftover "Button" placeholder labels; removed.
- Insurance information conflicts between pages (see below); the concept shows one list and asks patients to call to confirm.
- Typos on the contact page ("Mississipi", "builiding") fixed.
- The long post-op and pre-op instructions are kept but shortened into tabs; Dr. Hunt's long award paragraph is collapsed behind a toggle.
- Checked at 1280px and 390px with no sideways scrolling.

## Owner should confirm

- Insurance: the patient-information page lists in-network plans as Always Care, Cigna Dental, Delta Dental, Guardian, United Health Care CHIP and Aetna, but the financial policy and the oral-surgery page say "Delta Dental, CHIP, and Medicaid". Which list is current, and is Medicaid accepted?
- The online registration link (mysecurepractice.com Truform) and the Financial & Office Policy PDF link are copied from the current site; confirm both still work.
- "Same-day when possible" for pain or emergencies is from their scheduling text; confirm they want it in the hero.
- The concept says Dr. Hunt has cared for patients "since 2010" (he joined the practice in July 2010). The practice's own founding year is not stated on the site.
- The one testimonial without a name is labelled "Patient". All four testimonials are copied word for word from the current homepage; no Google rating is shown, only a link to their Google listing.
- The email shown is cmoms123@gmail.com (used site-wide); the site also links kylehuntdmd@gmail.com in one place. Which should be public?
- The current site has English/Spanish procedure videos (Vimeo); they were left out of the concept. Add them back if wanted.
- Logo: only a small 322×112 JPG exists on the site. A vector or high-resolution version would look sharper.

## Photo sources

All photos are from kylehuntdmd.com (the river hero, Dr. Hunt's portrait and the procedure images). Most of the procedure images appear to be licensed stock (Getty/Adobe filenames); confirm the license covers a new site or replace them with original photos before launch.
