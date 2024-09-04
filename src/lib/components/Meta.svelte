<script>
	import { author, name, description, keywords } from '$lib/site-config.json';
</script>

<svelte:head>
	<title>{name}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content={author} />
</svelte:head>
