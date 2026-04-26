import type { RequestHandler } from './$types';
import { absoluteUrl } from '$lib/site';

export const GET: RequestHandler = async () => {
	const pages = [
		{ path: '/', priority: 1.0, changefreq: 'monthly' },
		{ path: '/disclaimer', priority: 0.7, changefreq: 'monthly' }
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `  <url>
    <loc>${absoluteUrl(page.path)}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};

export const prerender = true;
