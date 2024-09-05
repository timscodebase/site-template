<script>
	import * as config from '$lib/config'
	import { DarkModeToggle, Meta, Nav } from '$lib'

	const links = config.nav_links
</script>

<Meta />

<header>
	<div class="logo">
		<span class="logo-span header-font">{config.name}</span>
		<p>{config.description}</p>
	</div>
	<Nav {links} />
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
