<script lang="ts">
	import type { PageData } from './$types';
	import { ArrowLeft, ExternalLink, Github, Mail } from 'lucide-svelte';
	import LocaleSwitcher from '$lib/components/LocaleSwitcher.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { Button } from '$lib/components/ui/ui/button';
	import { absoluteUrl } from '$lib/site';

	let { data }: { data: PageData } = $props();

	const content = data.content;
	const locale = data.locale;
	const canonicalUrl = absoluteUrl('/disclaimer', { lang: locale });
</script>

<svelte:head>
	<title>{content.disclaimer.seoTitle}</title>
	<meta name="description" content={content.disclaimer.seoDescription} />
	<meta name="robots" content="index,follow" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={content.disclaimer.seoTitle} />
	<meta property="og:description" content={content.disclaimer.seoDescription} />
	<link rel="canonical" href={canonicalUrl} />
</svelte:head>

<div class="min-h-screen bg-background">
	<header class="sticky top-0 z-40 border-b border-border/60 bg-background/88 backdrop-blur-xl">
		<div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
			<Button href={`/?lang=${locale}#hero`} variant="outline" class="rounded-full px-4">
				<ArrowLeft class="h-4 w-4" />
				{content.ui.common.backHome}
			</Button>

			<div class="flex items-center gap-3">
				<LocaleSwitcher locale={locale} label={content.ui.accessibility.switchLanguage} />
				<ThemeToggle
					label={content.ui.accessibility.toggleTheme}
					lightLabel={content.ui.common.light}
					darkLabel={content.ui.common.dark}
				/>
			</div>
		</div>
	</header>

	<main class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
		<div class="max-w-3xl">
			<p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{content.disclaimer.eyebrow}</p>
			<h1 class="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
				{content.disclaimer.title}
			</h1>
			<p class="mt-6 text-lg leading-8 text-muted-foreground">{content.disclaimer.intro}</p>
		</div>

		<div class="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
			<section class="rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm sm:p-8">
				<ul class="space-y-4">
					{#each content.disclaimer.items as item, index (`${index}-${item}`)}
						<li class="rounded-[1.5rem] bg-muted/35 px-4 py-4 text-base leading-7 text-muted-foreground">
							{item}
						</li>
					{/each}
				</ul>
				{#if content.disclaimer.closing}
					<p class="mt-6 text-base leading-8 text-foreground">{content.disclaimer.closing}</p>
				{/if}
				{#if content.disclaimer.note}
					<p class="mt-6 text-sm text-muted-foreground">{content.disclaimer.note}</p>
				{/if}
			</section>

			<aside class="rounded-[2rem] border border-border/60 bg-muted/25 p-6 shadow-sm sm:p-8">
				<p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Coding Geh</p>
				<h2 class="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground">{content.disclaimer.contactTitle}</h2>
				<p class="mt-4 text-sm leading-7 text-muted-foreground">{content.disclaimer.contactIntro}</p>

				<div class="mt-8 space-y-3">
					<Button href={content.creator.website} class="w-full justify-between rounded-full px-5">
						<span>{content.creator.website.replace('https://', '')}</span>
						<ExternalLink class="h-4 w-4" />
					</Button>
					<Button href={`mailto:${content.creator.email}`} variant="outline" class="w-full justify-between rounded-full px-5">
						<span>{content.creator.email}</span>
						<Mail class="h-4 w-4" />
					</Button>
					<Button href={content.creator.github} variant="outline" class="w-full justify-between rounded-full px-5">
						<span>/codinggeh</span>
						<Github class="h-4 w-4" />
					</Button>
				</div>
			</aside>
		</div>
	</main>
</div>
