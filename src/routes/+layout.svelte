<script lang="ts">
	import '../app.css';
	import Header from '$lib/Components/Header.svelte';
	import Hero from '$lib/Components/Hero.svelte';
	import About from '$lib/Components/About.svelte';
	import Portfolio from '$lib/Components/Portfolio.svelte';
	import Footer from '$lib/Components/Footer.svelte';
</script>

<div class=" bg-surface-light dark:bg-surface-dark">
	<Header />
	<main>
		<Hero />
		<About />
		<Portfolio />
		<slot />
	</main>
	<Footer />
</div>
