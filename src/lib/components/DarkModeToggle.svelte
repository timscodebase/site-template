<script lang="ts">
	let isDarkMode = $state(true)

	$effect(() => {
		const toggleSwitch = document.querySelector(
			'.theme-switch input[type="checkbox"]'
		) as HTMLInputElement
		const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null

		if (currentTheme) {
			document.documentElement.setAttribute('data-theme', currentTheme)

			if (currentTheme === 'dark') {
				if (toggleSwitch) {
					toggleSwitch.checked = true
				}
			}
		}

		function switchTheme(e: any) {
			if (e.target.checked) {
				document.documentElement.setAttribute('data-theme', 'dark')
				localStorage.setItem('theme', 'dark')
				isDarkMode = true
			} else {
				document.documentElement.setAttribute('data-theme', 'light')
				localStorage.setItem('theme', 'light')
				isDarkMode = false
			}
		}

		toggleSwitch?.addEventListener('change', switchTheme, false)
	})
</script>

<div class="theme-switch-wrapper">
	<label class="theme-switch" for="checkbox">
		<input type="checkbox" id="checkbox" />
		<div class="slider round"></div>
	</label>
	{#if isDarkMode}
		<em><iconify-icon icon="fe:sunny-o"></iconify-icon></em>
	{:else}
		<em><iconify-icon icon="fe:moon"></iconify-icon></em>
	{/if}
</div>

<style>
	.theme-switch-wrapper {
		display: grid;
		place-items: center;
		justify-content: center;
		grid-template-columns: auto 1fr;
		height: 24px;

		em {
			display: grid;
			place-items: center;
			justify-content: center;
			margin-left: 10px;
			font-size: 1.5rem;
			color: var(--color-accent);
			font-weight: 600;
		}
	}
	.theme-switch {
		display: inline-block;
		height: 24px;
		position: relative;
		width: 40px;
	}

	@media (max-width: 650px) {
		.theme-switch {
			height: 12px;
			width: 20px;
		}

		.theme-switch-wrapper {
			em {
				font-size: 1rem;
			}
		}
	}

	.theme-switch input {
		display: none;
	}

	.slider {
		background-color: var(--color-toggle-light);
		bottom: 0;
		cursor: pointer;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		transition: 0.4s;
	}

	.slider:before {
		--offset: 2px;
		--size: 20px;

		position: absolute;
		left: var(--offset);
		bottom: var(--offset);

		content: '';
		transition: 0.4s;
		width: var(--size);
		height: var(--size);
		font-size: calc(var(--size) / 2);
		background-color: var(--color-accent);
	}

	@media (max-width: 650px) {
		.slider:before {
			--offset: 1px;
			--size: 10px;
		}
	}

	input:checked + .slider {
		background-color: var(--color-toggle);
	}

	input:checked + .slider:before {
		transform: translateX(16px);
	}

	@media (max-width: 650px) {
		input:checked + .slider:before {
			transform: translateX(8px);
		}
	}

	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
