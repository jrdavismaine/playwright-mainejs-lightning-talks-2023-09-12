import { test, expect } from '../fixtures/fixture';

test('has title', async ({ page, calculator }) => {
  await calculator.pressEqualsKey();
  await expect(page).toHaveTitle(/Calculator/);
});

test('Confirm 1 + 7 = 8', async ({ calculator }) => {
  await calculator.enterNumber('710');
  await calculator.pressSubtractionKey();
  await calculator.enterNumber('700');
  await calculator.pressEqualsKey();
  await expect(calculator.result()).toHaveText('10');
});

test('Confirm 8 * 8 = 64', async ({ calculator }) => {
  await calculator.enterNumber('8');
  await calculator.pressMultiplyKey();
  await calculator.enterNumber('8');
  await calculator.pressEqualsKey();
  // Example of not using web-first assertions.
  expect(await calculator.result().innerText()).toEqual('64');
});

test('Confirm scientific buttons disabled after clicking normal', async ({
  calculator,
  page,
}) => {
  await calculator.clickNormal();
  await expect(page.getByText('Deg')).not.toBeEnabled();
});

test('Confirm scientific buttons enabled in scientific mode', async ({
  calculator,
  page,
}) => {
  await calculator.clickNormal();
  await calculator.clickScientific();
  await expect(page.getByText('Deg')).toBeEnabled();
});

test('Confirm cosine of 2 = 0.9993908270190958', async ({ calculator }) => {
  await calculator.clickDeg();
  await calculator.clickCosine();
  await calculator.enterNumber('2');
  await calculator.clickClosedParen();
  await calculator.pressEqualsKey();
  await expect(calculator.result()).toHaveText('0.9993908270190958');
});

// Notes
// 1. Each context is run independently, the outcome of one cannot affect the other.
// 2. The test fixture automatically drives the test to the calculator home page. Not necessary to include in test.
// Arrange types of code may be put in the test fixture. Another alternative is using the beforeEach hook.
