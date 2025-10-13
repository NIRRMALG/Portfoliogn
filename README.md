# Portfolio Website

This is a personal portfolio website built with Next.js and TypeScript. It includes a collection of UI components, themed styles, and sections for Hero, About, Education, Projects, Skills, Achievements and Contact.

## Tech stack

- Next.js 15 (React 18)
- TypeScript
- Tailwind CSS v4
- Framer Motion, Radix UI primitives, Lucide / React Icons
- Vercel Analytics

## Prerequisites

- Node.js 18+ (stable recommended)
- pnpm (this repo uses pnpm by convention; npm / yarn may work but pnpm is recommended)

If you don't have pnpm installed:

```powershell
npm install -g pnpm
```

## Install & run (PowerShell)

```powershell
# from repository root (c:\projects\portfolio)
pnpm install
pnpm dev
# open http://localhost:3000
```

Build for production and run locally:

```powershell
pnpm build
pnpm start
```

Lint:

```powershell
pnpm lint
```

## Important files / structure

- `app/layout.tsx` - Root layout and theme provider.
- `app/page.tsx` - Home page that composes the sections.
- `components/navbar.tsx` - Site navigation header.
- `components/theme-*` - Theme provider and toggle.
- `components/sections/*` - Page sections (Hero, About, Projects, etc.).
- `components/ui/*` - Reusable UI primitives (buttons, inputs, toasts, etc.).
- `public/` - Static assets (images, logos).

## Recommended next tasks (pick one)

1. Add/edit Projects data
   - Create a small `data/projects.ts` (or JSON) and map it to `ProjectsSection` so you can manage projects easily.
2. Add contact form (serverless)
   - Add an API route (Next.js route) to send messages via email (e.g. using SendGrid) or store them in a spreadsheet.
3. Optimize images
   - Replace `<img>` with Next's `<Image />` where possible and add responsive sizes.
4. Improve SEO & meta
   - Add per-page metadata, Open Graph images, and JSON-LD structured data.
5. Accessibility pass
   - Run an axe audit and fix focus/aria issues (e.g. landmark roles, skip link visible on focus).
6. CI & deploy
   - Add a simple GitHub Actions workflow and deploy to Vercel for preview and production.

If you'd like, I can implement any one of the above (or multiple). Tell me which task you want done next and I'll implement it.

## How I tested locally

- I inspected `package.json`, `app/*` and the `components/` directory to learn the project's structure and confirm available npm scripts.

## Notes / Assumptions

- This README assumes you use `pnpm` as the package manager (the repo contains `pnpm-lock.yaml`).
- The project currently uses `next` and React versions from `package.json`. If you want me to add or change build/test steps, say which target environment or CI you prefer.

---

If you'd like, I can now:
- scaffold a `data/projects.ts` and wire it into `ProjectsSection` so you can add projects quickly, or
- add a contact API route and a simple form handler, or
- create a minimal GitHub Actions workflow for build checks.

Which would you like me to implement next?

## Changing the profile photo

To change the profile photo shown on the Hero section:

1. Replace the file `public/portrait-ai-student.jpg` with your new image. Keep the same filename to avoid code changes.
2. Or, add a new file in `public/` (for example `public/me.jpg`) and update the `src` prop on the `ProfileImage` component used in `components/sections/hero-section.tsx`.

Example: open `components/sections/hero-section.tsx` and change:

```tsx
<ProfileImage src="/portrait-ai-student.jpg" alt="Portrait of Nirrmal G" />
```

to:

```tsx
<ProfileImage src="/me.jpg" alt="My portrait" />
```

The `ProfileImage` component (in `components/profile-image.tsx`) uses Next's `Image` component and accepts `width`, `height`, and `priority` props for optimization.