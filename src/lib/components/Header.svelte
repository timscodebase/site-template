<script>
	import { name, description } from '$lib/site-config.json';
	import { DarkModeToggle, Meta } from '$lib';
</script>

<Meta />

<header>
	<span class="logo header-font">{name}</span>
	<p>{description}</p>
	<DarkModeToggle />
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>

<style>
	.logo {
		font-size: 2.5rem;
	}
</style>
