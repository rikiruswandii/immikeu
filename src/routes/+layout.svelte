<script lang="ts">
	import '../app.css';
	import Header from '$lib/Components/Header.svelte';
	import Hero from '$lib/Components/Hero.svelte';
	import About from '$lib/Components/About.svelte';
	import Portfolio from '$lib/Components/Portfolio.svelte';
	import Footer from '$lib/Components/Footer.svelte';
</script>

<Header />
<main class="container mx-auto px-4">
	<Hero />
	<About />
	<Portfolio />
	<slot />
</main>
<Footer />
