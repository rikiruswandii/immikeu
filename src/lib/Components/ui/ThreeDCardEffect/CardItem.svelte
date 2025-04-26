<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let className: string | undefined = undefined;
	export let translateX: number | string | undefined = 0;
	export let translateY: number | string | undefined = 0;
	export let translateZ: number | string | undefined = 0;
	export let rotateX: number | string | undefined = 0;
	export let rotateY: number | string | undefined = 0;
	export let rotateZ: number | string | undefined = 0;
	export let isMouseEntered: boolean = false;

	let ref: HTMLDivElement;

	$: isMouseEntered, handleAnimations();

	const handleAnimations = () => {
		if (!ref) return;
		if (isMouseEntered) {
			ref.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
		} else {
			ref.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
		}
	};

	const handleMouseMove = (e: MouseEvent) => {
		const rect = ref.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const midX = rect.width / 2;
		const midY = rect.height / 2;

		const rotateYValue = ((x - midX) / midX) * 10; // maksimal 10 derajat ke kiri/kanan
		const rotateXValue = ((midY - y) / midY) * 10; // maksimal 10 derajat ke atas/bawah

		ref.style.transform = `
			translateZ(${translateZ}px)
			rotateX(${rotateXValue}deg)
			rotateY(${rotateYValue}deg)
			rotateZ(${rotateZ}deg)
		`;
	};
</script>

<div
	bind:this={ref}
	class={cn('w-fit transition duration-200 ease-linear', className)}
	on:mousemove={handleMouseMove}
	on:mouseenter={() => isMouseEntered = true}
	on:mouseleave={() => {
		isMouseEntered = false;
		handleAnimations();
	}}
	{...$$props}
>
	<slot />
</div>
