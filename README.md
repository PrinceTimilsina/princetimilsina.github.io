# Prince Timilsina — Portfolio

A dark, sticker-and-orbit themed developer portfolio built with React (Vite), Tailwind CSS, Framer Motion, and React Router.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Structure

- `src/pages` — Home, Projects, Project detail, Achievements, About, Contact
- `src/components` — Navbar, custom cursor, sticker tags, project cards, loader, reveal-on-scroll wrapper
- `src/data` — project and achievement content (edit here to update copy)
- `src/hooks` — theme (dark/light, persisted to localStorage) and cursor-variant context

## Notes

- Dark/light mode toggle persists via `localStorage` (top right of the nav).
- Custom cursor is disabled automatically on touch devices.
- Placeholder contact details (email/GitHub/LinkedIn) live in `src/pages/Contact.jsx` — swap in your real links.
