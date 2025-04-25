<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { Motion } from 'svelte-motion';
	import { onMount } from 'svelte';

	export let className: string | undefined = undefined;

	let isVisible = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				isVisible = entry.isIntersecting;
			},
			{ threshold: 0.3 }
		);

		const target = document.getElementById('motion-container');
		if (target) observer.observe(target);

		return () => observer.disconnect();
	});
</script>

<div
	class={cn(
		'absolute z-50 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md bg-slate-950',
		className
	)}
>
	<div id="motion-container" class="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center">
		<!-- Motion Kiri -->
		<Motion
			let:motion
			initial={{ opacity: 0.5, width: '15rem' }}
			animate={isVisible ? { opacity: 1, width: '30rem' } : { opacity: 0.5, width: '15rem' }}
			transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
			style={{ backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))` }}
		>
			<div
				use:motion
				class="bg-gradient-conic absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
			>
				<div class="absolute bottom-0 left-0 z-20 h-40 w-full bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]"></div>
				<div class="absolute bottom-0 left-0 z-20 h-full w-40 bg-slate-950 [mask-image:linear-gradient(to_right,white,transparent)]"></div>
			</div>
		</Motion>

		<!-- Motion Kanan -->
		<Motion
			let:motion
			initial={{ opacity: 0.5, width: '15rem' }}
			animate={isVisible ? { opacity: 1, width: '30rem' } : { opacity: 0.5, width: '15rem' }}
			transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
			style={{ backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))` }}
		>
			<div
				use:motion
				class="bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[30rem] from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
			>
				<div class="absolute bottom-0 right-0 z-20 h-full w-40 bg-slate-950 [mask-image:linear-gradient(to_left,white,transparent)]"></div>
				<div class="absolute bottom-0 right-0 z-20 h-40 w-full bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]"></div>
			</div>
		</Motion>

		<!-- Lapisan Background -->
		<div class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
		<div class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
		<div class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>

		<!-- Motion Lingkaran Tengah -->
		<Motion
			let:motion
			initial={{ width: '8rem' }}
			animate={isVisible ? { width: '16rem' } : { width: '8rem' }}
			transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
		>
			<div
				use:motion
				class="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
			></div>
		</Motion>

		<!-- Motion Line -->
		<Motion
			let:motion
			initial={{ width: '15rem' }}
			animate={isVisible ? { width: '30rem' } : { width: '15rem' }}
			transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
		>
			<div
				use:motion
				class="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"
			></div>
		</Motion>

		<div class="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950"></div>
	</div>

	<!-- Konten Slot -->
	<div class="relative z-50 flex -translate-y-80 flex-col items-center px-5">
		<slot />
	</div>
</div>
