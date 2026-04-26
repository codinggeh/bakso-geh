/**
 * Vitest unit tests for utility functions.
 * @module tests/utils.test
 */
import { describe, it, expect } from 'vitest';
import { cn } from '$lib/utils';

describe('cn (class name merger)', () => {
	it('merges multiple class names', () => {
		expect(cn('px-4', 'py-2')).toBe('px-4 py-2');
	});

	it('handles conditional classes', () => {
		const active = true;
		const hidden = false;
		expect(cn('base', active && 'active', hidden && 'hidden')).toBe('base active');
	});

	it('resolves Tailwind conflicts (last wins)', () => {
		expect(cn('px-4', 'px-6')).toBe('px-6');
	});

	it('handles empty inputs', () => {
		expect(cn()).toBe('');
	});

	it('handles undefined and null', () => {
		expect(cn('base', undefined, null, 'end')).toBe('base end');
	});
});
