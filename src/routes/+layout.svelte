<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<main class="container mx-auto px-4">
	<Hero />
	<About />
	<Portfolio />
	<slot />
</main>
<Footer />
