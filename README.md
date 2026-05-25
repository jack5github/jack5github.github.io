# https://jack5github.github.io

## Project Index

```yaml
- public/ # Static assets (e.g., images, favicon, robots.txt)
- src/: # Dynamic content
  - components/ # Page building blocks
  - pages/: # Page contents
    - index.astro # Home page
    - *.astro/md # Other pages, URL generated from filename
```

## Development

- [Install Node.js](https://nodejs.org/en/download)
- `npm install` - Install dependencies
- [VSCodium](https://vscodium.com/) extensions:
  - [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
  - [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- `npm run dev` - Host locally at http://localhost:4321
- `npm run build` & `npm run preview` - Test before deploying
- [Astro docs](https://docs.astro.build/en/basics/astro-pages/)
