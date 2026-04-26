import type { LayoutLoad } from './$types';
import { DEFAULT_LOCALE, getContent, isValidLocale } from '$lib/content';
import type { Locale } from '$lib/types';

export const load: LayoutLoad = ({ url }) => {
	const queryLocale = url.searchParams.get('lang');
	const locale: Locale = queryLocale && isValidLocale(queryLocale) ? queryLocale : DEFAULT_LOCALE;

	return {
		locale,
		content: getContent(locale)
	};
};

export const prerender = false;
