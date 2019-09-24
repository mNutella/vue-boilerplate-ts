# Typescript+Pug+Vue+Vuex

This template to be used for frontend applications. Written in Vue.js with Typescript and Vuex set up it is ready to be used.

Demo app used [fake REST API](https://github.com/typicode/json-server).

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Run tests
```
yarn test
```

### Compiles and minifies for production
```
yarn build
```

## TODO

- [X] Folder Structure
- [X] Demo App
- [X] Fluid Typography
- [] Tests
- [] Linters/Formaters
- [] CI
- [] Templates

## Architecture

- [Architecture](#architecture)
  - [`public`](#public)
    - [`index.html`](#indexhtml)
  - [`src`](#src)
    - [`assets`](#assets)
    - [`components`](#components)
    - [`design`](#design)
    - [`router`](#router)
    - [`state`](#state)
    - [`utils`](#utils)
    - [`app.config.json`](#appconfigjson)
    - [`app.vue`](#appvue)
    - [`main.js`](#mainjs)

## `public`

Where you'll keep any static assets, to be added to the `dist` directory without processing from our build system.

### `index.html`

This one file actually _does_ get processed by our build system, allowing us to inject some information from Webpack, such as the title, then add our JS and CSS.

## `src`

Where we keep all our source files.

### `assets`

This project manages assets via Vue CLI. Learn more about [its asset handling here](https://cli.vuejs.org/guide/html-and-static-assets.html).

### `components`

Where most of the components in our app will live.

### `design`

Where we keep our design variables and tooling.

### `router`

Where the router, routes, and any routing-related components live.

### `state`

Where all our global state management lives.

### `utils`

These are utility functions you may want to share between many files in your application. They will always be pure and never have side effects, meaning if you provide a function the same arguments, it will always return the same result. These should also never directly affect the DOM or interface with our Vuex state.

### `app.config.json`

Contains app-specific metadata.

### `app.vue`

The root Vue component that simply delegates to the router view. This is typically the only component to contain global CSS.

### `main.js`

The entry point to our app, were we create our Vue instance and mount it to the DOM.
