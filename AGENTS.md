# Project decisions

- Use local `src/assets` and `public` files for all production media and remove hosted-project asset pointers so static deployments work without platform infrastructure.
- Keep Vite configuration limited to React support and standard path aliases so the project remains portable across Vercel, Netlify, and GitHub Pages.