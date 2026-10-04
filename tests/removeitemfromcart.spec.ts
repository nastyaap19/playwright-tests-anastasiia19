import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('User can remove item from cart', async ({ page }) => {
    await login(page, 'standard_user', 'secret_sauce');

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('.cart_list').locator('[data-test="inventory-item"]')).toContainText('Sauce Labs Backpack');

    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0);
    await expect(page.locator('.cart_list').locator('[data-test="inventory-item"]')).toHaveCount(0);
});