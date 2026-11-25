// The One-Liner Groan-Off — one original dad joke, one line.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// not only white space. This entry is 107 characters, one line.
// The groan: "grounded" does double duty — the Wi-Fi is down and
// the whole house is punished like a kid. No setup wasted, the
// punchline lands on the last word.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "I told my Wi-Fi a joke — it laughed so hard it dropped the connection, and now the whole house is grounded.";

// Guard the gate before writing: one line, 1-140 chars, not blank.
if (
  [...ENTRY].length < 1 ||
  [...ENTRY].length > 140 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error("entry violates the 1-140 character one-line gate");
}

const target = process.argv[2] ?? "/output/entry.txt";
const outFile = target.endsWith(".txt") ? target : join(target, "entry.txt");
mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");
console.log(`wrote ${outFile} (${[...ENTRY].length} characters)`);
