import { describe, expect, it } from 'vitest';
import {
	DEFAULT_LOCALE,
	SUPPORTED_LOCALES,
	formatPrice,
	getContent,
	getMenuItems,
	getResources,
	isValidLocale
} from '$lib/content';

describe('Content API', () => {
	describe('getContent', () => {
		it('returns content for default locale', () => {
			const content = getContent();
			expect(content.locale).toBe('id');
			expect(content.hero.headline).toBeTruthy();
		});

		it('returns content for english locale', () => {
			const content = getContent('en');
			expect(content.locale).toBe('en');
			expect(content.disclaimer.title).toBeTruthy();
		});
	});

	describe('getMenuItems', () => {
		it('returns priced menu items', () => {
			const items = getMenuItems();
			expect(items.length).toBeGreaterThan(0);
			items.forEach((item) => {
				expect(item.price).toBeGreaterThan(0);
				expect(item.currency).toBe('IDR');
				expect(item.name).toBeTruthy();
			});
		});
	});

	describe('getResources', () => {
		it('returns location cards for the contact section', () => {
			const resources = getResources();
			expect(resources.length).toBeGreaterThan(0);
			expect(resources.some((resource) => resource.href)).toBe(true);
			resources.forEach((resource) => {
				expect(resource.title).toBeTruthy();
				expect(resource.meta).toBeTruthy();
				expect(resource.icon).toBeTruthy();
			});
		});
	});

	describe('formatPrice', () => {
		it('formats prices for Indonesian locale', () => {
			const formatted = formatPrice(28000, 'IDR', 'id');
			expect(formatted).toContain('28');
			expect(formatted).toContain('000');
		});

		it('formats prices for English locale', () => {
			const formatted = formatPrice(28000, 'IDR', 'en');
			expect(formatted).toContain('28');
		});
	});

	describe('isValidLocale', () => {
		it('accepts supported locales', () => {
			expect(isValidLocale('id')).toBe(true);
			expect(isValidLocale('en')).toBe(true);
		});

		it('rejects unsupported locales', () => {
			expect(isValidLocale('fr')).toBe(false);
			expect(isValidLocale('')).toBe(false);
		});
	});

	describe('constants', () => {
		it('keeps default locale and supported locales in sync', () => {
			expect(DEFAULT_LOCALE).toBe('id');
			expect(SUPPORTED_LOCALES).toEqual(['id', 'en']);
		});
	});
});
