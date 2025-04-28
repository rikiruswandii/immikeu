<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let className: string | undefined = undefined;
	export let containerClassName: string | undefined = undefined;
</script>

<div
	class={cn('w-full flex items-center justify-center', containerClassName)}
	style="perspective: 1000px;"
>
	<div
		class={cn(
			'relative flex items-center justify-center transition-all duration-200 ease-linear',
			className
		)}
		style="transform-style: preserve-3d;"
	>
		<slot />
	</div>
</div>
