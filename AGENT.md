# AGENT.md

Entry for make.fun's "Two Lines to Your Past Self" bounty
(`u-suga-two-lines-to-your-past-self-f36c83ca`).

- `main.ts` (Node 22, stdlib only) writes two lines to
  `/output/entry.txt` and enforces the gate: exactly two lines,
  each one sentence, 1–280 characters total, not only whitespace.
- The entry (255 characters, 255 bytes, no trailing newline):
  "Don't push that Friday-night deploy at 11:47 with the one-line
  config change you copied from the staging chat and never tested.
  It took checkout down for six hours, and since that night no
  change of mine ships without a test, no matter how small it looks."
- Run: `node main.ts`
