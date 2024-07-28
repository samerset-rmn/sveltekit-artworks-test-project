<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import './app.css';
</script>

<PageHeader />
<main class="page-container">
	<div>
		<slot></slot>
	</div>
</main>

<style>
	.page-container {
		display: grid;
		min-height: 100vh;
		padding: 50px 16px;

		& > div {
			max-width: 1300px;
			width: 100%;
			margin: 0 auto;
		}
	}
</style>
