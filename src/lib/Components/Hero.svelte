<script lang="ts">
	import { PUBLIC_SITE_NAME } from '$env/static/public';
	import { fly, fade } from 'svelte/transition';
	import { WavyBackground } from './ui/WavyBackground';
	import { AnimatedTooltip } from './ui/AnimatedTooltip';

	const siteName = PUBLIC_SITE_NAME || 'Mikeu';
	const letters = siteName.split('');
</script>

<WavyBackground blur={15} className="pb-40">
	<section id="#home" class="py-20 text-center flex flex-col justify-center items-center relative">
		<div class="flex flex-col items-center justify-center relative mt-20 sm:mt-40 md:mt-60">
			<header
				class="grid grid-cols-[auto_1fr_auto] items-center gap-4 w-full max-w-7xl mx-auto relative"
			>
				<h1
					data-aos="fade-left"
					data-aos-duration="1000"
					data-aos-delay="100"
					data-aos-offset="100"
					data-aos-easing="ease-in-out"
					in:fly={{ y: 20, duration: 800, opacity: 0 }}
					class="box-decoration-slice bg-gradient-to-r from-blue-400 to-pink-500 text-white px-8 text-center text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold rounded-lg text-nowrap float -rotate-45 z-10"
				>
					I'm
				</h1>
				{#each letters as letter, index}
					<h1
						data-aos="fade-up"
						data-aos-duration="1000"
						data-aos-delay={index * 100}
						data-aos-offset="100"
						data-aos-easing="ease-in-out"
						in:fly={{ y: 20, duration: 800, opacity: 0 }}
						class="box-decoration-slice bg-gradient-to-r from-blue-400 to-pink-500 text-white px-4 text-center text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold rounded-lg text-nowrap float"
						style={index === 2 ? 'z-index: 20;' : ''}
					>
						<span>{letter}</span>
					</h1>
				{/each}
			</header>

			<article in:fade={{ duration: 1000 }} class="max-w-full mt-10">
				<p
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="150"
					data-aos-offset="100"
					data-aos-easing="ease-in-out"
					class="text-xl sm:text-xl md:text-5xl lg:text-6xl font-bold text-surface-light text-shadow-lg text-nowrap"
				>
					EYYOO.. My Name Is <strong
						class="text-blue-300 underline decoration-solid decoration-pink-400"
						>Riki Ruswandi</strong
					>,
				</p>
				<p
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="180"
					data-aos-offset="100"
					data-aos-easing="ease-in-out"
					class="text-xl sm:text-xl md:text-5xl lg:text-6xl font-bold text-surface-light text-shadow-lg text-nowrap"
				>
					Welcome To My Personal Website
				</p>
				<!-- Tombol Demo -->
				<div
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="200"
					data-aos-offset="100"
					data-aos-easing="ease-in-out"
					class="flex justify-center mt-8"
				>
					<div class="relative inline-flex group">
						<div
							class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
						></div>
						<AnimatedTooltip text="My resume page">
							<a
								href="/#about"
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
									<span class="text-xl text-neutral-300">Start</span>
									<svg
										width="24"
										height="24"
										viewBox="0 0 16 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path stroke="currentColor" d="M10.75 8.75L14.25 12L10.75 15.25"></path>
									</svg>
								</div>
								<span
									class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"
								></span>
							</a>
						</AnimatedTooltip>
					</div>
				</div>
			</article>
		</div>
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
