<script lang="ts">
	let data = [
		{
			title: 'Emameun',
			image: '/images/emameun.jpg',
			description:
				'A modern and responsive Food Market website built with Vue.js and Tailwind CSS. Features include product catalog, food details, and an interactive shopping cart.',
			teckstack: ['Vue', 'Tailwind CSS'],
			url: 'https://emameun.vercel.app/'
		}
	];
</script>

<section id="portfolio" class="min-h-screen py-16 px-4 mx-auto max-w-6xl">
	<h2 class="text-2xl font-bold mb-6 text-text-primary-light dark:text-text-primary-dark">
		Recent Project Works
	</h2>

	<div class="space-y-8">
		{#each data as project, index}
			<div class="flex flex-col md:flex-row items-center overflow-hidden">
				<!-- Gambar Proyek -->
				<div class="md:w-1/2 w-full h-64 md:h-auto overflow-hidden rounded-md">
					<img
						src={project.image}
						alt={`Gambar ${project.title}`}
						class="w-full h-full object-cover"
					/>
				</div>

				<!-- Informasi Proyek -->
				<div class="md:w-1/2 w-full p-6 space-y-4">
					<h3 class="font-semibold text-xl text-text-primary-light dark:text-text-primary-dark">
						{project.title}
					</h3>
					<p class="text-text-primary-light dark:text-text-primary-dark">
						{project.description}
					</p>

					<!-- Stack Teknologi -->
					<div class="flex flex-wrap gap-2">
						{#each project.teckstack as tech}
							<span class="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded-full">{tech}</span
							>
						{/each}
					</div>

					<!-- Tombol Demo -->
					<div class="relative inline-flex group mt-4">
						<div
							class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
						></div>

						<a
							href={project.url} role="button"
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
								<span>Live demo..</span>
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
					</div>
				</div>
			</div>
		{/each}

		<!-- Tambahkan proyek lainnya dengan blok serupa -->
	</div>
</section>
