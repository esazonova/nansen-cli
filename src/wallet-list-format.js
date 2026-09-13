/**
 * Decide how `wallet list` should print.
 * Interactive TTY: human table on stdout, no JSON (handler returns undefined).
 * Piped / format flags: human table on stderr, handler returns data for JSON stdout.
 */
export function walletListShouldEmitJson(flags = {}, stdout = process.stdout) {
  return Boolean(flags.pretty || flags.table || flags.csv || flags.stream || !stdout.isTTY);
}
