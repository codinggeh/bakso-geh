import { env } from '$env/dynamic/public';

const FALLBACK_SITE_URL = 'http://localhost:5173';

const siteUrl = (env.PUBLIC_SITE_URL || FALLBACK_SITE_URL).replace(/\/$/, '');

export function absoluteUrl(
	pathname = '/',
	searchParams?: Record<string, string | undefined>
): string {
	const url = new URL(pathname, `${siteUrl}/`);

	if (searchParams) {
		for (const [key, value] of Object.entries(searchParams)) {
			if (value) {
				url.searchParams.set(key, value);
			}
		}
	}

	return url.toString();
}
