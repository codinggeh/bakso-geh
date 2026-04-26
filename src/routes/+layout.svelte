<script lang="ts">
	import '../app.css';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';
	import { LOCALE_QUERY_KEY, LOCALE_STORAGE_KEY } from '$lib/i18n';
	import { isValidLocale } from '$lib/content';
	import { theme } from '$lib/stores/theme';
	import type { LayoutData } from './$types';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	$effect(() => {
		if (typeof document === 'undefined') {
			return;
		}

		document.documentElement.lang = data.locale;
	});

	onMount(async () => {
		theme.init();

		const url = new URL(window.location.href);
		const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);
		const currentQueryLocale = url.searchParams.get(LOCALE_QUERY_KEY);

		if (currentQueryLocale && isValidLocale(currentQueryLocale) && currentQueryLocale !== data.locale) {
			await goto(`${url.pathname}${url.search}${url.hash}`, {
				replaceState: true,
				invalidateAll: true,
				noScroll: true,
				keepFocus: true
			});
			return;
		}

		if (currentQueryLocale && isValidLocale(currentQueryLocale)) {
			localStorage.setItem(LOCALE_STORAGE_KEY, currentQueryLocale);
		}

		if (!currentQueryLocale && storedLocale && isValidLocale(storedLocale) && storedLocale !== data.locale) {
			url.searchParams.set(LOCALE_QUERY_KEY, storedLocale);
			await goto(`${url.pathname}${url.search}${url.hash}`, {
				replaceState: true,
				invalidateAll: true,
				noScroll: true,
				keepFocus: true
			});
		}
	});
</script>

<svelte:head>
	<meta name="theme-color" content="#b85b34" />
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
</svelte:head>

{@render children()}
