<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	let data = $props()
	const posts = data.data.posts
</script>

<svelte:head>
	<title>{config.name} | Blog</title>
</svelte:head>

<h1>Blog</h1>
<!-- Posts -->
<section>
	<ul class="posts">
		{#each posts as post}
			<li class="post" style={`--transition-name: post-${post.slug}`}>
				<a href={`blog/${post.slug}`} class="title">
					<h2>{post.title}</h2>
					<p class="date">{formatDate(post.date)}</p>
					<p class="description">{post.description}</p>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		max-inline-size: var(--size-content-3);

		li {
			--border: var(--color-surface);

			padding: 0.5rem;
			border-radius: var(--radius-3);
			border: 2px solid var(--border);
		}

		li:hover {
			--border: var(--color-accent);
		}

		a {
			/* padding: 0.5rem; */
			text-decoration: none;
		}
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		font-size: var(--font-size-fluid-3);
		text-transform: capitalize;
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
	}
</style>
