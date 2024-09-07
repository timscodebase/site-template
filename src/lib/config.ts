import { dev } from '$app/environment'

export const url = dev ? 'http://localhost:5713' : 'site-template-gamma.vercel.app'

export const name = 'Site Name'
export const description = 'Site Description'
export const author = 'Tim Smith <gonad2019@gmail.com'
export const keywords = ['svelte', 'kit', 'sveltekit', 'site', 'template']
export const colors = {
	'color-surface-light': '#F2E6DF',
	'color-surface-dark': '#070F26',
	'color-text-light': '#070F26 ',
	'color-text-dark': '#F2E6DF',
	'color-accent-dark': '#D97E6A',
	'color-accent-light': '#9E5C4E',
	'color-success-dark': '#00C700',
	'color-success-light': '#008B00',
	'color-error-dark': '#E24000',
	'color-error-light': '#8C2800',
	'color-warning-dark': '#C4BD00',
	'color-warning-light': '#8A8600',
	'color-toggle-dark': '#F2E6DF',
	'color-toggle-light': '#070F26'
}
export const nav_links = [
	{ url: '/', text: 'Home' },
	{ url: '/about', text: 'About' },
	{ url: '/contact', text: 'Contact' },
	{ url: '/blog', text: 'Blog' }
]
