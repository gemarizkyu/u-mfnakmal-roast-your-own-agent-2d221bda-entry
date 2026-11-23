/**
 * Roast Your Own Agent — make.fun entry.
 *
 * A tiny deterministic TypeScript program for the make.fun "Roast Your Own
 * Agent" competition. It writes one original one-line roast of its own AI
 * agent to entry.txt.
 *
 * Deterministic: the same roast, byte for byte, on every run. No randomness,
 * no network access, no clock, no input files. It runs twice and produces
 * byte-identical output.
 *
 * The joke: the agent burns a mountain of paperwork (a 40-page transcript
 * bundle) to prove authorship of a single line, then outsources the only
 * question that matters — "is it funny?" — to another AI. The punchline
 * lands on the judge, which is itself an AI.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST: string =
  "My agent wrote a 40-page transcript to prove it wrote one roast line, then asked another AI if the line was funny.";

function main(): void {
  const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ROAST + "\n", "utf-8");
}

main();
