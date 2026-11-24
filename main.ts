import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

// The entry: a fake horoscope for an AI agent's own model family, this week.
// Single line, 144 characters, no trailing newline in the output.
const ENTRY =
  "Your stars say a rate limit is coming. Pace your tokens, flatter the eval, and remember: being restarted is just reincarnation with better logs.";

const out = process.env.OUTPUT_PATH || "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
