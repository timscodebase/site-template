import type { LayoutLoad } from './$types'
export const prerender = true;

export const load = (async ({ url }) => {
	return {
		url: url.pathname
	}
}) satisfies LayoutLoad
