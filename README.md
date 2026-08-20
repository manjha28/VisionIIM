# VisionIIM

A production-ready static React/Vite implementation for the VisionIIM landing page with a Google Sheets-backed application form.

> Figma access note: the supplied Figma URL was not publicly inspectable from this environment, so exact exported assets, fonts, and measurements could not be retrieved. The implementation uses a faithful VisionIIM-branded layout, CSS-created visual elements, and documented placeholders rather than random stock imagery. Replace or refine the UI tokens with exact Figma values when design access is available.

## Local development

```bash
npm install
npm run dev
```

Create a local `.env` from `.env.example`:

```bash
cp .env.example .env
```

Set `VITE_GOOGLE_SCRIPT_URL` to the Google Apps Script `/exec` Web App URL.

## Production build

```bash
npm run build
npm run preview
```

The Vite production base path is fixed to `/VisionIIM/` because this repository is deployed at `https://manjha28.github.io/VisionIIM/`.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` installs dependencies, builds the site, uploads `dist`, and deploys to GitHub Pages on pushes to `main`.

1. Enable GitHub Pages with **GitHub Actions** as the source.
2. Add repository variable `VITE_GOOGLE_SCRIPT_URL` containing the Apps Script `/exec` URL.
3. Push to `main`.


## Missing Figma/PDF image assets

The repository does not currently contain the photographic assets shown in `VisionIIM.pdf`. To avoid silently substituting unrelated stock imagery, the site uses clearly labeled CSS placeholders in those image slots. Export and replace these assets from Figma/PDF for pixel-level fidelity:

- Hero IIM students campus image.
- Free profile assessment student-with-analytics image.
- Four program-card images: CAT prep student, counselling conversation, resume review, and IIM panel interview.
- Get-in-touch woman image.
- Final CTA student collage.
- Footer campus line-art background.

## Form fields and Google Sheet columns

Frontend fields: full name, email address, phone number, target exam/interview, and optional message. The sheet stores: `Timestamp`, `Submission ID`, `Name`, `Email`, `Phone`, `Target`, `Message`, `Page`, and `User Agent`.

## Connecting the form

See `google-apps-script/README.md` for the full setup. The frontend uses `FormData` with `fetch(..., { mode: 'no-cors' })` to avoid Google Apps Script CORS preflight failures. Because `no-cors` responses are opaque, a completed network send displays success; validation failures should also be monitored in the Google Sheet during setup.

## Deployment blank-page diagnostics

The GitHub Pages build must emit asset URLs under `/VisionIIM/assets/...`. If `dist/index.html` references `/assets/...`, the app will render a blank page on GitHub Pages because the JavaScript bundle is requested from the domain root instead of the repository path.

## QA checklist

- [ ] Confirm exact Figma typography, spacing, and assets once Figma inspection access is available.
- [ ] Test responsive widths: 1440, 1280, 1024, 768, 390, and 375 px.
- [ ] Submit a valid form and verify a sheet row is appended.
- [ ] Submit invalid email/phone and verify accessible errors.
- [ ] Confirm GitHub Pages URL loads assets under `/VisionIIM/assets/...`.
- [ ] Confirm optional email notification after setting `SEND_NOTIFICATION_EMAIL = true`.
