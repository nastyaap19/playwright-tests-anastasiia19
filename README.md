# Playwright Test Automation Portfolio

Automated end-to-end tests for [SauceDemo](https://www.saucedemo.com), built with [Playwright](https://playwright.dev/) and TypeScript.

## About

This repository is a personal automation portfolio project, built while learning Playwright and TypeScript. It demonstrates core test automation skills: locator strategy, functional and negative test design, and structuring reusable, maintainable tests.

## Tech Stack

- **Playwright** — end-to-end test automation framework
- **TypeScript** — test scripting language
- **Node.js / npm** — package management

## Tests Covered

| Test file | What it checks |
|---|---|
| `login.spec.ts` | User can log in with valid credentials |
| `loginnegative.spec.ts` | User cannot log in with an incorrect password |
| `loginemptyfields.spec.ts` | User cannot log in with empty username/password fields |
| `lockedoutuser.spec.ts` | A locked-out user is blocked from logging in |
| `usercanadditem.spec.ts` | User can add a product to the cart |
| `usercanaddtocart.spec.ts` | User can complete the add-to-cart flow |

## How to Run

Install dependencies:
```bash
npm install
```

Run all tests:
```bash
npx playwright test
```

Run a specific test file:
```bash
npx playwright test tests/login.spec.ts
```

Run tests with the browser visible (not headless):
```bash
npx playwright test --headed
```

View the HTML report after a run:
```bash
npx playwright show-report
```

## Project Structure

```
tests/               # All test specs
playwright.config.ts # Playwright configuration
package.json         # Project dependencies
```

## Notes

This project is actively growing as I continue building automation skills — more test coverage and CI/CD integration (GitHub Actions) are planned next.
