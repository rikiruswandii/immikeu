<script lang="ts">
	import ThemeSwitch from '$lib/ThemeSwitch/ThemeSwitch.svelte';
	import { PUBLIC_SITE_NAME } from '$env/static/public';
	const siteName = PUBLIC_SITE_NAME || 'Mikeu';
</script>

<nav
	class="bg-[var(--color-background-light)] dark:bg-[var(--color-background-dark)] shadow sticky top-0 z-101"
>
	<div class="container mx-auto flex items-center justify-between px-6 py-4">
		<h1
			class="text-xl font-bold text-[var(--color-primary-light)] dark:text-[var(--color-primary-dark)]"
		>
			{siteName}
		</h1>
		<ul class="flex space-x-6">
			<li>
				<a
					href="#about"
					class="hover:text-[var(--color-primary-dark)] text-[var(--color-text-primary-light)] dark:text-[var(--color-text-primary-dark)] dark:hover:text-[var(--color-primary-light)]"
				>
					Tentang
				</a>
			</li>
			<li>
				<a
					href="#portfolio"
					class="hover:text-[var(--color-primary-dark)] text-[var(--color-text-primary-light)] dark:text-[var(--color-text-primary-dark)] dark:hover:text-[var(--color-primary-light)]"
				>
					Karya
				</a>
			</li>
			<li>
				<a
					href="#kontak"
					class="hover:text-[var(--color-primary-dark)] text-[var(--color-text-primary-light)] dark:text-[var(--color-text-primary-dark)] dark:hover:text-[var(--color-primary-light)]"
				>
					Kontak
				</a>
			</li>
		</ul>
		<ThemeSwitch />
	</div>
</nav>
