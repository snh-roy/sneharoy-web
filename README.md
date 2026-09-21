
# Sneha's website

A personal website built with Vite, React, TypeScript, and Tailwind CSS. The live site is at [snh-roy.github.io/sneharoy-web](https://snh-roy.github.io/sneharoy-web/#/).

## Development

```bash
npm ci
npm run dev
```

`npm run build` creates the production site in `dist/`. `npm run deploy` builds it and publishes `dist/` to the `gh-pages` branch.

## Project layout

- `src/pages/`: the Contemporary, Curriculum Vitae, and Composition pages.
- `src/components/`: shared layout, navigation, and typewriter effect.
- `src/assets/`: images imported by React and processed by Vite.
- `public/icons/`: logos and favicon copied into the published site as static files.
- `public/.nojekyll`: keeps GitHub Pages from processing the Vite output with Jekyll.
- `config/`: Vite, Tailwind, ESLint, and app/build TypeScript configuration.

The remaining root files are entry points: npm needs `package.json` and `package-lock.json`, TypeScript discovers `tsconfig.json`, and Vite uses `index.html`. The npm scripts point Vite and ESLint to their files in `config/`.
