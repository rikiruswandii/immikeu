<script lang="ts">
	let data = [
		{
			title: 'Emameun',
			image: '/images/emameun.jpg',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum facere magni at. Quo illo iure recusandae. Magnam, maiores perspiciatis ipsa eos sapiente voluptatibus quam asperiores odio suscipit itaque, doloribus impedit.',
			teckstack: ['Vue', 'Tailwind CSS']
		},
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
							href="/"
							class="relative inline-flex items-center justify-center px-6 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
							role="button"
							>View demo..
						</a>
					</div>
				</div>
			</div>
		{/each}

		<!-- Tambahkan proyek lainnya dengan blok serupa -->
	</div>
</section>
