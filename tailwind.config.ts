import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'dark-bg': '#1a1a2e',
				'purple-accent': '#6b728e',
				'blue-accent': '#4b5eea',
			},
		},
	},
	plugins: [],
} satisfies Config
