import { describe, it, expect } from 'vitest';
import { walletListShouldEmitJson } from '../wallet-list-format.js';

describe('walletListShouldEmitJson', () => {
  it('keeps human-only output on an interactive TTY with no format flags', () => {
    expect(walletListShouldEmitJson({}, { isTTY: true })).toBe(false);
  });

  it('emits JSON when stdout is piped', () => {
    expect(walletListShouldEmitJson({}, { isTTY: false })).toBe(true);
  });

  it('emits JSON when a format flag is set on a TTY', () => {
    expect(walletListShouldEmitJson({ pretty: true }, { isTTY: true })).toBe(true);
    expect(walletListShouldEmitJson({ table: true }, { isTTY: true })).toBe(true);
    expect(walletListShouldEmitJson({ csv: true }, { isTTY: true })).toBe(true);
    expect(walletListShouldEmitJson({ stream: true }, { isTTY: true })).toBe(true);
  });
}
