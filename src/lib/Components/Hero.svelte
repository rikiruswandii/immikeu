<script lang="ts">
	import { onMount } from 'svelte';
	import { PUBLIC_SITE_NAME } from '$env/static/public';
	import { fly, fade } from 'svelte/transition';
	import { WavyBackground } from './ui/WavyBackground';

	let isClient = false;
	const siteName = PUBLIC_SITE_NAME || 'Website Kami';

	onMount(async () => {
		isClient = true;
		await import('@google/model-viewer');
	});
</script>

<WavyBackground className="pb-40">
	<div
		class="py-20 text-center overflow-hidden flex flex-col justify-center items-center"
	>
		<header
			class="grid grid-cols-[auto_1fr_auto] items-center gap-4 w-full max-w-7xl mx-auto px-4 relative"
		>
			{#if isClient}
				<div class="flex justify-center">
					<model-viewer
						src="/models/icecream.glb"
						alt="3D Ice Cream"
						auto-rotate
						camera-controls
						shadow-intensity="1"
						exposure="0.9"
						disable-pan
						disable-zoom
						style="width: 300px; height: 300px; z-index: 10;"
					></model-viewer>
				</div>
			{/if}

			<h1
				in:fly={{ y: 20, duration: 800, opacity: 0 }}
				class="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-[12rem] font-bold text-transparent md:text-[12rem] antialiased float"
			>
				I'm <span>{siteName}</span>
			</h1>

			<!-- Kolom kanan kosong -->
			<div></div>
		</header>

		<article
			in:fade={{ duration: 1000 }}
			class="z-10 absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
		>
			<p class="text-xl font-normal text-neutral-300">
				EYYOO.. My Name Is <span class="font-semibold"
					>Riki Ruswandi</span
				>, Welcome To My Personal Website
			</p>
			<div class="relative inline-flex group mt-8">
				<div
					class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
				></div>
				<a
					href="/"
					title="Get quote now"
					class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
					role="button"
					>Resume
				</a>
			</div>
		</article>
	</div>
</WavyBackground>

<style>
	@keyframes float {
		0% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
		100% {
			transform: translateY(0px);
		}
	}

	.float {
		animation: float 3s ease-in-out infinite;
	}
</style>
