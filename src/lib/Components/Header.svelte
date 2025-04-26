<script lang="ts">
	import { NavbarMenu, HoveredLink, MenuItem, ProductItem } from '$lib/Components/ui/NavbarMenu';

	let active: string | null = null;
	let showNavbar = true;
	let scrollTimeout: ReturnType<typeof setTimeout>;

	const handleScroll = () => {
		showNavbar = false;
		clearTimeout(scrollTimeout);

		scrollTimeout = setTimeout(() => {
			showNavbar = true;
		}, 200);
	};

	// Pasang scroll listener saat komponen dimount
	import { onMount } from 'svelte';

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class="relative flex w-full items-center justify-center">
	<div
		class={`fixed inset-x-0 top-12 z-50 mx-auto max-w-2xl transition-all duration-300 ease-in-out ${
			showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
		}`}
	>
		<NavbarMenu>
			<HoveredLink href="#home">Home</HoveredLink>
			<HoveredLink href="#about">About</HoveredLink>
			<HoveredLink href="#project">Project</HoveredLink>
			<MenuItem {active} item="Contact">
				<div class="flex flex-col space-y-4 text-sm">
					<HoveredLink href="https://www.linkedin.com/in/riki-ruswandi/" target="_blank">Linkedin</HoveredLink>
					<HoveredLink href="https://github.com/rikiruswandii" target="_blank">Github</HoveredLink>
					<HoveredLink href="#">Contact Now</HoveredLink>
				</div>
			</MenuItem>
		</NavbarMenu>
	</div>
</div>
