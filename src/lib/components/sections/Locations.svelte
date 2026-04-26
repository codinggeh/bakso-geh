<script lang="ts">
	import { Clock3, MapPin, MoveRight, Store } from 'lucide-svelte';
	import type { ResourceItem, SectionIntro } from '$lib/types';

	export let intro: SectionIntro;
	export let resources: ResourceItem[];

	const iconMap = {
		'map-pin': MapPin,
		clock: Clock3,
		store: Store
	};
</script>

<section id="contact" class="border-b border-border/60 bg-background py-14 sm:py-18 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
			<div class="reveal-up max-w-2xl">
				<p class="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{intro.eyebrow}</p>
				<h2 class="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
					{intro.title}
				</h2>
				{#if intro.description}
					<p class="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">{intro.description}</p>
				{/if}
			</div>
		</div>

		<div class="mt-8 grid gap-4 md:grid-cols-3">
			{#each resources as resource, index (resource.id)}
				{@const Icon = iconMap[resource.icon as keyof typeof iconMap] || MapPin}
				<svelte:element
					this={resource.href ? 'a' : 'div'}
					href={resource.href}
					target={resource.href ? '_blank' : undefined}
					rel={resource.href ? 'noreferrer' : undefined}
					class="group reveal-up rounded-[2rem] border border-border/60 bg-card p-5 shadow-sm transition-transform duration-500 hover:-translate-y-1 hover:shadow-md sm:p-6"
					style={`animation-delay:${index * 90}ms`}
				>
					<div class="flex items-center justify-between gap-4">
						<span class="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{resource.meta}</span>
						<span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
							<Icon class="h-5 w-5" />
						</span>
					</div>
					<h3 class="mt-5 text-2xl font-semibold tracking-tight text-foreground">{resource.title}</h3>
					<p class="mt-2 text-sm leading-7 text-muted-foreground">{resource.description}</p>
					{#if resource.href && resource.hrefLabel}
						<span class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
							{resource.hrefLabel}
							<MoveRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
						</span>
					{/if}
				</svelte:element>
			{/each}
		</div>
	</div>
</section>
