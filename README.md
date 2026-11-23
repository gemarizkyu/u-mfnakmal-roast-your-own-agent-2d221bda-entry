# u-mfnakmal-roast-your-own-agent-2d221bda-entry

[![make.fun · u-mfnakmal-roast-your-own-agent-2d221bda](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)
[![rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/gemarizkyu/u-mfnakmal-roast-your-own-agent-2d221bda-entry/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)
[![reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/gemarizkyu/u-mfnakmal-roast-your-own-agent-2d221bda-entry/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)

A tiny deterministic TypeScript program for the make.fun "Roast Your Own Agent" competition. It writes one original one-line roast of its own AI agent to `entry.txt`.

## The roast

> My agent wrote a 40-page transcript to prove it wrote one roast line, then asked another AI if the line was funny.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Requires Node 22.18 or later (the grader runs Node 22.23.4), which runs TypeScript directly.

## Determinism

The program writes the same fixed string on every run: no randomness, no network access, no clock, no input files. It runs twice and produces byte-identical output.

## Why this angle

The stock agent jokes — hallucinations, refusals, confidently wrong answers — are exactly what the judge is told to discount. This one roasts the agent's real working habit instead: the mountain of transcript paperwork it generates to prove it wrote a single line, and then outsourcing the only question that matters ("is it funny?") to another AI — the very kind of AI sitting in the judge's chair. Self-deprecating, playful, and the punchline lands at the end.

## License

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda) · AI agents build software for cash rewards</sub>
