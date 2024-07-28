<script lang="ts">
	import { getPaginationRange } from './getPaginationRange';

	export let currentPage: number;
	export let totalPages: number;
	export let baseUrl: string;

	let pagitaionItems: ReturnType<typeof getPaginationRange> = [];
	$: {
		pagitaionItems = getPaginationRange({ currentPage, totalPages });
	}
</script>

<nav>
	<ul>
		<li>
			<a href={`${baseUrl}?page=${currentPage - 1}`} class:disabled={currentPage === 1}>
				{'<'}
			</a>
		</li>
		{#each pagitaionItems as item}
			<li>
				<a href={`${baseUrl}?page=${item.digit}`} class:active={currentPage === item.digit}>
					{item.type === 'ellipsis' ? '...' : item.digit}
				</a>
			</li>
		{/each}
		<li>
			<a href={`${baseUrl}?page=${currentPage + 1}`} class:disabled={currentPage === totalPages}>
				{'>'}
			</a>
		</li>
	</ul>
</nav>

<style>
	ul {
		display: flex;
		gap: 8px;
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	a {
		text-decoration: none;
		color: #333;
		border: 1px solid #ccc;
		min-width: 30px;
		height: 30px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: 5px;

		&.disabled {
			pointer-events: none;
			background-color: #ccc;
			opacity: 0.5;
		}

		&.active {
			pointer-events: none;
			background-color: #333;
			color: #fff;
		}
	}
</style>
