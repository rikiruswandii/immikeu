<script lang="ts">
	import { Motion, useTransform, AnimatePresence, useMotionValue, useSpring } from 'svelte-motion';

	export let text: string;
	export let subtext: string = '';
	export let offsetY: number = 16; // jarak tooltip dari elemen
	export let placement: 'top' | 'bottom' = 'top';

	let hovered = false;
	const springConfig = { stiffness: 100, damping: 5 };
	const x = useMotionValue(0);

	const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
	const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

	function handleMouseMove(event: MouseEvent) {
		const halfWidth = (event.target as HTMLElement)?.offsetWidth / 2;
		x.set(event.offsetX - halfWidth);
	}
</script>

<div
	class="relative inline-block"
	on:mouseenter={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
	on:mousemove={handleMouseMove}
>
	<slot />
	<!-- Ini untuk membungkus konten apapun -->

	<AnimatePresence show={hovered}>
		<Motion
			let:motion
			initial={{ opacity: 0, y: 20, scale: 0.6 }}
			animate={{
				opacity: 1,
				y: 0,
				scale: 1,
				transition: {
					type: 'spring',
					stiffness: 260,
					damping: 10
				}
			}}
			exit={{ opacity: 0, y: 20, scale: 0.6 }}
			style={{
				translateX: translateX,
				rotate: rotate,
				whiteSpace: 'nowrap'
			}}
		>
			<div
				use:motion
				class="absolute -left-1/2 -top-16 z-50 flex translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
			>
				<div
					class="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
				></div>
				<div
					class="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent"
				></div>
				<div class="relative z-30 whitespace-nowrap text-base font-bold text-white">
					{text}
				</div>
			</div>
		</Motion>
	</AnimatePresence>
</div>
