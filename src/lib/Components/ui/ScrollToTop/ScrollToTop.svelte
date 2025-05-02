<script>
	import { onMount } from 'svelte';
	import { AnimatedTooltip } from '../AnimatedTooltip';
	import { Icon } from 'svelte-icons-pack';
	import { BsArrowUpCircle } from 'svelte-icons-pack/bs';

	let isVisible = false;

	const checkScroll = () => {
		isVisible = window.scrollY > 800;
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	onMount(() => {
		window.addEventListener('scroll', checkScroll);
		return () => window.removeEventListener('scroll', checkScroll);
	});
</script>

<div class="fixed bottom-8 right-8 z-50" aria-label="Scroll to top">
	{#if isVisible}
		<div
			data-aos="fade-up"
			data-aos-duration="1000"
			data-aos-delay="100"
			data-aos-offset="100"
			data-aos-easing="ease-in-out"
			class="relative inline-flex group transition-opacity duration-500 opacity-100"
		>
			<div
				class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
			></div>

			<AnimatedTooltip text="Scroll to top">
				<button
					on:click={scrollToTop}
					class="relative inline-block p-px bg-slate-800 rounded-md shadow-2xl shadow-zinc-900 text-white text-xs font-semibold leading-6 cursor-pointer group"
				>
					<span class="absolute inset-0 overflow-hidden rounded-full">
						<span
							class="absolute inset-0 rounded-md bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
						></span>
					</span>
					<div class="relative z-10 flex items-center space-x-2 rounded-md bg-zinc-950 px-3 py-3 ring-1 ring-white/10">
						<Icon src={BsArrowUpCircle} color="#ffffff" size="2em" />
					</div>
					<span
						class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"
					></span>
				</button>
			</AnimatedTooltip>
		</div>
	{/if}
</div>
