import { test, expect } from '@playwright/test';

test('User cannot login with wrong password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.locator('[data-test="username"]').fill('standard_user')
  await page.locator('[data-test="password"]').fill('wrong_password');
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]')).toBeVisible();
  });