<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { AnimatedTooltip } from './ui/AnimatedTooltip';
	import toast from 'svelte-hot-french-toast';

	let showModal = false;
	let email = '';
	let message = '';
	let emailError = '';
	let messageError = '';
	let isSending = false;

	// Fungsi untuk validasi input
	const validate = () => {
		let isValid = true;
		// Validasi email
		const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!email) {
			emailError = 'Email harus diisi.';
			isValid = false;
		} else if (!emailPattern.test(email)) {
			emailError = 'Format email tidak valid.';
			isValid = false;
		} else {
			emailError = '';
		}

		// Validasi pesan
		if (!message) {
			messageError = 'Pesan harus diisi.';
			isValid = false;
		} else {
			messageError = '';
		}

		return isValid;
	};

	async function sendMessage() {
		// Validasi form sebelum dikirim
		if (!validate()) {
			return; // Jangan lanjutkan jika ada kesalahan validasi
		}
		isSending = true;
		const data = {
			email,
			message
		};

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const result = await response.json();

			if (!response.ok) {
				// Jika gagal, tampilkan toast dengan pesan dari endpoint
				const errorMessage = result.message || 'Terjadi kesalahan, silakan coba lagi.';
				console.log(errorMessage);
				toast.warning(errorMessage, {
					position: 'bottom-end',
					style: 'background: #333; color: #fff;'
				});
			} else {
				// Jika sukses, reset form dan tampilkan toast sukses
				toast.success('Pesan berhasil dikirim!', {
					position: 'bottom-end',
					style: 'background: #333; color: #fff;'
				});
				console.log('Pesan berhasil dikirim!');
				email = '';
				message = '';
				showModal = false;
			}
		} catch (error) {
			console.error(error);
			toast.error('Gagal mengirim pesan. Cek koneksi dan coba lagi.', {
				position: 'bottom-end',
				style: 'background: #333; color: #fff;'
			});
		} finally {
			isSending = false;
		}
	}
</script>

<section class="container min-h-screen mx-auto py-24 px-4" id="contact">
	<div class="max-w-6xl mx-auto">
		<!-- Title -->
		<div class="flex justify-center mb-8">
			<h1
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-offset="100"
				data-aos-easing="ease-in-out"
				class="inline-flex box-decoration-slice bg-gradient-to-r from-blue-400 to-pink-500 text-white px-3 text-center text-6xl font-bold md:text-7xl rounded shadow-md"
			>
				Contact
			</h1>
		</div>

		<!-- Description -->
		<div
			data-aos="fade-up"
			data-aos-duration="1000"
			data-aos-delay="100"
			data-aos-offset="100"
			data-aos-easing="ease-in-out"
			class="text-center mb-12"
		>
			<p class="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
				If you have any questions, want to collaborate, or are interested in my services, feel free
				to reach out using the button below.
			</p>
		</div>

		<!-- Why Contact -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
			<div
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="130"
				data-aos-offset="100"
				data-aos-easing="ease-in-out"
				class="text-center px-4"
			>
				<h3
					class="text-xl text-blue-300 underline decoration-solid decoration-pink-400 font-bold mb-2"
				>
					Project Collaboration
				</h3>
				<p class="text-gray-600 dark:text-gray-300">
					Open to working together on web development projects, UI design, or information systems.
				</p>
			</div>
			<div
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="160"
				data-aos-offset="100"
				data-aos-easing="ease-in-out"
				class="text-center px-4"
			>
				<h3
					class="text-xl text-blue-300 underline decoration-solid decoration-pink-400 font-bold mb-2"
				>
					Technical Questions
				</h3>
				<p class="text-gray-600 dark:text-gray-300">
					Have questions about web technologies, Laravel, or Svelte? Let’s discuss!
				</p>
			</div>
			<div
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="190"
				data-aos-offset="100"
				data-aos-easing="ease-in-out"
				class="text-center px-4"
			>
				<h3
					class="text-xl text-blue-300 underline decoration-solid decoration-pink-400 font-bold mb-2"
				>
					Suggestions & Feedback
				</h3>
				<p class="text-gray-600 dark:text-gray-300">
					I'm always open to constructive feedback to improve the quality of my work and services.
				</p>
			</div>
		</div>

		<!-- Tombol -->
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

				<AnimatedTooltip text="Words for me">
					<button
						on:click={() => (showModal = true)}
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
							<span class="text-xl text-neutral-300">Send Quick Message</span>
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
					</button>
				</AnimatedTooltip>
			</div>
		</div>
	</div>

	<!-- Modal -->
	{#if showModal}
		<div
			class="fixed inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
			transition:fade
		>
			<div
				in:scale={{ duration: 200 }}
				out:scale={{ duration: 150 }}
				class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-2xl w-full max-w-md relative border dark:border-gray-700"
			>
				<button
					class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
					on:click={() => (showModal = false)}
					aria-label="Close modal"
				>
					✕
				</button>

				<h2
					class="text-2xl font-semibold mb-4 text-center text-blue-300 underline decoration-solid decoration-pink-400"
				>
					Quick Message
				</h2>
				<form on:submit|preventDefault={sendMessage} class="space-y-4">
					<!-- Form Input Email -->
					<div>
						<label for="email" class="block mb-1 font-medium text-gray-700 dark:text-gray-300"
							>Email</label
						>
						<input
							id="email"
							type="email"
							bind:value={email}
							required
							class="w-full px-4 py-2 border rounded bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
							placeholder="you@example.com"
						/>
						<div class="text-red-500 text-sm">{emailError}</div>
					</div>

					<!-- Form Input Pesan -->
					<div>
						<label for="message" class="block mb-1 font-medium text-gray-700 dark:text-gray-300"
							>Message</label
						>
						<textarea
							id="message"
							bind:value={message}
							required
							class="w-full px-4 py-2 border rounded bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
							placeholder="Your message..."
							rows="4"
						></textarea>
						<div class="text-red-500 text-sm">{messageError}</div>
					</div>

					<!-- Tombol Kirim -->
					<div class="flex justify-between mt-6">
						<button
							type="button"
							on:click={() => (showModal = false)}
							class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition"
						>
							Cancel
						</button>
						<button
							type="submit"
							disabled={isSending}
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
								<span class="text-base">{isSending ? 'Sending...' : 'Send'}</span>
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path stroke="currentColor" d="M10.75 8.75L14.25 12L10.75 15.25"></path>
								</svg>
							</div>
							<span
								class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"
							></span>
						</button>
					</div>
				</form>
			</div>
		</div>
	{/if}
</section>

<style>
	/* Tambahkan icon font-awesome jika belum */
</style>
