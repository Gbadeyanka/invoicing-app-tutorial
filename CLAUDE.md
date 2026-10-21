# Invoicing app

## Commands
- npm run dev     start locally
- npm run test    run all tests
- npm run lint    lint and type-check

## Conventions
- TypeScript strict; no any, no @ts-ignore
- Validate all input with schemas in src/lib/validation

## Boundaries
- Never read or edit .env files
- Never weaken, skip or delete tests
- Ask before adding a dependency
- Ask before touching auth or payments code
