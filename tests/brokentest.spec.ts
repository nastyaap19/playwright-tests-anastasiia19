import { test, expect } from '@playwright/test';

test('Intentionally failing test: wrong page title', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    await expect(page).toHaveTitle('Wrong Title');
});