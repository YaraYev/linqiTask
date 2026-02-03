# Linqi — Playwright + TypeScript

Automation technical task for https://linqi.wecantest.it/ using Playwright + TypeScript with Page Object pattern and fixtures.

## Requirements
- Node.js (LTS)
- npm
- Google Chrome installed (tests run via Playwright `channel: 'chrome'`)

## Install
```bash
npm ci
```

First time (or if Playwright browsers are missing):
```bash
npx playwright install
```

## Environment variables
Create `.env` from the example:
```bash
cp .env.example .env
```

Fill in `.env`:
- `BASE_URL`
- `CREDENTIALS_USERNAME`
- `CREDENTIALS_PASSWORD`

Note: `.env` is listed in `.gitignore` and should not be pushed to the repository.

## Run tests (Google Chrome)
```bash
npx playwright test --project="Google Chrome"
```

Alternative:
```bash
npm test
```

## Report
```bash
npm run report
```

## Structure
- `tests/verifyAction.spec.ts` — main test
- `tests/setup/auth.setup.ts` — login + save `storageState`
- `src/pageObjects/**` — Page Objects
- `src/fixtures/customFixtures.ts` — fixtures

## Notes (for reviewer)
**Time spent:** 

**Challenges:**
-
