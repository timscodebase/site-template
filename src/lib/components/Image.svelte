<script lang="ts">
	let { src, alt } = $props() as { src: string; alt: string }
</script>

<img {src} {alt} loading="lazy" />

<style>
	img {
		height: auto;
		max-width: 100%;
		object-fit: contain;
		border-radius: var(--radius-3);
		border: 2px solid var(--color-accent);
	}
</style>
