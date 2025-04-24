<section
	id="about"
	class="font-poppins min-h-screen py-20 px-4 min-w-screen relative overflow-hidden"
>
	<!-- Background Moving Lights -->
	<div
		class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 animate-light"
	></div>
	<div
		class="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-teal-500 via-cyan-500 to-blue-500 opacity-30 animate-light2"
	></div>

	<header
		class="mb-10 border-b border-border-light dark:border-border-dark pb-6 text-center relative z-10"
	>
		<h2
			class="text-4xl md:text-5xl font-bold text-text-primary-light dark:text-text-primary-dark tracking-tight"
		>
			WHO am I?
		</h2>
	</header>

	<div
		class="mx-auto max-w-6xl text-lg md:text-2xl text-text-primary-light dark:text-text-primary-dark leading-relaxed relative z-10"
	>
		<p>
			Hello! I’m <strong class="font-semibold text-primary-600 dark:text-primary-400"
				>Riki Ruswandi</strong
			>, a Web Developer and student at
			<span class="font-medium text-gray-800 dark:text-gray-300">STMIK Mardira Indonesia</span>. I
			focus on modern web development and strive to create digital solutions that are both
			functional and user-friendly. If you're interested in collaborating or discussing technology,
			I'm always open to new opportunities and conversations.
		</p>

		<div class="relative inline-flex group mt-8">
			<div
				class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
			></div>
			<a
				href="/"
				title="Get quote now"
				class="relative inline-flex items-center justify-center px-6 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
				role="button"
				>Read more..
			</a>
		</div>
	</div>
</section>

<style>
	@keyframes lightAnimation1 {
		0% {
			transform: translateX(0) translateY(0);
		}
		50% {
			transform: translateX(50%) translateY(50%);
		}
		100% {
			transform: translateX(0) translateY(0);
		}
	}

	@keyframes lightAnimation2 {
		0% {
			transform: translateX(0) translateY(0);
		}
		50% {
			transform: translateX(-50%) translateY(-50%);
		}
		100% {
			transform: translateX(0) translateY(0);
		}
	}

	.animate-light {
		animation: lightAnimation1 10s ease-in-out infinite;
	}

	.animate-light2 {
		animation: lightAnimation2 12s ease-in-out infinite;
	}
</style>
