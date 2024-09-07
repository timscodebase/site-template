<script>
	import * as config from '$lib/config'
	import { DarkModeToggle, Meta, Nav } from '$lib'

	const links = config.nav_links
</script>

<Meta />

<header>
	<a href="/">
		<div class="logo">
			<span class="logo-span header-font">{config.name}</span>
			<p>{config.description}</p>
		</div>
	</a>
	<Nav {links} />
	<DarkModeToggle />
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 3px solid var(--color-accent);
		margin-bottom: 2rem;
		padding-bottom: 1rem;

		margin-bottom: 1rem;

		a {
			text-decoration: none;
			color: var(--text);
		}
	}

	@media (max-width: 1000px) {
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

	@media (max-width: 1000px) {
		.logo {
			align-items: center;

			p {
				margin-bottom: 0.5rem;
			}
		}
	}

	.logo-span {
		font-size: 2.5rem;
	}
</style>
