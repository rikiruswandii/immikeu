<script lang="ts">
	import { PUBLIC_SITE_NAME } from '$env/static/public';
	import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope, faMapPin } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	let me = PUBLIC_SITE_NAME || 'Mikeu';
	const profile = {
		name: me,
		title: 'Web Developer',
		about: `I am a <strong class="text-blue-300 underline decoration-solid decoration-pink-400">Web Developer</strong> currently pursuing a <strong class="text-blue-300 underline decoration-solid decoration-pink-400">Bachelor's degree</strong> in <strong class="text-blue-300 underline decoration-solid decoration-pink-400">Computer Engineering</strong> through a credit transfer program. After completing my <strong class="text-blue-300 underline decoration-solid decoration-pink-400">Associate's degree</strong>, I continued my studies at <strong class="text-blue-300 underline decoration-solid decoration-pink-400">STMIK Mardira</strong> in <strong class="text-blue-300 underline decoration-solid decoration-pink-400">Bandung</strong>, specializing in a field aligned with my interests. I aspire to become a <strong class="text-blue-300 underline decoration-solid decoration-pink-400">Senior Web Application Developer</strong> and have a keen interest in <strong class="text-blue-300 underline decoration-solid decoration-pink-400">Reverse Engineering</strong>.`,
		personalInfo: {
			Email: 'rikiruswandi28@gmail.com',
			Linkedin: 'https://www.linkedin.com/in/riki-ruswandi',
			Github: 'https://github.com/rikiruswandii',
			Address: 'Purwakarta, Indonesia'
		},

		experiences: [
			{
				position: 'Web Developer',
				company: 'PT Pratama Solusi Teknologi',
				period: 'May 2023 - Present',
				description:
					'Developing and maintaining scalable web applications using Laravel, JavaScript, and object storage services compatible with AWS S3 (such as MinIO).'
			},
			{
				position: 'Web Developer (Intern)',
				company: 'Dinas Komunikasi dan Informatika',
				period: 'March 2023 - May 2022',
				description:
					'Assist in developing and maintaining web applications, collaborate with the team to build new features, and learn best practices in web development.'
			}
		],

		education: [
			{
				degree: `Associate's degree`,
				school: 'AMIK - YPAT Purwakarta',
				period: '2021 - 2024'
			}
		],

		skills: [
			'My technical skills include programming',
			'I have proficiency in languages like Typescript, Javascript and PHP',
			'IT constructs include Data Structures and Algorithms and Object oriented programming system',
			'The technology I have worked on is Software Engineer using Laravel, Sveltekit etc. My project works and github profile is a sound proof of my best works. Currently, I am working on creating scalable systems',
			'The development tool that i am use to is Visual Studio Code',
			'Other skills are: I am a fast learner, consistent in my work and punctual'
		],

		profileImage: '/images/IMG20230820090732.jpg' // <-- Ganti path sesuai kebutuhanmu
	};
</script>

<!-- Main Wrapper -->
<div
	class="relative min-h-screen bg-gray-100 dark:bg-black/[0.96] py-12 px-6 lg:px-24 transition-colors duration-300"
