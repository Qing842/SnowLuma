import { describe, expect, it } from 'vitest';
import { normalizeOneBotConfig } from '../src/lib/onebot-config';

describe('normalizeOneBotConfig history sync', () => {
    it('defaults older payloads to disabled', () => {
        expect(normalizeOneBotConfig({}).historySync).toEqual({ enabled: false });
    });

    it('preserves an explicit per-account opt-in', () => {
        expect(
            normalizeOneBotConfig({
                historySync: { enabled: true },
            }).historySync,
        ).toEqual({ enabled: true });
    });
});

describe('normalizeOneBotConfig statusCommand', () => {
    it('defaults statusCommand.enabled to false when omitted', () => {
        expect(normalizeOneBotConfig({}).statusCommand).toEqual({
            enabled: false,
            swallow: false,
            cooldownSeconds: 5,
            trigger: '#sl',
        });
    });

    it('preserves an explicit statusCommand.enabled opt-in', () => {
        expect(
            normalizeOneBotConfig({
                statusCommand: { enabled: true },
            }).statusCommand.enabled,
        ).toBe(true);
    });
});
