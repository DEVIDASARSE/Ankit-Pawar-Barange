# Ankit Pawar Portfolio (Next.js)

Next.js (App Router) + GSAP + Lenis. Plain JavaScript, no TypeScript.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Deploy on Vercel
Push this folder to GitHub, then Vercel -> Add New Project -> import. No build settings needed.

## Things to edit
| What | Where |
|---|---|
| Instagram / LinkedIn links, site URL | `site.config.js` (set `NEXT_PUBLIC_SITE_URL` in Vercel for SEO) |
| Hero portrait | replace `public/img/img-1.webp` (transparent-background cutout, about 1000px wide) |
| Section copy | `components/*.jsx` (Hero, About, Work, How, Industries, Proof, Path, Contact, Footer) |
| Colors, fonts, spacing | CSS variables at the top of `app/globals.css` |
| Animations, hero dots, cursor, menu, form logic | `components/Motion.jsx` |
| SEO title / description | `app/layout.js` |

## Contact form (inbox delivery)
The form posts to `app/api/contact/route.js`. Add ONE of these in Vercel -> Settings -> Environment Variables:
- `RESEND_API_KEY` + `CONTACT_TO` (your email), optional `CONTACT_FROM`
- or `CONTACT_FORWARD_URL` (Formspree endpoint), plus `WEB3FORMS_KEY` if you use Web3Forms

With none set, the site still works: it copies the visitor's message and opens your LinkedIn.
See `.env.example`. Never commit real keys.

## Notes
- Fonts are self-hosted through `@fontsource` (Instrument Serif, DM Sans, JetBrains Mono).
- Images live in `public/img` (not inlined).
- The Motion toggle is remembered in localStorage. `prefers-reduced-motion` shows the static version.
