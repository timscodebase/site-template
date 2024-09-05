<script>
	import { name, description, urls } from '$lib/site-config.json'
	import { DarkModeToggle, Meta, Nav } from '$lib'
</script>

<Meta />

<header>
	<div class="logo">
		<span class="logo-span header-font">{name}</span>
		<p>{description}</p>
	</div>
	<DarkModeToggle />
	<Nav {urls} />
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		padding: 1rem;
	}

	.logo {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.logo-span {
		font-size: 2.5rem;
	}
</style>