>
	<div class="absolute inset-0 z-0 flex items-center justify-center blur-3xl" aria-hidden="true">
		<div
			class="aspect-[1155/678] w-[100rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 animate-clip-morph"
		></div>
	</div>
	<div
		class="relative z-10 bg-transparent rounded-lg shadow-lg p-10 transition-colors duration-300 mt-12"
	>
		<div class="grid grid-cols-1 sm:grid-cols-6 gap-4 mb-4">
			<!-- Header Section -->
			<div
				data-aos="fade-right"
				data-aos-duration="1000"
				data-aos-offset="100"
				data-aos-easing="ease-in-out"
				class="flex flex-col items-center justify-left"
			>
				<img
					aria-hidden="true"
					src={profile.profileImage}
					alt="Profile Picture"
					class="w-32 h-32 rounded-md object-cover border-2 border-surface-light dark:border-surface-light/50"
				/>
				<h2
					class="text-lg font-bold w-[8rem] box-decoration-slice bg-gradient-to-r from-blue-400 to-pink-500 text-white px-2 text-center rounded"
				>
					{'Mikeu'}
				</h2>
			</div>
			<div class="col-span-5 text-center mb-12">
				<div class="flex flex-col justify-center items-center">
					<h1
						data-aos="fade-down"
						data-aos-duration="1000"
						data-aos-offset="100"
						data-aos-easing="ease-in-out"
						class="inline-flex box-decoration-slice bg-gradient-to-r from-blue-400 to-pink-500 text-white px-2 text-center text-6xl font-bold md:text-7xl rounded"
					>
						About
					</h1>
					<h1
						data-aos="fade-down"
						data-aos-duration="1000"
						data-aos-offset="100"
						data-aos-easing="ease-in-out"
						class="inline-flex box-decoration-slice bg-gradient-to-r from-blue-400 to-pink-500 text-white px-2 text-center text-6xl font-bold md:text-7xl rounded"
					>
						Me
					</h1>
				</div>
			</div>
		</div>

		<!-- Grid Content -->
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8 mx-auto">
			<!-- Sidebar -->
			<div class="col-span-1 md:col-span-2 space-y-8">
				<!-- Personal Introduction -->
				<div
					data-aos="fade-right"
					data-aos-delay="100"
					data-aos-duration="1000"
					data-aos-offset="100"
					data-aos-easing="ease-in-out"
					class="border-2 border-surface-light/50 rounded-lg p-4 text-surface-light"
				>
					<div class="flex items-center">
						<h1
							class="text-lg font-bold mr-2 inline-flex box-decoration-slice bg-gradient-to-r from-blue-400 to-pink-500 text-white px-2 text-center rounded"
						>
							Introduction
						</h1>
						<div class="flex-1 border-b border-surface-light/50"></div>
					</div>
					<p class="mt-2 text-base text-shadow-surface-light font-semibold">
						{@html profile.about}
					</p>
				</div>

				<!-- Personal Information -->
				<div
					data-aos="fade-right"
					data-aos-delay="150"
					data-aos-duration="1000"
					data-aos-offset="100"
					data-aos-easing="ease-in-out"
					class="border-2 border-surface-light/50 rounded-lg p-4 text-surface-light"
				>
					<div class="flex items-center">
						<h1
							class="text-lg font-bold mr-2 inline-flex box-decoration-slice bg-gradient-to-r from-blue-400 to-pink-500 text-white px-2 text-center rounded"
						>
							Personal Information
						</h1>
						<div class="flex-1 border-b border-surface-light/50"></div>
					</div>
					<div class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
						{#each Object.entries(profile.personalInfo) as [key, value]}
							{#if key === 'Email'}
								<div class="flex items-center space-x-2">
									<FontAwesomeIcon icon={faEnvelope} class="w-6 h-6 text-surface-light" />
									<span class="text-base text-shadow-surface-light font-semibold">{value}</span>
								</div>
							{:else if key === 'Address'}
								<div class="flex items-center space-x-2">
									<FontAwesomeIcon icon={faMapPin} class="w-6 h-6 text-red-500" />
									<span class="text-base text-shadow-surface-light font-semibold">{value}</span>
								</div>
							{:else if key === 'Linkedin'}
								<div class="flex items-center space-x-2">
									<FontAwesomeIcon icon={faLinkedinIn} class="w-6 h-6 text-blue-400" />
									<a
										href={value}
										target="_blank"
										class="text-base text-shadow-surface-light font-semibold"
									>
										{'linkedin.com/in/riki-ruswandi'}
									</a>
								</div>
							{:else if key === 'Github'}
								<div class="flex items-center space-x-2">
									<FontAwesomeIcon icon={faGithub} class="w-6 h-6 text-shadow-surface-light/55" />
									<a
										href={value}
										target="_blank"
										class="text-base text-shadow-surface-light font-semibold"
									>
										{'github.com/rikiruswandii'}
									</a>
								</div>
							{/if}
						{/each}
					</div>
				</div>

				<!-- Skills -->
				<div
					data-aos="fade-up"
					data-aos-delay="180"
					data-aos-duration="1000"
					data-aos-offset="100"
					data-aos-easing="ease-in-out"
				>
					<h2 class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Skills</h2>
					<div class="flex flex-wrap gap-2">
						{#each profile.skills as skill}
							<span
								class="text-sm font-bold mr-2 inline-flex box-decoration-slice bg-gradient-to-r from-blue-400 to-pink-500 text-surface-dark px-2 py-1 text-left rounded"
							>
								{skill}
							</span>
						{/each}
					</div>
				</div>
			</div>

			<!-- Main Content -->
			<div
				class="md:col-span-2 space-y-12 border-l border-r border-solid border-surface-light/50 p-4 rounded-lg"
			>
				<!-- Work Experience -->
				<div
					data-aos="fade-up"
					data-aos-delay="100"
					data-aos-duration="1000"
					data-aos-offset="100"
					data-aos-easing="ease-in-out"
				>
					<h2
						class="text-lg font-bold mr-2 inline-flex box-decoration-slice bg-gradient-to-r from-blue-400 to-pink-500 text-white px-2 text-center rounded mb-2"
					>
						Work Experience
					</h2>
					<div class="space-y-6">
						{#each profile.experiences as exp}
							<div>
								<h3 class="text-lg font-semibold text-gray-800 dark:text-white">{exp.position}</h3>
								<p class="text-sm text-gray-500 dark:text-gray-400">{exp.company} | {exp.period}</p>
								<p class="mt-2 text-gray-600 dark:text-gray-400">{exp.description}</p>
							</div>
						{/each}
					</div>
				</div>

				<!-- Education -->
				<div
					data-aos="fade-up"
					data-aos-delay="150"
					data-aos-duration="1000"
					data-aos-offset="100"
					data-aos-easing="ease-in-out"
				>
					<h2
						class="text-lg font-bold mr-2 inline-flex box-decoration-slice bg-gradient-to-r from-blue-400 to-pink-500 text-white px-2 text-center rounded mb-2"
					>
						Education
					</h2>
					<div class="space-y-6">
						{#each profile.education as edu}
							<div>
								<h3 class="text-lg font-semibold text-gray-800 dark:text-white">{edu.degree}</h3>
								<p class="text-sm text-gray-500 dark:text-gray-400">{edu.school} | {edu.period}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes morph {
		0% {
			clip-path: polygon(
				5% 5%,
				15% 0%,
				25% 10%,
				35% 5%,
				45% 15%,
				55% 30%,
				65% 25%,
				75% 40%,
				85% 10%,
				95% 25%,
				85% 50%,
				75% 65%,
				65% 75%,
				55% 85%,
				45% 75%,
				35% 70%,
				25% 80%,
				15% 65%,
				5% 60%,
				0% 50%,
				5% 30%,
				15% 25%,
				25% 35%,
				35% 30%,
				45% 40%,
				55% 50%,
				65% 45%,
				75% 55%,
				85% 40%,
				95% 55%
			);
		}
		50% {
			clip-path: polygon(
				10% 0%,
				20% 5%,
				30% 0%,
				40% 10%,
				50% 0%,
				60% 20%,
				70% 15%,
				80% 30%,
				90% 5%,
				100% 20%,
				90% 45%,
				80% 60%,
				70% 70%,
				60% 80%,
				50% 70%,
				40% 65%,
				30% 75%,
				20% 60%,
				10% 55%,
				5% 45%,
				10% 25%,
				20% 20%,
				30% 30%,
				40% 25%,
				50% 35%,
				60% 45%,
				70% 40%,
				80% 50%,
				90% 35%,
				100% 50%
			);
		}
		100% {
			clip-path: polygon(
				5% 5%,
				15% 0%,
				25% 10%,
				35% 5%,
				45% 15%,
				55% 30%,
				65% 25%,
				75% 40%,
				85% 10%,
				95% 25%,
				85% 50%,
				75% 65%,
				65% 75%,
				55% 85%,
				45% 75%,
				35% 70%,
				25% 80%,
				15% 65%,
				5% 60%,
				0% 50%,
				5% 30%,
				15% 25%,
				25% 35%,
				35% 30%,
				45% 40%,
				55% 50%,
				65% 45%,
				75% 55%,
				85% 40%,
				95% 55%
			);
		}
	}
	.animate-clip-morph {
		animation: morph 8s ease-in-out infinite;
	}
</style>
