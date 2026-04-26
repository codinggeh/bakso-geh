import type { Locale } from '$lib/types';
import { SUPPORTED_LOCALES } from '$lib/content';

export const LOCALE_QUERY_KEY = 'lang';
export const LOCALE_STORAGE_KEY = 'codinggeh-locale';

export const LOCALE_NAMES: Record<Locale, string> = {
	id: 'Bahasa Indonesia',
	en: 'English'
};

export { SUPPORTED_LOCALES };
