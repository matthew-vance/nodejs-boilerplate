# Node.js Boilerplate

Node.js boilerplate with settings for ESM, pnpm, TypeScript, esbuild, ESLint, Prettier, and more.

## Requirements

### Node.js

I suggest using [fnm](https://github.com/Schniz/fnm) to manage Node.js versions. This can utilise the `.node-version` file to automatically switch Node.js versions when entering the directory.

### pnpm

[pnpm](https://pnpm.io/) is included with corepack which must be enabled by running `corepack enable`. corepack is included with modern Node.js versions.

## TypeScript + ESM

To enable ESM set the `type` field in `package.json` to `module`.

```json
{
  // ...other properties
  "type": "module"
  // ...other properties
}
```

In `tsconfig.json`, set the `module` field to `ESNext` and `moduleResolution` to `Bundler`.

```json
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "Bundler"
  }
}
```

## pnpm

pnpm does not support pre and post install scripts out of the box. Adding a `.npmrc` file containing `enable-pre-post-scripts=true` enables them.

## esbuild

esbuild brings some benifits that ease the use of ESM with TypeScript.

- It resolves path aliases defined in `tsconfig.json` without extra configuration.
- It removes the need to include `.js` extension in imports.

It's also much faster than `tsc` but it does not perform type checking so it is import that that is done separately.

## tsx

tsx allows running TypeScript files directly with Node.js. It is based on esbuild and has the same advantages. It replaces the need for ts-node and nodemon as a hot-reloading development server.

## ESLint + Prettier

ESLint is configured to use Prettier for formatting. The `eslint-config-prettier` package is used to disable all formatting rules that may conflict with Prettier.

ESLint is configured to use TypeScript parser and plugin with strict rules. Import and object property ordering is also enforced.

## Resources

https://www.totaltypescript.com/build-a-node-app-with-typescript-and-esbuild
https://www.totaltypescript.com/tsconfig-cheat-sheet
