<script lang="ts">
	import { Footer, Header } from '$lib';
	import siteConfig from '$lib/site-config.json';
	let { children } = $props();

	const colors = siteConfig.colors;
	console.log(colors);

	// set root variables
	$effect(() => {
		const root = document.documentElement || document.body;

		for (const color in colors) {
			root.style.setProperty(`--${color}`, colors[color]);
		}
	});
</script>

<Header />
<main>
	{@render children()}
</main>
<Footer />
