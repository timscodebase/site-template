<script>
	let urls = $props()
	let links = urls.urls
</script>

<nav>
	<ul>
		{#each links as link}
			<li><a href={link.url}>{link.text}</a></li>
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
