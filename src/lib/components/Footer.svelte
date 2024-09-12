<script>
	import { name, description } from '$lib/config'
</script>

<footer>
	<p>&copy; {new Date().getFullYear()} {name}</p>
</footer>

<style>
	footer {
		border-top: 2px solid var(--color-accent);
		margin-top: 2rem;
		padding-top: 1rem;
		text-align: center;
	}

	p {
		width: 100%;
		margin: 0;
		padding: 0;
		margin: 0 auto;
	}
</style>
