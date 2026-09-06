import { test, expect } from '@playwright/test';

test('User cannot log in with empty fields', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toContainText('Username is required');
});