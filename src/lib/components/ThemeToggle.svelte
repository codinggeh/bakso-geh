<script lang="ts">
	import { MoonStar, SunMedium } from 'lucide-svelte';
	import { theme } from '$lib/stores/theme';

	export let label = 'Toggle theme';
	export let lightLabel = 'Light';
	export let darkLabel = 'Dark';
</script>

<div
	class="inline-flex items-center gap-1 rounded-full border border-border/70 bg-background/80 p-1 shadow-sm backdrop-blur"
	role="group"
	aria-label={label}
>
	<button
		type="button"
		class="inline-flex items-center rounded-full px-3 py-2 text-xs font-semibold transition-colors sm:text-sm {$theme === 'light' ? 'bg-foreground text-background shadow-sm' : 'text-muted-foreground hover:text-foreground'}"
		onclick={() => theme.setTheme('light')}
		aria-pressed={$theme === 'light'}
		aria-label={lightLabel}
	>
		<SunMedium class="h-4 w-4" />
	</button>
	<button
		type="button"
		class="inline-flex items-center rounded-full px-3 py-2 text-xs font-semibold transition-colors sm:text-sm {$theme === 'dark' ? 'bg-foreground text-background shadow-sm' : 'text-muted-foreground hover:text-foreground'}"
		onclick={() => theme.setTheme('dark')}
		aria-pressed={$theme === 'dark'}
		aria-label={darkLabel}
	>
		<MoonStar class="h-4 w-4" />
	</button>
</div>
