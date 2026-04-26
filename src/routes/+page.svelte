<script lang="ts">
	import type { PageData } from './$types';
	import { Footer, Nav } from '$lib/components';
	import { absoluteUrl } from '$lib/site';
	import { Gallery, Hero, Locations, Menu } from '$lib/components/sections';

	let { data }: { data: PageData } = $props();

	const currentLocale = data.locale;
	const content = data.content;
	const canonicalUrl = absoluteUrl('/', { lang: currentLocale });
	const alternateIdUrl = absoluteUrl('/', { lang: 'id' });
	const alternateEnUrl = absoluteUrl('/', { lang: 'en' });
	const ogImageUrl = content.seo.ogImage ? absoluteUrl(content.seo.ogImage) : undefined;
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const structuredData = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Restaurant',
		name: content.business.name,
		description: content.business.description,
		url: canonicalUrl,
		servesCuisine: content.business.servesCuisine,
		priceRange: content.business.priceRange,
		address: {
			'@type': 'PostalAddress',
			addressLocality: content.business.location,
			addressCountry: 'ID'
		},
		openingHours: content.business.hours,
		image: ogImageUrl
	});
</script>

<svelte:head>
	<title>{content.seo.title}</title>
	<meta name="description" content={content.seo.description} />
	<meta name="keywords" content={content.seo.keywords} />
	<meta name="author" content={content.business.name} />
	<meta name="robots" content="index,follow" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={content.seo.title} />
	<meta property="og:description" content={content.seo.description} />
	{#if ogImageUrl}
		<meta property="og:image" content={ogImageUrl} />
		<meta property="twitter:image" content={ogImageUrl} />
	{/if}
	<meta property="og:locale" content={currentLocale === 'id' ? 'id_ID' : 'en_US'} />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={content.seo.title} />
	<meta property="twitter:description" content={content.seo.description} />
	<link rel="canonical" href={canonicalUrl} />
	<link rel="alternate" hreflang="id" href={alternateIdUrl} />
	<link rel="alternate" hreflang="en" href={alternateEnUrl} />
	<link rel="alternate" hreflang="x-default" href={alternateIdUrl} />

	<script type="application/ld+json">{structuredData}</script>
</svelte:head>

<Nav ui={content.ui} businessName={content.business.name} locale={currentLocale} />

<main id="main-content">
	<Hero content={content.hero} />
	<Gallery intro={content.gallerySection} items={content.gallery} />
	<Menu intro={content.menuSection} items={content.menu} locale={currentLocale} />
	<Locations intro={content.resourcesSection} resources={content.resources} />
</main>

<Footer business={content.business} ui={content.ui} locale={currentLocale} />
