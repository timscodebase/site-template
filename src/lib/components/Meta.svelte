<script>
	import { author, name, description, keywords } from '$lib/config'
</script>

<svelte:head>
	<title>{name}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content={author} />
</svelte:head>
