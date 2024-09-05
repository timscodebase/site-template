<script>
	import { name, description, urls } from '$lib/config'
	import { DarkModeToggle, Meta, Nav } from '$lib'
</script>

<Meta />

<header>
	<div class="logo">
		<span class="logo-span header-font">{name}</span>
		<p>{description}</p>
	</div>
	<Nav {urls} />
	<DarkModeToggle />
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
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
