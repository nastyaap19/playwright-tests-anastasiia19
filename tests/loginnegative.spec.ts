import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('User cannot login with wrong password', async ({ page }) => {

  await login(page, 'standard_user', 'wrong_password');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});