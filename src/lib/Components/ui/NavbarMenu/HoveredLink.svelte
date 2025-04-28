<script lang="ts">
  export let href = '';  // deklarasi href
  export let target = '';  // deklarasi target
</script>

<a href={href} target={target} class="text-neutral-700 hover:text-blue-400 dark:text-neutral-200 z-50">
	<slot />
</a>
