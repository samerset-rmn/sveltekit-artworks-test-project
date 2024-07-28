import type { PageLoad } from './$types';

const requestFields = 'id,title,image_id,thumbnail,artist_title';
const artworksPerPage = 100;

export const load: PageLoad<IArtworksPageData> = async ({ url }) => {
	const page = parseInt(url.searchParams.get('page') || '1');

	const res = await fetch(
		`https://api.artic.edu/api/v1/artworks?fields=${requestFields}&limit=${artworksPerPage}&page=${page}`
	);
	const resJson = await res.json();

	return {
		artworks: resJson.data as IArtworksPageData['artworks'],
		pagination: resJson.pagination as IArtworksPageData['pagination']
	};
};

interface IArtworksPageData {
	artworks: {
		id: number;
		title: string;
		image_id: string;
		thumbnail?: {
			alt_text: string;
		};
		artist_title?: string;
	}[];
	pagination: {
		current_page: number;
		total_pages: number;
	};
}
