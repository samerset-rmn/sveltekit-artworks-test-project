import type { PageLoad } from './$types';

export const load: PageLoad<IArtworkPageData> = async ({ params }) => {
	const res = await fetch(`https://api.artic.edu/api/v1/artworks/${params.id}`);
	const resJson = await res.json();

	return {
		artwork: resJson.data as IArtworkPageData['artwork']
	};
};

interface IArtworkPageData {
	artwork: unknown;
}
