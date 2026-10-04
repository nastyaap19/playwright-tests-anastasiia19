import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('User can complete checkout with one item', async ({ page }) => {
    // Log in via the shared helper
    await login(page, 'standard_user', 'secret_sauce');

    // Add an item and open the cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await expect(page.locator('.cart_list').locator('[data-test="inventory-item"]')).toContainText('Sauce Labs Backpack');

    // Step 1: customer information
    await page.locator('[data-test="checkout"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    await page.locator('[data-test="firstName"]').fill('Anna');
    await page.locator('[data-test="lastName"]').fill('Tester');
    await page.locator('[data-test="postalCode"]').fill('01067');
    await page.locator('[data-test="continue"]').click();

    // Step 2: verify order contents and totals
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    await expect(page.locator('.cart_list').locator('[data-test="inventory-item"]')).toContainText('Sauce Labs Backpack');
    await expect(page.locator('[data-test="subtotal-label"]')).toContainText('29.99');
    await expect(page.locator('[data-test="total-label"]')).toContainText('32.39');

    // Finish the order
    await page.locator('[data-test="finish"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');

    // The cart should be empty after the order
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0);
});