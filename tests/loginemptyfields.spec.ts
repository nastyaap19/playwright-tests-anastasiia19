import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('User cannot log in with empty fields', async ({ page }) => {
  await login(page, '', '');
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toContainText('Username is required');
});