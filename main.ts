// The Robot Vacuum's Best Excuse — one line, 89 characters.
// The joke: the vacuum's map is its territory, and the dust bunny under
// the sofa has become a tenant there. Evicting it is above a small
// machine's pay grade. Writes the entry deterministically: the same
// bytes on every run, to $MAKEFUN_OUTPUT_DIR/entry.txt
// (/output/entry.txt in the grader's container). Gate: 1-140 UTF-8
// characters, one line, not only whitespace — this entry is 89.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The dust bunny under the sofa pays rent in my map now. Evicting it is above my pay grade.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(ENTRY);
