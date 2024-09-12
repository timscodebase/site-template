<script lang="ts">
	let { src, alt } = $props() as { src: string; alt: string }
</script>

<img {src} {alt} loading="lazy" />

<style>
	img {
		max-width: 100%;
		height: auto;
	}
</style>
