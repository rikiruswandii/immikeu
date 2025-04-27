<script lang="ts">
	import { fade } from 'svelte/transition';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faJs, faHtml5, faCss3Alt, faNodeJs } from '@fortawesome/free-brands-svg-icons';
	import { faS } from '@fortawesome/free-solid-svg-icons';

	const techs = [
		{ icon: faS, name: 'Svelte' },
		{ icon: faJs, name: 'JavaScript' },
		{ icon: faHtml5, name: 'HTML5' },
		{ icon: faCss3Alt, name: 'CSS3' },
		{ icon: faNodeJs, name: 'Node.js' }
	];
</script>

<section class="py-16 bg-gray-50" id="techstack">
	<div class="max-w-6xl mx-auto px-4">
		<h2 class="text-4xl font-bold text-center mb-12" in:fade={{ duration: 800 }}>My Techstack</h2>

		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
			{#each techs as { icon, name }, i}
				<div
					in:fade={{ duration: 800, delay: i * 200 }}
					class="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
				>
					<FontAwesomeIcon {icon} class="text-5xl text-orange-500 mb-4" />
					<span class="text-lg font-medium">{name}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/* Optional: Custom styles can be added here */
</style>
