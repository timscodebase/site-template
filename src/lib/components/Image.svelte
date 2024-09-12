<script lang="ts">
	let { src, alt } = $props() as { src: string; alt: string }
</script>

<img {src} {alt} loading="lazy" />

<style>
	img {
		height: auto;
		max-width: 100%;
		aspect-ratio: 16 / 9;
		background-size: contain;
	}
</style>
