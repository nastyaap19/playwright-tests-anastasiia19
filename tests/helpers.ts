import { Page } from '@playwright/test';

export async function login(page: Page, username: string, password: string) {
  await page.goto('https://www.saucedemo.com');

  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="login-button"]').click();
}