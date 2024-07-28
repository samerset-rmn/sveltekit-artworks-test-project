<script lang="ts">
	import Pagination from '$lib/components/Pagination/Pagination.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Artgallery</title>
</svelte:head>

<div>
	<h1>Browse and admire different artworks from the Art Institute of Chicago</h1>
	<section class="artworks-section">
		<h2 class="visually-hidden">Artworks</h2>
		<section class="artworks-list-controls">
			<div>test</div>
			<Pagination
				currentPage={data.pagination.current_page}
				totalPages={data.pagination.total_pages}
				baseUrl="/"
			/>
		</section>

		<ul class="artworks-list">
			{#each data.artworks as artwork}
				<li>
					<a href="/artwork/{artwork.id}" class="artwork">
						<img
							class="thumbnail"
							src="https://www.artic.edu/iiif/2/{artwork.image_id}/full/843,/0/default.jpg"
							alt={artwork.thumbnail?.alt_text}
							loading="lazy"
						/>
						<h3>
							{artwork.title}
						</h3>
						{#if artwork.artist_title}
							<span class="artist-title">{artwork.artist_title}</span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>

		<div class="bottom-pagination">
			<Pagination
				currentPage={data.pagination.current_page}
				totalPages={data.pagination.total_pages}
				baseUrl="/"
			/>
		</div>
	</section>
</div>

<style>
	.artworks-section {
		margin-top: 100px;
	}

	.artworks-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
		gap: 20px;
		margin: 0 0 50px;
		padding: 0;
		list-style-type: none;
	}

	.artwork {
		border: 1px solid #ccc;
		padding: 7px 7px 10px 7px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		height: 100%;
		text-decoration: none;
		color: #222222;

		& > .thumbnail {
			max-width: 100%;
			display: block;
			aspect-ratio: 3 / 4;
			object-fit: cover;
		}

		& > .artist-title {
			margin-top: auto;
			color: indianred;
		}
	}

	.artworks-list-controls {
		display: flex;
		justify-content: space-between;
		margin-bottom: 40px;
	}

	.bottom-pagination {
		margin: 0 auto;
		max-width: max-content;
	}
</style>
