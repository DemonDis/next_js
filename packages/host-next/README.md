# host

## Getting Started

First, run the development server:

```bash
npm run start
# or
yarn start
```

```js
  "scripts": {
    "start": "npm run open-browser && next dev -p 9001",
    "open-browser": "open http://localhost:9001"
  },
```

```js
({
  type: 'Application',
  typeweb: 'SSR',
  toolsbuild: 'Webpack5',
  name: 'host',
  port: '9001',
  framework: 'next',
  language: 'JavaScript',
  css: 'CSS',
})
```