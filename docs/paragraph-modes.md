# Paragraph editions

Settings > 段落顯示 selects sentence (default) or historical paragraph editions for all 20 books. Display, chapter counts and speech use the same selected edition. The shared preference is persisted as `reader-passage-mode`. Reader remounts on edition/chapter changes to stop playback and discard old scroll offsets. Book/chapter IDs are unchanged, preserving chapter-level progress.

Current data modules retain the sentence edition including subsequent alignment fixes. `data/paragraphs/*.json` stores exact original book objects from the parent of `de28d26`, before any sentence resegmentation. `provenance.json` records the full source commit. The action linked by the user corresponds to `4460289`; Romance of the Three Kingdoms had already been split by `f0f1164`, so using only `4460289^` would not recover it.

Romance of the Three Kingdoms: 120 chapters; 2,772 original paragraphs / 30,133 current passages. No guessed joining is used. Historical editions retain their original wording and translations.

Regenerate: `node scripts/archive-paragraphs.cjs` (requires Git history).
Validate: `node --test scripts/paragraph-modes.test.cjs`, `npx tsc --noEmit`, `npm run build:web`.
