<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import { ResponsiveImage } from '$lib/components';
	import { Button } from '$lib/components/ui/ui/button';
	import type { HeroContent } from '$lib/types';

	export let content: HeroContent;
</script>

<section id="hero" class="relative overflow-hidden border-b border-border/60">
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(191,85,49,0.18),transparent_35%),radial-gradient(circle_at_80%_12%,rgba(90,129,99,0.12),transparent_24%),linear-gradient(180deg,transparent,rgba(19,18,16,0.04))]"></div>

	<div class="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-20">
		<div class="flex max-w-2xl flex-col justify-center">
			<p class="reveal-up inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-background/90 px-4 py-2 text-sm font-semibold text-foreground shadow-sm backdrop-blur">
				<span class="h-2 w-2 rounded-full bg-primary"></span>
				{content.eyebrow}
			</p>

			<h1 class="reveal-up delay-1 mt-5 font-serif text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-[4.75rem] lg:leading-[0.95]">
				{content.headline}
			</h1>
			<p class="reveal-up delay-2 mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
				{content.subheadline}
			</p>

			<div class="reveal-up delay-3 mt-7 flex flex-col gap-3 sm:flex-row">
				<Button href={content.ctaPrimaryHref} size="lg" class="rounded-full px-6">
					{content.ctaPrimary}
					<ArrowRight class="h-4 w-4" />
				</Button>
				<Button href={content.ctaSecondaryHref} variant="outline" size="lg" class="rounded-full px-6">
					{content.ctaSecondary}
				</Button>
			</div>

			<div class="reveal-up delay-3 mt-8 grid gap-3 sm:grid-cols-3">
				{#each content.stats as stat (`${stat.label}-${stat.value}`)}
					<div class="rounded-[1.5rem] border border-border/60 bg-card/85 p-4 shadow-sm backdrop-blur">
						<p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{stat.label}</p>
						<p class="mt-2 text-sm font-semibold text-foreground sm:text-base">{stat.value}</p>
					</div>
				{/each}
			</div>
		</div>

		<div class="grid gap-4 sm:grid-cols-2 sm:grid-rows-2 lg:min-h-[640px]">
			{#if content.galleryImages[0]}
				<figure class="group reveal-up delay-1 relative overflow-hidden rounded-[2.25rem] border border-border/70 bg-card shadow-[0_24px_80px_-32px_rgba(25,20,15,0.45)] sm:row-span-2">
					<ResponsiveImage
						src={content.galleryImages[0].src}
						alt={content.galleryImages[0].alt}
						className="media-pan h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
						sizes="(min-width: 1024px) 52vw, 100vw"
						fallbackWidth={1024}
						loading="eager"
						fetchpriority="high"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"></div>
					{#if content.galleryImages[0].label}
						<figcaption class="absolute inset-x-0 bottom-0 p-5 text-base font-semibold text-white sm:p-6">
							{content.galleryImages[0].label}
						</figcaption>
					{/if}
				</figure>
			{/if}

			{#if content.galleryImages[1]}
				<figure class="group reveal-up delay-2 float-gentle relative overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-sm">
					<ResponsiveImage
						src={content.galleryImages[1].src}
						alt={content.galleryImages[1].alt}
						className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
						sizes="(min-width: 1024px) 26vw, (min-width: 640px) 50vw, 100vw"
						fallbackWidth={768}
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"></div>
					{#if content.galleryImages[1].label}
						<figcaption class="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-white sm:p-5">
							{content.galleryImages[1].label}
						</figcaption>
					{/if}
				</figure>
			{/if}

			{#if content.galleryImages[2]}
				<figure class="group reveal-up delay-3 float-gentle-slow relative overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-sm">
					<ResponsiveImage
						src={content.galleryImages[2].src}
						alt={content.galleryImages[2].alt}
						className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
						sizes="(min-width: 1024px) 26vw, (min-width: 640px) 50vw, 100vw"
						fallbackWidth={768}
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"></div>
					{#if content.galleryImages[2].label}
						<figcaption class="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-white sm:p-5">
							{content.galleryImages[2].label}
						</figcaption>
					{/if}
				</figure>
			{/if}
		</div>
	</div>
</section>
