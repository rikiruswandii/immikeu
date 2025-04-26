<script lang="ts">
	import { onMount } from 'svelte';
	import { PUBLIC_SITE_NAME } from '$env/static/public';
	import { fly, fade } from 'svelte/transition';
	import { WavyBackground } from './ui/WavyBackground';

	let isClient = false;
	const siteName = PUBLIC_SITE_NAME || 'Mikeu';

	onMount(async () => {
		isClient = true;
		await import('@google/model-viewer');
	});
</script>

<WavyBackground blur={8} className="pb-40">
	<section
		id="#home"
		class="py-20 text-center flex flex-col justify-center items-center"
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
			<p class="max-w-9xl text-2xl font-normal text-neutral-300">
				EYYOO.. My Name Is <span class="font-semibold">Riki Ruswandi</span>, Welcome To My Personal
				Website
			</p>
			<!-- Tombol Demo -->
			<div class="flex justify-center mt-8">
				<div class="relative inline-flex group">
					<div
						class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
					></div>

					<a
						href="/"
						role="button"
						class="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
					>
						<span class="absolute inset-0 overflow-hidden rounded-full">
							<span
								class="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
							></span>
						</span>
						<div
							class="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-3 px-7 ring-1 ring-white/10"
						>
							<span class="text-xl text-neutral-300">Resume</span>
							<svg
								width="24"
								height="24"
								viewBox="0 0 16 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									d="M10.75 8.75L14.25 12L10.75 15.25"
								></path>
							</svg>
						</div>
						<span
							class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"
						></span>
					</a>
				</div>
			</div>
		</article>
	</section>
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
