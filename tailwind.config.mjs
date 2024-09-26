/** @type {import('tailwindcss').Config} */
import tailwindConfig from '@tailwindcss/typography'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#0F0505',
				accent: '#CF1917',
			},
		},
	},
	plugins: [tailwindConfig],
}