
import type { Post } from '$lib/types'

// async function getPosts() {
// 	let posts: Post[] = []

// 	const paths = import.meta.glob('/src/posts/*.md', { eager: true })

// 	console.log("Paths: ", paths)

// 	// for (const path in paths) {
// 	// 	const file = paths[path]
// 	// 	const slug = path.split('/').at(-1)?.replace('.md', '')

// 	// 	if (file && typeof file === 'object' && 'metadata' in file && slug) {
// 	// 		const metadata = file.metadata as Omit<Post, 'slug'>
// 	// 		const post = { ...metadata, slug } satisfies Post
// 	// 		post.published && posts.push(post)
// 	// 	}
// 	// }

// 	// posts = posts.sort((first, second) =>
//   //   new Date(second.date).getTime() - new Date(first.date).getTime()
// 	// )

// 	return posts
// }

import { json } from '@sveltejs/kit';

export async function GET() {
    const paths = import.meta.glob('/src/posts/*.md', { eager: true });

    console.log("Paths: ", paths);

    const posts = Object.keys(paths).map((path) => {
        const file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.md', '');

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Post, 'slug'>;
            const post = { ...metadata, slug } satisfies Post;
            return post.published ? post : null;
        }
        return null;
    }).filter(Boolean);

    const sortedPosts = posts.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
    );

    return json(sortedPosts);
}