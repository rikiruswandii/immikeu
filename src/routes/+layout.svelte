<script lang="ts">
	import '../app.css';
	import Footer from '$lib/Components/Footer.svelte';
	import Header from '$lib/Components/Header.svelte';
	import { onMount } from 'svelte';
	import { ScrollToTop } from '$lib/Components/ui/ScrollToTop';
	import AOS from 'aos';
	import { Toaster } from "svelte-hot-french-toast"
	import 'aos/dist/aos.css';

	onMount(() => {
		AOS.init({ duration: 800, once: false });
	});
</script>

<div class="bg-black/[0.96]">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
<ScrollToTop />
<Toaster />
