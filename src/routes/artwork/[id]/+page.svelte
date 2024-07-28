<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: console.log(data);
</script>

<svelte:head>
	<title>Artwork</title>
</svelte:head>

<h1>some artwork</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
