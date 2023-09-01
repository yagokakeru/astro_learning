/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			gamon: ['Gamon', 'sans-serif'],
			disclaimer: ['Disclaimer', 'sans-serif'],
			bebas_bold: ['Bebas_Bold', 'sans-serif'],
		}
	},
	plugins: [],
}
