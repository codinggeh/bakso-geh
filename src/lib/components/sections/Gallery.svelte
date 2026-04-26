<script lang="ts">
	import { ResponsiveImage } from '$lib/components';
	import type { GalleryImageItem, SectionIntro } from '$lib/types';

	export let intro: SectionIntro;
	export let items: GalleryImageItem[];

	function tileClass(index: number) {
		if (index === 0) return 'md:col-span-2 md:row-span-2';
		if (index === 3 || index === 6) return 'xl:row-span-2';
		return '';
	}

	function tileSizes(index: number) {
		if (index === 0) return '(min-width: 1280px) 50vw, 100vw';
		return '(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw';
	}
</script>

<section id="gallery" class="defer-render border-b border-border/60 bg-muted/20 py-14 sm:py-18 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
			<div class="reveal-up">
				<p class="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{intro.eyebrow}</p>
				<h2 class="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
					{intro.title}
				</h2>
			</div>
			{#if intro.description}
				<p class="reveal-up delay-1 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
					{intro.description}
				</p>
			{/if}
		</div>

		<div class="mt-8 grid auto-rows-[180px] gap-4 md:grid-cols-2 xl:grid-cols-4">
			{#each items as item, index (item.id)}
				<figure
					class={`group reveal-up relative overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-sm ${tileClass(index)}`}
					style={`animation-delay:${index * 90}ms`}
				>
					<ResponsiveImage
						src={item.src}
						alt=""
						className="media-pan h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
						sizes={tileSizes(index)}
						fallbackWidth={768}
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/58 via-black/10 to-transparent"></div>
				</figure>
			{/each}
		</div>
	</div>
</section>
