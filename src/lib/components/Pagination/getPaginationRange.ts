interface IGetPaginationRangeParams {
	totalPages: number;
	currentPage: number;
}

interface IRangeItem {
	digit: number;
	type: 'normal' | 'ellipsis';
}

const PAGINATION_WIDTH = 5;

export function getPaginationRange({
	totalPages,
	currentPage
}: IGetPaginationRangeParams): IRangeItem[] {
	// No pagination needed
	if (totalPages <= PAGINATION_WIDTH) {
		return Array(totalPages)
			.fill(null)
			.map((_el, i) => ({ digit: i + 1, type: 'normal' }));
	}

	const range = (() => {
		const nullArray = Array(PAGINATION_WIDTH).fill(null);

		// Range touches the left border
		if (currentPage < Math.ceil(PAGINATION_WIDTH / 2)) {
			return nullArray.map((_el, i) => i + 1);
		}

		// Range touches the right border
		if (currentPage > totalPages - Math.floor(PAGINATION_WIDTH / 2)) {
			return nullArray.map((_el, i) => totalPages - PAGINATION_WIDTH + i + 1);
		}

		// Range is in the middle
		return nullArray.map((_el, i) => currentPage - Math.floor(PAGINATION_WIDTH / 2) + i);
	})().map((digit) => ({ type: 'normal', digit }) as IRangeItem);

	// We need to show the first and the last page on the sides
	range[0].digit = 1;
	range[range.length - 1].digit = totalPages;

	// Если первый или последний айтем не касаются основного ренжа,
	// надо отобразить второй или предпоследний элемент как "..."
	if (range[1].digit !== 2) {
		range[1].type = 'ellipsis';
	}
	if (range[range.length - 2].digit !== totalPages - 1) {
		range[range.length - 2].type = 'ellipsis';
	}

	return range;
}
