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
	}

	@media (max-width: 650px) {
		header {
			flex-direction: column;
		}
	}

	.logo {
		display: flex;
		flex-direction: column;

		p {
			margin: 0;
			margin-top: -8px;
		}
	}

	.logo-span {
		font-size: 2.5rem;
	}
</style>
