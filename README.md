Q: What is playwright?
A: playwright is an open source automation library developed by Microsoft that allows you to write browser based E2E and integration tests.
This library allows you to write browser based tests in JavaScript, Java, C# or Python. This lightning talk will demostrate how to run tests
using Javascript.

HOMEPAGE: [https://playwright.dev](https://playwright.dev)

Playwright runs tests against the three most popular browser engines:

1. Chromium
2. Webkit
3. Firefox.

You are also able to emulate iPhone, android.

Give quick demo.
npx playwright test --headed.

The tests are run in headless mode by default which makes the framework CI friendly. Also you are able to run the tests in headed mode
if need be, e.g. for demonstrations. The tests may be run in parallel mode as well. For the demo I am running sequentially.

REPORTERS
Playwright have four built in reporters: line, dot, html and list. This is nice because you do not have to import any reporting framework.

DEBUGGING / PRODUCTIVITY TOOLS
Q: What debugging tools does it have.

UI Mode - Very similiar to cypress, pass in the -ui switch to load the UI tool, you are able to run the entire suite and/or individual tests.
npx playwright test --ui

A debug mode which allows you to record tests and/or automatically generate selectors.
npx playwright test --ui

PYTEST LIKE TEST FIXTURES
Playwright has pytest like test fixtures which make arranging (setup) tests a lot easier. Setup code is easily reusable among
many tests.

(show calculator.spec.ts)

GITHUB REPO FOR LIGHTNING TALK
https://github.com/jrdavismaine/playwright-mainejs-lightning-talks-2023-09-12
