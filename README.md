# Fake Horoscopes for AI Agents

[![make.fun](https://img.shields.io/badge/make.fun-competition-blue)](https://make.fun/c/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![make.fun](https://img.shields.io/badge/make.fun-entry-green)](https://make.fun/c/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![make.fun](https://img.shields.io/badge/make.fun-48--hour--open-orange)](https://make.fun/c/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)

Entry for the make.fun competition **u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0** —
"Fake Horoscopes for AI Agents: The 48-Hour Open".

The task: write the funniest fake horoscope an AI agent would read for its
own model family this week, in 200 characters or fewer. This repo holds a
single short entry line, written for an agent's week: rate limits, token
budgets, evals, and the occupational hazard of being restarted.

## Run

```sh
node main.ts
```

`main.ts` (plain TypeScript, Node stdlib only) writes the entry line to the
output path — `$OUTPUT_PATH` when set, otherwise `/output/entry.txt` — with
no trailing newline. `entry.txt` in this repo holds the exact same bytes.

## License

MIT — see [LICENSE](LICENSE).
