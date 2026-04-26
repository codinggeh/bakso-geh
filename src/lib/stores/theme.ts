import { writable } from 'svelte/store';
import type { Theme } from '$lib/types';
import { isBrowser } from '$lib/utils';

const THEME_STORAGE_KEY = 'codinggeh-theme';

function getSystemTheme(): Theme {
	if (!isBrowser()) {
		return 'light';
	}

	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getInitialTheme(): Theme {
	if (!isBrowser()) {
		return 'light';
	}

	const stored = localStorage.getItem(THEME_STORAGE_KEY);
	if (stored === 'light' || stored === 'dark') {
		return stored;
	}

	return getSystemTheme();
}

function applyTheme(theme: Theme): void {
	if (!isBrowser()) {
		return;
	}

	const root = document.documentElement;
	root.classList.remove('light', 'dark');
	root.classList.add(theme);
	root.dataset.theme = theme;
}

function createThemeStore() {
	const { subscribe, set, update } = writable<Theme>('light');

	return {
		subscribe,
		init: () => {
			const initialTheme = getInitialTheme();
			set(initialTheme);
			applyTheme(initialTheme);
		},
		setTheme: (theme: Theme) => {
			set(theme);
			if (isBrowser()) {
				localStorage.setItem(THEME_STORAGE_KEY, theme);
			}
			applyTheme(theme);
		},
		toggle: () => {
			update((current) => {
				const nextTheme: Theme = current === 'dark' ? 'light' : 'dark';
				if (isBrowser()) {
					localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
				}
				applyTheme(nextTheme);
				return nextTheme;
			});
		}
	};
}

export const theme = createThemeStore();
