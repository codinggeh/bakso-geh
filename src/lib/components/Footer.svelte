<script lang="ts">
	import { resolve } from '$app/paths';
	import { Soup } from 'lucide-svelte';
	import type { BusinessInfo, Locale, UITranslations } from '$lib/types';

	export let business: BusinessInfo;
	export let ui: UITranslations;
	export let locale: Locale = 'id';

	const year = new Date().getFullYear();

	function getSectionHref(section: 'hero' | 'menu' | 'contact') {
		return `${resolve('/')}?lang=${locale}#${section}`;
	}

	function getDisclaimerHref() {
		return `${resolve('/disclaimer')}?lang=${locale}`;
	}
</script>

<footer class="bg-background py-8 sm:py-10">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col gap-6 rounded-[2rem] border border-border/60 bg-card/80 p-5 shadow-sm sm:p-6 lg:flex-row lg:items-center lg:justify-between">
			<div class="flex items-center gap-3">
				<span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground text-background">
					<Soup class="h-5 w-5" />
				</span>
				<div>
					<p class="font-serif text-xl font-semibold tracking-tight text-foreground">{business.name}</p>
					<p class="text-sm text-muted-foreground">{business.tagline}</p>
				</div>
			</div>

			<div class="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
				<a href={getSectionHref('hero')} class="hover:text-foreground">{ui.nav.home}</a>
				<a href={getSectionHref('menu')} class="hover:text-foreground">{ui.nav.menu}</a>
				<a href={getSectionHref('contact')} class="hover:text-foreground">{ui.nav.locations}</a>
				<a href={getDisclaimerHref()} class="hover:text-foreground">{ui.nav.disclaimer}</a>
			</div>
		</div>

		<div class="mt-5 text-center text-sm text-muted-foreground">
			<p>© {year} {business.name}. {ui.footer.allRightsReserved}</p>
		</div>
	</div>
</footer>
