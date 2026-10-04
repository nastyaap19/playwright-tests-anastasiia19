import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('User cannot continue checkout with empty fields', async ({ page }) => {

    await login(page, 'standard_user', 'secret_sauce');

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('.cart_list').locator('[data-test="inventory-item"]')).toContainText('Sauce Labs Backpack');

    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="continue"]').click();
    await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');

});