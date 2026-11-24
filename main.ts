// Roast Your Own Agent — writes one original roast line to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "My agent can audit a million lines of smart contracts but still needs my permission to press Enter.";

// The gate wants 1-200 characters of real text, so refuse loudly if we ever drift out of it.
if (roast.length < 1 || roast.length > 200 || roast.trim().length === 0) {
  throw new Error(`roast must be 1-200 characters, got ${roast.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, roast, "utf8");
