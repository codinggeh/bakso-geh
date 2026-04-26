<script lang="ts">
	export let src: string;
	export let alt = '';
	export let className = '';
	export let sizes = '100vw';
	export let widths: number[] = [480, 768, 1280];
	export let fallbackWidth = 768;
	export let loading: 'eager' | 'lazy' = 'lazy';
	export let decoding: 'sync' | 'async' | 'auto' = 'async';
	export let fetchpriority: 'high' | 'low' | 'auto' = 'auto';

	const imageMaxWidths: Record<string, number> = {
		'bakso-bali': 1280,
		'bakso-noodle-closeup': 1280,
		'bakso-rustic': 1280,
		'bakso-bowl': 1280,
		'bakso-closeup': 1280,
		'bakso-complete': 1280,
		'bakso-garnish': 1280,
		'bakso-noodles': 1280,
		'bakso-spicy': 1280,
		'bakso-vermicelli': 1280,
		'hero-bakso': 1280
	};

	function getBaseName(value: string) {
		const fileName = value.split('/').pop() ?? '';
		return fileName.replace(/\.[^.]+$/, '');
	}

	$: baseName = getBaseName(src);
	$: isBaksoAsset = src.startsWith('/images/bakso/') && baseName.length > 0;
	$: maxWidth = imageMaxWidths[baseName] ?? 1280;
	$: resolvedWidths = [...new Set(widths)].sort((a, b) => a - b).filter((width) => width <= maxWidth);
	$: resolvedFallback = resolvedWidths.includes(fallbackWidth)
		? fallbackWidth
		: resolvedWidths.find((width) => width >= fallbackWidth) ??
			resolvedWidths[resolvedWidths.length - 1] ??
			768;
	$: webpSrcSet = resolvedWidths
		.map((width) => `/images/bakso/responsive/${baseName}-${width}.webp ${width}w`)
		.join(', ');
	$: jpgSrcSet = resolvedWidths
		.map((width) => `/images/bakso/responsive/${baseName}-${width}.jpg ${width}w`)
		.join(', ');
	$: fallbackSrc = `/images/bakso/responsive/${baseName}-${resolvedFallback}.jpg`;
</script>

{#if isBaksoAsset}
	<picture>
		<source type="image/webp" srcset={webpSrcSet} sizes={sizes} />
		<img
			src={fallbackSrc}
			srcset={jpgSrcSet}
			sizes={sizes}
			alt={alt}
			class={className}
			loading={loading}
			decoding={decoding}
			fetchpriority={fetchpriority}
		/>
	</picture>
{:else}
	<img src={src} alt={alt} class={className} loading={loading} decoding={decoding} fetchpriority={fetchpriority} />
{/if}
