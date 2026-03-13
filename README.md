# @nehrom-dev/prettier-config

Reusable Prettier config for my JavaScript / TypeScript projects.

This package provides a shared Prettier setup with consistent formatting rules
and Tailwind CSS class sorting via `prettier-plugin-tailwindcss`.

## Features

- Consistent formatting across all projects
- Tailwind class sorting
- Easy setup through a single package
- Supports project-level overrides when needed

## Installation

Using Bun:

```bash
bun add -d prettier @nehrom-dev/prettier-config
```

Using npm:

```bash
npm install -D prettier @nehrom-dev/prettier-config
```

## Setup

Add the config reference to your `package.json`:

```json
{
	"prettier": "@nehrom-dev/prettier-config"
}
```

## Formatting

Run Prettier manually:

```bash
bunx prettier . --write
```

Or:

```bash
npx prettier . --write
```

## Default rules

```js
{
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "lf"
}
```

## Tailwind support

This config includes:

- `prettier-plugin-tailwindcss`

So Tailwind utility classes are automatically sorted during formatting.

## Custom overrides per project

If you need to extend or override the base config in a specific project, create
a `.prettierrc.mjs` file:

```js
import baseConfig from '@nehrom-dev/prettier-config'

/** @type {import("prettier").Config} */
export default {
	...baseConfig,
	semi: true
}
```

## License

```
MIT License

Copyright (c) 2026 nehrom-dev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
