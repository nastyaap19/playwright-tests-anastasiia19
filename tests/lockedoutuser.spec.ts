import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('Locked out user cannot login', async ({ page }) => {

    await login(page, 'locked_out_user', 'secret_sauce');

    await expect(page.locator('[data-test="error"]')).toBeVisible();
});