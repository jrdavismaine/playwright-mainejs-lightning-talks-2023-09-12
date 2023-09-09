import { Locator, Page } from '@playwright/test';

export default class Calculator {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  result(): Locator {
    return this.page.getByTestId('result');
  }

  async getResult() {
    return this.result().innerText();
  }
  async loadPage() {
    await this.page.goto('http://127.0.0.1:8080');
  }
  async pressKey(label: string) {
    await this.page.getByRole('button', { name: label }).click();
  }

  async pressAdditionKey() {
    await this.page.locator('#addition').click();
  }
  async pressSubtractionKey() {
    await this.page.locator('#subtraction').click();
  }
  async pressMultiplyKey() {
    await this.page.locator('#multiplication').click();
  }
  async pressDivideKey() {
    await this.page.locator('#division').click();
  }
  async pressEqualsKey() {
    await this.page.locator('#calculate').click();
  }
  async enterNumber(number: string) {
    const numbers = number.split('');
    for (const num of numbers) {
      await this.pressKey(num);
    }
  }
  scientificButton(): Locator {
    return this.page.getByText('Scientific');
  }
  normalButton(): Locator {
    return this.page.getByText('Normal');
  }
  async clickScientific() {
    await this.scientificButton().click();
  }
  async clickNormal() {
    await this.normalButton().click();
  }
  async clickDeg() {
    await this.page.click('#deg');
  }
  async clickOpenParen() {
    await this.page.locator('#open-parenthesis').click();
  }
  async clickClosedParen() {
    await this.page.locator('#close-parenthesis').click();
  }
  async clickCosine() {
    await this.page.locator('#cos').click();
  }
}
