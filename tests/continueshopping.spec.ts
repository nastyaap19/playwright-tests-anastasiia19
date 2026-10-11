import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('User can return to the catalog from the cart with Continue Shopping', async ({ page }) => {

    await login(page, 'standard_user', 'secret_sauce');

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    await page.locator('[data-test="shopping-cart-link"]').click();

    await page.locator('[data-test="continue-shopping"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await expect(page.locator('[data-test="inventory-list"]')).toBeVisible();

});