<script lang="ts">
	import { Footer, Header } from '$lib'
	import { colors } from '$lib/config'
	let { children } = $props()

	// set root variables
	$effect(() => {
		const root = document.documentElement || document.body

		for (const color in colors) {
			root.style.setProperty(`--${color}`, colors[color])
		}
	})
</script>

<Header />
<main>
	{@render children()}
</main>
<Footer />
