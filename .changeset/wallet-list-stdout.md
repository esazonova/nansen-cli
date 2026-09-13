---
"nansen-cli": patch
---

Keep `nansen wallet list` human-readable on a TTY, but emit the JSON envelope on stdout when piped or when a format flag is set. Fixes #154.
