import type { RequestHandler } from './$types';
import { absoluteUrl } from '$lib/site';

export const GET: RequestHandler = async () => {
	const content = `User-agent: *
Allow: /

Sitemap: ${absoluteUrl('/sitemap.xml')}
`;

	return new Response(content, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};

export const prerender = true;
