<script lang="ts">
	import { page } from '$app/stores';
	import { LOCALE_NAMES, LOCALE_QUERY_KEY, LOCALE_STORAGE_KEY, SUPPORTED_LOCALES } from '$lib/i18n';
	import type { Locale } from '$lib/types';
	import { isBrowser } from '$lib/utils';

	export let locale: Locale = 'id';
	export let label = 'Switch language';

	function getLocaleHref(nextLocale: Locale) {
		const url = new URL($page.url);
		url.searchParams.set(LOCALE_QUERY_KEY, nextLocale);
		return `${url.pathname}${url.search}${url.hash}`;
	}

	function persistLocale(nextLocale: Locale) {
		if (isBrowser()) {
			localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
		}
	}
</script>

<div
	class="inline-flex items-center gap-1 rounded-full border border-border/70 bg-background/80 p-1 shadow-sm backdrop-blur"
	role="group"
	aria-label={label}
>
	{#each SUPPORTED_LOCALES as item (item)}
		<a
			href={getLocaleHref(item)}
			data-sveltekit-reload
			class="rounded-full px-3 py-2 text-xs font-semibold transition-colors sm:text-sm {locale === item ? 'bg-foreground text-background shadow-sm' : 'text-muted-foreground hover:text-foreground'}"
			aria-current={locale === item ? 'true' : undefined}
			aria-label={LOCALE_NAMES[item]}
			onclick={() => persistLocale(item)}
		>
			{item.toUpperCase()}
		</a>
	{/each}
</div>
