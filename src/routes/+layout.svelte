<script lang="ts">
	import { Footer, Header } from '$lib'
	import { colors } from '$lib/config'

	import 'open-props/style'
	import 'open-props/normalize'

	let { children } = $props()

	// set root variables
	$effect(() => {
		const root = document.documentElement || document.body

		for (const color in colors) {
			root.style.setProperty(`--${color}`, colors[color as keyof typeof colors])
		}

		window.addEventListener('pagereveal', async (e) => {
			if (e.viewTransition) {
				const transitionType = determineTransitionType(
					navigation.activation.from,
					navigation.activation.entry
				)
				e.viewTransition.types.add(transitionType)
			}
		})
	})
</script>

<div class="wrapper">
	<Header />
	<main>
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	.wrapper {
		max-width: 1000px;
		margin-inline: auto;
	}

	@media (max-width: 650px) {
		.wrapper {
			padding-inline: 1rem;
		}
	}

	:global(:where(p)) {
		padding: 0.5rem 0;
		line-height: 1.75;
		max-inline-size: 100%;
	}
</style>
