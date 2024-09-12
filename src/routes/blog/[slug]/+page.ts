import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
export const prerender = true;

export const load = (async ({ params }: { params: { slug: string } }) => {
  try {
		const post = await import(`../../../posts/${params.slug}.md`)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}) satisfies PageServerLoad;