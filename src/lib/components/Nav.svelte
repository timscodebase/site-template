<script>
	let links = $props()
</script>

<nav>
	<ul>
		{#each links.links as { url, text }}
			<li><a href={url}>{text}</a></li>
		{/each}
	</ul>
</nav>

<style>
	ul {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 1rem;
	}
</style>
