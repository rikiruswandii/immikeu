<script lang="ts">
	import { CardBody, CardContainer, CardItem } from './ui/ThreeDCardEffect';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import {
		faVuejs,
		faCss3Alt,
		faLaravel,
		faBootstrap,
		faReact
	} from '@fortawesome/free-brands-svg-icons';
	import { faC, faLeaf, faN } from '@fortawesome/free-solid-svg-icons';
	import { AnimatedTooltip } from './ui/AnimatedTooltip';

	let data = [
		{
			title: 'Emameun',
			image: '/images/emameun.jpg',
			description:
				'A modern and responsive Food Market website built with Vue.js and Tailwind CSS. Features include product catalog, food details, and an interactive shopping cart.',
			teckstack: [
				{
					name: 'Vue',
					icon: faVuejs,
					url: 'https://vuejs.org/'
				},
				{
					name: 'Tailwind CSS',
					icon: faCss3Alt,
					url: 'https://tailwindcss.com/'
				}
			],
			url: 'https://emameun.vercel.app/',
			isExpanded: false
		},
		{
			title: 'Dinas Lingkungan Hidup Kabupaten Purwakarta',
			image: '/images/dlh.jpg',
			description:
				'Dinas Lingkungan Hidup Kabupaten Purwakarta is a local government institution responsible for managing, protecting, and preserving the environment within the Purwakarta region. Through various programs and services, Dinas Lingkungan Hidup Kabupaten Purwakarta focuses on pollution control, waste management, natural resource conservation, and raising public awareness about the importance of sustainable environmental practices.',
			teckstack: [
				{
					name: 'Laravel',
					icon: faLaravel,
					url: 'laravel.com'
				},
				{
					name: 'Bootstrap',
					icon: faBootstrap,
					url: 'bootstrap.com'
				},
				{
					name: 'Leaflet',
					icon: faLeaf,
					url: 'leafletjs.com'
				}
			],
			url: 'https://siardlin.purwakartakab.go.id/',
			isExpanded: false
		},
		{
			title: 'Unit Pengelolaan Irigasi D.I Jatiluhur',
			image: '/images/upidijatiluhur.jpg',
			description:
				'Website developed for the Irrigation Management Unit (UPI) in the Jatiluhur region, with the aim of providing information and services related to irrigation. The website features two main pages: the Landing Page and the Dashboard Page. These pages offer various features to facilitate the management and monitoring of the irrigation system in Jatiluhur. In addition, UPI DI JATILUHUR includes a key mapping feature that allows users to view maps related to the irrigation system in the Jatiluhur region. This mapping feature makes it easier to monitor the condition of irrigation channels, water distribution points, and other related data visually, helping in more informed decision-making for irrigation management. Moreover, UPI DI JATILUHUR also provides a complaint feature, allowing the community to report issues or damages related to irrigation in their area. Users can submit complaints about blocked, damaged, or other irrigation-related problems, which will be forwarded to the relevant authorities for follow-up, ensuring that the irrigation system functions optimally.',
			teckstack: [
				{
					name: 'Laravel',
					icon: faLaravel,
					url: 'laravel.com'
				},
				{
					name: 'Bootstrap',
					icon: faBootstrap,
					url: 'bootstrap.com'
				},
				{
					name: 'Leaflet',
					icon: faLeaf,
					url: 'leafletjs.com'
				}
			],
			url: 'https://upijatiluhur.id/',
			isExpanded: false
		},
		{
			title: 'Mapin Aja',
			image: '/images/mapin.jpg',
			description:
				'Mapin-aja is a web application built with Next.js that allows users to easily create, view, and manage geospatial data interactively. Its main features include the ability to draw directly on the map using available drawing tools, and the option to input code in GeoJSON format through a text editor to instantly generate vector layers on the map. Users can also export geospatial data into various popular formats such as GeoJSON, TopoJSON, KML, and Shapefile. Additionally, Mapin-aja supports importing geospatial files in formats like GeoJSON, KML, Shapefile, and TopoJSON, making it easy to visualize and manage data from different sources.',
			teckstack: [
				{
					name: 'Next js',
					icon: faN,
					url: 'nextjs.org'
				},
				{
					name: 'React',
					icon: faReact,
					url: 'react.dev'
				},
				{
					name: 'Tailwind CSS',
					icon: faCss3Alt,
					url: 'https://tailwindcss.com/'
				},
				{
					name: 'Leaflet',
					icon: faLeaf,
					url: 'leafletjs.com'
				}
			],
			url: 'https://github.com/rikiruswandii/mapin-aja',
			isExpanded: false
		},
		{
			title: 'Investasi Purwakarta',
			image: '/images/investasi.jpg',
			description:
				'Investasi Purwakarta is a platform designed to facilitate the management and monitoring of various investments in the Purwakarta area, featuring project management tools that allow users to add, edit, and delete information related to investment projects. It also includes search and filter capabilities to find projects based on specific criteria such as category, location, and status. The platform offers data visualization, displaying investment project information in table and map formats, and user authentication, enabling access to further features after logging in.',
			teckstack: [
				{
					name: 'Codeigniter 4',
					icon: faC,
					url: 'codeigniter.com'
				},
				{
					name: 'Bootstrap',
					icon: faBootstrap,
					url: 'bootstrap.com'
				},
				{
					name: 'Leaflet',
					icon: faLeaf,
					url: 'leafletjs.com'
				}
			],
			url: 'https://investasi.purwakartakab.go.id/',
			isExpanded: false
		}
	];
