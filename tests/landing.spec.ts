/**
 * Playwright E2E tests for Coding Geh Coffee Shop landing page.
 * Tests hero rendering and contact link functionality.
 * @module tests/e2e/landing
 */
import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('hero section renders correctly', async ({ page }) => {
		// Check hero section exists
		const hero = page.locator('#hero');
		await expect(hero).toBeVisible();

		// Check headline is present
		const headline = page.locator('#hero-headline');
		await expect(headline).toBeVisible();
		await expect(headline).not.toBeEmpty();

		// Check CTA buttons are present
		const viewMenuBtn = page.getByRole('link', { name: /menu/i }).first();
		await expect(viewMenuBtn).toBeVisible();
	});

	test('navigation works correctly', async ({ page }) => {
		// Check navigation is visible
		const nav = page.locator('nav');
		await expect(nav).toBeVisible();

		// Check logo/brand is present
		const logo = page.locator('nav a').first();
		await expect(logo).toBeVisible();
	});

	test('contact section has phone and email links', async ({ page }) => {
		// Scroll to contact/footer section
		await page.locator('#contact').scrollIntoViewIfNeeded();

		// Check for phone link
		const phoneLink = page.locator('a[href^="tel:"]').first();
		await expect(phoneLink).toBeVisible();

		// Check for email link
		const emailLink = page.locator('a[href^="mailto:"]').first();
		await expect(emailLink).toBeVisible();
	});

	test('menu section displays items', async ({ page }) => {
		const menuSection = page.locator('#menu');
		await menuSection.scrollIntoViewIfNeeded();

		// Check menu section exists
		await expect(menuSection).toBeVisible();

		// Check menu items are displayed (cards)
		const menuCards = menuSection.locator('[class*="card"]');
		const count = await menuCards.count();
		expect(count).toBeGreaterThan(0);
	});

	test('locations section displays branches', async ({ page }) => {
		const locationsSection = page.locator('#locations');
		await locationsSection.scrollIntoViewIfNeeded();

		// Check locations section exists
		await expect(locationsSection).toBeVisible();

		// Check branch cards are displayed
		const branchCards = locationsSection.locator('[class*="card"]');
		const count = await branchCards.count();
		expect(count).toBeGreaterThan(0);
	});

	test('theme toggle button exists and is accessible', async ({ page }) => {
		// Check theme toggle button exists
		const themeToggle = page.getByRole('button', { name: /theme|tema/i });
		await expect(themeToggle).toBeVisible();

		// Click and verify it's still accessible
		await themeToggle.click();
		await expect(themeToggle).toBeVisible();
	});

	test('language switcher exists', async ({ page }) => {
		// Check language switcher button exists
		const langSwitcher = page.getByRole('button', { name: /language|bahasa/i });
		await expect(langSwitcher).toBeVisible();
	});

	test('newsletter form is present', async ({ page }) => {
		const newsletterSection = page.locator('#newsletter');
		await newsletterSection.scrollIntoViewIfNeeded();

		// Check newsletter section exists
		await expect(newsletterSection).toBeVisible();

		// Check email input exists
		const emailInput = newsletterSection.locator('input[type="email"]');
		await expect(emailInput).toBeVisible();

		// Check submit button exists
		const submitBtn = newsletterSection.locator('button[type="submit"]');
		await expect(submitBtn).toBeVisible();
	});

	test('page has proper meta tags for SEO', async ({ page }) => {
		// Check title exists
		const title = await page.title();
		expect(title).toBeTruthy();
		expect(title.toLowerCase()).toContain('coding geh');

		// Check meta description
		const metaDesc = page.locator('meta[name="description"]');
		await expect(metaDesc).toHaveAttribute('content', /.+/);

		// Check Open Graph tags
		const ogTitle = page.locator('meta[property="og:title"]');
		await expect(ogTitle).toHaveAttribute('content', /.+/);
	});

	test('skip to content link works for accessibility', async ({ page }) => {
		// Focus on skip link (it's sr-only by default)
		await page.keyboard.press('Tab');

		// Check main content exists
		const mainContent = page.locator('#main-content');
		await expect(mainContent).toBeVisible();
	});
});
