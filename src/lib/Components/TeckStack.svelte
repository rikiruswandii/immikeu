<script lang="ts">
	import { Icon } from 'svelte-icons-pack';
	import {
		SiBootstrap,
		SiCodeigniter,
		SiCss3,
		SiDocker,
		SiFirebase,
		SiGit,
		SiGithub,
		SiHtml5,
		SiJavascript,
		SiLaravel,
		SiLeaflet,
		SiMysql,
		SiNextdotjs,
		SiNodedotjs,
		SiOpenlayers,
		SiSvelte,
		SiTailwindcss,
		SiTypescript,
		SiVercel,
		SiVuedotjs
	} from 'svelte-icons-pack/si';
	import { AnimatedTooltip } from './ui/AnimatedTooltip';

	const techs = [
		{ icon: SiSvelte, name: 'Svelte', url: 'https://svelte.dev/' },
		{
			icon: SiJavascript,
			name: 'JavaScript',
			url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
		},
		{ icon: SiTypescript, name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
		{ icon: SiCodeigniter, name: 'CodeIgniter', url: 'https://codeigniter.com/' },
		{ icon: SiLaravel, name: 'Laravel', url: 'https://laravel.com/' },
		{ icon: SiNextdotjs, name: 'Next.js', url: 'https://nextjs.org/' },
		{ icon: SiVuedotjs, name: 'Vue', url: 'https://vuejs.org/' },
		{
			icon: SiHtml5,
			name: 'HTML5',
			url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
		},
		{ icon: SiCss3, name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
		{ icon: SiBootstrap, name: 'Bootstrap', url: 'https://getbootstrap.com/' },
		{ icon: SiTailwindcss, name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
		{ icon: SiNodedotjs, name: 'Node.js', url: 'https://nodejs.org/' },
		{ icon: SiMysql, name: 'MySQL', url: 'https://www.mysql.com/' },
		{ icon: SiFirebase, name: 'Firebase', url: 'https://firebase.google.com/' },
		{ icon: SiDocker, name: 'Docker', url: 'https://www.docker.com/' },
		{ icon: SiGithub, name: 'Git', url: 'https://git-scm.com/' },
		{ icon: SiGit, name: 'Github', url: 'https://github.com/' },
		{ icon: SiLeaflet, name: 'Leaflet', url: 'https://leafletjs.com/' },
		{ icon: SiOpenlayers, name: 'OpenLayers', url: 'https://openlayers.org/' },
		{ icon: SiVercel, name: 'Vercel', url: 'https://vercel.com/' }
	];
</script>

<section class="container min-h-screen mx-auto py-24" id="techstack">
	<div class="max-w-6xl mx-auto px-4">
		<div class="flex justify-center mb-8">
			<h1
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-offset="100"
				data-aos-easing="ease-in-out"
				class="inline-flex box-decoration-slice bg-gradient-to-r from-blue-400 to-pink-500 text-white px-2 text-center text-6xl font-bold md:text-7xl rounded"
			> 
				My Tech Stack
			</h1>
		</div>

		<!-- Grid layout responsif -->
		<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
			{#each techs as { icon, name, url }, i}
				<AnimatedTooltip text={name}>
					<a
						href={url}
						target="_blank"
						data-aos="fade-up"
						data-aos-delay={i * 100}
						data-aos-duration="1000"
						data-aos-offset="100"
						data-aos-easing="ease-in-out"
						class="flex
							items-center justify-center p-2 bg-transparent rounded-lg border-l-2 border-r-2
							border-solid border-surface-light/50 hover:scale-110 transition-transform duration-300
							ease-in-out"
					>
						<Icon src={icon} color="#ffffff" size="3em" />
					</a>
				</AnimatedTooltip>
			{/each}
		</div>
	</div>
</section>

