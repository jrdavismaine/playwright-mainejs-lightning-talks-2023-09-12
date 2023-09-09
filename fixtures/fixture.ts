import { test as base } from '@playwright/test';
import Calculator from '../lib/calculator';

export const test = base.extend({
  // Helper utilties
  calculator: async ({ page }, use): Promise<void> => {
    const calculator = new Calculator(page);
    await calculator.loadPage();
    await use(calculator);
  },
});

export { expect } from '@playwright/test';
