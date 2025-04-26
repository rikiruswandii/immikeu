<script lang="ts">
	import '../app.css';
	import Hero from '$lib/Components/Hero.svelte';
	import About from '$lib/Components/About.svelte';
	import Portfolio from '$lib/Components/Portfolio.svelte';
	import Footer from '$lib/Components/Footer.svelte';
	import Header from '$lib/Components/Header.svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	// Inisialisasi AOS saat mount
	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init({
			duration: 800, // durasi animasi (ms)
			once: false // animasi hanya sekali
		});
	});
</script>

<div class="bg-black/[0.96]">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
