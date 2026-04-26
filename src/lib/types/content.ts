export type Locale = 'en' | 'id';
export type Theme = 'light' | 'dark';

interface CreatorInfo {
	name: string;
	website: string;
	email: string;
	github: string;
}

interface SEOMeta {
	title: string;
	description: string;
	keywords: string;
	ogImage?: string;
}

export interface BusinessInfo {
	name: string;
	description: string;
	tagline: string;
	location: string;
	hours: string;
	priceRange?: string;
	servesCuisine: string[];
}

interface HeroStat {
	value: string;
	label: string;
}

interface HeroImage {
	id: string;
	src: string;
	alt: string;
	label?: string;
}

export interface GalleryImageItem {
	id: string;
	src: string;
}

export interface HeroContent {
	eyebrow: string;
	headline: string;
	subheadline: string;
	ctaPrimary: string;
	ctaSecondary: string;
	ctaPrimaryHref: string;
	ctaSecondaryHref: string;
	stats: HeroStat[];
	galleryImages: HeroImage[];
}

export interface SectionIntro {
	eyebrow: string;
	title: string;
	description: string;
}

export interface MenuItem {
	id: string;
	name: string;
	price: number;
	currency: string;
	desc: string;
	image?: string;
}

export interface ResourceItem {
	id: string;
	title: string;
	description: string;
	meta: string;
	href?: string;
	hrefLabel?: string;
	icon: string;
}

interface DisclaimerContent {
	seoTitle: string;
	seoDescription: string;
	eyebrow: string;
	title: string;
	intro: string;
	items: string[];
	closing: string;
	note: string;
	contactTitle: string;
	contactIntro: string;
}

export interface UITranslations {
	nav: {
		home: string;
		menu: string;
		locations: string;
		disclaimer: string;
	};
	common: {
		backHome: string;
		light: string;
		dark: string;
	};
	footer: {
		allRightsReserved: string;
	};
	accessibility: {
		toggleTheme: string;
		switchLanguage: string;
		openNavigation: string;
	};
}

export interface LocaleContent {
	locale: Locale;
	seo: SEOMeta;
	creator: CreatorInfo;
	business: BusinessInfo;
	hero: HeroContent;
	gallerySection: SectionIntro;
	gallery: GalleryImageItem[];
	menuSection: SectionIntro;
	menu: MenuItem[];
	resourcesSection: SectionIntro;
	resources: ResourceItem[];
	disclaimer: DisclaimerContent;
	ui: UITranslations;
}
