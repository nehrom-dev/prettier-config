/**
 * @type {import("prettier").Config}
 */
const config = {
	printWidth: 80,
	tabWidth: 2,
	useTabs: true,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	trailingComma: 'none',
	bracketSpacing: true,
	arrowParens: 'avoid',
	endOfLine: 'lf',
	htmlWhitespaceSensitivity: 'ignore',
	singleAttributePerLine: true,
	bracketSameLine: false,
	proseWrap: 'always',
	plugins: ['prettier-plugin-tailwindcss']
}

export default config
