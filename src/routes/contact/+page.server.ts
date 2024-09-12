import type { PageLoad } from './$types';
import { fail } from '@sveltejs/kit';

export const load = (async () => {
    return {};
}) satisfies PageLoad

/** @type {import('./$types').Actions} */
export const actions = {
	contact: async ({ cookies, request, url }) => {
		// TODO Contact form submission
    const data = await request.formData();

    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    console.log(name, email, message);

    if (!name) {
      return fail(400, { name, missing: true });
    }

    if (!email) {
      return fail(400, { email, missing: true });
    }

    if (!message) {
      return fail(400, { message, missing: true });
    }

    return { success: true };
	}
} ;