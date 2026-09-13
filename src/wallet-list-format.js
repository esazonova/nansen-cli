/**
 * Decide how `wallet list` should print.
 *
 * Interactive TTY + no format flags: human table on stdout, handler returns
 * undefined so cli.js does not also print JSON.
 *
 * Piped stdout or --pretty/--table/--csv/--stream: handler should return the
 * list payload so cli.js writes the JSON envelope to stdout. Print the human
 * table on stderr in that case so `jq` and agents can parse stdout.
 *
 * Wire this from the `list` handler in src/wallet.js:
 *
 *   import { walletListShouldEmitJson } from './wallet-list-format.js';
 *   const wantJson = walletListShouldEmitJson(flags);
 *   const writeHuman = wantJson ? (deps.errorOutput || console.error) : log;
 *   // ...print table via writeHuman...
 *   return wantJson ? result : undefined;
 */
export function walletListShouldEmitJson(flags = {}, stdout = process.stdout) {
  return Boolean(flags.pretty || flags.table || flags.csv || flags.stream || !stdout.isTTY);
}
