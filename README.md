# Astro with Tailwind CSS, React JS and Daisy UI

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/~/github.com/mrlinnth/astro-template)

## Comes with

- [Tailwind](https://tailwindcss.com)
- [ReactJS](https://react.dev)
- [DaisyUI](https://daisyui.com)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Button.astro
│   │   └── Comments.tsx
│   ├── layouts/
│   │   └── main.astro
│   └── pages/
│       └── index.astro
│       └── playground.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## SSR vs SSG mode

Use either SSR or SSG mode by updating _astro.config.js_

```js
// SSG mode
// static site generation
// plain static html/css files
export default defineConfig({
  output: "client",
  // ...
});
```

```js
// SSR mode
// server side rendering
// node server with dynamic routes
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  // ...
});
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `yarn install`         | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:4321`      |
| `yarn build`           | Build your production site to `./dist/`          |
| `yarn preview`         | Preview your build locally, before deploying     |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help` | Get help using the Astro CLI                     |

For SSR mode, you will need to first build and then run node server.

- `yarn build`
- `node ./dist/server/entry.mjs`
