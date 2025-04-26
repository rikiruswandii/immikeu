<script lang="ts">
	import { PUBLIC_SITE_NAME } from '$env/static/public';
	const siteName = PUBLIC_SITE_NAME || 'Mikeu';
</script>

<footer id="contact" class="border-t-2 border-solid border-surface-light/55 text-center py-6 mt-10 text-surface-light">
	<p>&copy; 2025 {siteName}. Made with ❤️ using SvelteKit & Tailwind CSS.</p>
</footer>
