<script lang="ts">
	import '../app.css';
	import Footer from '$lib/Components/Footer.svelte';
	import Header from '$lib/Components/Header.svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	let { children } = $props();

	// Inisialisasi AOS saat mount
	import { onMount } from 'svelte';
	import { ScrollToTop } from '$lib/Components/ui/ScrollToTop';
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
		{@render children()}
	</main>
	<Footer />
</div>
<ScrollToTop />