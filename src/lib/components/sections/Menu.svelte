<script lang="ts">
	import { ResponsiveImage } from '$lib/components';
	import { formatPrice } from '$lib/content';
	import type { Locale, MenuItem, SectionIntro } from '$lib/types';

	export let intro: SectionIntro;
	export let items: MenuItem[];
	export let locale: Locale = 'id';

	$: itemCountLabel = locale === 'en' ? `${items.length} items` : `${items.length} menu`;
</script>

<section id="menu" class="defer-render border-b border-border/60 bg-background py-14 sm:py-18 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
			<div class="reveal-up max-w-2xl">
				<p class="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{intro.eyebrow}</p>
				<h2 class="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
					{intro.title}
				</h2>
			</div>
			<p class="reveal-up delay-1 text-sm font-medium text-muted-foreground">{itemCountLabel}</p>
		</div>

		<div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
			{#each items as item, index (item.id)}
				<article
					class="group reveal-up overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-sm"
					style={`animation-delay:${index * 80}ms`}
				>
					<div class="relative aspect-[4/3] overflow-hidden bg-muted">
						{#if item.image}
							<ResponsiveImage
								src={item.image}
								alt={item.name}
								className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
								sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
								fallbackWidth={768}
							/>
						{/if}
						<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
						<p class="absolute inset-x-0 bottom-0 p-4 text-lg font-semibold text-white sm:p-5">
							{formatPrice(item.price, item.currency, locale)}
						</p>
					</div>

					<div class="p-5 sm:p-6">
						<h3 class="text-2xl font-semibold tracking-tight text-foreground">{item.name}</h3>
						<p class="mt-2 text-sm leading-7 text-muted-foreground">{item.desc}</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
