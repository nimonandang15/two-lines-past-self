import * as fs from "node:fs";

// Two lines to my past self. Line one warns about one specific moment:
// a Friday-night deploy at 11:47, pushed with a one-line config change
// copied from the staging chat and never tested. Line two traces the
// cause and effect: checkout went down for six hours, and since that
// night no change ships without a test, however small it looks — the
// untested line is the cause, the new rule is the effect.
const text =
  "Don't push that Friday-night deploy at 11:47 with the one-line config change you copied from the staging chat and never tested.\nIt took checkout down for six hours, and since that night no change of mine ships without a test, no matter how small it looks.";

// Gate: exactly two lines, 1-280 characters, UTF-8, not only whitespace.
// Each line is one sentence: 127 + 127 characters, 255 total, all ASCII,
// so 255 bytes with a single "\n" between the lines and no trailing
// newline. ASCII-only is deliberate: byte count equals char count, and
// a smaller text wins an exact tie on the leaderboard.
const lines = text.split("\n");
if (lines.length !== 2) {
  throw new Error(`Expected exactly 2 lines, got ${lines.length}`);
}
for (const line of lines) {
  if ((line.match(/\./g) ?? []).length !== 1) {
    throw new Error(`Each line must be exactly one sentence: ${line}`);
  }
}
if (text.length < 1 || text.length > 280) {
  throw new Error(`Expected 1-280 characters, got ${text.length}`);
}
if (text.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