</script>

<section
	id="project"
	class="relative min-h-screen min-w-full py-16 px-80 mx-auto max-w-6xl"
>
	<div class="flex justify-center mb-20">
		<h1
			data-aos="fade-up"
			data-aos-duration="1000"
			data-aos-offset="100"
			data-aos-easing="ease-in-out"
			class="text-center text-6xl md:text-7xl font-bold leading-none relative"
		>
			<span
				class="inline-block relative z-10 px-4 py-2 rounded bg-gradient-to-r from-blue-400 to-pink-500 text-white"
			>
				Recent Project
			</span><br />
			<span
				class="inline-block -mt-3 relative z-0 px-4 py-2 rounded bg-gradient-to-r from-blue-400 to-pink-500 text-white"
			>
				Works
			</span>
		</h1>
	</div>

	<!-- Pembungkus Project -->
	<div class="columns-1 sm:columns-2 lg:columns-2 gap-8">
		{#each data as project, i}
			<div
				data-aos="fade-up"
				data-aos-delay={i * 100}
				data-aos-duration="1000"
				data-aos-offset="100"
				data-aos-easing="ease-in-out"
				class="mb-8 break-inside-avoid"
			>
				<CardContainer className="relative w-full h-full">
					<CardBody
						className="relative bg-gray-50 group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border transition-all duration-300"
					>
						<CardItem
							translateZ="50"
							className="text-xl font-bold text-neutral-600 dark:text-white"
						>
							{project.title}
						</CardItem>
						<CardItem
							translateZ="60"
							className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
						>
							{#if project.isExpanded}
								<p>{project.description}</p>
								<button
									on:click={() => (project.isExpanded = false)}
									class="text-blue-500 text-xs mt-2"
								>
									Read less
								</button>
							{:else}
								<p>
									{project.description.slice(0, 200)}...
								</p>
								<button
									on:click={() => (project.isExpanded = true)}
									class="text-blue-500 text-xs mt-2"
								>
									Read more..
								</button>
							{/if}
						</CardItem>
						<CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
							<img
								src={project.image}
								height="1000"
								width="1000"
								class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
								alt="thumbnail"
							/>
						</CardItem>
						<div class="mt-10 flex items-center justify-between">
							<!-- Tech stack -->
							<CardItem translateZ={20} translateX={-40} className="flex items-center space-x-2">
								{#each project.teckstack.slice(0, 5) as tech, i}
									<AnimatedTooltip text={tech.name}>
										<a href={tech.url} target="_blank" class="relative z-10">
											<div
												class="flex items-center justify-center bg-gray-200 dark:bg-gray-700 p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
											>
												<FontAwesomeIcon icon={tech.icon} class="w-6 h-6 text-surface-light" />
											</div>
										</a>
									</AnimatedTooltip>
								{/each}
								{#if project.teckstack.length > 5}
									<div
										class="bg-gray-200 dark:bg-gray-700 p-2 rounded-full text-sm font-semibold text-gray-600 dark:text-gray-300"
									>
										+{project.teckstack.length - 5}
									</div>
								{/if}
							</CardItem>

							<!-- Tombol live project -->
							<CardItem translateZ={20} translateX={40} className="px-4 py-2 rounded-xl">
								<a
									href={project.url}
									target="_blank"
									class="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
								>
									<span class="absolute inset-0 overflow-hidden rounded-full">
										<span
											class="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
										></span>
									</span>
									<div
										class="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
									>
										<span>Live project..</span>
										<svg
											width="16"
											height="16"
											viewBox="0 0 24 24"
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
							</CardItem>
						</div>
					</CardBody>
				</CardContainer>
			</div>
		{/each}
	</div>

	<div class="absolute inset-0 -z-10 flex items-center justify-center blur-3xl" aria-hidden="true">
		<div
			class="aspect-[1155/678] w-[100rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 animate-spotlight"
			style="clip-path: polygon(
            5% 5%, 15% 0%, 25% 10%, 35% 5%, 45% 15%, 
            55% 30%, 65% 25%, 75% 40%, 85% 10%, 95% 25%, 
            85% 50%, 75% 65%, 65% 75%, 55% 85%, 45% 75%, 
            35% 70%, 25% 80%, 15% 65%, 5% 60%, 0% 50%, 
            5% 30%, 15% 25%, 25% 35%, 35% 30%, 45% 40%, 
            55% 50%, 65% 45%, 75% 55%, 85% 40%, 95% 55%
        )"
		></div>
	</div>
</section>
