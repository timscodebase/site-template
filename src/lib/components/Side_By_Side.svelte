<script lang="ts">
	export let children
</script>

<div class="side-by-side">
	{@render children()}
</div>

<style>
	.side-by-side {
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
		gap: 1rem;
		margin: 1rem 0;

		overflow: hidden;
		border-radius: var(--radius-3);
		border: 2px solid var(--color-accent);
	}

	:global(.side-by-side p) {
		margin: 0;
		padding-left: 1.5rem;
	}

	:global(.side-by-side img) {
		height: 100%;
		width: auto;
		max-width: 100%;
		aspect-ratio: 16 / 9;

		object-fit: cover;
	}
</style>
