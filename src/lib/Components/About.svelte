<script>
	import { AnimatedTooltip } from './ui/AnimatedTooltip';
</script>

<section
	id="about"
	class="relative flex min-h-screen py-24 overflow-hidden rounded-md bg-black/[0.96] px-6 sm:px-10 md:px-20 lg:px-48 xl:px-60 2xl:px-72 antialiased bg-grid-white/[0.02] md:items-center md:justify-center"
>
	<div class="absolute top-0 left-0 z-0 blur-3xl xl:top-10" aria-hidden="true">
		<div
			class="aspect-1155/678 w-[40rem] bg-gradient-to-bl from-[#ff80b5] to-[#9089fc] opacity-30 animate-spotlight"
			style="clip-path: polygon(
            0% 10%,
            10% 5%,
            20% 10%,
            30% 20%,
            40% 15%,
            50% 25%,
            60% 30%,
            70% 40%,
            80% 50%,
            85% 60%,
            90% 70%,
            95% 80%,
            100% 90%,
            90% 95%,
            80% 90%,
            70% 85%,
            60% 80%,
            50% 75%,
            40% 70%,
            30% 65%,
            20% 55%,
            10% 40%,
            5% 25%,
            0% 20%
        )"
		></div>
	</div>

	<div class="relative z-10 mx-auto min-w-full p-4">
		<div class="flex justify-center mb-8">
			<h1
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-offset="100"
				data-aos-easing="ease-in-out"
				class="inline-flex box-decoration-slice bg-gradient-to-r from-blue-400 to-pink-500 text-white px-2 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold rounded"
			>
				WHO am I?
			</h1>
		</div>
		<p
			data-aos="fade-up"
			data-aos-duration="1000"
			data-aos-delay="100"
			data-aos-offset="100"
			data-aos-easing="ease-in-out"
			class="mx-auto mt-4 max-w-full sm:max-w-7xl text-justify p-8 rounded-lg text-2xl sm:text-3xl font-normal text-neutral-300 border-l-2 border-r-2 border-solid border-surface-light/50"
		>
			Hi! I'm <strong class="text-blue-300 underline decoration-solid decoration-pink-400"
				>Riki Ruswandi</strong
			>, also known as
			<strong class="text-blue-300 underline decoration-solid decoration-pink-400">Mikeu</strong
			>.<br /><br />
			My journey in
			<strong class="text-blue-300 underline decoration-solid decoration-pink-400"
				>web development</strong
			>
			began in
			<strong class="text-blue-300 underline decoration-solid decoration-pink-400">2023</strong>
			during my college years when I joined an internship program at
			<strong class="text-blue-300 underline decoration-solid decoration-pink-400"
				>Dikominfo Purwakarta, Indonesia</strong
			>. That experience ignited my passion for the
			<strong class="text-blue-300 underline decoration-solid decoration-pink-400">IT world</strong>
			and led me to start working on
			<strong class="text-blue-300 underline decoration-solid decoration-pink-400"
				>independent projects</strong
			>. Through
			<strong class="text-blue-300 underline decoration-solid decoration-pink-400"
				>hands-on experience</strong
			>, I refined my skills and developed a deep enthusiasm for creating
			<strong class="text-blue-300 underline decoration-solid decoration-pink-400"
				>digital solutions</strong
			>. I am excited by the continuous growth and challenges in the dynamic field of
			<strong class="text-blue-300 underline decoration-solid decoration-pink-400"
				>web development</strong
			>.<br /><br />
			Currently, I specialize in delivering
			<strong class="text-blue-300 underline decoration-solid decoration-pink-400"
				>high-quality solutions</strong
			>
			that not only meet but exceed client expectations at
			<strong class="text-blue-300 underline decoration-solid decoration-pink-400">PST</strong>.<br
			/><br />
			I am also pursuing a
			<strong class="text-blue-300 underline decoration-solid decoration-pink-400"
				>bachelor's degree</strong
			>
			in
			<strong class="text-blue-300 underline decoration-solid decoration-pink-400"
				>Informatics Engineering</strong
			>
			at
			<strong class="text-blue-300 underline decoration-solid decoration-pink-400"
				>STMIK Mardira Indonesia</strong
			>.
		</p>

		<!-- Tombol Demo -->
		<div class="flex justify-center mt-8">
			<div
				data-aos="fade-up"
				data-aos-delay="200"
				data-aos-offset="100"
				data-aos-easing="ease-in-out"
				class="relative inline-flex group"
			>
				<div
					class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
				></div>

				<AnimatedTooltip text="Read more about me">
					<a
						href="/about"
						role="button"
						class="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
					>
						<span class="absolute inset-0 overflow-hidden rounded-full">
							<span
								class="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
							></span>
						</span>
						<div
							class="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-3 px-7 ring-1 ring-white/10"
						>
							<span class="text-xl text-neutral-300">Read more..</span>
							<svg
								width="24"
								height="24"
								viewBox="0 0 16 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path stroke="currentColor" d="M10.75 8.75L14.25 12L10.75 15.25"></path>
							</svg>
						</div>
						<span
							class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"
						></span>
					</a>
				</AnimatedTooltip>
			</div>
		</div>
	</div>

	<div class="absolute bottom-0 right-0 z-0 blur-3xl xl:-bottom-6" aria-hidden="true">
		<div
			class="aspect-1155/678 w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 animate-spotlight"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		></div>
	</div>
</section>
