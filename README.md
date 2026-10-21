# Invoicing app: Claude Code safe-setup tutorial

A tiny demo repository used in the "AI-Native Engineering Fundamentals" tutorial on setting up Claude Code safely.
It contains no real secrets: the only credential-like values are obviously fake.

- `.claude/settings.json`: allow / ask / deny permission rules
- `CLAUDE.md`: project instructions for the agent
- `.githooks/pre-commit`: runs gitleaks on staged changes. Enable it with `git config core.hooksPath .githooks`
- `.env.example`: placeholder values only. Copy to `.env` (git-ignored) for local use

Branch protection on `main` requires a pull request, so direct pushes are rejected.
