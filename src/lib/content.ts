import type { Locale, LocaleContent, MenuItem, ResourceItem } from '$lib/types';

import enContent from '$lib/data/en.json';
import idContent from '$lib/data/id.json';

const contentMap: Record<Locale, LocaleContent> = {
	en: enContent as LocaleContent,
	id: idContent as LocaleContent
};

export const DEFAULT_LOCALE: Locale = 'id';
export const SUPPORTED_LOCALES: Locale[] = ['id', 'en'];

export function getContent(locale: Locale = DEFAULT_LOCALE): LocaleContent {
	return contentMap[locale] || contentMap[DEFAULT_LOCALE];
}

export function getMenuItems(locale: Locale = DEFAULT_LOCALE): MenuItem[] {
	return getContent(locale).menu;
}

export function getResources(locale: Locale = DEFAULT_LOCALE): ResourceItem[] {
	return getContent(locale).resources;
}

export function formatPrice(price: number, currency: string, locale: Locale = DEFAULT_LOCALE): string {
	const localeMap: Record<Locale, string> = {
		id: 'id-ID',
		en: 'en-US'
	};

	return new Intl.NumberFormat(localeMap[locale], {
		style: 'currency',
		currency,
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	}).format(price);
}

export function isValidLocale(locale: string): locale is Locale {
	return SUPPORTED_LOCALES.includes(locale as Locale);
}
