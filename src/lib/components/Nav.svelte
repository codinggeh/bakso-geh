<script lang="ts">
	import { resolve } from '$app/paths';
	import { Menu, Soup } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/ui/button';
	import {
		Content as SheetContent,
		Header as SheetHeader,
		Root as SheetRoot,
		Title as SheetTitle,
		Trigger as SheetTrigger
	} from '$lib/components/ui/ui/sheet';
	import ThemeToggle from './ThemeToggle.svelte';
	import LocaleSwitcher from './LocaleSwitcher.svelte';
	import type { Locale, UITranslations } from '$lib/types';

	export let ui: UITranslations;
	export let businessName = 'Bakso Geh';
	export let locale: Locale = 'id';

	let open = false;

	const navLinks = [
		{ id: 'hero', label: 'home' },
		{ id: 'menu', label: 'menu' },
		{ id: 'contact', label: 'locations' }
	] as const;

	function closeMenu() {
		open = false;
	}

	function getSectionHref(section: (typeof navLinks)[number]['id']) {
		return `${resolve('/')}?lang=${locale}#${section}`;
	}
</script>

<header class="sticky top-0 z-50 border-b border-border/60 bg-background/82 backdrop-blur-xl">
	<nav class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
		<a href={getSectionHref('hero')} class="flex items-center gap-3">
			<span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground text-background shadow-sm">
				<Soup class="h-5 w-5" />
			</span>
			<span class="font-serif text-lg font-semibold tracking-tight">{businessName}</span>
		</a>

		<div class="hidden items-center gap-6 lg:flex">
			{#each navLinks as link (link.id)}
				<a href={getSectionHref(link.id)} class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
					{ui.nav[link.label]}
				</a>
			{/each}
		</div>

		<div class="hidden items-center gap-3 lg:flex">
			<LocaleSwitcher locale={locale} label={ui.accessibility.switchLanguage} />
			<ThemeToggle label={ui.accessibility.toggleTheme} lightLabel={ui.common.light} darkLabel={ui.common.dark} />
		</div>

		<SheetRoot bind:open>
			<SheetTrigger>
				{#snippet child({ props })}
					<Button {...props} variant="outline" size="icon" class="lg:hidden" aria-label={ui.accessibility.openNavigation}>
						<Menu class="h-5 w-5" />
					</Button>
				{/snippet}
			</SheetTrigger>
			<SheetContent side="right" class="w-[92vw] max-w-[360px] border-l border-border/60 bg-background px-6 py-6 sm:w-[360px]">
				<SheetHeader class="border-b border-border/60 pb-5">
					<SheetTitle class="flex items-center gap-3 text-left font-serif text-xl">
						<span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground text-background">
							<Soup class="h-5 w-5" />
						</span>
						{businessName}
					</SheetTitle>
				</SheetHeader>

				<div class="mt-6 space-y-6">
					<div class="space-y-2">
						{#each navLinks as link (link.id)}
							<a href={getSectionHref(link.id)} class="block rounded-2xl border border-border/60 px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted/60" onclick={closeMenu}>
								{ui.nav[link.label]}
							</a>
						{/each}
					</div>

					<div class="space-y-3 border-t border-border/60 pt-6">
						<LocaleSwitcher locale={locale} label={ui.accessibility.switchLanguage} />
						<ThemeToggle label={ui.accessibility.toggleTheme} lightLabel={ui.common.light} darkLabel={ui.common.dark} />
					</div>
				</div>
			</SheetContent>
		</SheetRoot>
	</nav>
</header>
