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
		SiReact,
		SiSvelte,
		SiTailwindcss,
		SiTypescript,
		SiVercel,
		SiVuedotjs
	} from 'svelte-icons-pack/si';
	import { AnimatedTooltip } from './ui/AnimatedTooltip';

	const techs = [
		{ icon: SiSvelte, name: 'Svelte', url: 'https://svelte.dev/', color: '#FF3E00' }, // terang & kontras
		{
			icon: SiJavascript,
			name: 'JavaScript',
			url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
			color: '#F7DF1E'
		}, // tetap kontras
		{
			icon: SiTypescript,
			name: 'TypeScript',
			url: 'https://www.typescriptlang.org/',
			color: '#42A5F5'
		}, // lebih terang dari #3178C6
		{ icon: SiCodeigniter, name: 'CodeIgniter', url: 'https://codeigniter.com/', color: '#FF5722' }, // lebih cerah
		{ icon: SiLaravel, name: 'Laravel', url: 'https://laravel.com/', color: '#FF5555' },
		{ icon: SiReact, name: 'React', url: 'https://react.dev/', color: '#42A5F5' },
		{ icon: SiNextdotjs, name: 'Next.js', url: 'https://nextjs.org/', color: '#FFFFFF' }, // putih di background gelap
		{ icon: SiVuedotjs, name: 'Vue', url: 'https://vuejs.org/', color: '#41B883' },
		{
			icon: SiHtml5,
			name: 'HTML5',
			url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
			color: '#FF5722'
		},
		{
			icon: SiCss3,
			name: 'CSS3',
			url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
			color: '#42A5F5'
		},
		{ icon: SiBootstrap, name: 'Bootstrap', url: 'https://getbootstrap.com/', color: '#BB86FC' }, // lebih terang dari ungu asli
		{
			icon: SiTailwindcss,
			name: 'Tailwind CSS',
			url: 'https://tailwindcss.com/',
			color: '#5EEAD4'
		}, // cyan terang
		{ icon: SiNodedotjs, name: 'Node.js', url: 'https://nodejs.org/', color: '#8FBC8F' }, // hijau lebih cerah
		{ icon: SiMysql, name: 'MySQL', url: 'https://www.mysql.com/', color: '#00B8D4' }, // biru terang
		{ icon: SiFirebase, name: 'Firebase', url: 'https://firebase.google.com/', color: '#FFCA28' },
		{ icon: SiDocker, name: 'Docker', url: 'https://www.docker.com/', color: '#4FC3F7' },
		{ icon: SiGithub, name: 'Git', url: 'https://git-scm.com/', color: '#FF7043' }, // oranye terang
		{ icon: SiGit, name: 'Github', url: 'https://github.com/', color: '#FFFFFF' }, // putih karena brand hitam
		{ icon: SiLeaflet, name: 'Leaflet', url: 'https://leafletjs.com/', color: '#76FF03' }, // hijau neon
		{ icon: SiOpenlayers, name: 'OpenLayers', url: 'https://openlayers.org/', color: '#80DEEA' }, // cyan muda
		{ icon: SiVercel, name: 'Vercel', url: 'https://vercel.com/', color: '#FFFFFF' } // putih
	];
</script>

<section class="container min-h-screen mx-auto py-24" id="techstack">
	<div class="max-w-6xl mx-auto px-4">
		<div class="flex justify-center mb-20">
			<h1
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-offset="100"
				data-aos-easing="ease-in-out"
				class="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none relative"
			>
				<span
					class="inline-block relative z-10 px-4 py-2 rounded bg-gradient-to-r from-blue-400 to-pink-500 text-white"
				>
					My Tech
				</span><br />
				<span
					class="inline-block -mt-3 relative z-0 px-4 py-2 rounded bg-gradient-to-r from-blue-400 to-pink-500 text-white"
				>
					Stack
				</span>
			</h1>
		</div>

		<!-- Grid layout responsif -->
		<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
			{#each techs as { icon, name, url, color }, i}
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
						<Icon src={icon} {color} size="3em" />
					</a>
				</AnimatedTooltip>
			{/each}
		</div>
	</div>
</section>
