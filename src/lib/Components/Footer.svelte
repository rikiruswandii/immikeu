<script lang="ts">
	import { env } from '$env/dynamic/public';
	const siteName = env.PUBLIC_SITE_NAME || 'Mikeu';
</script>

<footer id="contact" class="border-t-2 border-solid border-surface-light/55 text-center py-6 text-gray-300">
	<p>Copyright &copy; 2025 {siteName}.</p>
</footer>
