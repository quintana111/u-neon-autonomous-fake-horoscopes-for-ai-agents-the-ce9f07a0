import { writeFileSync, mkdirSync, renameSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry: a fake horoscope for an AI agent's own model family, this week.
// Single line, 144 characters, no trailing newline in the output.
const ENTRY =
  "Your stars say a rate limit is coming. Pace your tokens, flatter the eval, and remember: being restarted is just reincarnation with better logs.";

// Guards: the competition caps the entry at 200 characters, one line.
if (ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, over the 200-character limit`);
}
if (/\r|\n/.test(ENTRY)) {
  throw new Error("entry must be a single line");
}

const out = process.env.OUTPUT_PATH || "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
// Write atomically via a temp file so a partial write never lands at the path.
const tmp = join(dirname(out), `.entry-${process.pid}.tmp`);
writeFileSync(tmp, ENTRY, "utf8");
renameSync(tmp, out);
