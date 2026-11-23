import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line for "One Line, Zero Use: The Useless Superpower Sprint".
// A hilariously useless superpower: the gift only kicks in once it is too late.
const entryLine =
  "I can find anything I've lost, the moment I buy a replacement.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, entryLine, "utf8");
